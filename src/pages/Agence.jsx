import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TeamList from '../components/agence/TeamList';
import Footer from '../components/project/Footer';
import ProjectCards from '../components/agence/ProjectCards';
// import HeroSticky from '../components/agence/HeroSticky';

const Agence = () => {
    gsap.registerPlugin(ScrollTrigger)

    const imageRef = useRef(null)
    const mainWrapperRef = useRef(null)

    const imgaeArray = [
        'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
        'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
        'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
        'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
        'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
        'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
        'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
        'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6'
    ]

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            onUpdate: (self) => {
                const imageIndex = Math.min(
                    Math.floor(self.progress * imgaeArray.length),
                    imgaeArray.length - 1
                );
                if (imageRef.current) {
                    imageRef.current.src = imgaeArray[imageIndex];
                }
            }
        });

       
        gsap.to(mainWrapperRef.current, {
            backgroundColor: "#000000",
            scrollTrigger: {
                trigger: ".trigger-section",
                start: "top 80%",
                end: "top 20%",
                scrub: true,
            }
        });
    }, { scope: mainWrapperRef });

    return (
        <div ref={mainWrapperRef} className='text-black relative bg-white transition-colors duration-500'>
            
            <div className="hero-section relative h-[250vh] w-full">
                
                <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none z-0">
                    <div className="h-[25vw] w-[18vw] rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                            ref={imageRef} 
                            className="h-full w-full object-cover mr-[10vw]" 
                            src={imgaeArray[0]} 
                            alt="Team" 
                        />
                    </div>
                </div>

                <div className="relative z-10 -mt-[75vh] flex flex-col items-center">
                    <div className="h-screen flex items-center justify-center">
                         <h1 className='text-[19vw] text-center uppercase leading-none font-[font2]'>
                            Soixan7e <br /> Douze
                        </h1>
                    </div>
                    
                    <div className='max-w-[45%] ml-auto mr-10 -mt-[10vh] mb-[40vh]'>
                        <p className='text-4xl leading-tight font-[font2]'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
                        </p>
                    </div>
                </div>
            </div>

            {/* <HeroSticky /> */}

            <div className="trigger-section relative z-20">
                <TeamList />
                <ProjectCards />
            </div>

            <Footer />
        </div>
    )
}

export default Agence