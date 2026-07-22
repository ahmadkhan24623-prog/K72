import React, { useContext } from 'react'
import { useRef } from 'react'
import { NavbarContext } from '../context/NavContext';

function Navbar() {
  const navGreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  return (
    <div className='z-4 flex fixed top-0 w-full items-start justify-between '>
      <div className='p-5'>
      </div>

      <div 
        onClick={() => setNavOpen(true)} 
        onMouseEnter={() => {
            if (navGreenRef.current) navGreenRef.current.style.height = '100%';
        }} 
        onMouseLeave={() => {
            if (navGreenRef.current) navGreenRef.current.style.height = '0%';
        }} 
        className='bg-black relative h-14 w-[20vw] cursor-pointer'
      >
        <div 
          ref={navGreenRef} 
          className='bg-[#D3FD50] transition-all duration-300 absolute top-0 h-0 w-full'
        ></div>
     

        <div className='relative flex flex-col items-end justify-center h-full px-6 gap-1'>
          <div className='w-10 h-[2px] bg-white'></div>
          <div className='w-6 h-[2px] bg-white'></div> 
        </div>  
      </div>
    </div>
  )
}

export default Navbar
