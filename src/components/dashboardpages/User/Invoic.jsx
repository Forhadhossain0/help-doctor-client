import { Link, useLoaderData,useNavigate} from "react-router-dom";
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";


const Invoic = () => {
    const appoinment = useLoaderData();
    const todayDate = new Date().toLocaleDateString();
    
    
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => {  return componentRef.current;  },
        onError: (error) => { console.error('Error during printing:', error); },
    });
    
    
    const navigate = useNavigate(); 
    const handleBack = () => {
        navigate(-1); 
    };

    


return (
<div className="w-full  h-full pb-40 py-10">

<div className="flex justify-between">
      <Link onClick={handleBack} className="flex items-center h-12 rounded border-none ml-20 hover:bg-[#46faf4]  text-white px-5 font-bold  bg-[#46befa]"> <IoIosArrowBack className=""></IoIosArrowBack> Back </Link> 
      <button className=" rounded border-none mr-20 hover:bg-[#46faf4]  text-white p-2 bg-[#46befa]" onClick={handlePrint}> <FaRegArrowAltCircleDown className="w-10 h-10"></FaRegArrowAltCircleDown> </button> 
</div>

 <div ref={componentRef} className="bg-white rounded shadow-lg px-8 py-10 mb-10 mt-20 w-[70%] border-2 mx-auto">

    <div className="flex items-center justify-between mb-8">
        <div className=" items-center">
            <img className="h-16 w-16 p-1 rounded bg-[#46befa] " src="https://i.ibb.co/CsRQNv1/logoup.png"  alt="Logo" />
            <div className="text-[#46befa]  font-serif uppercase  font-bold text-lg"> Help-Doctor </div>
        </div>


        <div className="text-gray-700">
            <div className="font-bold text-xl mb-2">INVOICE</div>
            <div className="text-sm">Date: {todayDate} </div>
            <div className="text-sm">Invoice #: INV{appoinment._id}</div>
        </div>
    </div>


    <div className="border-b-2 border-gray-300 pb-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Bill To:</h2>
        <div className="text-gray-700 mb-1 flex gap-1">{appoinment?.appointInfo?.fullName} {appoinment?.appointInfo?.lastName} </div>
        <div className="text-gray-700">{appoinment?.appointInfo?.phoneNumber}</div>
        <div className="text-gray-700 mb-1">{appoinment?.appointInfo?.address || 'Dhanmondi, Dhaka 1205 '}</div>
        <div className="text-gray-700">{appoinment?.appointInfo?.primaryEmail}</div>
    </div>


    <table className="w-full text-left mb-8">
        <thead>
            <tr>
                <th className="text-gray-700 font-bold uppercase py-2">Service</th>
                <th className="text-gray-700 font-bold uppercase py-2">Date</th>
                <th className="text-gray-700 font-bold uppercase py-2">Time</th>
            </tr>
        </thead>
        <tbody className="">
            <tr className="mt-5">
                <td className=" text-gray-700">{appoinment?.itemInfo?.subservicename}</td>
                <td className=" text-gray-700">{appoinment?.appointInfo?.date}</td>
                <td className=" text-gray-700">{appoinment?.appointInfo?.time}</td>
            </tr>
        </tbody>
    </table>


    <div className="flex justify-end items-end my-5 ">
        <div className="  ">
            <img className="w-28  h-24 mx-auto " src="https://www.wisestamp.com/wp-content/uploads/2020/08/Michael-Jordan-personal-autograph.png" alt="" />
            <p className=" text-gray-700 -mt-4 italic  text-center ">Help Doctors Community</p>
        </div>
    </div>

    <div className="border-t-2 mt-2 border-gray-300 ">
        <div className="text-gray-700 mt-2">Please you must have to bring this invoic for appoinment.</div>
        <div className="text-gray-700">Location : 22 hazaribag, 1209 Dhaka, Bangladesh</div>
    </div>

</div>
</div>
 );
};

export default Invoic;
