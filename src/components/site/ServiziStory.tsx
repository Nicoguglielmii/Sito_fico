import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Registriamo il plugin di GSAP per lo scroll
gsap.registerPlugin(ScrollTrigger);

export function ServiziStory() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%", // L'animazione parte quando il top del container raggiunge il 70% dello schermo
        end: "bottom 40%", // Finisce quando il container è quasi passato
        scrub: 1, // Collega direttamente l'animazione allo scroll (se l'utente va su, l'animazione torna indietro!)
      },
    });

    // 1. Facciamo "disegnare" la linea
    tl.fromTo(
      ".fibra-line",
      { strokeDasharray: 1000, strokeDashoffset: 1000 },
      { strokeDashoffset: 0, ease: "none" }
    );

    // 2. Facciamo "accendere" i nodi man mano che la linea scende
    // (stagger basato sulla posizione nello scroll)
    tl.to(
      ".nodo-servizio",
      {
        scale: 1.5,
        backgroundColor: "#facc15", // Si accende di giallo
        boxShadow: "0 0 20px #facc15", // Effetto bagliore (glow)
        stagger: 0.2,
      },
      "<" // Inizia in contemporanea con il disegno della linea
    );
  }, { scope: container });

  return (
    <div ref={container} className="relative w-full max-w-3xl mx-auto py-20 flex flex-col items-center">
      
      {/* Cavo in fibra ottica centrale (Linea SVG) */}
      <svg className="absolute top-0 bottom-0 h-full w-2" viewBox="0 0 10 1000" preserveAspectRatio="none">
        {/* Linea spenta (sfondo) */}
        <line x1="5" y1="0" x2="5" y2="1000" stroke="#0e7490" strokeWidth="4" />
        {/* Linea accesa (che si disegna) */}
        <line className="fibra-line" x1="5" y1="0" x2="5" y2="1000" stroke="#38bdf8" strokeWidth="4" />
      </svg>

      {/* Nodi dei servizi */}
      <div className="relative z-10 w-full flex flex-col gap-32 my-10">
        
        {/* Servizio 1 */}
        <div className="flex items-center justify-between w-full pr-1/2">
          <div className="w-1/2 pr-12 text-right">
            <h3 className="text-2xl font-bold text-cyan-600">Sopralluoghi</h3>
            <p className="text-gray-400">Analisi sul campo per la fattibilità.</p>
          </div>
          {/* Il Pallino (Nodo) */}
          <div className="nodo-servizio w-6 h-6 rounded-full bg-cyan-900 border-4 border-[#011C27] absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="w-1/2"></div>
        </div>

        {/* Servizio 2 */}
        <div className="flex items-center justify-between w-full pl-1/2">
          <div className="w-1/2"></div>
          <div className="nodo-servizio w-6 h-6 rounded-full bg-cyan-900 border-4 border-[#011C27] absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="w-1/2 pl-12 text-left">
            <h3 className="text-2xl font-bold text-cyan-600">Progettazione</h3>
            <p className="text-gray-400">Creazione dell'infrastruttura di rete.</p>
          </div>
        </div>

        {/* Puoi aggiungere altri nodi copiando i blocchi qui sopra alternando destra/sinistra */}

      </div>
    </div>
  );
}