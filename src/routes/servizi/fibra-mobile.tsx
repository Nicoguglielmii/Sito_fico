import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";
import { FicoImage } from "@/components/site/FicoImage";

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
      titleFirst: "Survey & Rilievi ",
      subtitle: "Dal territorio al dato",
      desc: "Raccogliamo e organizziamo le informazioni necessarie per leggere correttamente il contesto e impostare il progetto su dati affidabili.",
      image: surveyImg,
      variant: 1 as const,
      activities: ["Sopralluoghi e rilievi planimetrici", "Raccolta delle informazioni di campo", "Verifica delle infrastrutture esistenti", "Attività di walk-in e walk-out"]
    },
    {
      titleFirst: "Network Design ",
      subtitle: "Dal dato al progetto",
      desc: "Trasformiamo i dati raccolti in una rete dimensionata, documentata e pronta per le successive fasi autorizzative e operative.",
      image: netdesignImg,
      variant: 2 as const,
      activities: ["Studio e dimensionamento della rete", "Progettazione logica dei circuiti", "Progettazione delle infrastrutture", "Progettazione e gestione su sistemi GIS", "Scelta degli apparati trasmissivi", "Revisione e aggiornamento banche dati"]
    },
    {
      titleFirst: "Permitting & Relazioni con gli Enti ",
      subtitle: "Dal progetto alle autorizzazioni",
      desc: "Gestiamo l'iter autorizzativo e curiamo la relazione con le pubbliche amministrazioni e gli enti coinvolti nella realizzazione degli interventi.",
      image: entiImg,
      variant: 3 as const,
      activities: ["Analisi vincoli urbanistici e paesaggistici", "Predisposizione istanze ed elaborati", "Acquisizione pareri tecnici", "Trasmissione pratiche e monitoraggio", "Gestione silenzio-assenso e conferenze"]
    },
    {
      titleFirst: "Implementazione & PM",
      subtitle: "Dal progetto all'implementazione",
      desc: "Coordiniamo le attività e gli interlocutori coinvolti nella realizzazione del progetto in un percorso operativo governato.",
      image: projectImg,
      variant: 1 as const,
      activities: ["Gestione degli ordini di collegamento", "Analisi di tempi e costi", "Coordinamento fasi operative", "Supporto all'implementazione", "Monitoraggio dell'avanzamento", "Consuntivazione"]
    },
    {
      titleFirst: "As-Built & Data Management",
      subtitle: "Il progetto diventa dato",
      desc: "Documentiamo il realizzato perché ogni informazione resti tracciabile, aggiornabile e utile nel tempo.",
      image: dataImg,
      variant: 2 as const,
      activities: ["Redazione e caricamento As-Built", "Aggiornamento banche dati", "Gestione cartografia e dati alfanumerici", "Documentazione sui sistemi informatici"]
    },
    {
      titleFirst: "Manutenzione & Supporto",

      subtitle: "sistemi interconnessi e collaudati",
      desc: "Affianchiamo i clienti dopo la realizzazione, attraverso manutenzione e supporto tecnico coerenti con il perimetro del progetto.",
      image: manutenzioneImg,
      variant: 3 as const,
      activities: []
    }
  ];

  const renderTextBlock = (item: typeof fasi[0]) => (
    <div className="flex flex-col text-left w-full md:max-w-[500px]">
      <div className="mb-3 md:mb-4">
        <span className="text-xs md:text-sm font-semibold text-[#00779b] uppercase tracking-wider block mb-1.5">
          {item.subtitle}
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#012b3a] pb-1">
          {item.titleFirst}
        </h3>
      </div>
      <p className="text-[#00779b] text-base md:text-lg leading-relaxed mt-2">{item.desc}</p>
      {item.activities.length > 0 && (
        <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3 pt-4 md:pt-6 border-t border-[#facc15]">
          {item.activities.map((act: string, i: number) => (
            <li key={i} className="text-[14px] md:text-[15px] text-[#012b3a] font-medium flex items-start gap-2.5">
              <span className="mt-[6px] w-2 h-2 rounded-full bg-[#1da1db] shrink-0" aria-hidden="true" />
              {act}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const renderImageBlock = (item: typeof fasi[0]) => (
    <FicoImage 
      src={item.image} 
      alt={item.titleFirst.trim()}
      variant={item.variant}
      className="w-full md:max-w-[500px] aspect-video md:aspect-[4/3] rounded-2xl md:rounded-3xl shadow-lg"
    />
  );

  return (
    <div className="bg-white w-full min-h-screen pb-16 overflow-x-hidden selection:bg-[#facc15] selection:text-[#012b3a]">
      <style>{`
        @keyframes fm-rail-flow {
          0% { background-position: 0 0; }
          100% { background-position: 0 -56px; }
        }
        .fm-rail {
          background-image: repeating-linear-gradient(
            to bottom,
            #1da1db 0px,
            #1da1db 18px,
            transparent 18px,
            transparent 32px
          );
          filter: drop-shadow(0 0 6px rgba(29, 161, 219, 0.45));
          animation: fm-rail-flow 1.6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .fm-rail { animation: none; }
        }
        .fm-tabular-num {
          font-variant-numeric: tabular-nums;
        }
      `}</style>

      {/* HERO */}
      <section className="relative pt-32 md:pt-36 pb-12 md:pb-16 border-b border-[#facc15] overflow-hidden bg-white">
        <HeroParticles />
        
        <div className="container-x relative z-10 text-left">
          <Reveal>
            <div className="mb-4 md:mb-6">
              <span className="text-xs md:text-sm text-[#00779b] font-semibold tracking-[0.22em] uppercase">
                FIBRA & MOBILE
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight text-[#012b3a] max-w-4xl pb-2">
              Progettiamo la rete,<br/>
              governiamo il processo
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-[#00779b] max-w-2xl leading-relaxed">
              Progettazione e gestione tecnica di infrastrutture di telecomunicazione, dalla survey alla documentazione finale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE ALTERNATA */}
      <section
        className="pt-10 md:pt-14 pb-4 relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x max-w-6xl mx-auto">
          <div className="relative">
            
            <div
              className="hidden md:block fm-rail absolute top-0 bottom-0 left-1/2 w-[3px] -translate-x-1/2 z-0"
              aria-hidden="true"
            />
            
            <div
              className="md:hidden fm-rail absolute top-0 bottom-0 left-5 w-[3px] -translate-x-1/2 z-0"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-16 md:gap-32">
              {fasi.map((item, idx) => {
                const isEven = idx % 2 === 0;
                
                return (
                  <Reveal key={item.subtitle} delay={100}>
                    <div className="relative flex flex-col md:flex-row md:items-center w-full">
                      
                      <div className="absolute left-5 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 flex justify-center mt-3 md:mt-0">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#013a52] border-2 md:border-4 border-[#facc15] flex items-center justify-center shadow-md">
                          <span className="fm-tabular-num text-sm md:text-lg font-extrabold text-[#facc15]">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      <div className="md:hidden flex flex-col gap-6 pl-14 pr-0 w-full pt-2 relative z-20">
                        {renderImageBlock(item)}
                        {renderTextBlock(item)}
                      </div>

                      <div className="hidden md:flex w-full items-center">
                        <div className="w-1/2 pr-12 lg:pr-16 flex justify-end">
                          {isEven ? renderTextBlock(item) : renderImageBlock(item)}
                        </div>
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