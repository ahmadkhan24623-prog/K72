import React from 'react';

const ProjectItem = ({ image, title = "Voir le Projet" }) => (
  <div className="group relative h-full w-1/2 overflow-hidden transition-all duration-500 hover:rounded-[50px]">
    <img 
      src={image} 
      alt={title} 
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
      <h2 className="rounded-full border-2 border-white/80 bg-white/10 px-8 py-4 font-[font1] text-4xl tracking-wider uppercase text-white shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
        {title}
      </h2>
    </div>
  </div>
);

function ProjectCard({ image1, image2, title }) {
  return (
    <div className="flex h-full w-full gap-4">
      <ProjectItem image={image1} title={title} />
      <ProjectItem image={image2} title={title} />
    </div>
  );
}

export default ProjectCard;