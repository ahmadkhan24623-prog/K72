import React from 'react'    
import bgVideo from '../../assets/Home_Page_Background_Video.mp4'

function Video() {
  return (
    

      <div className='relative h-full w-full overflow-hidden'>
       <video 
        className='h-full w-full object-cover' 
        autoPlay 
        loop 
        muted 
        playsInline
        src={bgVideo}
       ></video>
     </div>
    
  )
}

export default Video;