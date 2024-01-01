import "../../../../index.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Banner = () => {


    return (
        <div className=" h-[110vh] relative bg-[#ffffff9f]">

          {/* up nav short  */}
        <div className="h-10 flex justify-between w-full items-center px-5">
          <div className="w-[50%] text-[#108cc1]   font-serif">helpdoctors@gmail.com</div>

          <div className="flex w-[50%] justify-end " >
            <p className="w-full md:mr-3 flex items-center justify-end text-[#108cc1]  hover:text-[#2b46de]  transition-all">
               <FaFacebook   className=" mx-4 " />
               <FaTwitter    className=" mx-4 " />
               <FaInstagram  className=" mx-4 " />
               <FaLinkedin   className=" mx-4 " />
            </p>  
            <p className="w-full justify-center border-e-4 border-s-4 hidden md:flex">Request to appointment</p>
            <p className="hidden md:flex justify-end w-full mr-3 gap-2   items-center">Contact :  <span> 01765847229</span></p>
          </div>
        </div>



        <div className="absolute md:w-full w-1/2 h-full flex justify-between ">
          <div><img className=" " src="https://i.ibb.co/WW6xLWw/1.png" alt="" /></div>
         
          <div className="  items-end flex  md:space-x-28 w-full h-full  ">
          <img className="banner_small_img1" src="https://i.ibb.co/TktZJcc/Group-7.png" alt="" />
          <img className="banner_small_img1" src="https://i.ibb.co/SvH4vNZ/Group-6.png" alt="" />
          </div>
        </div>
     
     
       <div className=" h-full  bg-no-repeat bg-cover bg-[url('https://img.freepik.com/premium-vector/medicine-science_41814-100.jpg?w=900')] ">
       <div className="hero h-[110vh] md:pt-10 items-center w-full md:flex justify-between  text-white bg-[#3437ced1] px-2 md:px-10  ] ">
             
       {/* main part */}

         <div className="hero-content items-center md:mt-0 mt-72 pb-10  md:felx justify-center md:w-1/2 w-full overflow-hidden ">
    
          <div className=" text-center md:text-left font-serif  hero-content1  lg:px-10   ">
           <h1 className="lg:text-5xl md:text-2xl text-lg font-semibold lg:leading-snug ">Your Best Medical Help Center</h1>
           <p className="lg:py-5 py-2 text-center md:text-justify w-full lg:w-[90%]"> Welcome to help-doctor, your trusted destination for personalized healthcare. Schedule your next doctors appointment seamlessly with our user-friendly platform. Experience expert care and convenience at your fingertips. Your well-being, our priority. </p>
           <Link to={'/appointment'} className="btn pb-8 pt-6 px-4 btn-primary border-none hover:text-white bg-[#ffffff]  rounded uppercase text-[#3437ced1]">All  Service</Link>
          </div>
         </div>

         <div className="md:w-1/2 hero-content md:-mt-10  -mt-56  w-full flex justify-center overflow-hidden">
          {/* <img src="https://i.ibb.co/bmRyb2Y/d1.png" alt="" /> */}

             <div className="relative md:w-[80%] w-full h-full  rounded ">
                <img  className="object-cover w-full h-full  rounded shadow-lg "  src="https://i.pinimg.com/736x/80/90/2b/80902b73e7501e3f38fdfa5e1311f48e.jpg" alt=""   />
                    <a href="https://youtu.be/kK99NlPe0-0"     aria-label="Play Video" className="absolute  rounded inset-0 flex items-center justify-center w-full h-full transition-colors duration-300  hover:bg-[#02a2ad51] " >
                        <div className="flex items-center  justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                        <svg  className="w-10 text-gray-900"   fill="currentColor"  viewBox="0 0 24 24"  >  <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />   </svg>
                        </div>
                    </a>
              </div>
        </div>

         </div>
       
       </div>
       </div>
    
    );
};

export default Banner;