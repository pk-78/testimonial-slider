import React, { useState } from 'react'
import Cards from './Cards'
import {FaArrowLeft, FaArrowRight  } from "react-icons/fa";



const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex]= useState(0);

    function leftShiftHandler(){
        if(index<1)
        {
            setIndex(reviews.length-1);
        }

        else{
            setIndex(index-1);
        }

    }

    function rightShiftHandler(){

        if(index>reviews.length-2){
            setIndex(0);
        }

        else{
            setIndex(index+1);
        }

    }

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random()*reviews.length);

        setIndex(randomIndex);
         
    }
  return (
    <div className='flex flex-col md:relative bg-white w-[600px] hover:shadow-xl' >
        <Cards review ={reviews[index]}/>
        <div className='flex text-3xl mt-5 gap-3 text-violet-200 font-bold mx-auto'>
           
           <button onClick={leftShiftHandler}
                className='cursor-pointer hover:text-violet-400'>
                <FaArrowLeft />
            </button>
            
            <button onClick={rightShiftHandler}
                 className='cursor-pointer hover:text-violet-400'>
                <FaArrowRight />
            
            </button>
        </div>
        
        <div>
            <button onClick={surpriseHandler}
                 className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-ponter px-10 py-2 rounded-md font-bold text-white text-lg mt-[20px] mb-[10px]'>
                Surprise Me  
            </button>
        </div>
    </div>
  )
}

export default Testimonials