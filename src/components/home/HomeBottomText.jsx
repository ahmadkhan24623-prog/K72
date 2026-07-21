import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottomText() {
  return (
    <div 
    className='font-[font-2]  flex items-center justify-center gap-2 '>
      <Link className='text-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] leading-[5.5vw] border-5 border-white rounded-full px-14 uppercase  pb-0 ' to='/project'>Project</Link>
      <Link className='text-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] leading-[5.5vw] border-5 border-white rounded-full px-14 uppercase  pb-0' to='/agency'>Agency</Link>
    </div>
  )
}

export default HomeBottomText;
