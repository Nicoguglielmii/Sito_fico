import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// Importiamo il wordmark del marchio per l'animazione iniziale
import wordmarkImg from "../../assets/fico-wordmark.png";

export function Preloader() {
  // Contenitore principale della schermata di preloader
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // SETUP INIZIALE TRAMITE GSAP (evita conflitti con gli attributi SVG)
      // 180 è la coordinata esatta per avere il pittogramma perfettamente al centro iniziale
      gsap.set(".piktogramma-container", { x: 180, y: 0 });
      // Il testo parte spostato a destra e invisibile
      gsap.set(".testo-container", { x: 260, y: 15, opacity: 0 });

      // 1. APPARIZIONE DEI PALLINI
      // I punti del pittogramma emergono uno dopo l'altro dal centro dello schermo
      tl.to(".piktogramma-dot", {
        attr: { r: 10 },
        duration: 1.1,
        ease: "back.out(1.5)",
        stagger: 0.35,
      })

        // 2. DISEGNO DEGLI ARCHI
        // Le linee del simbolo vengono tracciate
        .set(".piktogramma-path", { opacity: 1 }, "-=0.3")
        .to(
          ".piktogramma-path",
          {
            strokeDashoffset: 0,
            duration: 2.0,
            ease: "power2.inOut",
          },
          "<",
        )

        // 3. SCORRIMENTO E APPARIZIONE DEL WORDMARK
        // Il pittogramma si sposta a x: 70
        // Il testo si sposta a x: 230 (lasciando un distacco netto e pulito)
        // L'ingombro totale del blocco ora è perfettamente centrato nella Viewbox di 500px!
        .to(
          ".piktogramma-container",
          {
            x: 70,
            duration: 1.6,
            ease: "power3.inOut",
          },
          "+=0.4",
        )
        .to(
          ".testo-container",
          {
            x: 230,
            opacity: 1,
            duration: 1.8,
            ease: "power3.inOut",
          },
          "<",
        )

        // 4. USCITA DEL PRELOADER
        .to(container.current, {
          y: "-100%",
          duration: 1.3,
          ease: "power4.inOut",
          delay: 1.5,
        });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#011C27]"
    >
      <svg viewBox="0 0 500 150" className="w-full max-w-md h-auto overflow-visible">
        {/* Logo wordmark: rimosso il transform SVG, gestito da GSAP */}
        <g className="testo-container" style={{ opacity: 0 }}>
          <image href={wordmarkImg} width="180" height="100" preserveAspectRatio="xMidYMid meet" />
        </g>

        {/* Simbolo grafico: rimosso il transform SVG, gestito da GSAP */}
        <g className="piktogramma-container">
          <path
            className="piktogramma-path"
            pathLength="100"
            d="M 20,70 C 50,0 100,0 120,115"
            stroke="#38bdf8"
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
            d="M 20,70 C 25,-10 45,0 45,115 C 70,70 100,70 120,115"
            stroke="#0e7490"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="100"
            strokeDashoffset="100"
            opacity="0"
          />

          {/* Punti del pittogramma che emergono durante l'animazione */}
          <circle className="piktogramma-dot" cx="20" cy="70" r="0" fill="#facc15" />
          <circle className="piktogramma-dot" cx="45" cy="115" r="0" fill="#facc15" />
          <circle className="piktogramma-dot" cx="120" cy="115" r="0" fill="#facc15" />
        </g>
      </svg>
    </div>
  );
}
