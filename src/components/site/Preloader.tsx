import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Preloader() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. SETUP INIZIALE
    // Il testo è centrato, completamente trasparente e posizionato DIETRO il simbolo
    gsap.set(".testo-container", { opacity: 0, x: 0 });
    // I pallini sono rimpiccioliti a 0
    gsap.set(".piktogramma-dot", { opacity: 0, scale: 0, transformOrigin: "center" });
    // Prepariamo le linee per l'effetto "disegno"
    gsap.set(".piktogramma-path", { opacity: 0, strokeDasharray: 400, strokeDashoffset: 400 });

    // 2. FORMAZIONE DEL SIMBOLO AL CENTRO
    // Fanno "pop" i pallini gialli
    tl.to(".piktogramma-dot", {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.2, // Appaiono uno alla volta
    })
    // Subito dopo, si disegnano gli archi azzurri
    .to(".piktogramma-path", {
      opacity: 1,
      strokeDashoffset: 0,
      duration: 1,
      ease: "power2.inOut",
    }, "-=0.4") // Questo fa sovrapporre l'animazione precedente

    // 3. LO SCORRIMENTO MAGICO (Simbolo a sx, Testo a dx)
    .to(".piktogramma-container", {
      x: -120, // Il simbolo scorre a sinistra
      duration: 1.2,
      ease: "power3.inOut",
    }, "+=0.2") // Piccola pausa per far ammirare il simbolo
    .to(".testo-container", {
      x: 30, // Il testo scorre a destra...
      opacity: 1, // ...e contemporaneamente diventa visibile!
      duration: 1.2,
      ease: "power3.inOut",
    }, "<") // IMPORTANTE: Il simbolo "<" dice a GSAP di far partire questa animazione ESATTAMENTE insieme a quella sopra

    // 4. FINE E SCOMPARSA DEL PRELOADER
    .to(container.current, {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut",
      delay: 0.8,
    });

  }, { scope: container });

  return (
    <div 
      ref={container} 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#011C27]"
    >
      <svg viewBox="0 0 600 200" className="w-full max-w-lg h-auto">
        
        {/* 
          TESTO: Deve essere scritto PRIMA del simbolo nel codice, 
          così il browser lo renderizza "sul fondo" (dietro).
        */}
        <g className="testo-container" transform="translate(300, 120)">
          <text fontSize="80" fontWeight="bold" fill="white" textAnchor="start">fi.co</text>
        </g>

        {/* 
          SIMBOLO (Piktogramma): Scritto DOPO, così copre il testo inizialmente.
        */}
        <g className="piktogramma-container" transform="translate(250, 60)">
          {/* Archi (Paths) - I colori sono quelli scuri/chiari del sito */}
          <path className="piktogramma-path" d="M0,40 C0,-30 100,-30 100,40 C100,110 0,110 0,40" stroke="#0e7490" strokeWidth="18" fill="none" strokeLinecap="round" />
          <path className="piktogramma-path" d="M0,40 C0,-30 100,-30 100,40 C100,110 0,110 0,40" stroke="#38bdf8" strokeWidth="10" fill="none" strokeLinecap="round" />

          {/* Nodi (Pallini gialli) */}
          <circle className="piktogramma-dot" cx="0" cy="40" r="14" fill="#facc15" />
          <circle className="piktogramma-dot" cx="50" cy="100" r="14" fill="#facc15" />
          <circle className="piktogramma-dot" cx="100" cy="40" r="14" fill="#facc15" />
        </g>

      </svg>
    </div>
  );
}