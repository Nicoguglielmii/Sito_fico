// Il ref identifica il contenitore che GSAP farà scorrere fuori dallo schermo.
import { useRef } from "react";

// GSAP gestisce la sequenza temporizzata delle animazioni del logo.
import gsap from "gsap";

// Hook React-compatibile che limita le selezioni GSAP al componente corrente.
import { useGSAP } from "@gsap/react";

// Wordmark rasterizzato mostrato accanto al pittogramma nella fase centrale.
import wordmarkImg from "../../assets/fico-wordmark.png";

export function Preloader() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set(".piktogramma-container", { x: 170, y: 0 });
    gsap.set(".testo-container", { x: 270, y: 15, opacity: 0 }); 
    
    // Prima fase: i tre nodi del pittogramma aumentano progressivamente di raggio
    tl.to(".piktogramma-dot", {
      attr: { r: 10 }, 
      duration: 1.4, 
      ease: "back.out(1.5)", 
      stagger: 0.45, 
    })
    
    // Seconda fase: gli archi diventano visibili e vengono disegnati
    .set(".piktogramma-path", { opacity: 1 }, "-=0.2")
    .to(".piktogramma-path", { 
      strokeDashoffset: 0, 
      duration: 1.6,
      ease: "power2.inOut",
    }, "<")

    // Terza fase: il pittogramma scorre verso sinistra mentre il wordmark entra in scena
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

    // Quarta fase: l'intero preloader risale oltre il bordo superiore della viewport
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f4f9fc]"
      style={{
        backgroundImage: "radial-gradient(circle at center, #ffffff 0%, #e6f3f8 100%)",
      }}
    >
      <svg viewBox="0 0 500 150" className="w-full max-w-md md:max-w-3xl lg:max-w-4xl h-auto overflow-visible relative z-10">
        
        <g className="testo-container" style={{ opacity: 0 }}>
          <image 
            href={wordmarkImg} 
            width="180" 
            height="100" 
            preserveAspectRatio="xMidYMid meet" 
          />
        </g>

        <g className="piktogramma-container">
          
          {/* Arco principale azzurro */}
          <path 
            className="piktogramma-path" 
            pathLength="100"
            d="M 20,70 C 60,10 130,-30 150,115" 
            stroke="#38bdf8" 
            strokeWidth="11" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="100"
            strokeDashoffset="100"
            opacity="0" 
          />
          
          {/* Arco secondario blu/ottanio */}
          <path 
            className="piktogramma-path" 
            pathLength="100"
            d="M 20,70 C 25,-20 55,0 55,115 C 80,45 125,45 150,115" 
            stroke="#0e7490" 
            strokeWidth="11" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="100"
            strokeDashoffset="100"
            opacity="0" 
          />

          {/* Nodi di giunzione del simbolo */}
          <circle className="piktogramma-dot" cx="20" cy="70" r="0" fill="#facc15" />   
          <circle className="piktogramma-dot" cx="55" cy="115" r="0" fill="#facc15" />  
          <circle className="piktogramma-dot" cx="150" cy="115" r="0" fill="#facc15" /> 
        </g>

      </svg>
    </div>
  );
}