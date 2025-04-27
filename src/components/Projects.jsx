
import React from 'react'

const Projects = () => {
  return (
    <>
    <div className='main-container py-14'>
        <h1 className='text-5xl font-bold text-center underline'>My Projects</h1>
        <div className='projects-container  space-x-5 px-10 shadow-lg rounded-xl flex mt-12'>
            <div className='project-1 cursor-pointer hover:bg-gray-200  bg-slate-100 shadow-lg p-5 text-center rounded-xl space-y-3'>
            <i class="bi bi-patch-check-fill text-6xl"></i>
            <h1 className='text-3xl'>Product Verification System</h1>
            
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt, delectus asperiores quidem dolore ratione ab veritatis natucaboque possimus omnis consequuntur ab, reiciendis debiutem corporis voluptas maxime, explicabo incidunt!</p>
                   <br/>
                   <button className='px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg cursor-pointer'>Check</button>
                

            </div>
            <div className='project-2 cursor-pointer hover:bg-gray-200 bg-slate-100  p-5 text-center shadow-lg rounded-xl space-y-3'>
            <i class="fa-solid fa-list-check text-6xl"></i>
                   <h1 className='text-3xl'>Expance Tracker</h1>
                  
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt, delectus asperiores quidem dolore ratione ab veritatis natucaboque possimus omnis consequuntur ab, reiciendis debiutem corporis voluptas maxime, explicabo incidunt!</p>
                   <br/>
                   <br/>
                   <button className='px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg cursor-pointer'>Check</button>
            </div>
            <div className='project-3 cursor-pointer hover:bg-gray-200 bg-slate-100  p-5 text-center shadow-lg rounded-xl space-y-3'>
            <i class="fa-solid  text-6xl fa-user-check"></i>
            <h1 className='text-3xl'>Image Recogination</h1>
            
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt, delectus asperiores quidem dolore ratione ab veritatis natucaboque possimus omnis consequunturjnj reiciendis debiutem corporis voluptas maxime, explicabo incidunt!</p>
                   <br/>
                   <br/>
                   <button className='px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg cursor-pointer'>Check</button>

                
            </div>
            <div className='project-4 cursor-pointer hover:bg-gray-200  bg-slate-100  p-5 text-center shadow-lg rounded-xl space-y-3'>
            <i class="fa-solid fa-user-tie text-6xl"></i>
            <h1 className='text-3xl'>Employee Management System</h1>
            
                    
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt, delectus asperiores quidem dolore ratione ab veritatis natucaboque possimus omnis consequuntur ab, reiciendis debiutem corporis voluptas maxime, explicabo incidunt!</p>
                   
                   <button className='px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg cursor-pointer'>Check</button>

            </div>


        </div>



    </div>
    
    </>
  )
}

export default Projects