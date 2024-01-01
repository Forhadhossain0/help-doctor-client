import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import useAxiosPublic from "../../../customehooks/useAxiosPublic";


const Reviews = () => {

    const axiosPublic = useAxiosPublic();
    const [review,setReview] = useState([]);

    useEffect(()=>{
        axiosPublic.get('/reviews')
        .then(res=>{
            setReview(res.data)
        })
    },[axiosPublic])

// console.log(review)

return (
    <div className=" mx-auto lg:h-[100vh] w-full lg:w-[80%] h-auto px-5" id="reviews">

     <div>
       <h1 className="md:text-3xl text-xl font-bold mx-auto text-center">What Our Patients Says</h1>
       <p className="md:p-3 p-2 md:w-[90%] w-full  text-gray-500 mx-auto text-justify md:text-center">Our services redefine healthcare by blending expertise with empathy. From innovative treatments to wellness programs, we go the extra mile for your health journey. Uncover a realm of personalized care – where your unique needs meet our exceptional services. Your vitality, our commitment.</p>
     </div>

     <Swiper onSwiper={(swiper) => console.log(swiper)}  onSlideChange={() => console.log('slide change')}
             spaceBetween={10} // slidesPerView={2}
             breakpoints={{   0: { slidesPerView: 1 },  601: {slidesPerView: 2,}, }}  > 

      {review?.map(review=> 
          
        <SwiperSlide key={review._id} className="md:mb-20 mb-10 mt-10 hover:bg-[#b6faf5ab] border rounded-2xl w-full  overflow-hidden " >
          <div key={review._id} className="md:p-10 p-2  h-[280px] overflow-hidden space-y-3 w-full md:w-[500px]    cursor-pointer">
            <div className="md:flex justify-between text-center md:text-left  md:m-0 mt-5">
              <img className="md:w-12 md:h-12 w-8 h-8 border mx-auto md:m-0 border-orange-500 rounded-full " src={review.image} alt="" />
              <div className="md:ml-2 md:-mt-1">
                <h1 className="font-bold md:text-xl">{review.name}</h1>
                <p className="md:text-lg inline-flex    text-sm">{review.title}</p>
              </div>
              <img src={review.commonImage} className="md:w-10 md:h-10 w-8 h-8 mx-auto my-2 " alt="" /> 
            </div>
            <p className="md:text-justify text-gray-600 text-center md:text-[18px] leading-7 text-sm  md:pt-3 mx-auto ">{review.details}</p>
          </div> 
        </SwiperSlide>
      )}
          

    </Swiper>
        
 </div>
    );
};

export default Reviews;