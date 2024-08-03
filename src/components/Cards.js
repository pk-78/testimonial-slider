import React from 'react';
import { FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

const Cards = (props) => {
    let review = props.review
    console.log(review);
  return (
    <div className='flex flex-col md:relative bg-white w-[600px]'  >
        <div className='absolute top-[-4rem] z-[10] mx-auto '> 
            <img
                className='aspect-square rounded-full w-[140px] h-[140px] z-[25]'
                src={review.image_link} /> 
            <div className='w-[140px] h-[140px] rounded-full bg-violet-400 absolute top-[-2px] z-[-10] left-[10px]'></div>
            
        </div>
        <div className='text-center mt-7'>
            <p className='font-bold text-2xl capitalize'>{review.name}</p>
        </div>
        <div className='text-center mt-7'>
            <p className='text-violet-300 uppercase text-sm'>{review.species}</p>
        </div>
        

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div>
        <div className='text-center mt-4 text-slate-500 '>
            <p>{review.specification}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>

        


    </div>
  )
}

export default Cards