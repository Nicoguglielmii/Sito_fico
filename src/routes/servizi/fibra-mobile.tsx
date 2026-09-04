import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";

// Ogni immagine rappresenta visivamente una fase distinta del percorso progettuale.
// Gli asset vengono importati qui per permettere al bundler di ottimizzarli e includerli
// nel bundle finale con gli stessi riferimenti usati dal resto della pagina.
import surveyImg from "@/assets/survey.webp";
import netdesignImg from "@/assets/netdesign.png";
import entiImg from "@/assets/enti.jpg";
import projectImg from "@/assets/project.png";
import dataImg from "@/assets/data.webp";
import manutenzioneImg from "@/assets/manutenzione.webp";

export const Route = createFileRoute("/servizi/fibra-mobile")({
  component: FibraMobilePage,
});

function FibraMobilePage() {
  const fasi = [
    {
      title: "Survey & Rilievi",
      subtitle: "Dal territorio al dato",
      desc: "Raccogliamo e organizziamo le informazioni necessarie per leggere correttamente il contesto e impostare il progetto su basi affidabili.",
      image: surveyImg,
      activities: ["Sopralluoghi e rilievi planimetrici", "Raccolta delle informazioni di campo", "Verifica delle infrastrutture esistenti", "Attività di walk-in e walk-out"]
    },
    {
      title: "Network Design",
      subtitle: "Dal dato al progetto",
      desc: "Trasformiamo i dati raccolti in una rete dimensionata, documentata e pronta per le successive fasi autorizzative e operative.",
      image: netdesignImg,
      activities: ["Studio e dimensionamento della rete", "Progettazione logica dei circuiti", "Progettazione delle infrastrutture", "Progettazione e gestione su sistemi GIS", "Scelta degli apparati trasmissivi", "Revisione e aggiornamento banche dati"]
    },
    {
      title: "Permitting & Rapporti Enti",
      subtitle: "Dal progetto alle autorizzazioni",
      desc: "Gestiamo l'iter autorizzativo e i rapporti con pubbliche amministrazioni ed enti coinvolti nella realizzazione degli interventi.",
      image: entiImg,
      activities: ["Analisi vincoli urbanistici e paesaggistici", "Predisposizione istanze ed elaborati", "Acquisizione pareri tecnici", "Trasmissione pratiche e monitoraggio", "Gestione silenzio-assenso e conferenze"]
    },
    {
      title: "Implementazione & PM",
      subtitle: "Dal progetto all'implementazione",
      desc: "Coordiniamo le attività e gli interlocutori necessari a trasformare il progetto in un percorso operativo governato.",
      image: projectImg,
      activities: ["Gestione degli ordini di collegamento", "Analisi di tempi e costi", "Coordinamento fasi operative", "Supporto all'implementazione", "Monitoraggio dell'avanzamento", "Consuntivazione"]
    },
    {
      title: "As-Built & Data Management",
      subtitle: "Il progetto diventa dato",
      desc: "Documentiamo il realizzato perché ogni informazione resti tracciabile, aggiornabile e utile nel tempo.",
      image: dataImg,
      activities: ["Redazione e caricamento As-Built", "Aggiornamento banche dati", "Gestione cartografia e dati alfanumerici", "Documentazione sui sistemi informatici"]
    },
    {
      title: "Manutenzione & Supporto",
      subtitle: "La rete non finisce col progetto",
      desc: "Affianchiamo i clienti anche nelle attività successive alla realizzazione, attraverso manutenzione e supporto tecnico coerenti con il perimetro del progetto.",
      image: manutenzioneImg,
      activities: []
    }
  ];

  // Costruisce il contenuto testuale di una fase in un blocco riutilizzabile.
  // La stessa struttura viene usata sia nella colonna sinistra sia nella colonna destra
  // del layout desktop, oltre che nella sequenza verticale del layout mobile.
  // Le classi responsive mantengono leggibilita, larghezze e spaziature coerenti
  // indipendentemente dalla posizione occupata nella timeline.
  const renderTextBlock = (item: any) => (
    <div className="flex flex-col text-left w-full md:max-w-[500px]">
      <div className="mb-3 md:mb-4">
        <span className="text-xs md:text-sm font-bold text-[#facc15] uppercase tracking-wider block mb-1">
          {item.subtitle}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent pb-1">
          {item.title}
        </h3>
      </div>
      <p className="text-white/70 text-base md:text-lg leading-relaxed text-justify mt-2">{item.desc}</p>
      {item.activities.length > 0 && (
        <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3 pt-4 md:pt-6 border-t border-white/10">
          {item.activities.map((act: string, i: number) => (
            <li key={i} className="text-[14px] md:text-[15px] text-white/60 flex items-start gap-2.5">
              <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#38bdf8]/70 shrink-0" aria-hidden="true" />
              {act}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  // Centralizza la resa delle immagini per garantire proporzioni, bordi, ombra e ritaglio
  // identici in tutte le varianti del layout. L'alt text usa il titolo della fase per
  // fornire una descrizione utile quando l'immagine non viene visualizzata.
  const renderImageBlock = (item: any) => (
    <img 
      src={item.image} 
      alt={item.title} 
      className="w-full md:max-w-[500px] aspect-video md:aspect-[4/3] object-cover rounded-2xl md:rounded-3xl shadow-2xl border border-[#0e7490]/20"
    />
  );

  return (
    <div className="bg-[#011C27] w-full min-h-screen pb-14 overflow-x-hidden selection:bg-[#facc15] selection:text-[#011C27]">
      <style>{`
        @keyframes fm-rail-flow {
          0% { background-position: 0 0; }
          100% { background-position: 0 -56px; }
        }
        .fm-rail {
          background-image: repeating-linear-gradient(
            to bottom,
            #38bdf8 0px,
            #38bdf8 18px,
            transparent 18px,
            transparent 32px
          );
          filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.55));
          animation: fm-rail-flow 1.6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .fm-rail { animation: none; }
        }
        .fm-tabular-num {
          font-variant-numeric: tabular-nums;
        }
      `}</style>

      {/*
        HERO: introduce il servizio e stabilisce il tono visivo della pagina.
        Il padding superiore lascia spazio alla navigazione globale, mentre il bordo
        inferiore separa l'introduzione dalla timeline senza aggiungere una card.
      */}
      <section className="relative pt-36 pb-12 md:pb-16 border-b border-[#0e7490]/30 overflow-hidden">
        {/* Lo sfondo interattivo resta decorativo e non interferisce con il contenuto. */}
        <HeroParticles />
        
        <div className="container-x relative z-10 text-left">
          <Reveal>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#facc15]" aria-hidden="true" />
              <span className="text-xs md:text-sm text-[#facc15] font-medium tracking-[0.2em] uppercase">Fibra & Mobile</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] max-w-4xl pb-2">
              Progettiamo la rete.<br/>Governamo il processo.
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-white/75 max-w-2xl leading-relaxed text-justify">
              Fi.Co. affianca operatori e imprese nelle diverse fasi di sviluppo delle infrastrutture di telecomunicazione. Dalla survey alla progettazione, dalla gestione autorizzativa al coordinamento, fino alla documentazione del realizzato.
            </p>
          </Reveal>
        </div>
      </section>

      {/*
        TIMELINE ALTERNATA: presenta le fasi nell'ordine operativo in cui vengono
        normalmente affrontate. La struttura cambia tra desktop e mobile per mantenere
        sempre una lettura lineare e lasciare spazio sufficiente a testo e immagini.
      */}
      <section className="pt-8 md:pt-12 pb-0 relative overflow-hidden">
        <div className="container-x max-w-6xl mx-auto">
          <div className="relative">
            
            {/* Sul desktop la linea attraversa il centro e collega i due lati alternati. */}
            <div
              className="hidden md:block fm-rail absolute top-0 bottom-0 left-1/2 w-[3px] -translate-x-1/2 z-0"
              aria-hidden="true"
            />
            
            {/* Sul mobile la linea si sposta a sinistra per accompagnare il flusso verticale. */}
            <div
              className="md:hidden fm-rail absolute top-0 bottom-0 left-5 w-[3px] -translate-x-1/2 z-0"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-16 md:gap-32">
              {fasi.map((item, idx) => {
                const isEven = idx % 2 === 0;
                
                return (
                  <Reveal key={item.title} delay={100}>
                    <div className="relative flex flex-col md:flex-row md:items-center w-full">
                      
                      {/*
                        Il nodo numerato e ancorato alla timeline: resta sopra la linea
                        e rende immediatamente riconoscibile la posizione della fase.
                      */}
                      <div className="absolute left-5 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 flex justify-center mt-3 md:mt-0">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#011C27] border-2 md:border-4 border-[#38bdf8] flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.6)]">
                          <span className="fm-tabular-num text-sm md:text-lg font-bold text-[#facc15]">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/*
                        MOBILE: immagine prima, testo dopo. Il padding sinistro riserva
                        lo spazio al nodo e alla linea senza sovrapporre il contenuto.
                      */}
                      <div className="md:hidden flex flex-col gap-6 pl-14 pr-0 w-full pt-2 relative z-20">
                        {renderImageBlock(item)}
                        {renderTextBlock(item)}
                      </div>

                      {/*
                        DESKTOP: le due colonne condividono la stessa larghezza e si
                        alternano in base all'indice, creando il movimento laterale
                        della timeline senza duplicare la struttura dei contenuti.
                      */}
                      <div className="hidden md:flex w-full items-center">
                        
                        {/* La colonna sinistra ospita testo nelle fasi pari e immagini nelle dispari. */}
                        <div className="w-1/2 pr-12 lg:pr-16 flex justify-end">
                          {isEven ? renderTextBlock(item) : renderImageBlock(item)}
                        </div>

                        {/* La colonna destra applica l'alternanza opposta rispetto alla colonna sinistra. */}
                        <div className="w-1/2 pl-12 lg:pl-16 flex justify-start">
                          {!isEven ? renderTextBlock(item) : renderImageBlock(item)}
                        </div>

                      </div>

                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}