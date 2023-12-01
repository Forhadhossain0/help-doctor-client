import { useState } from "react";
import useAxiosPublic from "../../customehooks/useAxiosPublic";

const Services = ({value,selectedService}) => {
// console.log(selectedService)
const axiosPublic = useAxiosPublic();

const [itemInfo, setItemInfo] = useState();
const handleAppoinment = (item) =>{
  setItemInfo(item)
}


const handleInfoPostOnDB = (e) =>{
  e.preventDefault(); // Prevent default form submission behavior

  // Get the values from the form fields
  const fullName = e.target.name.value;
  const phoneNumber = e.target.number.value;
  const email = e.target.email.value;
  const appointInfo = {fullName,phoneNumber,email,date:value,time:itemInfo?.time }  
  // console.log(appointInfo,itemInfo)

  axiosPublic.post(`/appoinment`,itemInfo,appointInfo)

}



return (
<div>

    {selectedService && (

      <div className="mx-auto w-[80%] p-5">
        <h1 className="text-3xl font-bold my-5 mx-auto text-center">Available slots for {selectedService?.servicename}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 h-full mt-20 w-full justify-center mx-auto gap-5">
            {selectedService?.subservices?.map(subservice=> 
                 <div className="p-10 w-full mx-auto shadow" key={subservice}>
                  {/* { console.log(subservice)} */}
                 <img className="w-28 h-28 rounded-full bg-[#d0fff591] p-5 mx-auto" src={subservice.subserviceimage} alt="" />
                 <h3 className="text-xl mt-7 font-bold text-center">{subservice.subservicename}</h3>
                 <p className="font-semibold text-center">{subservice.time}</p>
     
                 <button  onClick={()=>{ handleAppoinment(subservice); document.getElementById('my_modal_3').showModal()}} className="btn w-[80%] flex justify-center mx-auto mt-7 border-none bg-[#42fdd5] rounded text-white btn-primary">Book Appointment</button>
             </div>
            ) }
        </div>
   
   
      </div>

    )}

     <dialog id="my_modal_3" className="modal w-full mx-auto">
        <div className="modal-box w-[370px] ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg pb-4">{itemInfo?.subservicename}</h3>


           <form  onSubmit={handleInfoPostOnDB} className="space-y-3 ">
            <input className="p-2 w-full rounded outline-none  border"  type="text" name="time" placeholder={value} disabled  />
            <input className="p-2 w-full rounded outline-none  border"  type="text" name="date" placeholder={itemInfo?.time} disabled />
            <input className="p-2 w-full rounded outline-none  border" required type="text" name="name" placeholder="Full Name"  />
            <input className="p-2 w-full rounded outline-none  border" required type="text" name="number" placeholder="Phone Number"  />
            <input className="p-2 w-full rounded outline-none  border" required type="email"name="email" placeholder="Email"  />
            <input className="p-2 w-full text-white font-bold bg-green-500 rounded outline-none border"  type="Submit" value={'submit'}  />
           </form>
        </div>
      </dialog>
</div>
);
};

export default Services;