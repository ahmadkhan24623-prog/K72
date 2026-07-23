import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavbarContext } from "../context/NavContext";

function FullScreenNav() {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  console.log(navOpen);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".stairing", {
      delay: 0.1,
      height: "100%",
      stagger: {
        amount: -0.1,
      },
    });

    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });

    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });

    tl.to(".navlink", {
      opacity: 0,
    });

    tl.to(".fullscreennav", {
      display: "none",
    }); 
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen],
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden  text-white overflow-hidden h-screen z-50 w-full  bg-black  fixed"
    >
      <div className="h-screen w-full fixed">
        <div className="h-screen w-full flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="stairing h-full w-1/5 bg-black"></div>
          ))}
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="navlink flex w-full justify-between  items-start">
          <div className="">
            <div className="w-30">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="h-25 w-25 relative cursor-pointer"
          >
            <div className="h-34 w-1 -rotate-45 origin-top absolute bg-[#D3FD50]"></div>
            <div className="h-34 w-1 right-0 rotate-45 origin-top absolute bg-[#D3FD50]"></div>
          </div>
        </div>
        <div className="py-10">
          <div className="link origin-top relative border-y-1 border-white ">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
              Projects
            </h1>
            <div className="moveLink absolute text-black flex top-0  bg-[#D3FD50]">
              <div className="flex move-x items-center ">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045bhttps://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045bhttps://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/caseStudies/Capture_d%E2%80%99ecran_le_2025-09-17_a_18.11.25.png?w=1920&fm=jpg&s=53fb69332aedd6c1fa5499623c55789a"
                  alt=""
                />
              </div>

              <div className="flex move-x items-center ">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045bhttps://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045bhttps://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/caseStudies/Capture_d%E2%80%99ecran_le_2025-09-17_a_18.11.25.png?w=1920&fm=jpg&s=53fb69332aedd6c1fa5499623c55789a"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-y-1 border-white ">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
              Agence
            </h1>
            <div className="moveLink absolute text-black flex top-0  bg-[#D3FD50]">
              <div className="flex move-x items-center ">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Pour Tout Savoir
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045bhttps://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045bhttps://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Pour Tout Savoir
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/caseStudies/Capture_d%E2%80%99ecran_le_2025-09-17_a_18.11.25.png?w=1920&fm=jpg&s=53fb69332aedd6c1fa5499623c55789a"
                  alt=""
                />
              </div>

              <div className="flex move-x items-center ">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Pour Tout Savoir
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045bhttps://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045bhttps://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Pour Tout Savoir
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/caseStudies/Capture_d%E2%80%99ecran_le_2025-09-17_a_18.11.25.png?w=1920&fm=jpg&s=53fb69332aedd6c1fa5499623c55789a"
                  alt=""
                />
              </div> 
            </div>
          </div>

          <div className="link origin-top relative border-y-1 border-white ">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
              Contact
            </h1>
            <div className="moveLink absolute text-black flex top-0  bg-[#D3FD50]">
              <div className="flex move-x items-center ">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Pour Envoyer un fax
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Pour Envoyer un fax
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577"
                  alt=""
                />
              </div>

              <div className="flex move-x   items-center ">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Pour Envoyer un fax
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Pour Envoyer un fax
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-y-1 border-white ">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
              Blogue
            </h1>
            <div className="moveLink absolute text-black flex top-0  bg-[#D3FD50]">
              <div className="flex move-x items-center ">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Lire les articles
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045bhttps://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045bhttps://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Lire les articles
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=1280&h=960&s=184feac75d6b23e52aff206bff3c3c45"
                  alt=""
                />
              </div>

              <div className="flex move-x   items-center ">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Lire les articles
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045bhttps://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045bhttps://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.7] pt-5 uppercase">
                  Lire les articles
                </h2>
                <img
                  className="h-20 shrink-0 w-56 object-cover rounded-full"
                  src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=1280&h=960&s=184feac75d6b23e52aff206bff3c3c45"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenNav;
