import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { LuClock3 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { VscCallOutgoing } from "react-icons/vsc";

const About = () => {


   // Add this to your component or global styles
const activeTabClasses = 'bg-accent text-white font-bold  rounded p-3';


    return (

      <> 
            <div className="md:flex mx-auto justify-center md:space-y-0 space-y-2 items-start  w-[100%] h-auto md:h-[150vh] lg:h-[120vh] gap-10 md:pb-10  p-10  my-10 ">
               
               <div className="contentleftside h-full w-full lg:w-[45%] md:w-[40%]  flex md:justify-end justify-start ">
                     <figure className='lg:w-[85%] w-[100%] h-full mt-2'><img className="w-full h-full" src="https://i.ibb.co/FDmq1Pq/about-1.png" alt="" /></figure>
               </div>

                <div className="contentrightside w-full lg:w-[55%] md:w-[60%]  ">
                   
                   <div className="content1  space-y-2 ">
                     <h2 className="text-xl font-bold text-accent">Our Services</h2>
                     <p className="text-justify text-gray-500  font-semibold pb-2 w-full  lg:w-[70%]">Explore Our Services: From routine check-ups to specialized care, our comprehensive services cater to your health needs. Our experienced medical professionals are dedicated to providing top-notch healthcare.</p>
                   </div>

                {/* tabs will here starts */}
                     

                <Tabs selectedTabClassName={activeTabClasses} defaultIndex={0} className={'w-full flex-1'}  >

                    <TabList className={'md:flex lg:space-x-5 space-x-0 text-left md:space-y-0 space-y-5 overflow-hidden  items-center h-auto md:h-16 lg:w-[80%] w-full   bg-[#f2f2f2]  my-2 md:p-3 p-2  border rounded'}>
                      <Tab className={'font-semibold hover:rounded h-full md:text-md text-sm  cursor-pointer btn '}>Cavity Protection</Tab>
                      <Tab className={'font-semibold hover:rounded h-full md:text-md text-sm  cursor-pointer btn '}>Cosmetic Dentisty</Tab>
                      <Tab className={'font-semibold hover:rounded h-full md:text-md text-sm  cursor-pointer btn '}>Oral Surgery</Tab>
                    </TabList>

                    <TabPanel>
                         <div className='w-full space-y-4'>
                            <img className='md:w-1/2 w-full h-40' src="https://i.pinimg.com/736x/b7/93/9c/b7939cf33c20a7e851a18ea2cc439abc.jpg" alt="" />
                            <h2 className='text-xl font-bold'>Dental Examination </h2>
                            <p className=' text-gray-500 w-full lg:w-[80%]  text-justify'>Discover Our Care Spectrum: Elevate your health with our diverse range of services. Whether you seek preventive screenings, diagnostic excellence, or personalized treatment plans, our dedicated team is committed to delivering quality healthcare solutions. </p>
                            <p className=' text-gray-500 w-full lg:w-[80%] text-justify'>Tailored Care, Infinite Possibilities: Our services are more than appointments theyre pathways to your well-being. From cutting-edge diagnostics to compassionate consultations.</p>
                            <button className='btn btn-accent text-white'>More Details</button>
                         </div>
                    </TabPanel>

                    <TabPanel>
                         <div className='w-full space-y-4'>
                            <img className='md:w-1/2 h-40' src="https://i.ibb.co/RhwFGYj/about2.png" alt="" />
                            <h2 className='text-xl font-bold'>Treatments for tooth decay </h2>
                            <p className=' text-gray-500  w-full lg:w-[80%]   text-justify'>A dentist can prescribe fluoride treatments like mouthwash or varnish to reverse early tooth decay. Youll probably need a filling if you have a hole (cavity) in your tooth. </p>
                            <p className=' text-gray-500  w-full lg:w-[80%]  text-justify'>If tooth decay has reached the soft tissue (pulp) in the middle of your tooth, you may need root canal treatment.</p>
                            <button className='btn btn-accent text-white '>More Details</button>
                         </div>
                    </TabPanel>

                    <TabPanel>
                         <div className='w-full space-y-4'>
                            <img className='md:w-1/2 h-40' src="https://patuxentorthodontics.com/wp-content/uploads/2023/06/Why-Are-My-Teeth-Breaking-All-of-a-Sudden-2.png" alt="" />
                            <h2 className='text-xl font-bold'>Decay Removal </h2>
                            <p className=' text-gray-500  w-full lg:w-[80%]   text-justify'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                            <p className=' text-gray-500   w-full lg:w-[80%]  text-justify'>Totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <button className='btn btn-accent text-white'>More Details</button>
                         </div>
                    </TabPanel>

                </Tabs>

                {/* tabs will here end */}
      </div>
    </div>



{/* info contact section  */}
<div >
   <div className='md:flex cursor-pointer  w-full mx-auto space-y-10 md:space-y-0 justify-center gap-10 mt-20 lg:px-28 md:px-10 px-5  items-center'>
      
       <div className='bg-[#0d9186] hover:bg-[#75fff393] transition-all hover:text-black  rounded-lg text-white h-44 md:flex text-center md:text-left justify-center p-10 md:w-80 w-[90%] mx-auto   items-center gap-4 '>
         <h1 className='text-4xl md:-mt-10 -mt-4 md:m-0 mx-auto flex justify-center '><LuClock3/></h1>
         <div className='space-y-2'>
            <h2 className='text-xl'>Opening Hours</h2>
            <p>Open 9.00 am to 5.00pm Everyday</p>
         </div>
       </div>
       <div className='bg-[#F7A582] hover:bg-[#ffea7593] transition-all hover:text-black  rounded-lg text-white h-44 md:flex text-center md:text-left justify-center p-10 md:w-80 w-[90%] mx-auto   items-center gap-4 '>
         <h1 className='text-4xl md:-mt-10 -mt-4 md:m-0 mx-auto flex justify-center '> <GrLocation/> </h1>
         <div className='space-y-2'>
            <h2 className='text-xl'> Our Locations </h2>
            <p>Dhanmondi 17, Dhaka- 1200, Bangladesh</p>
         </div>
       </div>
       <div className='bg-[#0d9186] hover:bg-[#75fff393] transition-all hover:text-black  rounded-lg text-white h-44 md:flex text-center md:text-left justify-center p-10 md:w-80 w-[90%] mx-auto   items-center gap-4 '>
         <h1 className='text-4xl md:-mt-10 -mt-4 md:m-0 mx-auto flex justify-center '> <VscCallOutgoing/> </h1>
         <div className='space-y-2 '>
            <h2 className='text-xl'> Contact Us </h2>
            <p>+88 01750 00 00 00 <br /> +88 01750 00 00 00  </p>
         </div>
       </div>

   </div>
</div>



{/* oparetion section */}
   <div>
      <div className='md:flex items-center justify-center md:gap-10 gap-5 lg:gap-10 py-20 px-5 lg:px-24 md:px-10 h-auto mx-10 md:m-0 md:h-[100vh] lg:h-[120vh] space-y-5'>
         
         <div className='md:w-[50%] w-full mx-auto md:m-0'>
            <h2 className='md:text-4xl text-xl text-[#007E85] font-semibold py-1'>You have lots of reasons to choose us</h2>
            <p className='py-3 md:text-left text-justify'>Hospital operations encompass the seamless coordination of patient admissions, medical staff management, facility maintenance, and various healthcare services. From emergency care to diagnostics and surgery, medical staff management, facility maintenance, and various healthcare services. From emergency care to diagnostics and surgery, hospitals ensure efficient patient care while managing finances.</p>
            <span className='flex justify-start items-center gap-5'>
               <button className='btn bg-[#007E85] hover:bg-white hover:border-2 hover:border-gray-500 hover:text-[#007E85] text-white font-bold border-none rounded-full px-6 h-[44px] md:h-[55px] text-lg mt-5 btn-primary'>Get started</button>
               <button className='btn bg-transparent text-[#116e88]  font-bold border border-gray-300 shadow hover:text-white hover:bg-[#007E85] hover:border-white rounded-full px-6 h-[44px] md:h-[55px] text-lg mt-5  btn-primary'>Talk to sales</button>
            </span>
         </div>

         <div className='md:w-[50%] w-full rounded-xl h-[420px] bg-cover bg-center bg-no-repeat bg-[url(https://zhrc.in/wp-content/uploads/2021/05/Operation-Theatre.jpg)]'>
            <div className='w-full h-full bg-[#1c6c60c5] rounded-xl flex justify-center items-center p-5'>
               <img className=' w-1/2 rounded-2xl' src="https://i.ibb.co/CsRQNv1/logoup.png" alt="" />
            </div>
         </div>
      </div>
   </div>

    </>
    );
};

export default About;