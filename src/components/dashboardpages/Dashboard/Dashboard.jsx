import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../customehooks/useAuth";

const Dashboard = () => {

  const {user} = useAuth();

    return (

<div className="flex w-[100%] bg-[#f2f2f2]  h-full  ">

{/* side bar */}
    <div className=" h-[150vh] md:w-[14%]">
      <ul  className={` menu px-4 pt-10 h-[150vh] md:w-[14%] fixed z-50 text-black text-[14px] capitalize space-y-1  shadow bg-[#ffffff] border   font-semibold `}>
       
       <img className="w-16 h-16 ml-4 rounded-full border-2  border-[#24ffa7]" src={user?.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpWaBQ8qppXubdMyAT-qYacNv9JxiiVz7jzfiMTpUts-nfKz6VP_fEwuZSWy8Vi6Rjzk&usqp=CAU'} alt="" />
        
        {/* <span className="border-b  ml-4  pt-2  "></span> */}
        <NavLink to={'/'}><li><a className='mt-4 border-b rounded-none uppercase hover:text-[#ffffff]'>HOME</a></li></NavLink>
        <NavLink to={'/dashboard/userProfile'}><li><a className='mt-4  border-b uppercase rounded-none hover:text-[#ffffff]'>User Profile</a></li></NavLink>
        <NavLink to={'/appointment'}><li><a className=' uppercase mt-4 border-b  rounded-none hover:text-[#ffffff]'>Appoinment</a></li></NavLink>

        {/* <span className="border-b  ml-4  pt-8  "></span> */}
        <NavLink to={'/'}><li><a className=' border-b mt-4 uppercase rounded-none hover:text-[#ffffff]'>HOME</a></li></NavLink>
        <NavLink to={'/dashboard/allUser'}><li><a className=' border-b  rounded-none mt-4 uppercase  hover:text-[#ffffff]'>ALL USER</a></li></NavLink>
        <NavLink to={'/dashboard/adminProfile'}><li><a className='border-b mt-4 uppercase rounded-none hover:text-[#ffffff]'>Admin Profile</a></li></NavLink>
        <NavLink to={'/appointment'}><li><a className=' uppercase  border-b rounded-none mt-4 hover:text-[#ffffff]'>Appoinment</a></li></NavLink>


      </ul>
    </div>



{/* content */}
   <div className=" flex-1 w-[82%] h-full  ">
     <Outlet></Outlet>

   </div>


</div>

    );
};

export default Dashboard;