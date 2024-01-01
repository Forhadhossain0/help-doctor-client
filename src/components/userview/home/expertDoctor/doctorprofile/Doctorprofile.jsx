import { useLoaderData } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { VscCallOutgoing } from "react-icons/vsc";
import { LuClock3 } from "react-icons/lu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../customehooks/useAxiosPublic";



const Doctorprofile = ( ) => {

    const doctor = useLoaderData()
    console.log(doctor)
    const axiosPublic = useAxiosPublic();


     //    just for reviews tab
    const [review,setReview] = useState([]);
    useEffect(()=>{
        axiosPublic.get('/reviews')
        .then(res=>{
            setReview(res.data)
        })
    },[axiosPublic])



    const activeTabClasses = 'bg-accent text-white font-bold  rounded p-3';

    return (
        
    <div className="bg-[#f2f2f2] h-full pb-40">

        <div className="bg-accent h-[22vh]">    </div>

        <div className="h-full pt-10 md:w-[85%] w-[94%] mx-auto">

            <div className="md:flex w-full gap-10 bg-[#fff] my-10  p-10 rounded-lg justify-star items-center">
                <img src={doctor.doctorImage} className="w-[340px] h-[390px]  rounded" alt="" />
                <div className="space-y-5  w-full">
                    <div>
                    <h1 className="font-bold text-3xl">Dr .{doctor.doctorName}</h1>
                    <p className="p-0 m-0">{doctor.doctorDegree}</p>
                    </div>
                    <p>{doctor.ratings}</p>
                    <p className="gap-2 flex items-center"><GrLocation/>{doctor.location}</p>
                    <div className="flex justify-start gap-5 w-full ">
                       {doctor.shortImages?.map(shortImages=> <div key={shortImages} className="flex gap-3 items-center"> 
                         {/* <img src={shortImages} className="w-16 h-16 flex bg-[#fff]  rounded" alt="" /> */}
                         {/* <img src={shortImages} className="w-16 h-16 flex bg-[#fff]  rounded" alt="" />  */}
                         {/* TO DO */}
                        <div  className="w-16 h-16 flex bg-[#f2f2f2]  rounded" alt="" /> 
                        <div  className="w-16 h-16 flex bg-[#f2f2f2]  rounded" alt="" /> 
                        </div>
                        )}
                    </div>

                    <div className="md:flex gap-5 justify-start items-center space-y-3 md:space-y-0 py-3">
                        <p className=" btn bg-transparent font-semibold px-8 hover:text-white hover:bg-gray-500 transition-all border-gray-500 ">{doctor.similarOperation1.split(' ')[1]}</p>
                        <p className=" btn bg-transparent font-semibold px-8 hover:text-white hover:bg-gray-500 transition-all border-gray-500 ">{doctor.similarOperation2.split(' ')[1]}</p>
                    </div>
                </div>
            </div>

 

{/*  down part */}
     <section className="2nd profile part w-full bg-[#fff] p-10 ">
                       {/* tabs will here starts */}
                     

<Tabs selectedTabClassName={activeTabClasses}  defaultIndex={0} className={'w-full' }  >

    <TabList  className={'flex items-center md:justify-between justify-center gap-8 flex-wrap md:h-16 w-full   shadow  rounded'}>
        <Tab className={'font-semibold h-full md:p-0 md:m-0 p-3 m-1 rounded flex items-center hover:bg-accent justify-center md:w-60  text-lg cursor-pointer'}>Overview</Tab>
        <Tab className={'font-semibold h-full md:p-0 md:m-0 p-3 m-1 rounded flex items-center hover:bg-accent justify-center md:w-60  text-lg cursor-pointer'}>Locations</Tab>
        <Tab className={'font-semibold h-full md:p-0 md:m-0 p-3 m-1 rounded flex items-center hover:bg-accent justify-center md:w-60  text-lg cursor-pointer'}>Reviews</Tab>
        <Tab className={'font-semibold h-full md:p-0 md:m-0 p-3 m-1 rounded flex items-center hover:bg-accent justify-center md:w-60  text-lg cursor-pointer'}>Business Hours</Tab>
    </TabList>


{/*  down part */}

{/* overview */}
    <TabPanel>        
     <section className="2nd profile part  p-10 ">
             <div>      
                <h1 className="font-bold text-lg">About Me</h1>
               <p className="pb-3 py-2 md:w-[80%]">{doctor.aboutMe}</p>
             </div>


            <div className="md:flex gap-40    rounded-lg justify-star items-start">

             <div>
                    <h1 className="font-bold py-4 text-lg">Education</h1>
                    <div className="p-4 ">
                      {doctor.education.map(edu=>  <div key={edu} className="pb-4">
                       <li className="font-semibold">{edu.university}</li>
                       <p className="pl-6">{edu.degree}</p>
                       <p className="pl-6">{edu.year}</p>  </div> 
                       )}
                    </div>
        

                    <h1 className=" font-bold py-4 text-lg ">Work & Experience</h1>
                    <div className="p-4 ">
                     {doctor?.workExperience?.map(work=> <div key={work} className="pb-4">  
                        <li className="font-semibold">{work.clinic}</li>
                        <p className="pl-6">{work.duration}</p> </div>
                      )}   
                    </div>

                    <h1 className=" font-bold py-4 text-lg ">Services</h1>
                    <div className="p-4">
                        {doctor.services?.map(service=> <li key={service}>{service}</li>)   }
                    </div>
  
                </div>


                {/* flex2  */}

                <div>
                 <div className="p-4  ">
                     <h1 className="font-bold  text-lg">Awards</h1>
                    {
                        doctor?.awards.map(awards=> <div key={awards} className="py-6">
                        <p className="pl-6">{awards.date}</p>
                        <li className="font-semibold pt-1">{awards.award}</li>
                        <p className="pl-6 pt-1 md:w-[70%]">{awards.description}</p>
                      </div> )
                    }
                 </div>

                 <div className="p-4 ">
                    <h1 className="font-bold py-4 text-lg">Specializations</h1>
                    {doctor?.specializations?.map(specializations=> <li key={specializations}> {specializations}  </li> )  }
                 </div>
                </div>

            </div>
    </section>   
   </TabPanel>


{/* location tab  */}
<TabPanel>
     <div className='md:flex text-gray-500 w-full mx-auto space-y-10 md:space-y-0 justify-center gap-10 my-20  p-10 items-center'>
       <div className='border rounded-lg  h-44 justify-center p-10 w-96 items-center gap-4 flex'>
         <h1 className='text-4xl -mt-10 '> <GrLocation/> </h1>
         <div className='space-y-2'>
            <h2 className='text-xl'>Dr.{doctor.doctorName}</h2>
            <p>{doctor.location}</p>
         </div>
       </div>


       <div className='border rounded-lg  h-44 justify-center p-10 w-96 items-center gap-4 flex'>
         <h1 className='text-4xl -mt-10  '> <VscCallOutgoing/> </h1>
         <div className='space-y-2 '>
            <h2 className='text-xl'> Contact info </h2>
            <p>+88 01750 00 00 00 <br /> +88 01750 00 00 00  </p>
         </div>
       </div>


   </div>
   </TabPanel>


  {/* reviews tab */}
   <TabPanel >
    <div className="p-10 grid grid-cols-1 mt-20 md:grid-cols-2 gap-16">
    {review?.map(review=> 
      
      <div key={review._id} className=" text-gray-700 p-6   overflow-hidden space-y-3 w-full md:w-[500px]    cursor-pointer">
          <div className="md:flex justify-between text-center md:text-left  md:m-0 mt-5">
              <img className="md:w-12 md:h-12 w-8 h-8 border mx-auto md:m-0 border-orange-500 rounded-full " src={review.image} alt="" />
              <div className="md:ml-2 md:-mt-1">
                  <h1 className="font-bold md:text-xl">{review.name}</h1>
                  <p className="md:text-lg inline-flex text-sm">{review.title}</p>
              </div>
             <h1  className=" mx-auto text-2xl rounded-full border-2 w-10 h-10 flex items-center justify-center " > 🌟 </h1> 
          </div>
          <p className="md:text-justify text-center md:text-lg  mx-auto ">{review.details}</p>
      
      </div> 
      )}
      
    </div>
  
   </TabPanel>



  {/* business  */}
   <TabPanel>
         <h1 className='text-4xl font-semibold items-center gap-5 mx-auto flex justify-center mt-20'>Busines Time <LuClock3/> </h1>
      <div className=' text-gray-600 font-semibold border-b-2  flex justify-center md:p-20 py-10 w-full h-full '>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <li className='text-xl capitalize'>sanday : 7am - 1pm</li>
            <li className='text-xl capitalize'>tuesday : 1am - 9pm</li>
            <li className='text-xl capitalize'>wednesday : 5am - 9pm</li>
            <li className='text-xl capitalize'>thursday : 7am - 1pm</li>
         </div>
       </div>
   </TabPanel>


</Tabs>

{/* tabs will here end */}
    </section>   
            
</div>
</div>
    );
};

export default Doctorprofile;