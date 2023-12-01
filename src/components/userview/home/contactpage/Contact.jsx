
import { LuClock3 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";

const Contact = () => {


    return (
<div className="h-full  " id="contact">
<div className="md:flex h-full w-[90%] gap-10 text-white bg-[#07332F] rounded-lg mx-auto justify-center items-center p-10  md:h-[80%]">

            <div className="text-content md:w-[30%] md:mt-0 mb-10 space-y-4">
                <h1 className="font-bold text-4xl">Contact With Us</h1>
                <p className=" text-justify my                                                       -3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                <p className="flex items-center gap-2"><LuClock3/> +88 01750 14 14 14</p>
                <p className="flex items-center gap-2"><GrLocation/>Dhanmondi, Dhaka, Bangladesh</p>
            </div>

            <div className="md:w-[50%] mt-5">
            <form className="w-full" >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:p-10">
                        <input type="text" placeholder=" Name "         className="p-3 outline-none  bg-[rgba(255,255,255,0.16)] rounded-lg  h-[75px]" />
                        <input type="email"placeholder=" Email"         className="p-3 outline-none   bg-[rgba(255,255,255,0.16)] rounded-lg h-[75px]" />
                        <input type="text" placeholder=" Mobile Number" className="p-3 outline-none   bg-[rgba(255,255,255,0.16)] rounded-lg h-[75px]" />
                        <input type="text" placeholder=" Doctor Name "  className="p-3 outline-none   bg-[rgba(255,255,255,0.16)] rounded-lg h-[75px]" />
                        <input type="date" placeholder=" Date "         className="p-3 outline-none   bg-[rgba(255,255,255,0.16)] rounded-lg h-[75px]" />
                        <input type="time" placeholder=" Time "         className="p-3 outline-none   bg-[rgba(255,255,255,0.16)] rounded-lg h-[75px]" />
                    </div>
                    <input type="submit" value={'Book'} className="btn md:mt-0 mt-5 mx-auto h-16 text-xl font-bold text-white border-none bg-[#F7A582] btn-primary w-full md:w-[86%] flex justify-center" name="" id="" />

            </form>
            </div>
            
</div>
</div>
    );
};

export default Contact;