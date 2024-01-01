import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../customehooks/useAuth';
import auth from '../../firebase/firebase.config';
import Swal from 'sweetalert2';

const Navbar = () => {


// scroll functionality 
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollhold = 100;

    if (scrollY > scrollhold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navbarClass = `navbar z-10 text-white  cursor-pointer    h-[90px] font-serif   md:px-10 ${
    scrolled ? 'bg-[rgba(0,0,0,0.3)]  text-white fixed w-full' : 'absolute top-16   '
  }`;

  const navlogo = `   w-[40%] pl-10  text-left   ${
    scrolled ? ' md:w-[28%] w-[70%] md:mt-2  -mt-2    ' : ' md:w-[40%] w-[70%]  md:pt-7   '
  }`;



  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
    

const {user,logOutUser} = useAuth()
const logout = ()=>{
  Swal.fire({
    title: "logout!",
    text: "Are you sure to logout?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes!"
  }).then((result) => {
    if (result.isConfirmed) {
      logOutUser(auth)
      .then(res=> console.log(res,'user logged out'))
      Swal.fire({
        title: "Logout!", text: "Your are logouted from there.",  icon: "success"  });
    }
  });
}

const links = <>
<NavLink to={'/'}><li><a className='uppercase   hover:text-[#eeff25]'>Home</a></li></NavLink>
<NavLink to={'/appointment'}><li><a className='uppercase  hover:text-[#eeff25]'>Appointment</a></li></NavLink>
<Link  onClick={() => handleScrollTo('contact')}  ><li><a  className='uppercase  hover:text-[#eeff25]'>Contact</a></li></Link>
<Link  onClick={() => handleScrollTo('reviews')}  ><li><a  className='uppercase  hover:text-[#eeff25]'>Reviews</a></li></Link>
{
  user && user  ? <>
                  <NavLink to={'/dashboard/userProfile'} ><img className='w-8 rounded-full ml-5 z-20 bg-white border-2 transition-all hover:h-10 hover:w-10 hover:border-lime-300 h-8 ' src={user?.photdoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpWaBQ8qppXubdMyAT-qYacNv9JxiiVz7jzfiMTpUts-nfKz6VP_fEwuZSWy8Vi6Rjzk&usqp=CAU'} alt="" /></NavLink>
                  <NavLink  to={'/login'} onClick={logout} ><li><a className='uppercase  hover:text-[#eeff25]'>Logout</a></li></NavLink>
                  </>
               :  <NavLink to={'/login'}><li><a className='uppercase  hover:text-[#eeff25]'>Login</a></li></NavLink>
}


</>




return (
<div  >
    

 <div className={navbarClass}>

  <div className=" navbar-start ml-0 py-3 text-left ">
        <img className={navlogo} src="https://i.ibb.co/CsRQNv1/logoup.png" alt="logo" />
  </div>

  <div className="navbar-end hidden lg:flex w-full ">
    <ul className="menu  space-x-3  menu-horizontal  ">
       { links  }
    </ul>
  </div>  

  <div className="flex justify-end   md:hidden h-full  w-full text-center mr-0">
  <div className="dropdown text-right w-full mr-0 ">
    <label tabIndex={0} className=" p-5 lg:hidden text-right ">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block  cursor-pointer  w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </label>
    <ul tabIndex={0} className="menu  dropdown-content text-black -mr-16 text-center  mt-3 z-[1]  py-7 space-y-7 shadow bg-[rgb(255,255,255)]   w-full ">
        { links }
    </ul>
  </div>
  </div>


</div>
</div>
    );
};

export default Navbar;