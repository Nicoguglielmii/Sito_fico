import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import wordmarkImg from "../../assets/fico-wordmark.png";

export function Preloader() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set(".piktogramma-container", { x: 170, y: 0 });
    gsap.set(".testo-container", { x: 270, y: 15, opacity: 0 }); 
    
    tl.to(".piktogramma-dot", {
      attr: { r: 10 }, 
      duration: 1.4, 
      ease: "back.out(1.5)", 
      stagger: 0.45, 
    })
    .set(".piktogramma-path", { opacity: 1 }, "-=0.2")
    .to(".piktogramma-path", { 
      strokeDashoffset: 0, 
      duration: 1.6,
      ease: "power2.inOut",
    }, "<")
    .to(".piktogramma-container", {
      x: 50,
      duration: 1.6, 
      ease: "power3.inOut",
    }, "+=0.1") 
    .to(".testo-container", {
      x: 240,
      opacity: 1,
      duration: 1.8, 
      ease: "power3.inOut",
    }, "<") 
    .to(container.current, {
      y: "-100%",
      duration: 1.4, 
      ease: "power4.inOut",
      delay: 0.4, 
    });

  }, { scope: container });

  return (
    <div 
      ref={container} 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white border-b-2 border-[#facc15]"
    >
      <svg viewBox="0 0 500 150" className="w-full max-w-md md:max-w-3xl lg:max-w-4xl h-auto overflow-visible">
        
        <g className="testo-container" style={{ opacity: 0 }}>
          <image 
            href={wordmarkImg} 
            width="180" 
            height="100" 
            preserveAspectRatio="xMidYMid meet" 
          />
        </g>

        <g className="piktogramma-container">
          <path 
            className="piktogramma-path" 
            pathLength="100"
            d="M 20,70 C 60,10 130,-30 150,115" 
            stroke="#1da1db" 
            strokeWidth="11" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="100"
            strokeDashoffset="100"
            opacity="0" 
          />
          
          <path 
            className="piktogramma-path" 
            pathLength="100"
            d="M 20,70 C 25,-20 55,0 55,115 C 80,45 125,45 150,115" 
            stroke="#00779b" 
            strokeWidth="11" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="100"
            strokeDashoffset="100"
            opacity="0" 
          />

          <circle className="piktogramma-dot" cx="20" cy="70" r="0" fill="#f5b800" />   
          <circle className="piktogramma-dot" cx="55" cy="115" r="0" fill="#f5b800" />  
          <circle className="piktogramma-dot" cx="150" cy="115" r="0" fill="#f5b800" /> 
        </g>

      </svg>
    </div>
  );
}