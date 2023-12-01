import "../../../../index.css";

const Banner = () => {
    return (
        <div className=" h-[100vh] relative">

        <div className="absolute md:w-full w-1/2 h-full flex justify-between ">
          <div><img className=" " src="../../../../public/image/1.png" alt="" /></div>
         
          <div className="  items-end flex  md:space-x-28 w-full h-full  ">
          <img className="banner_small_img1" src="../../../../public/image/Group 7.png" alt="" />
          <img className="banner_small_img1" src="../../../../public/image/Group 6.png" alt="" />
          </div>
     
         </div>
     
       {/* main part */}
     
       <div className="hero h-[100vh] w-full flex justify-between md:text-white text-black px-10 bg-[url('../../../../public/image/banner.png')]  ">
         <div className="hero-content  felx justify-start w-full  ">
     
          <div className=" text-center md:text-left font-serif  hero-content1 md:w-[50%] md:px-10  ">
           <h1 className="md:text-5xl text-3xl font-semibold leading-snug ">Your Best Medical Help Center</h1>
           <p className="py-5 md:pr-24 ">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
           <button className="btn  btn-primary border-none bg-[#ffffff] rounded text-[#00723B]">All Service</button>
          </div>
         </div>
       
     
       </div>
     
     
     
     </div>
    );
};

export default Banner;