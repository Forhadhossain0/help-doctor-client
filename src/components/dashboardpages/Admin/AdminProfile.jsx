import { useEffect, useState } from "react";
import useAuth from "../../customehooks/useAuth";
import useAxiosSecure from "../../customehooks/useAxiosSecure";
import Swal from "sweetalert2";



const AdminProfile = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();


    const [users,setUsers] = useState([]);
    useEffect(()=>{
        axiosSecure.get(`/appoinment`)
        .then(res=>{
            setUsers(res?.data)
        })
    },[axiosSecure])

    const handleAppoinmentSatus = (data) =>{
        // console.log(data)
            Swal.fire({
                title: "Are you sure?",   text: "you want to confirm this apponment",
                icon: "warning", showCancelButton: true, confirmButtonColor: "#3085d6",  
                cancelButtonColor: "#d33", confirmButtonText: "Yes, i want!"
              }).then((result) => {
                 if (result.isConfirmed) { 
                    axiosSecure.patch(`/appoinment/status/${data._id}`)
                    .then(res=>{ 
                       // console.log(res)
                        if(res.data.modifiedCount > 0){
                         Swal.fire({
                         title: "appoinment accepted!",  text: "appoinment status has been changed.",  icon: "success"
                        });
                        }
                      })
                }})
             
    }

return (
    <>
         <h3 className="my-10 mx-20  text-blue-400 text-xl font-serif  font-semibold"> !Hi Wellcome  <span className="text-rose-600"> {user?.displayName} </span>to here</h3>
         <div className="  mt-10  w-[300px] h-[130px]   px-20  ">
             <img className=" w-full h-full border-2 bg-slate-50"  src={user?.photoURL || 'https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png'} alt="" />
             <h3 className="my-2 text-center  text-slate-600 capitalize text-xl font-serif  font-semibold">{user?.displayName}</h3>
         </div>


         <div className="md:w-[85%] h-full mt-20  mx-auto pb-28 pt-10 px-20 shadow border">
             <table className="table  ">
             <tbody>
                 { users?.sort((a,b)=> new Date(b?.date) -  new Date(a?.date) )?.map((data,index)=> 
                     <tr key={data._id} className="text-gray-400 border shadow cursor-pointer "> 
                       <th> {index + 1}  </th> 
                       <td><h1 className="font-bold">{data?.appointInfo?.fullName}</h1></td>
                       <td><h1 className="font-bold">{data?.itemInfo?.subservicename}</h1>  </td>
                       <td><h1 className="font-bold">{data?.appointInfo?.date  }   <span className="ml-4">  {data?.appointInfo?.time}</span></h1> </td>
                       {data.status === 'pending' ?  
                           <td onClick={()=> handleAppoinmentSatus(data)} ><h1 className="font-bold p-2 hover:bg-blue-300 rounded text-center capitalize flex gap-1 justify-center items-center text-white bg-sky-600">{data.status} </h1> </td>
                          :<td ><h1 className="font-bold p-2 rounded text-center flex gap-1 justify-center items-center capitalize text-white bg-teal-300 hover:bg-teal-300"> {data.status}  </h1> </td> 
                        }
                     </tr> 
                 )}

            </tbody>
            </table>
        </div>

    </>
    )
}

export default AdminProfile;