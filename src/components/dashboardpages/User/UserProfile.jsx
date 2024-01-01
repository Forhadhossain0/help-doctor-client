import { MdOutlinePending } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
// import { MdDownload } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../customehooks/useAuth";
import useAxiosSecure from "../../customehooks/useAxiosSecure";
import { Link } from "react-router-dom";


const UserProfile = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const [thisUser,setThisUser] = useState([]);
    useEffect(()=>{
        axiosSecure.get(`/appoinment`)
        .then(res=>{
            setThisUser(res?.data)
        })
    },[axiosSecure])

    const userData = thisUser?.filter(x=> x?.appointInfo?.primaryEmail === user?.email  )
    // console.log(userData)

 

    return (
        <div className="">


             <div className="md:w-[85%] h-full mt-20  mx-auto pb-28 pt-10 px-20 shadow border">

                <div className="  w-[130px] h-[130px] mb-20">
                    <img className=" w-full h-full border-2 border-teal-500" src={user?.photoURL || 'https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png'} alt="" />
                    <h3 className="my-2 text-center  text-teal-500 capitalize text-xl font-serif  font-semibold">{user?.displayName}</h3>
                </div>

             <table className="table  ">

            <tbody>
          { userData?.sort((a,b)=> new Date(b?.appointInfo?.date) -  new Date(a?.appointInfo?.date) )?.map((data,index)=> 
        
              <tr key={data._id}  className="text-gray-400 border shadow cursor-pointer ">  
              
                <th> {index + 1}  </th> 
                {/* <td><h1 className="font-bold">{data?._id}</h1></td> */}
                <td><h1 className="font-bold">{data?.appointInfo?.fullName} {data?.appointInfo?.lastName} </h1></td>
                <td><h1 className="font-bold">{data?.itemInfo?.subservicename}</h1>  </td>
                <td><h1 className="font-bold">{data?.appointInfo?.date  }   <span className="ml-4">  {data?.appointInfo?.time}</span></h1> </td>
                {data.status === 'pending' ?  
                 <td ><h1  className="font-bold py-3 hover:bg-sky-300 rounded text-center capitalize flex gap-1 justify-center items-center text-white bg-sky-300">{data.status} <MdOutlinePending className="text-xl text-white"></MdOutlinePending></h1> </td>
                 :<td ><Link  to={`/invoic/${data?._id}`} className="font-bold py-4  rounded text-center flex gap-1 justify-center items-center capitalize text-white bg-teal-400 hover:bg-teal-300"> Get Boucher <FaArrowRight></FaArrowRight> </Link> </td> 
                }
             

              </tr> 
          )}

            </tbody>
        </table>


        </div>
        </div>
    );
};

export default UserProfile;