import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function ServiziStory() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 1,
        },
      });

      tl.fromTo(
        ".fibra-line",
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        { strokeDashoffset: 0, ease: "none" },
      );

      tl.to(
        ".nodo-servizio",
        {
          scale: 1.5,
          backgroundColor: "#facc15",
          boxShadow: "0 0 20px #facc15",
          stagger: 0.2,
        },
        "<",
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative w-full max-w-3xl mx-auto py-10 flex flex-col items-center"
    >
      <svg
        className="absolute top-0 bottom-0 h-full w-2"
        viewBox="0 0 10 1000"
        preserveAspectRatio="none"
      >
        {/* Linea di base chiara */}
        <line x1="5" y1="0" x2="5" y2="1000" stroke="#cbd5e1" strokeWidth="4" />
        {/* Linea attiva ciano FI.CO. */}
        <line
          className="fibra-line"
          x1="5"
          y1="0"
          x2="5"
          y2="1000"
          stroke="#1da1db"
          strokeWidth="4"
        />
      </svg>

      <div className="relative z-10 w-full flex flex-col gap-16 my-10">
        {/* Prima tappa */}
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2 pr-8 md:pr-12 text-right">
            <h3 className="text-2xl font-extrabold text-[#012b3a]">Sopralluoghi</h3>
            <p className="text-[#00779b] mt-1">Analisi sul campo per la fattibilità.</p>
          </div>
          <div className="nodo-servizio w-6 h-6 rounded-full bg-[#013a52] border-4 border-white shadow-sm absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="w-1/2"></div>
        </div>

        {/* Seconda tappa */}
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2"></div>
          <div className="nodo-servizio w-6 h-6 rounded-full bg-[#013a52] border-4 border-white shadow-sm absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="w-1/2 pl-8 md:pl-12 text-left">
            <h3 className="text-2xl font-extrabold text-[#012b3a]">Progettazione</h3>
            <p className="text-[#00779b] mt-1">Creazione dell'infrastruttura di rete.</p>
          </div>
        </div>

        {/* Terza tappa */}
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2 pr-8 md:pr-12 text-right">
            <h3 className="text-2xl font-extrabold text-[#012b3a]">Implementazione</h3>
            <p className="text-[#00779b] mt-1">
              Installazione materiale e messa in opera dell'infrastruttura in fibra ottica.
            </p>
          </div>
          <div className="nodo-servizio w-6 h-6 rounded-full bg-[#013a52] border-4 border-white shadow-sm absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  );
}