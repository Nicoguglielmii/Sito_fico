// Il ref identifica il contenitore che GSAP farà scorrere fuori dallo schermo.
import { useRef } from "react";

// GSAP gestisce la sequenza temporizzata delle animazioni del logo.
import gsap from "gsap";

// Hook React-compatibile che limita le selezioni GSAP al componente corrente.
import { useGSAP } from "@gsap/react";

// Wordmark rasterizzato mostrato accanto al pittogramma nella fase centrale.
import wordmarkImg from "../../assets/fico-wordmark.png";

export function Preloader() {
  // Contenitore principale della schermata iniziale. Il riferimento viene
  // passato come scope a useGSAP per isolare selettori e animazioni.
  // In questo modo la sequenza puo essere montata e ripulita insieme al componente
  // senza coinvolgere elementi con gli stessi nomi presenti in altre parti del sito.
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // La timeline mantiene in ordine le quattro fasi dell'introduzione e rende
    // possibile sincronizzare elementi SVG e wordmark con la stessa sequenza.
    // Tutte le trasformazioni vengono applicate all'interno del preloader, che
    // restera visibile fino alla conclusione della transizione di uscita.
    const tl = gsap.timeline();

    // Posizione di partenza: il pittogramma viene collocato al centro visivo,
    // mentre il testo parte più a destra e completamente trasparente.
    // Le coordinate iniziali sono relative al viewBox SVG e vengono mantenute
    // indipendenti dalla dimensione effettiva del logo sullo schermo.
    gsap.set(".piktogramma-container", { x: 170, y: 0 });
    gsap.set(".testo-container", { x: 270, y: 15, opacity: 0 }); 
    
    // Prima fase: i tre nodi del pittogramma aumentano progressivamente di
    // raggio, con un ritardo tra loro per simulare un'accensione sequenziale.
    tl.to(".piktogramma-dot", {
      attr: { r: 10 }, 
      duration: 1.4, 
      ease: "back.out(1.5)", 
      stagger: 0.45, 
    })
    
    // Seconda fase: gli archi diventano visibili e vengono disegnati tramite
    // strokeDashoffset, sfruttando pathLength per normalizzare la misura del tratto.
    .set(".piktogramma-path", { opacity: 1 }, "-=0.2")
    .to(".piktogramma-path", { 
        strokeDashoffset: 0, 
      duration: 1.6,
        ease: "power2.inOut",
    }, "<")

    // Terza fase: il pittogramma scorre verso sinistra mentre il wordmark entra
    // in scena nello stesso momento, creando un unico movimento di composizione.
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

    // Quarta fase: l'intero preloader risale oltre il bordo superiore della
    // viewport, rivelando il contenuto dell'applicazione sottostante.
    .to(container.current, {
      y: "-100%",
      duration: 1.4, 
      ease: "power4.inOut",
      delay: 0.4, 
    });

  }, { scope: container });

  return (
    // Overlay fisso a pieno schermo. Il valore z-index elevato lo mantiene sopra
    // ogni altra superficie durante l'avvio e l'uscita dell'animazione.
    // Lo sfondo pieno impedisce che il contenuto sottostante venga percepito
    // prima che il marchio abbia terminato la propria presentazione.
    <div 
      ref={container} 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#011C27]"
    >
      {/*
        ViewBox indipendente dalle dimensioni fisiche: l'SVG conserva le stesse
        coordinate interne mentre la larghezza cresce sui breakpoint desktop.
      */}
      <svg viewBox="0 0 500 150" className="w-full max-w-md md:max-w-3xl lg:max-w-4xl h-auto overflow-visible">
        
        {/*
          Wordmark del marchio. L'opacità iniziale è controllata dalla timeline,
          così il testo può apparire insieme allo spostamento del pittogramma.
        */}
        <g className="testo-container" style={{ opacity: 0 }}>
          <image 
            href={wordmarkImg} 
            width="180" 
            height="100" 
            preserveAspectRatio="xMidYMid meet" 
          />
        </g>

        {/*
          Gruppo del simbolo grafico, trasformato come un'unita durante l'animazione.
          Tenere archi e nodi nello stesso gruppo permette al pittogramma di spostarsi
          verso il wordmark senza dover aggiornare separatamente ogni elemento.
        */}
        <g className="piktogramma-container">
          
          {/* Arco principale azzurro: il tratto viene rivelato progressivamente da GSAP. */}
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
          
          {/* Arco secondario blu scuro, sovrapposto per completare il pittogramma. */}
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

          {/*
            Nodi di giunzione del simbolo. Partono con raggio zero e aumentano
            in sequenza prima che inizi il disegno degli archi.
          */}
          <circle className="piktogramma-dot" cx="20" cy="70" r="0" fill="#facc15" />   
          <circle className="piktogramma-dot" cx="55" cy="115" r="0" fill="#facc15" />  
          <circle className="piktogramma-dot" cx="150" cy="115" r="0" fill="#facc15" /> 
        </g>

      </svg>
    </div>
  );
}