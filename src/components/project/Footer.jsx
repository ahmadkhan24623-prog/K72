import React from 'react'

const Footer = () => (
 
  <footer className="w-full bg-black text-white px-3 py-10 ">
    
    <div className="flex justify-start mb-32"> 
      <div className="group cursor-pointer border-[1px] border-white rounded-full px-8 py-3 flex items-center gap-4 hover:bg-white hover:text-black transition-all duration-300">
        <h1 className="text-[7vw] font-bold uppercase leading-none tracking-tighter">
          Contact
        </h1>
        <span className="text-[5vw] mb-1">♥</span>
      </div>
    </div>

    <div className="flex flex-wrap justify-between items-center border-t border-gray-800 pt-6 gap-4">
      
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest">
          Montreal_06:09:45
        </p>
      </div>

      <div className="flex flex-wrap gap-6 text-[9px] font-bold uppercase tracking-tight text-gray-300">
        <a href="#" className="hover:text-white">Politique de confidentialité</a>
        <a href="#" className="hover:text-white">Avis de confidentialité</a>
        <a href="#" className="hover:text-white">Rapport Éthique</a>
        <a href="#" className="hover:text-white">Options de consentement</a>
      </div>

      <div className="text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:opacity-70">
        Retour en haut
      </div>
    </div>
  </footer>
);

export default Footer;