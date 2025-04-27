
import React from 'react'
import BannerImg from "../assets/developer2.png"
const About = () => {
  return (
    <>
    
    <div className='main-container  py-16 bg-gray-100'>
        <h1 className=' text-center pb-16 text-5xl underline font-bold'>About Me</h1>
        <div className=' image container flex items-center'>
       <div  className='border: w-full flex justify-center'>
          <img  className='rounded-full shadow-lg w-fit h-90' src={BannerImg}/>

       </div>

        

        <div className='text-container w-full flex justify-center'>
           <div className='space-y-5 w-2/3'>
           <h1 className='text-5xl  font-semibold'>Software Developer and Full Stack Developer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptate minus culpa dicta. Dolorum sapiente, dolor molestiae minus nihil quos repellat delectus voluptatibus harum in, esse assumenda expedita maiores placeat.
            Ea, eum dolorem? Deserunt, adipisci, eligendi officia in voluptatibus beatae sit tempora natus doloribus consequuntur, rem placeat optio delectus veniam animi! A odit molesti.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eum a libero debitis nisi odio excepturi maxime iusto necessitatibus dicta praesentium aliquid minus at iste placeat est dolor quasi enim?
            , vel amet voluptate totam.</p>
            <button className='bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg'>Read More...</button>


           </div>
        </div>
        
         </div>
    </div>
    
    </>
  )
}

export default About