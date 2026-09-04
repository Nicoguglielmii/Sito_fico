import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Registriamo il plugin di GSAP prima di creare la timeline, così ScrollTrigger
// può collegare l'avanzamento dell'animazione alla posizione reale della sezione.
gsap.registerPlugin(ScrollTrigger);

export function ServiziStory() {
  // Il riferimento delimita il perimetro della scena e viene passato a useGSAP
  // come scope per evitare selezioni accidentali di elementi esterni al componente.
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Una timeline unica mantiene allineati il disegno del cavo e l'accensione
      // progressiva dei nodi lungo il percorso verticale.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          // L'animazione inizia quando la parte superiore della storia entra nella
          // zona di lettura principale della viewport.
          start: "top 70%",
          // Il termine lascia completare la sequenza prima che il blocco scompaia.
          end: "bottom 40%",
          // scrub collega progressivamente la timeline allo scroll e la rende
          // reversibile quando l'utente torna verso l'alto.
          scrub: 1,
        },
      });

      // Prima fase: la linea azzurra viene rivelata dall'alto verso il basso.
      // strokeDasharray e strokeDashoffset simulano il disegno del tratto SVG.
      tl.fromTo(
        ".fibra-line",
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        { strokeDashoffset: 0, ease: "none" },
      );

      // Seconda fase: i nodi si attivano in sequenza mentre la linea raggiunge
      // le rispettive posizioni, creando una corrispondenza visiva con la storia.
      tl.to(
        ".nodo-servizio",
        {
          scale: 1.5,
          // Il giallo identifica il nodo raggiunto e il box-shadow ne enfatizza
          // l'accensione rispetto alla linea ancora inattiva.
          backgroundColor: "#facc15",
          boxShadow: "0 0 20px #facc15",
          stagger: 0.2,
        },
        // L'accensione parte insieme al disegno della linea; lo stagger distribuisce
        // poi l'effetto in base all'ordine dei nodi nel markup.
        "<",
      );
    },
    { scope: container },
  );

  return (
    // Il contenitore concentra la storia in una colonna verticale compatta e
    // fornisce il riferimento geometrico per la linea centrale e i nodi assoluti.
    <div
      ref={container}
      className="relative w-full max-w-3xl mx-auto py-10 flex flex-col items-center"
    >
      {/*
        Cavo centrale: l'SVG resta assoluto dietro ai contenuti e usa un viewBox
        verticale esteso per seguire l'intera altezza della sequenza.
      */}
      <svg
        className="absolute top-0 bottom-0 h-full w-2"
        viewBox="0 0 10 1000"
        preserveAspectRatio="none"
      >
        {/* Linea di base: mostra il percorso completo prima che venga attivato dallo scroll. */}
        <line x1="5" y1="0" x2="5" y2="1000" stroke="#0e7490" strokeWidth="4" />
        {/* Linea attiva: il tratto viene animato dalla timeline tramite il suo offset. */}
        <line
          className="fibra-line"
          x1="5"
          y1="0"
          x2="5"
          y2="1000"
          stroke="#38bdf8"
          strokeWidth="4"
        />
      </svg>

      {/*
        Nodi dei servizi: il gap verticale mantiene ravvicinate le tappe e la posizione
        relativa consente ai pallini di restare centrati sulla linea SVG in ogni riga.
      */}
      <div className="relative z-10 w-full flex flex-col gap-16 my-10">
        {/* Prima tappa: contenuto a sinistra del cavo per iniziare l'alternanza narrativa. */}
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2 pr-8 md:pr-12 text-right">
            <h3 className="text-2xl font-bold text-cyan-400">Sopralluoghi</h3>
            <p className="text-slate-300 mt-1">Analisi sul campo per la fattibilità.</p>
          </div>
          {/* Nodo della prima tappa, inizialmente spento e attivato da ScrollTrigger. */}
          <div className="nodo-servizio w-6 h-6 rounded-full bg-cyan-900 border-4 border-[#011C27] absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="w-1/2"></div>
        </div>

        {/* Seconda tappa: contenuto a destra, così il percorso alterna i lati della linea. */}
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2"></div>
          <div className="nodo-servizio w-6 h-6 rounded-full bg-cyan-900 border-4 border-[#011C27] absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="w-1/2 pl-8 md:pl-12 text-left">
            <h3 className="text-2xl font-bold text-cyan-400">Progettazione</h3>
            <p className="text-slate-300 mt-1">Creazione dell'infrastruttura di rete.</p>
          </div>
        </div>

        {/* Terza tappa: torna a sinistra e conclude la sequenza mostrata dal componente. */}
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2 pr-8 md:pr-12 text-right">
            <h3 className="text-2xl font-bold text-cyan-400">Implementazione</h3>
            <p className="text-slate-300 mt-1">
              Installazione materiale e messa in opera dell'infrastruttura in fibra ottica.
            </p>
          </div>
          {/* Nodo della terza tappa, allineato al centro indipendentemente dal lato del testo. */}
          <div className="nodo-servizio w-6 h-6 rounded-full bg-cyan-900 border-4 border-[#011C27] absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
