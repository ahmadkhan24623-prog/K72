import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSticky = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // 1. PIN THE ENTIRE SECTION
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=300%", // Controls how long the text takes to move across
      pin: true,     // Locks the container in place
      scrub: 1,      // Links animation to scroll speed
    });

    // 2. HORIZONTAL TEXT ANIMATION (Right to Left)
    gsap.to(textRef.current, {
      x: "-60%", // Adjust based on how long your text string is
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="hero-sticky-container relative h-screen w-full flex items-center justify-center bg-white overflow-hidden">
      
      {/* THE IMAGE (STAYING IN CENTER) */}
      <div className="absolute h-[30vw] w-[22vw] rounded-[2.5rem] overflow-hidden shadow-2xl z-20">
        <img 
          src="https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6" 
          className="h-full w-full object-cover" 
          alt="Centered" 
        />
      </div>

      {/* THE TEXT (MOVING BEHIND OR OVER) */}
      <div ref={textRef} className="absolute z-10 whitespace-nowrap left-[100%]">
        <h1 className="text-[20vw] uppercase leading-none font-black text-black mix-blend-difference">
          Joël&nbsp;&nbsp;Letarte&nbsp;&nbsp;Joël&nbsp;&nbsp;Letarte
        </h1>
      </div>

      {/* THE DESCRIPTION (OPTIONAL BOTTOM TEXT) */}
      <div className="absolute bottom-10 right-10 max-w-[30%] z-30">
        <p className="text-xl font-medium text-black mix-blend-difference">
           Notre curiosité nourrit notre créativité.
        </p>
      </div>
    </div>
  );
};

export default HeroSticky;