import React from 'react'
import UnderConstruction from '../assets/UnderConstruction.png'

function Projects() {
  const projects = [];
  return (
    <div className="font-SourceCodePro bg-[#222327] border-b-2 border-neutral-600 lg:px-10">
      <div className="px-4 py-16 md:px-16">
      {projects? (<>
        <h2 className='text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-red-700 font-extrabold'>Error!!!</h2>
        <img src={UnderConstruction} alt="" className='w-1/2 md:w-1/3 m-auto my-8' />
        <h2 className=' text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#e5e5e5]'>I've No Project in My Portfolio Yet!!!</h2>
        </>) : 
          projects.map(project=>(
            <h2>Hello World</h2>
          ))
        }        
      </div>
    </div>
  )
}

export default Projects