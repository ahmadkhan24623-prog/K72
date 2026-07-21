import React from 'react'

function ProjectCard(props) {
  return (
    
           <>
            <div className='w-1/2 group transition-all relative hover:rounded-[70px] overflow-hidden h-full'>
              <img className='h-full w-full object-cover' src={props.image1} alt="" />
                <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/60'>
                  <h2 className='uppercase text-5xl font-[font1] border-4 pt-5 px-4 text-white border-white rounded-full'>Vior le Projects</h2>
                </div>
            </div>

            <div className='w-1/2 group transition-all relative hover:rounded-[70px] overflow-hidden h-full'>
              <img className='h-full w-full object-cover' src={props.image2} alt="" />
                <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/60'>
                  <h2 className='uppercase text-5xl font-[font1] border-4 pt-5 px-4 text-white border-white rounded-full'>Vior le Projects</h2>
                </div>
            </div>
           </>
            
            
          
  )
}

export default ProjectCard
