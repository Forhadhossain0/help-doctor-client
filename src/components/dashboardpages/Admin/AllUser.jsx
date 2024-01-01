import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../customehooks/useAxiosSecure";



const AllUser = () => {


    const axiosSecure = useAxiosSecure();
    const [users,setUser] = useState([]);

    useEffect(()=>{
      axiosSecure.get(`/users`)
        .then(res=>{
            setUser(res?.data)
        })
    },[axiosSecure])


    const handleAdminRole = (user) =>{
      Swal.fire({
          title: "Are you sure?",   text: "you want to get this user admin permission!",
          icon: "warning", showCancelButton: true, confirmButtonColor: "#3085d6",  
          cancelButtonColor: "#d33", confirmButtonText: "Yes, i want!"
        }).then((result) => {
           if (result.isConfirmed) { 
              axiosSecure.patch(`/users/admin/${user._id}`)
              .then(res=>{ 
                 // console.log(res)
                  if(res.data.modifiedCount > 0){
                      // refetch()
                      Swal.fire({
                      title: "Got admin role!",  text: "Your role has been changed.",   icon: "success"
                    });
                  }
                })
          }})
       }

    const handleUserRole = (user) =>{
      Swal.fire({
          title: "Are you sure?",   text: "you want to get this user general permission!",
          icon: "warning", showCancelButton: true, confirmButtonColor: "#3085d6",  
          cancelButtonColor: "#d33", confirmButtonText: "Yes, i want!"
        }).then((result) => {
           if (result.isConfirmed) { 
              axiosSecure.patch(`/users/user/${user._id}`)
              .then(res=>{ 
                 // console.log(res)
                  if(res.data.modifiedCount > 0){
                      // refetch()
                      Swal.fire({
                      title: "got normal general role!",  text: "Your role has been changed.",   icon: "success"
                    });
                  }
                })
          }})
       }
    

const handleDelete = (id) =>{
  Swal.fire({
      title: "Are you sure?", text: "You won't be able to revert this!",
      icon: "warning", showCancelButton: true,  confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33", confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
      axiosSecure.delete(`/users/${id}`)
      .then(res=> {
          if(res){
              // refetch()
                Swal.fire({
                title: "Deleted!",  text: "Your file has been deleted.", icon: "success"
              });
          }else{console.log('not show mess')}
      })
      }
  });
}



    return (
      <>
        <div className="md:w-[90%] h-full mt-20  mx-auto  p-20 shadow ">

          <table className="table border ">
          <tbody>
          { users?.map((user,index)=> 
           <tr key={user._id} className="text-gray-400 hover:bg-orange-100 border shadow cursor-pointer "> 
             <th> {index + 1}  </th> 
             <td><img className="w-10 h-10 rounded-full " src={user.photoURL || 'https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png'} alt="" /> </td>
             <td><h1 className="font-bold">{user?.displayName}</h1></td>
             <td><h1 className="font-bold">{user?.email}</h1>  </td>
             
             {user.role === 'user' ? <td ><h1 onClick={()=> handleAdminRole(user)} className="font-bold py-2 w-[80%] mx-auto  rounded text-center flex gap-1 justify-center items-center uppercase text-white bg-teal-400 hover:bg-teal-300"> {user.role} </h1> </td> 
                                   : <td ><h1 onClick={()=> handleUserRole(user)} className="font-bold py-2 w-[80%] mx-auto  rounded text-center flex gap-1 justify-center items-center uppercase text-white bg-teal-400 hover:bg-teal-300"> {user.role} </h1> </td> 
             }
             
             
             
             <td ><h1 onClick={()=> handleDelete (user._id)} className="py-2 hover:bg-slate-600 rounded text-center  flex gap-1 justify-center items-center text-slate-200 bg-rose-500 font-bold"> DEL </h1> </td>
          </tr> 
        )}
        </tbody>
        </table>
          
          
    </div>
 </>
 );
};

export default AllUser;