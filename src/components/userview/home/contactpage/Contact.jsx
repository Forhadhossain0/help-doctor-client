
import { LuClock3 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";

const Contact = () => {


    return (
<div className="h-full  " id="contact">
<div className="md:flex h-full w-[95%] md:w-[90%] gap-10 text-white bg-[#025779] rounded-lg mx-auto justify-center items-center py-10 px-5  md:p-10  md:h-[80%]">

            <div className="text-content md:w-[30%] w-full md:mt-0 mb-10 space-y-4">
                <h1 className="font-bold text-2xl md:text-4xl">Contact With Us</h1>
                <p className=" text-justify my-3">Beyond the Ordinary Our services redefine healthcare by blending expertise with empathy. From innovative treatments to wellness programs, we go the extra mile for your health journey. Uncover a realm of personalized care.</p>
                <p className="flex items-center gap-2"><LuClock3/> +88 01750141414</p>
                <p className="flex items-center gap-2"><GrLocation className=" "></GrLocation>Dhanmondi, Dhaka, Bangladesh</p>
            </div>

            <div className="md:w-[50%] w-full md:mt-5">
            <form className="w-full" >

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-3 md:p-10">
                        <input type="text" placeholder=" Name "         className="p-3 outline-none   bg-[rgba(255,255,255,0.16)] rounded-lg h-[40px] md:h-[75px]" />
                        <input type="email"placeholder=" Email"         className="p-3 outline-none   bg-[rgba(255,255,255,0.16)] rounded-lg h-[40px] md:h-[75px]" />
                        <input type="text" placeholder=" Mobile Number" className="p-3 outline-none   bg-[rgba(255,255,255,0.16)] rounded-lg h-[40px] md:h-[75px]" />
                        <input type="text" placeholder=" Doctor Name "  className="p-3 outline-none   bg-[rgba(255,255,255,0.16)] rounded-lg h-[40px] md:h-[75px]" />
                        <input type="date" placeholder=" Date "         className="p-3 outline-none   bg-[rgba(255,255,255,0.16)] rounded-lg h-[40px] md:h-[75px]" />
                        <input type="time" placeholder=" Time "         className="p-3 outline-none   bg-[rgba(255,255,255,0.16)] rounded-lg h-[40px] md:h-[75px]" />
                    </div>
                    <input type="submit" value={'Book'} className="btn md:mt-0 mt-5 mx-auto h-[30px] md:h-16 text-xl font-bold text-[#025779] hover:text-white border-none bg-[#fffffff8] btn-primary w-full md:w-[86%] flex justify-center" name="" id="" />

            </form>
            </div>
            
</div>
</div>
    );
};

export default Contact;