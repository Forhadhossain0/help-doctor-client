import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination,Autoplay } from 'swiper/modules';



const Extra1 = () => {


    return (

 <div className="mx-auto   w-full h-full ">
           
    <div className="  h-full w-full py-20 ">


    <div className=" p-10   mx-auto w-full ">
    <Swiper  spaceBetween={10}   centeredSlides={false}  autoplay={{delay: 2000}} slidesPerView={5}  
              pagination={{ clickable: true, }}  modules={[Pagination,Autoplay]}    className="mySwiper "    >
     

     <SwiperSlide>
         <div className="relative mx-5 mb-5 text-center overflow-hidden md:w-[250px] w-full h-[450px]">
           <img  className="w-full bg-white h-[85%]" src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=sph" alt="" />
           <div className="w-full h-[85%] space-y-3   text-white  hover:text-[#000000] hover:bg-transparent hover:shadow-xl hover:shadow-sky-400 transition-all inset-0 bg-blue-500 opacity-25 absolute top-0 left-0 bg-[#d4fffc69]">
               <FaFacebook   className=" m-4 w-5 h-5" />
               <FaTwitter    className=" m-4 w-5 h-5" />
               <FaInstagram  className=" m-4 w-5 h-5" />
               <FaLinkedin   className=" m-4 w-5 h-5" />
             </div>  
           <h2 className="text-lg text-balck font-bold">Dr. Aysha Khan</h2>
           <p className="text-balck">MBBS, FCPS Medicine / US</p>
         </div>
      </SwiperSlide>


     <SwiperSlide>
     <div className="relative mx-5 mb-5 text-center overflow-hidden md:w-[250px] w-full h-[450px]">
           <img  className="w-full bg-white h-[85%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUJ_kOh-4mPOy2oYS6a7fe6gNfuF17uM61Q&usqp=CAU" alt="" />
            <div className="w-full h-[85%] space-y-3   text-white  hover:text-[#000000] hover:bg-transparent hover:shadow-xl hover:shadow-sky-400 transition-all inset-0 bg-blue-500 opacity-25 absolute top-0 left-0 bg-[#d4fffc69]">
               <FaFacebook   className=" m-4 w-5 h-5" />
               <FaTwitter    className=" m-4 w-5 h-5" />
               <FaInstagram  className=" m-4 w-5 h-5" />
               <FaLinkedin   className=" m-4 w-5 h-5" />
             </div>  
           <h2 className="text-lg text-balck font-bold">Dr.  Ali Rahman</h2>
           <p className="text-balck">FTF, FCPS Medicine / Canada</p>
         </div>
      </SwiperSlide>


     <SwiperSlide>
     <div className="relative mx-5 mb-5 text-center overflow-hidden md:w-[250px] w-full h-[450px]">
           <img  className="w-full bg-white h-[85%]" src="https://www.collinsdictionary.com/images/full/doctor_117169531.jpg" alt="" />
           <div className="w-full h-[85%] space-y-3   text-white  hover:text-[#000000] hover:bg-transparent hover:shadow-xl hover:shadow-sky-400 transition-all inset-0 bg-blue-500 opacity-25 absolute top-0 left-0 bg-[#d4fffc69]">
               <FaFacebook   className=" m-4 w-5 h-5" />
               <FaTwitter    className=" m-4 w-5 h-5" />
               <FaInstagram  className=" m-4 w-5 h-5" />
               <FaLinkedin   className=" m-4 w-5 h-5" />
             </div>  
           <h2 className="text-lg text-balck font-bold">Dr. Melisa Semi</h2>
           <p className="text-balck">MBBS, FCPS Medicine / London</p>
         </div>
      </SwiperSlide>

     <SwiperSlide>
     <div className="relative mx-5 mb-5 text-center overflow-hidden md:w-[250px] w-full h-[450px]">
           <img  className="w-full bg-white h-[85%]" src="https://img.freepik.com/free-photo/portrait-confident-male-doctor_329181-12190.jpg" alt="" />
            <div className="w-full h-[85%] space-y-3   text-white  hover:text-[#000000] hover:bg-transparent hover:shadow-xl hover:shadow-sky-400 transition-all inset-0 bg-blue-500 opacity-25 absolute top-0 left-0 bg-[#d4fffc69]">
               <FaFacebook   className=" m-4 w-5 h-5" />
               <FaTwitter    className=" m-4 w-5 h-5" />
               <FaInstagram  className=" m-4 w-5 h-5" />
               <FaLinkedin   className=" m-4 w-5 h-5" />
             </div>  
           <h2 className="text-lg text-balck font-bold">Dr. Karan Rusa</h2>
           <p className="text-balck">MBBS, FCPS Medicine / Finland</p>
         </div>
      </SwiperSlide>


     <SwiperSlide>
     <div className="relative mx-5 mb-5 text-center overflow-hidden md:w-[250px] w-full h-[450px]">
           <img  className="w-full bg-white h-[85%]" src="https://www.kauveryhospital.com/doctorimage/recent/Dr-Bhuvaneshwari-rajendran---Neurophysiology-_-neurology2019-02-18%2011:52:12am.jpg" alt="" />
            <div className="w-full h-[85%] space-y-3   text-white  hover:text-[#000000] hover:bg-transparent hover:shadow-xl hover:shadow-sky-400 transition-all inset-0 bg-blue-500 opacity-25 absolute top-0 left-0 bg-[#d4fffc69]">
               <FaFacebook   className=" m-4 w-5 h-5" />
               <FaTwitter    className=" m-4 w-5 h-5" />
               <FaInstagram  className=" m-4 w-5 h-5" />
               <FaLinkedin   className=" m-4 w-5 h-5" />
             </div>  
           <h2 className="text-lg text-balck font-bold">Dr. Taslima Rahman</h2>
           <p className="text-balck">MBBS, FCPS Medicine / London</p>
         </div>
      </SwiperSlide>



     <SwiperSlide>
      <div className="relative mx-5 mb-5 text-center overflow-hidden md:w-[250px] w-full h-[450px]">
           <img  className="w-full bg-white h-[85%]" src="https://www.mvphealthcare.com/-/media/project/mvp/healthcare/hero-images/1-6-2-2-findadoctor.png?h=550&iar=0&w=393&rev=aad8c1c5f21d401091ed0f36f9da02a3&hash=D363D50C795676D5E9447F6FFB2D1E3C" alt="" />
            <div className="w-full h-[85%] space-y-3   text-white  hover:text-[#000000] hover:bg-transparent hover:shadow-xl hover:shadow-sky-400 transition-all inset-0 bg-blue-500 opacity-25 absolute top-0 left-0 bg-[#d4fffc69]">
               <FaFacebook   className=" m-4 w-5 h-5" />
               <FaTwitter    className=" m-4 w-5 h-5" />
               <FaInstagram  className=" m-4 w-5 h-5" />
               <FaLinkedin   className=" m-4 w-5 h-5" />
             </div>  
           <h2 className="text-lg text-balck font-bold">Dr. Hamid Mero</h2>
           <p className="text-balck">MBBS, FCPS Medicine / Canada</p>
         </div>
      </SwiperSlide>



     <SwiperSlide>
     <div className="relative mx-5 mb-5 text-center overflow-hidden md:w-[250px] w-full h-[450px]">
           <img  className="w-full bg-white h-[85%]" src="https://www.kauveryhospital.com/doctorimage/recent/Dr.Shameela2022-02-08-07:21:00am.jpg" alt="" />
            <div className="w-full h-[85%] space-y-3   text-white  hover:text-[#000000] hover:bg-transparent hover:shadow-xl hover:shadow-sky-400 transition-all inset-0 bg-blue-500 opacity-25 absolute top-0 left-0 bg-[#d4fffc69]">
               <FaFacebook   className=" m-4 w-5 h-5" />
               <FaTwitter    className=" m-4 w-5 h-5" />
               <FaInstagram  className=" m-4 w-5 h-5" />
               <FaLinkedin   className=" m-4 w-5 h-5" />
             </div>  
           <h2 className="text-lg text-balck font-bold">Dr. Rejina Sok</h2>
           <p className="text-balck">MBBS, FCPS Medicine / London</p>
         </div>
      </SwiperSlide>

     <SwiperSlide>
     <div className="relative mx-5 mb-5 text-center overflow-hidden md:w-[250px] w-full h-[450px]">
           <img  className="w-full bg-white h-[85%]" src="https://www.kauveryhospital.com/doctorimage/recent/Dr-Balamurali---Spine-and-neurosurgery2019-02-18%2011:48:52am.jpg" alt="" />
            <div className="w-full h-[85%] space-y-3   text-white  hover:text-[#000000] hover:bg-transparent hover:shadow-xl hover:shadow-sky-400 transition-all inset-0 bg-blue-500 opacity-25 absolute top-0 left-0 bg-[#d4fffc69]">
               <FaFacebook   className=" m-4 w-5 h-5" />
               <FaTwitter    className=" m-4 w-5 h-5" />
               <FaInstagram  className=" m-4 w-5 h-5" />
               <FaLinkedin   className=" m-4 w-5 h-5" />
             </div>  
           <h2 className="text-lg text-balck font-bold">Dr. ABM Malik</h2>
           <p className="text-balck">MBBS, FCPS Medicine / London</p>
         </div>
      </SwiperSlide>

     <SwiperSlide>
     <div className="relative mx-5 mb-5 text-center overflow-hidden md:w-[250px] w-full h-[450px]">
           <img  className="w-full bg-white h-[85%]" src="https://www.kauveryhospital.com/doctorimage/recent/DrLakshmiPrashantpeadiatric2019-02-18%2011:32:57am.jpg" alt="" />
            <div className="w-full h-[85%] space-y-3   text-white  hover:text-[#000000] hover:bg-transparent hover:shadow-xl hover:shadow-sky-400 transition-all inset-0 bg-blue-500 opacity-25 absolute top-0 left-0 bg-[#d4fffc69]">
               <FaFacebook   className=" m-4 w-5 h-5" />
               <FaTwitter    className=" m-4 w-5 h-5" />
               <FaInstagram  className=" m-4 w-5 h-5" />
               <FaLinkedin   className=" m-4 w-5 h-5" />
             </div>  
           <h2 className="text-lg text-balck font-bold">Dr. Mredhuka Resmi</h2>
           <p className="text-balck">MBBS, FCPS Medicine / London</p>
         </div>
      </SwiperSlide>

     <SwiperSlide>
     <div className="relative mx-5 mb-5 text-center overflow-hidden md:w-[250px] w-full h-[450px]">
           <img  className="w-full bg-white h-[85%]" src="https://www.kauveryhospital.com/doctorimage/recent/Dr.Srikandan2022-02-08-07:23:48am.jpg" alt="" />
            <div className="w-full h-[85%] space-y-3   text-white  hover:text-[#000000] hover:bg-transparent hover:shadow-xl hover:shadow-sky-400 transition-all inset-0 bg-blue-500 opacity-25 absolute top-0 left-0 bg-[#d4fffc69]">
               <FaFacebook   className=" m-4 w-5 h-5" />
               <FaTwitter    className=" m-4 w-5 h-5" />
               <FaInstagram  className=" m-4 w-5 h-5" />
               <FaLinkedin   className=" m-4 w-5 h-5" />
             </div>  
           <h2 className="text-lg text-balck font-bold">Dr. Mahes Raja</h2>
           <p className="text-balck">MBBS, FCPS Medicine / London</p>
         </div>
      </SwiperSlide>

     <SwiperSlide>
     <div className="relative mx-5 mb-5 text-center overflow-hidden md:w-[250px] w-full h-[450px]">
           <img  className="w-full bg-white h-[85%]" src="https://img.freepik.com/free-photo/young-beautiful-successful-female-doctor-with-stethoscope-portrait_186202-1506.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=ais" alt="" />
            <div className="w-full h-[85%] space-y-3   text-white  hover:text-[#000000] hover:bg-transparent hover:shadow-xl hover:shadow-sky-400 transition-all inset-0 bg-blue-500 opacity-25 absolute top-0 left-0 bg-[#d4fffc69]">
               <FaFacebook   className=" m-4 w-5 h-5" />
               <FaTwitter    className=" m-4 w-5 h-5" />
               <FaInstagram  className=" m-4 w-5 h-5" />
               <FaLinkedin   className=" m-4 w-5 h-5" />
             </div>  
           <h2 className="text-lg text-balck font-bold">Dr. Lisa khan</h2>
           <p className="text-balck">MBBS, FCPS Medicine / London</p>
         </div>
      </SwiperSlide>

     <SwiperSlide>
     <div className="relative mx-5 mb-5 text-center overflow-hidden md:w-[250px] w-full h-[450px]">
           <img  className="w-full bg-white h-[85%]" src="https://www.kauveryhospital.com/doctorimage/recent/hosur/Dr-Hemanth.jpg" alt="" />
            <div className="w-full h-[85%] space-y-3   text-white  hover:text-[#000000] hover:bg-transparent hover:shadow-xl hover:shadow-sky-400 transition-all inset-0 bg-blue-500 opacity-25 absolute top-0 left-0 bg-[#d4fffc69]">
               <FaFacebook   className=" m-4 w-5 h-5" />
               <FaTwitter    className=" m-4 w-5 h-5" />
               <FaInstagram  className=" m-4 w-5 h-5" />
               <FaLinkedin   className=" m-4 w-5 h-5" />
             </div>  
           <h2 className="text-lg text-balck font-bold">Dr. Mari Chand</h2>
           <p className="text-balck">MBBS, FCPS Medicine / London</p>
         </div>
      </SwiperSlide>

     <SwiperSlide>
     <div className="relative mx-5 mb-5 text-center overflow-hidden md:w-[250px] w-full h-[450px]">
           <img  className="w-full bg-white h-[85%]" src="https://specialisthospital.in/wp-content/uploads/2023/05/NewDoctorsWebsite-Anitha.jpg" alt="" />
            <div className="w-full h-[85%] space-y-3   text-white  hover:text-[#000000] hover:bg-transparent hover:shadow-xl hover:shadow-sky-400 transition-all inset-0 bg-blue-500 opacity-25 absolute top-0 left-0 bg-[#d4fffc69]">
               <FaFacebook   className=" m-4 w-5 h-5" />
               <FaTwitter    className=" m-4 w-5 h-5" />
               <FaInstagram  className=" m-4 w-5 h-5" />
               <FaLinkedin   className=" m-4 w-5 h-5" />
             </div>  
           <h2 className="text-lg text-balck font-bold">Dr. Maisa Islam</h2>
           <p className="text-balck">MBBS, FCPS Medicine / London</p>
         </div>
      </SwiperSlide>

     
    </Swiper>

    <div className='border-[#84f0fe] w-full h-5  border-b-4'> </div>
    </div>



{/* second section */}

    <div className="  mx-auto w-full h-full py-10 bg-fixed bg-cover bg-center bg-no-repeat bg-[url(https://img.freepik.com/free-photo/3d-render-abstract-background-with-modern-low-poly-plexus-design_1048-13213.jpg?w=740&t=st=1703891267~exp=1703891867~hmac=de1e1f92121b0fd9440c2d1e418d23a5a4c7a9acb41b2ec57901117129b27ec2)]">

           
            <div className=" p-10 mt-10  justify-start items-center md:flex gap-20 h-full w-full">
                <div className="text-white md:w-[50%] w-full float-right">
                  <h2 className="font-bold text-xl text-right">Benefits Of Drinking Water</h2>
                  <p className='text-lg text-right'> Whether you want younger skin, shiny hair or a body , water is the best nutrient for all the three and much more. Here are some benefits -- of drinking water regularly.</p>
                  <p className="text-justify">1. Nourish your skin  Drinking water prevents the occurrence of wrinkles before time. Natures best cream that hydrates the cells of the body and pumps them up, making your skin look younger. It flushes out impurities and improves circulation and blood flow,leaving your face clear, clean and glowing.
                        2. Boosts Energy  If you are feeling drained out and depleted, get a boost with water. Dehydration makes you feel fatigued. Water helps the blood transport of oxygen and other essential nutrients to your cells. If you are getting enough water, your heart does not have to work too hard to pump blood throughout your body.
                        3. Water Maintains Good Bowel Function Adequate hydration keeps things flowing along your gastrointestinal tract and prevents constipation. When you do not get enough fluid, the colon pulls water from stools to maintain hydration -- and the result is constipation. So drinking good amount of water is advisable.                      
                  </p>
                </div>
                <figure className="md:w-[50%] w-full"><img className="h-full w-full rounded" src="https://cdn.marico.in/catalog/blog/Drinking-insufficient-water_Infographic-image.jpg" alt="" /></figure>
            </div>

           
            <div className=" hidden p-10 my-10  justify-start items-center md:flex gap-20 h-full w-full">
                <figure className="md:w-[50%] h-full w-full"><img className="h-full w-full rounded" src="https://www.cnet.com/a/img/resize/1a04b28922e447009d4e81bc51abcecd18537682/hub/2022/04/07/1b8aba28-0bac-45ea-8446-2fd25b6a4edb/gettyimages-1180186841.jpg?auto=webp&fit=crop&height=810&width=1440" alt="" /></figure>
                <div className="text-white md:w-[50%] w-full float-right">
                  <h2 className="font-bold text-xl text-right"> Complete Types Of Blood</h2>
                  <p className='text-lg text-right'>A complete blood type would describe each of the 44 blood groups, and individuals blood type is one of many possible combinations of blood-group antigens.</p>
                  <p className="text-justify"> Bone-marrow transplants are performed for many leukemias and lymphomas, among other diseases. If a person receives bone marrow from someone of a different ABO type (e.g., a type O patient receives a type A bone marrow), malignancy, or autoimmune disease.3 4  5 6 Another more common cause of blood type change is a bone marrow transplant A complete blood type would describe each of the 44 blood groups, and an individuals blood type is one of many possible combinations of blood-group antigens.2Almost always, an individual has the same blood group for life, but very rarely an individuals blood type changes through addition or suppression of an antigen in infection the patients blood type should eventually become the donors type, as the patients hematopoietic stem cells HSCs are destroyed, either by ablation of the bone marrow or by the donors T-cells. Once all the patients original red blood cells have died, they will have been fully replaced by new cells derived from the donor HSCs. Provided the donor had a different ABO type, the new cells surface antigens will be different from those on the surface of the patients original red blood cells.                </p>
                </div>
            </div>

     

    </div>

</div>
</div>
    );
};

export default Extra1;