import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../customehooks/useAuth';
import auth from '../../firebase/firebase.config';

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
  const navbarClass = `navbar z-10 text-white   h-[80px] font-serif top-0  md:px-10 ${
    scrolled ? 'bg-[rgba(0,0,0,0.3)] text-white fixed w-full' : 'absolute top-5   '
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
  logOutUser(auth)
  .then(res=> console.log(res,'user logged out'))
}

const links = <>
<NavLink to={'/'}><li><a className='uppercase   hover:text-[#eeff25]'>Home</a></li></NavLink>
{/* <NavLink to={'/about'}><li><a className='uppercase  hover:text-[#eeff25]'>About</a></li></NavLink> */}
<NavLink to={'/appointment'}><li><a className='uppercase  hover:text-[#eeff25]'>Appointment</a></li></NavLink>
<Link  onClick={() => handleScrollTo('contact')}  ><li><a  className='uppercase  hover:text-[#eeff25]'>Contact</a></li></Link>
<Link  onClick={() => handleScrollTo('reviews')}  ><li><a  className='uppercase  hover:text-[#eeff25]'>Reviews</a></li></Link>
{
  user && user  ? <>
                   <img className='w-8 h-8 rounded-full border' src={user?.photoURL} alt="" />
                  <NavLink  to={'/login'} onClick={logout} ><li><a className='uppercase  hover:text-[#eeff25]'>Logout</a></li></NavLink>
                  </>
               :  <NavLink to={'/login'}><li><a className='uppercase  hover:text-[#eeff25]'>Login</a></li></NavLink>
}


</>




return (
<div  >
    
 {/* <div className="navbar z-10 text-white bg-[rgba(0,0,0,0.3)] fixed w-full  font-serif  top-0 h-[80px]  md:px-10 "> */}
 {/* <div className=" navbar z-10 text-white  w-full  font-serif absolute  top-0 h-[80px]  md:px-10 "> */}

 <div className={navbarClass}>

  <div className=" navbar-start ml-0 py-3 text-left ">
        <img className=' h-16 ml-0 text-left ' src="../../../../public/image/logo.png" alt="" />
  </div>

  <div className="navbar-end hidden lg:flex w-full ">
    <ul className="menu  space-x-3  menu-horizontal  ">
       { links  }
    </ul>
  </div>  

  <div className="flex justify-end  md:hidden  w-56 text-right mr-0">
  <div className="dropdown text-right w-full mr-0 ">
    <label tabIndex={0} className=" p-5 lg:hidden text-right">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </label>
    <ul tabIndex={0} className="menu menu-sm dropdown-content   mt-3 z-[1]  py-7 space-y-7 shadow bg-[rgba(156,156,156,0.96)] text-right mr-0   w-full ">
        { links }
    </ul>
  </div>
  </div>


</div>
</div>
    );
};

export default Navbar;