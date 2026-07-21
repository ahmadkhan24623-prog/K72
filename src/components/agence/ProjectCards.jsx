import React from 'react';
import gsap from 'gsap';

const ProjectCards = () => {
  const projects = [
    {
      title: 'Opto-Réseau',
      subtitle: 'On vous voit',
      img: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757',
      bgColor: '#5D3B8D'
    },
    {
      title: 'Lamajeure',
      subtitle: 'Son sur mesure',
      img: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',
      bgColor: '#D1D1D1' 
    },
    {
      title: 'Lassonde',
      subtitle: 'Fruité',
      img: 'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821',
      bgColor: '#B21F24' 
    }
  ];

  const handleMouseEnter = (e) => {
    const img = e.currentTarget.querySelector('img');
    gsap.to(img, { scale: 1.1, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = (e) => {
    const img = e.currentTarget.querySelector('img');
    gsap.to(img, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div className="w-full bg-black">
      <div className="py-20 text-center">
        <a href="#" className="text-white uppercase font-bold hover:border-b-2 hover:border-white text-[12px] tracking-[0.2em]">
          Voir tous les projets
        </a>
      </div>

      <div className="flex flex-col w-full">
        {projects.map((project, index) => (
          <div 
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            
            className="group sticky top-0 relative w-full h-screen overflow-hidden cursor-pointer flex flex-col items-center justify-center text-white transition-all duration-700 ease-in-out hover:rounded-t-[70px]"
            style={{ 
                backgroundColor: project.bgColor,
                zIndex: index + 1 
            }}
          >
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover object-center opacity-90 transition-transform duration-500"
              />
            </div>

            <div className="relative z-10 text-center pointer-events-none">
              <span className="uppercase text-[14px] font-medium tracking-[0.1em] block mb-4">
                {project.title}
              </span>
              
              <h2 className="text-[9vw] font-bold leading-[0.85] tracking-tighter border-b-[6px] border-transparent transition-colors duration-500 group-hover:border-white inline-block">
                {project.subtitle}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;