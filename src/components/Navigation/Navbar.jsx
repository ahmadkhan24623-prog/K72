import React, { useContext, useRef } from 'react';
import { NavbarContext } from '../context/NavContext';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const navGreenRef = useRef(null);
  const projetsGreenRef = useRef(null);
  const agenceGreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <div className='z-40 flex fixed top-0 w-full items-start justify-end pointer-events-none'>
      <div className='flex items-start pointer-events-none m-0 p-0'>
        
        {/* Projets */}
        {!isHome && (
          <div 
            onMouseEnter={() => {
              if (projetsGreenRef.current) projetsGreenRef.current.style.height = '100%';
            }} 
            onMouseLeave={() => {
              if (projetsGreenRef.current) projetsGreenRef.current.style.height = '0%';
            }} 
            className='bg-black pointer-events-auto relative h-24 w-90 flex items-center justify-center cursor-pointer overflow-hidden font-bold uppercase text-white m-0 p-0'
          >
            <div 
              ref={projetsGreenRef} 
              className='bg-[#D3FD50] transition-all duration-300 absolute top-0 left-0 h-0 w-full z-0'
            ></div>
            <span className='relative z-10 text-lg tracking-wider hover:text-black transition-colors duration-300'>
              PROJETS (17)
            </span>
          </div>
        )}

        {/* Agence */}
        {!isHome && (
          <div 
            onMouseEnter={() => {
              if (agenceGreenRef.current) agenceGreenRef.current.style.height = '100%';
            }} 
            onMouseLeave={() => {
              if (agenceGreenRef.current) agenceGreenRef.current.style.height = '0%';
            }} 
            className='bg-black pointer-events-auto relative h-34 w-130 flex items-center justify-center cursor-pointer overflow-hidden font-bold uppercase text-white m-0 p-0 translate-y'
          >
            <div 
              ref={agenceGreenRef} 
              className='bg-[#D3FD50] transition-all duration-300 absolute top-0 left-0 h-0 w-full z-0'
            ></div>
            <span className='relative z-10 text-lg tracking-wider hover:text-black transition-colors duration-300'>
              AGENCE
            </span>
          </div>
        )}

        {/* Menu (Smaller size on home page, original size on other pages) */}
        <div 
          onClick={() => setNavOpen(true)} 
          onMouseEnter={() => {
            if (navGreenRef.current) navGreenRef.current.style.height = '100%';
          }} 
          onMouseLeave={() => {
            if (navGreenRef.current) navGreenRef.current.style.height = '0%';
          }} 
          className={`bg-black pointer-events-auto relative flex items-center justify-center cursor-pointer overflow-hidden m-0 p-0 ${
            isHome ? 'h-24 w-48 gap-4' : 'h-44 w-70 gap-6 translate-y'
          }`}
        >
          <div 
            ref={navGreenRef} 
            className='bg-[#D3FD50] transition-all duration-300 absolute top-0 left-0 h-0 w-full z-0'
          ></div>

          <span className={`relative z-10 font-bold uppercase tracking-wider text-white hover:text-black transition-colors duration-300 ${
            isHome ? 'text-sm' : 'text-lg'
          }`}>
            MENU
          </span>

          <div className={`relative z-10 flex flex-col items-end justify-center ${isHome ? 'gap-1.5' : 'h-full gap-2'}`}>
            <div className={`${isHome ? 'w-7 h-[2px]' : 'w-10 h-[3px]'} bg-white`}></div>
            <div className={`${isHome ? 'w-4 h-[2px]' : 'w-6 h-[3px]'} bg-white`}></div> 
          </div>  
        </div>

      </div>
    </div>
  );
}

export default Navbar;