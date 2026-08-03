import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// Importiamo il wordmark del marchio per l'animazione iniziale
import wordmarkImg from "../../assets/fico-wordmark.png";

export function Preloader() {
  // Contenitore principale della schermata di preloader
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // SETUP INIZIALE TRAMITE GSAP
    gsap.set(".piktogramma-container", { x: 170, y: 0 });
    gsap.set(".testo-container", { x: 270, y: 15, opacity: 0 }); 
    
    // 1. APPARIZIONE DEI PALLINI
    tl.to(".piktogramma-dot", {
      attr: { r: 10 }, 
      duration: 1.4, 
      ease: "back.out(1.5)", 
      stagger: 0.45, 
    })
    
    // 2. DISEGNO DEGLI ARCHI (Accelerato notevolmente)
    .set(".piktogramma-path", { opacity: 1 }, "-=0.2")
    .to(".piktogramma-path", { 
        strokeDashoffset: 0, 
        duration: 1.6, // Abbassato da 2.6 a 1.6 per velocizzare il collegamento
        ease: "power2.inOut",
    }, "<")

    // 3. SCORRIMENTO E APPARIZIONE DEL WORDMARK
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

    // 4. USCITA DEL PRELOADER
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#011C27]"
    >
      <svg viewBox="0 0 500 150" className="w-full max-w-md h-auto overflow-visible">
        
        {/* Logo wordmark */}
        <g className="testo-container" style={{ opacity: 0 }}>
          <image 
            href={wordmarkImg} 
            width="180" 
            height="100" 
            preserveAspectRatio="xMidYMid meet" 
          />
        </g>

        {/* Simbolo grafico (Pittogramma) */}
        <g className="piktogramma-container">
          
          {/* Arco Azzurro */}
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
          
          {/* Arco Blu Scuro */}
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

          {/* Punti del pittogramma */}
          <circle className="piktogramma-dot" cx="20" cy="70" r="0" fill="#facc15" />   
          <circle className="piktogramma-dot" cx="55" cy="115" r="0" fill="#facc15" />  
          <circle className="piktogramma-dot" cx="150" cy="115" r="0" fill="#facc15" /> 
        </g>

      </svg>
    </div>
  );
}