import gsap from 'gsap';
import React from 'react'
import ProjectCard from '../components/project/ProjectCard'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/project/Footer';




function Project() {
  const project = [ 
    { image1:'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479', image2:'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757' },
    { image1:'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e', image2:'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c' },
    { image1: 'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000' , image2: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022' },
    { image1:'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996', image2: 'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821' },
    { image1: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c', image2:  'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47' },
    { image1:'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f' , image2:'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda' } 
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function() {
    gsap.from('.hero', {
      height:'100px',
      stagger:{
        amount:0.5
      },
      scrollTrigger:{
        trigger:'.lol',
        start: 'top 100%',
        end:'top -150%',
        scrub:true
      }
    })
  })

  return (
    <div className='text-black p-4'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] text-[9vw] uppercase'>Projets</h2>
      </div>

      <div className='-mt-10 lol'>
        {project.map(function(elem , idx) {
          return (
            <div key={idx} className='hero w-full h-[700px] mb-5 flex gap-4 overflow-hidden'>
              <ProjectCard image1={elem.image1} image2={elem.image2}  />
            </div>
          )
        })}
      </div>

      <Footer />
    </div>
  )
}

export default Project