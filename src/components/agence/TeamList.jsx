import React, { useState, useRef } from 'react';
import gsap from 'gsap';

const TeamList = () => {
  const [activeImg, setActiveImg] = useState('');
  const imageRef = useRef(null);

  const teamMembers = [
    { role: 'Conceptrice-rédactrice', name: 'CAMILLE BRIÈRE', img: 'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a' },
    { role: 'Conseillère principale', name: 'STÉPHANIE BRUNELLE', img: 'https://k72.ca/images/teamMembers/STEPHANIE_480X640.jpg' },
    { role: 'VPP et directeur général', name: 'PIERRE-LUC PAIEMENT', img: 'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2' },
    { role: 'Directrice artistique', name: 'MÉLANIE LAVIOLETTE', img: 'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6' },
    { role: 'Directrice de la stratégie', name: 'MICHÈLE RIENDEAU', img: 'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6' },
    { role: 'Directeur artistique', name: 'ALEX SAUVAGEAU', img: 'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64' },
    { role: 'Directeur artistique', name: 'PHILIPPE PERREAUT', img: 'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64' },
    { role: 'Directrice artistique', name: 'BÉATRICE ROULEAU', img: 'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64' },
    { role: 'Designer graphique', name: 'LOU GRAVEL-R.', img: 'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64' },
    { role: 'Designer graphique', name: 'MARIE-PIER DION', img: 'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64' },
    { role: 'Développement des affaires', name: 'HÉLÈNE GOULET' , img: 'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64'},
    { role: 'Stratégie', name: 'MAËLLE JACOT-D', img: 'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64' },
    { role: 'Conseillère principale', name: 'ISABELLE BEAUCHAMP', img: 'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64' }
  ];

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  const handleMouseEnter = (img) => {
    setActiveImg(img);

    if (!imageRef.current) return;

    gsap.set(imageRef.current, { opacity: 1, scale: 1 });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.2
    });
  };

  return (
    <div
      className="w-full bg-black text-white font-bold uppercase mt-10 relative"
      onMouseMove={handleMouseMove}
    >
      
      <div
        ref={imageRef}
        className="fixed top-0 left-0 w-[200px] h-[260px] pointer-events-none  opacity-0 -translate-x-1/2 -translate-y-1/2"
        >
        <img
          src={activeImg}
          alt="Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-full border-t border-gray-800">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(member.img)}
            onMouseLeave={handleMouseLeave}
            className="group flex justify-between items-center border-b border-gray-800 hover:bg-[#D3FD50] cursor-pointer px-10 py-4"
          > 
            <div className="text-sm text-white group-hover:text-black">
              {member.role}
            </div>

            <h2 className="text-3xl text-white group-hover:text-black">
              {member.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;