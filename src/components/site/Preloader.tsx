import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Preloader() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Stato iniziale: i pallini sono sparsi a caso e invisibili, il testo è invisibile
    gsap.set(".logo-dot", {
      x: () => gsap.utils.random(-400, 400),
      y: () => gsap.utils.random(-400, 400),
      opacity: 0,
      scale: 0,
    });
    gsap.set(".logo-text", { opacity: 0 });

    // 2. Animazione pallini: convergono verso il centro (la loro posizione originale)
    tl.to(".logo-dot", {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.1, // Li fa arrivare uno dopo l'altro
    })
    // 3. Appare la scritta "fi.co" (inizia poco prima che i pallini finiscano)
    .to(".logo-text", {
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut",
    }, "-=0.5")
    // 4. Pausa per far leggere il logo, poi il sipario si alza verso l'alto
    .to(container.current, {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut",
      delay: 0.5,
    });

  }, { scope: container });

  return (
    // z-[9999] lo tiene sopra tutto. bg-[#002f3a] è un blu simile a quello del sito.
    <div 
      ref={container} 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#011C27]"
    >
      {/* 
        Qui andrà il vero codice SVG del logo. 
        Ti ho messo un esempio di come dovrai strutturarlo:
      */}
      <svg viewBox="0 0 300 100" className="w-64 h-auto">
        {/* Le lettere (questo andrà sostituito con i <path> del logo vero) */}
        <g className="logo-text" fill="white">
          <text x="50" y="60" fontSize="50" fontWeight="bold">fi.co</text>
        </g>
        
        {/* I pallini animati (sostituisci cx e cy con quelli reali del tuo SVG) */}
        <circle className="logo-dot" cx="68" cy="18" r="8" fill="#facc15" /> {/* Giallo */}
        <circle className="logo-dot" cx="165" cy="55" r="8" fill="#38bdf8" /> {/* Azzurro */}
      </svg>
    </div>
  );
}