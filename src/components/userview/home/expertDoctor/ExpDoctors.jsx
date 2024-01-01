import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LuClock3 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import useAxiosPublic from "../../../customehooks/useAxiosPublic";


const ExpDoctors = () => {

const axiosPublic = useAxiosPublic();
const [doctor,setDoctor] = useState([]);

useEffect(()=>{
    axiosPublic.get('/doctors')
    .then(res=> setDoctor(res.data))
},[axiosPublic])


console.log(doctor)

    return (
        <div className="h-full ">
        <div>
            <h1 className="md:text-3xl text-xl font-bold mx-auto text-center">Our Expert Doctors</h1>
            <p className="p-3 md:w-[70%]  mx-auto text-center  w-full">Our platform is dedicated to connecting you with experienced and compassionate medical professionals, ensuring convenient access to expert advice and care. </p>
        </div>

       

         <div className="grid  grid-cols-1 md:grid-cols-3 gap-5 p-5  w-full ">

         { doctor?.slice(2,5)?.map(doctor=>
                <div key={doctor?._doctorName} className="mx-auto rounded-xl my-5 border">
                
                <div className="p-8 rounded-xl ">
                 <img src={doctor?.doctorImage} className="bg-gray-500 w-80 h-56 rounded-xl " alt="" />
                 <h1 className="md:text-xl text-lg font-bold pt-4">{doctor?.doctorName}</h1>
                 <h1>{doctor?.doctorDegree}</h1>
                 <h1 className="py-3">⭐{doctor?.ratings}</h1>

                 <div className="space-y-2">
                 <h1 className="flex justify-start items-center gap-2"><GrLocation/> {doctor?.location}</h1>
                 <h1 className="flex justify-start items-center gap-2" > <LuClock3/> {doctor?.availableTime}</h1>
                 <h1 className="flex justify-start items-center gap-2"><AiOutlineDollar /> ${doctor?.fee}</h1>
                 </div>
                 
                 {/* have to do  */}
                 <Link to={`/doctorprofile/${doctor?._id}`} className="btn capitalize mx-auto justify-center flex mt-3 bg-transparent hover:text-white border border-orange-400 hover:bg-orange-400  text-orange-400 text-lg "> <button>Views Profile</button> </Link>
                </div>
                
                </div>

                 
          )}


         </div>




        </div>
    );
};

export default ExpDoctors;