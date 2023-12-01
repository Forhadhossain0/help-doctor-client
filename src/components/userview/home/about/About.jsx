import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { LuClock3 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { VscCallOutgoing } from "react-icons/vsc";

const About = () => {
    return (

      <> 
            <div className="md:flex mx-auto justify-center space-y-2 items-start  w-full  md:h-[100vh] gap-10  p-10 pb-0 my-10 ">
               
               <div className="contentleftside h-full w-full flex justify-end ">
                     <figure className='md:w-[70%] w-full mx-auto md:m-0 h-full'><img className="w-full h-full" src="../../../../../public/image/about 1.png" alt="" /></figure>
               </div>

                <div className="contentrightside w-full">
                   <div className="content1  space-y-2 ">
                     <h2 className="text-xl font-bold text-black">Our Services</h2>
                     <p className="text-justify text-[12px] font-semibold md:w-[70%]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                   </div>

       

                {/* tabs will here starts */}
                     

                <Tabs defaultIndex={0} className={'w-full flex-1'}  >

                    <TabList className={'flex items-center h-16 md:w-[80%]  bg-[#f2f2f2]  my-2 p-3   border rounded'}>
                      <Tab className={'font-semibold hover:rounded h-full cursor-pointer btn '}>Cavity Protection</Tab>
                      <Tab className={'font-semibold hover:rounded h-full cursor-pointer btn '}>Cosmetic Dentisty</Tab>
                      <Tab className={'font-semibold hover:rounded h-full cursor-pointer btn '}>Oral Surgery</Tab>
                    </TabList>


                    <TabPanel>
                         <div className='w-full space-y-4'>
                            <img className='w-1/2 h-40' src="https://i.pinimg.com/736x/b7/93/9c/b7939cf33c20a7e851a18ea2cc439abc.jpg" alt="" />
                            <h2 className='text-xl font-bold'>Dental Examination </h2>
                            <p className='text-[12px] md:w-[80%]  text-justify'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                            <p className='text-[12px] md:w-[80%] text-justify'>Sit accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <button className='btn btn-accent'>More Details</button>
                         </div>
                    </TabPanel>

                    <TabPanel>
                         <div className='w-full space-y-4'>
                            <img className='w-1/2 h-40' src="../../../../../public/image/about2.png" alt="" />
                            <h2 className='text-xl font-bold'>Treatments for tooth decay </h2>
                            <p className='text-[12px] md:w-[80%]  text-justify'>A dentist can prescribe fluoride treatments like mouthwash or varnish to reverse early tooth decay. Youll probably need a filling if you have a hole (cavity) in your tooth. </p>
                            <p className='text-[12px] md:w-[80%] text-justify'>If tooth decay has reached the soft tissue (pulp) in the middle of your tooth, you may need root canal treatment.</p>
                            <button className='btn btn-accent'>More Details</button>
                         </div>
                    </TabPanel>


                    <TabPanel>
                         <div className='w-full space-y-4'>
                            <img className='w-1/2 h-40' src="https://patuxentorthodontics.com/wp-content/uploads/2023/06/Why-Are-My-Teeth-Breaking-All-of-a-Sudden-2.png" alt="" />
                            <h2 className='text-xl font-bold'>Decay Removal </h2>
                            <p className='text-[12px] md:w-[80%]  text-justify'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                            <p className='text-[12px] md:w-[80%] text-justify'>Sit accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <button className='btn btn-accent'>More Details</button>
                         </div>
                    </TabPanel>

         

                </Tabs>

                {/* tabs will here end */}
      </div>


    </div>



{/* info contact section  */}
<div >
   <div className='md:flex w-full mx-auto space-y-10 md:space-y-0 justify-center gap-10 my-20  p-10 items-center'>
      

       <div className='bg-[#07332F] gap-4 rounded-lg text-white h-44 justify-center p-10 w-80 items-center  flex'>
         <h1 className='text-4xl -mt-10  '><LuClock3/></h1>
         <div className='space-y-2'>
            <h2 className='text-xl'>Opening Hours</h2>
            <p>Open 9.00 am to 5.00pm Everyday</p>
         </div>
       </div>


       <div className='bg-[#F7A582] rounded-lg text-white h-44 justify-center p-10 w-80 items-center gap-4 flex'>
         <h1 className='text-4xl -mt-10 '> <GrLocation/> </h1>
         <div className='space-y-2'>
            <h2 className='text-xl'> Our Locations </h2>
            <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
         </div>
       </div>

       


       <div className='bg-[#07332F] rounded-lg text-white h-44 justify-center p-10 w-80 items-center gap-4 flex'>
         <h1 className='text-4xl -mt-10  '> <VscCallOutgoing/> </h1>
         <div className='space-y-2 '>
            <h2 className='text-xl'> Contact Us </h2>
            <p>+88 01750 00 00 00 <br /> +88 01750 00 00 00  </p>
         </div>
       </div>


   </div>
</div>


    </>
    );
};

export default About;