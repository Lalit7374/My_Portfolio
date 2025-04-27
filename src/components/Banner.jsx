
import React, { useEffect } from 'react'
import Typed from "typed.js";
import { useRef } from "react";

import bannerBackground from "../assets/banner_wallpaper.svg"
const Banner = () => {
  const el=useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Developer", "Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop:true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
    <div
     style={
      {
      backgroundImage:`url(${bannerBackground})`,
      backgroundSize:'cover',
    
    }}
     className='main-continer flex items-center'>
        <div
        
        className=' w-full flex  item-center items-center justify-center  text-white h-full'>
          
            <div className='w-2/3 ms-10'>
             {/* text */}

          <h3 className='  text-3xl font-semibold'>Hi,  I am</h3>
          <h1 className='  text-5xl font-bold'>Lalit Chowhan</h1>
          <h2 className='   text-3xl'> I am <span  className='font-bold underline' ref={el}></span> </h2>

          <p className='mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati exercitationem numquam voluptas provident voluptatum id sint perspiciatis cum, recusandae sequi delectus repellat maiores quam inventore, est tempore sit minus.
          </p>
          
          <div className='icons-container space-x-5'>
            
          <i class="fa-brands text-4xl fa-square-github"></i>
          <i class="fa-brands text-4xl fa-linkedin"></i>
          <i class="fa-solid  text-4xl fa-envelope"></i>

          </div>

            <br/>
          <a  className=' mt-5 px-3 py-2 bg-orange-500 rounded-full shadow' href='/contact'>Contact Me</a>
          </div>
        </div>
        <div className='border: w-full flex justify-center'>{/* image */}

        <img  className='rounded-full shadow-lg my-2 w-fit h-90' src="developer.avif"/>

        </div>


    </div>



    </>
  )
}

export default Banner