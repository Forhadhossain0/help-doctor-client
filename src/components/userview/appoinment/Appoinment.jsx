import { useEffect, useState } from 'react';
import Calendar from 'moedim';
import Services from './Services';
import useAxiosPublic from '../../customehooks/useAxiosPublic';


const Appoinment = () => {

const [value, setValue] = useState(new Date())

const [service,setService] = useState();

const axiosPublic = useAxiosPublic()

useEffect(()=>{
    axiosPublic.get('/services')
    .then(res=>
        setService(res.data)
        )
    },[])
    

 const [selectedService, setSelectedService] = useState(null);
    const handleServiceClick = (selectedService) => {
    setSelectedService(selectedService);
  };


return (
        <>
            <section className="topbanner relative w-full bg-[#07322F] h-[50vh]">
                 <div className="flex justify-between items-end mx-auto h-full w-[80%]">
                 <img className="h-1/2 rotate-180" src="../../../../public//image/1.png" alt="" />
                 <img className="h-1/2" src="../../../../public/image/Group 7.png" alt="" />
                 </div>

                 <div className="text-white absolute bottom-10 md:bottom-28 left-10 md:left-40">
                    <p>Home / Appointment</p>
                    <h2 className="text-3xl font-bold ">Appointment</h2>
                 </div>
            </section>



            {/* main part */}
           <section>

           <div className="bg-[url(../../../../public/image/landing-bg.png)] bg-no-repeat pb-10 bg-cover bg-center w-full h-full md:h-[100vh]">

                <div className="md:flex gap-5 p-10 h-full w-[90%] justify-between  mx-auto items-center">
                   
                   {/* TO DO */}
                    <div className="w-full my-5 mx-auto justify-center flex">
                        <Calendar value={value} onChange={(d) => setValue(d)} />
                    </div>
            
                    <div className="w-full mx-auto justify-center flex">
                        <img className="w-[90%]" src="../../../../public/image/chair 1.png" alt="" />
                    </div>
                </div>
           
               <div className="md:-mt-20">
                 <p className="text-[#F7A582] text-center py-1">Available Services on April 30, 2022</p>
                 <h1 className="text-3xl font-bold text-center">Please select a service</h1>
               </div>

            </div>
           </section>
           
           <div>
            <div className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-5 md:gap-10 md:p-10 p-4 w-full md:w-[80%] ">
                { service?.map(service=> 

                <div    onClick={() => handleServiceClick(service)} key={service} className=" shadow cursor-pointer hover:shadow-lg hover:shadow-teal-200 flex gap-3 p-2 justify-center items-center w-full h-32">
                    <img className="w-1/3   h-full rounded  bg-red-300 " src={service.serviceimage} alt="" />
                    <h1 className="font-bold">{service.servicename}</h1>
                </div>

                )}
            </div>
        </div>




        <Services value={value} selectedService={selectedService} ></Services>
            
        </>
    );
};

export default Appoinment;