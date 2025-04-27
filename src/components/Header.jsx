import React, { useState } from 'react'

const Header = () => {

const [brandName,setBrandName]=useState("Lalit Chowhan")
const [menuLinks,setMenuLinks]=useState([

    {
        title:"Home",
        link:"/home",
        id:1,
    },
    {
        title:"About",
        link:"/about",
        id:2,
    },
    {
        title:"Skills",
        link:"/skill",
        id:3,
    },
    {
        title:"Portfolio",
        link:"/portfolio",
        id:4,
    },
    {
        title:"Contact",
        link:"/contact",
        id:5,
    },
])


  return (<>
    <div className=' h-20 border main flex justify-between items-center px-16 bg-gray-100'>

        <div>{/* brand logo*/}

       <h1 className='text-3xl font-bold'>{brandName}</h1>
        </div>
        <div className='space-x-6'>{/* menu links*/}
            {menuLinks.map((link)=>(
                <a key={link.id} href={link.link} className='hover:text-orange-600'>{link.title}</a>

            ))}
        
         {/* <a href='/home' className='hover:text-orange-600'>Home</a>
         <a href='/about'className='hover:text-orange-600'>About</a>
         <a href='/skills'className='hover:text-orange-600'>Skills</a>
         <a href='/Portfolio'className='hover:text-orange-600'>Portfolio</a>
         <a href='/contact'className='hover:text-orange-600' >Contact</a> */}


        </div>

        <div>{/* buttons */}
             <button className='px-4 py-2 bg-orange-500 shodow rounded-full text-2xl'>Connect Me!</button>
        </div>

    </div>
    </>
  )
}

export default Header