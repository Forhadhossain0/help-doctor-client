import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import useAxiosPublic from "../../../customehooks/useAxiosPublic";


const Reviews = () => {

    const axiosPublic = useAxiosPublic();
    const [review,setReview] = useState();

    useEffect(()=>{
        axiosPublic.get('/reviews')
        .then(res=>{
            setReview(res.data)
        })
    },[])

// console.log(review)

return (
    <div className="md:mx-[10%] h-[100vh] " id="reviews">

        <div>
            <h1 className="text-3xl font-bold mx-auto text-center">What Our Patients Says</h1>
            <p className="p-3 md:w-[90%] font-bold mx-auto text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>

<Swiper  spaceBetween={10} slidesPerView={2}  onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} >
      
  
        {review?.map(review=> 
        
      <SwiperSlide key={review._id} className="my-20  border rounded-2xl  " >
        <div key={review._id} className="md:p-10 p-2  h-[280px] overflow-hidden space-y-3 w-full md:w-[500px]    cursor-pointer">
            <div className="md:flex justify-between text-center md:text-left  md:m-0 mt-5">
                <img className="md:w-12 md:h-12 w-8 h-8 border mx-auto md:m-0 border-orange-500 rounded-full " src={review.image} alt="" />
                <div className="md:ml-2 md:-mt-1">
                    <h1 className="font-bold md:text-xl">{review.name}</h1>
                    <p className="md:text-lg inline-flex    text-sm">{review.title}</p>
                </div>
                <img src={review.commonImage} className="md:w-10 md:h-10 w-8 h-8 mx-auto my-2 " alt="" /> 
            </div>
            <p className="md:text-justify text-center md:text-lg text-sm md:font-semibold md:pt-3 mx-auto ">{review.details}</p>
        
        </div> 
      </SwiperSlide>
        )}
        

    </Swiper>
        
 
        
 </div>
    );
};

export default Reviews;