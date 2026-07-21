import React, { useRef } from 'react';  
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

function Stairs({ children }) {
  const currentPath = useLocation().pathname;
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    

    tl.set(stairParentRef.current, { display: 'block' })
      
      .fromTo('.stair', 
        { y: '-100%' }, 
        { 
          y: '0%', 
          duration: 0.5, 
          stagger: 0.1, 
          ease: "power4.in" 
        }
      )

      .to('.stair', {
        y: '100%',
        duration: 0.5,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.1 
      })

     
      .set(stairParentRef.current, { display: 'none' });

        gsap.from(pageRef.current, {
          opacity:0,
          delay:1,
          scale:1.2
        })
  }, [currentPath]);

  return (
    <div>
      <div 
        ref={stairParentRef} 
        className='h-screen w-full fixed z-[999] top-0 left-0 pointer-events-none'
        style={{ display: 'none' }} 
      >
        <div className='h-screen w-full flex'>
          {[...Array(5)].map((_, i) => (
            <div key={i} className='stair h-full w-1/5 bg-black'></div>
          ))}
        </div>
      </div>
      <div ref={pageRef}>
        {children}
      </div>
    </div>
  );
}

export default Stairs;