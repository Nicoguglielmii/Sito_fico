import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Preloader() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Stato iniziale: Piktogramma e Testo sono invisibili e centrati
    // Impostiamo il piktogramma al centro e il testo a destra, nascosto
    gsap.set(".piktogramma-dot, .piktogramma-path", { opacity: 0, scale: 0 });
    gsap.set(".testo-container", { opacity: 0, x: 200 }); // Posizionato a dx e nascosto

    // 2. Animazione Piktogramma al centro: nodi e archi appaiono e si assemblano
    tl.to(".piktogramma-dot, .piktogramma-path", {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
      stagger: {
        each: 0.1,
        from: "random", // Assemblaggio casuale come richiesto
      },
    })
    // 3. Scorrimento Piktogramma a sinistra
    .to(".piktogramma-container", {
      x: -150, // Spostamento a sinistra
      duration: 1,
      ease: "power2.inOut",
    })
    // 4. Apparizione Testo e scorrimento a destra
    // Il testo svanisce da "dietro" (iniziando a dx) e si sposta verso destra
    .to(".testo-container", {
      x: 100, // Spostamento a destra
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    }, "-=0.8") // Inizia poco prima che il piktogramma finisca di scorrere
    // 5. Fine e Dissolvenza Preloader (Codice esistente)
    .to(container.current, {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut",
      delay: 0.5,
    });

  }, { scope: container });

  return (
    // Codice JSX del componente con l'SVG aggiornato
    <div 
      ref={container} 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#011C27]"
    >
      {/* 
        Nuovo SVG combinato: contiene sia il piktogramma che il testo,
        affiancati per permettere lo scorrimento.
      */}
      <svg viewBox="0 0 1000 300" className="w-full max-w-4xl h-auto">
        {/* Piktogramma (Nodi e Archi) */}
        <g className="piktogramma-container" transform="translate(500, 150)"> {/* Centrato inizialmente */}
          {/* Archi (Path) - Uso dei path vettoriali approssimativi basati sull'immagine */}
          <path className="piktogramma-path" d="M100,50 C100,-20 200,-20 200,50 C200,120 100,120 100,50" stroke="#0e7490" stroke-width="20" fill="none" opacity="0"/> {/* Scuru */}
          <path className="piktogramma-path" d="M100,50 C100,-20 200,-20 200,50 C200,120 100,120 100,50" stroke="#38bdf8" stroke-width="15" fill="none" opacity="0"/> {/* Chiaro - dietro */}

          {/* Nodi (Circle) */}
          <circle className="piktogramma-dot" cx="100" cy="50" r="15" fill="#facc15" opacity="0"/> {/* Alto sx */}
          <circle className="piktogramma-dot" cx="150" cy="120" r="15" fill="#facc15" opacity="0"/> {/* Centro-basso */}
          <circle className="piktogramma-dot" cx="200" cy="50" r="15" fill="#facc15" opacity="0"/> {/* Basso dx */}
        </g>

        {/* Testo fi.co */}
        <g className="testo-container" transform="translate(700, 150)"> {/* Posizionato a dx */}
          <text className="logo-text" x="0" y="20" fontSize="120" fontWeight="bold" fill="white" opacity="0">fi.co</text>
        </g>
      </svg>
    </div>
  );
}