import { useState } from "react";
import useAxiosPublic from "../../customehooks/useAxiosPublic";
import useAuth from "../../customehooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Services = ({value,selectedService}) => {
// console.log(selectedService)
const axiosPublic = useAxiosPublic();
const {user} = useAuth();
const navigate = useNavigate()

const [itemInfo, setItemInfo] = useState();
const handleAppoinment = (item) =>{
  
  if(user){
    setItemInfo(item)
    document.getElementById('my_modal_3').showModal();
  }else{
    alert("pleas login frist");
    document.getElementById('my_modal_3').close()
    navigate('/login')
  }
}




const handleInfoPostOnDB = (e) =>{
  e.preventDefault(); 

  const fullName = e.target.name.value;
  const lastName = e.target.lastName.value;
  const address = e.target.address.value;
  const phoneNumber = e.target.number.value;
  const email = e.target.email.value;
  const appointInfo = {fullName,phoneNumber,email,address,lastName, date:value,  time:itemInfo?.time, primaryEmail:user?.email }  
  // console.log(appointInfo,itemInfo)
  const status = 'pending';
  axiosPublic.post(`/appoinment`,{itemInfo,appointInfo,status})
  .then(res=>{
    // console.log(res?.data, 'post appoinment')
    if(res?.data?.insertedId){
      document.getElementById('my_modal_3').close()
      Swal.fire({icon:'success',text:'Your appoinment is Submited successfully',title:'submited'   });
      e.target.reset();
    }
  })

}



return (
<div>

    {selectedService && (

      <div className="mx-auto md:w-[80%] p-5">
        <h1 className="text-3xl font-bold my-5 mx-auto text-center">Available slots for {selectedService?.servicename}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 h-full mt-20 w-full justify-center mx-auto gap-5">
            {selectedService?.subservices?.map(subservice=> 
                 <div className="p-10 w-full mx-auto shadow" key={subservice}>
                  {/* { console.log(subservice)} */}
                 <img className="w-28 h-28 rounded-full bg-[#d0fff591] p-5 mx-auto" src={subservice.subserviceimage || ''} alt="" />
                 <h3 className="text-xl mt-7 font-bold text-center">{subservice.subservicename}</h3>
                 <p className="font-semibold text-center">{subservice.time}</p>
     
                 <button  onClick={()=>{ handleAppoinment(subservice) }} className="btn w-[80%] flex justify-center mx-auto mt-7 border-none bg-[#42fdd5] rounded text-white btn-primary">Book Appointment</button>
             </div>
            ) }
        </div>
   
   
      </div>

    )}

     <dialog id="my_modal_3" className="modal w-full mx-auto">
        <div className="modal-box md:w-[420px] w-[85%]  md:h-[490px] md:px-10 md:py-5  rounded-lg ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost bg-[rgb(210,250,252)] absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-sky-400 text-lg pb-3">Service : {itemInfo?.subservicename}</h3>


           <form  onSubmit={handleInfoPostOnDB} className="space-y-3 ">
            <div className="flex justify-between gap-2 ">
            <input className="px-3 py-1 w-full rounded outline-none  border"  type="text" name="time" placeholder={value} disabled  />
            <input className="px-3 py-1 w-full rounded outline-none  border"  type="text" name="date" placeholder={itemInfo?.time} disabled />
            </div>
            <div className="flex justify-between gap-2 ">
            <input className="p-3 w-full rounded outline-none  border" required type="text" name="name" placeholder="Frist Name"  />
            <input className="p-3 w-full rounded outline-none  border" required type="text" name="lastName" placeholder="Last Name"  />
            </div>
            <input className="p-3 w-full rounded outline-none  border" required type="text" name="number" placeholder="Phone Number"  />
            <input className="p-3 w-full rounded outline-none  border" required type="text" name="address" placeholder="Address"  />
            <input className="p-3 w-full rounded outline-none  border" required type="email"name="email" placeholder="Email"  />
            <input className="p-3 w-full font-serif cursor-pointer text-white font-bold bg-[#02cdd4] hover:bg-[#0879a5] capitalize transition-all rounded outline-none border"  type="submit" value={'submit'}  />
           </form>
        </div>
      </dialog>
</div>
);
};

export default Services;