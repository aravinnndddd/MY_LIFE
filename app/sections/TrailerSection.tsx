'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function TrailerSection() {
  useGSAP(()=>{
    
    const heroTL = gsap.timeline({
      scrollTrigger: {
        trigger:'.trailer-section',
        start : 'top top',
        end : 'bottom top',
        scrub : true,
      }
    })

    heroTL.to('.trailer-section', {
        rotate : 7,
        scale : 0.7,
        yPercent: 30,
        ease : 'power1.inOut'
    })

    const titleSplit = SplitText.create('.trailer-caption', {
      type : 'words ,lines'
    })

    const subtitleSplit = SplitText.create('.trailer-subtitle', {
      type:'chars'
    })

    const tl = gsap.timeline()

    tl.from(titleSplit.words, {
      ease:'power1.inOut',
      stagger:0.02,
      opacity: 0,
      duration:1,
      delay:0.1,
      y:50
    }).to('.trailer-highlight', {
      opacity:1,
      delay:.5,
      
      scrambleText: {
        text: "{original}",
        chars: "lowerCase",
      },
      duration: 7
    },'-=.5')
    .fromTo(subtitleSplit.chars, 
      { opacity: 0, scale: 0, y: 30 },  // start small + lower
      { opacity: 1, scale: 1, y: 0, ease: 'elastic.out(1, 0.5)', stagger: 0.05 }
    , '-=2.5');

  })
  
  return (
    <div className="main-container h-dvh overflow-hidden relative w-dvw">
      <section className="trailer-section h-full relative w-full">
        {/* Video Background */}
        <div className="w-full h-dvh absolute -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full -z-10 absolute"
          >
            <source src="/syamkumar s.s Trailler.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          

        </div>

      </section>
    </div>
  );
}