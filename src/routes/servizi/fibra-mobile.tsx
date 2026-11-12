import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
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
      titleFirst: "Analisi & Survey",
      subtitle: "Il contesto e i dati",
      desc: "Analisi preliminare di requisiti e vincoli unita alla raccolta sul campo delle informazioni necessarie alla verifica del contesto e alla progettazione.",
      image: surveyImg,
      variant: 1 as const,
    },
    {
      titleFirst: "Network Design",
      subtitle: "L'architettura",
      desc: "Definizione dell'architettura e sviluppo della progettazione infrastrutturale e ottica con relativo supporto tecnico.",
      image: netdesignImg,
      variant: 2 as const,
    },
    {
      titleFirst: "Permitting",
      subtitle: "Le autorizzazioni",
      desc: "Predisposizione documentale, trasmissioni, rapporti con enti e amministrazioni per le pratiche autorizzative e monitoraggio dell'iter.",
      image: entiImg,
      variant: 3 as const,
    },
    {
      titleFirst: "Implementazione",
      subtitle: "Il cantiere",
      desc: "Assistenza tecnica alle fasi di implementazione e coordinamento continuo tra il progetto e le attività operative sul campo.",
      image: projectImg,
      variant: 1 as const,
    },
    {
      titleFirst: "As-Built & Collaudo",
      subtitle: "La verifica",
      desc: "Allineamento tra progetto e realizzato, controllo di coerenza tra elaborati e dati, fino alla verifica e alla consegna finale.",
      image: dataImg,
      variant: 2 as const,
    },
    {
      titleFirst: "Supporto Operativo",
      subtitle: "La gestione",
      desc: "Affiancamento tecnico operativo alle fasi successive alla progettazione e gestione rigorosa delle informazioni tecniche nel tempo.",
      image: manutenzioneImg,
      variant: 3 as const,
    }
  ];

  const destinatari = [
    { title: "Operatori di telecomunicazioni", desc: "Supporto tecnico e progettuale per lo sviluppo delle infrastrutture di accesso." },
    { title: "General contractor", desc: "Attività specialistiche integrate nei processi di progettazione e implementazione." },
    { title: "Imprese esecutrici", desc: "Documentazione, verifiche progettuali e supporto tecnico alle fasi operative." },
    { title: "Enti e amministrazioni", desc: "Gestione degli aspetti documentali e autorizzativi legati agli interventi sul territorio." },
    { title: "Partner tecnici", desc: "Collaborazione su rilievi, cartografia GIS, progettazione, permitting e As-Built." },
    { title: "Progetti multidisciplinari", desc: "Integrazione delle telecomunicazioni con networking, IT e altre infrastrutture tecnologiche." }
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
                AREA CORE
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight text-[#012b3a] max-w-4xl pb-2">
              Progettiamo la rete,<br/>
              governiamo il processo
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-[#00779b] max-w-3xl leading-relaxed">
              Fibra & Mobile rappresenta l'area core di Fi.Co., dove affianchiamo operatori e imprese nello sviluppo delle infrastrutture di telecomunicazione. Dalla survey alla documentazione finale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE ALTERNATA */}
      <section
        className="pt-16 md:pt-24 pb-12 relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-16 md:mb-24 text-left">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                L'INTERO CICLO DI SVILUPPO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Dalla complessità, una direzione chiara.
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                Un processo strutturato per trasformare requisiti, vincoli territoriali e dati tecnici in un progetto realizzabile e documentato.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            
            <div
              className="hidden md:block fm-rail absolute top-0 bottom-0 left-1/2 w-[3px] -translate-x-1/2 z-0"
              aria-hidden="true"
            />
            
            <div
              className="md:hidden fm-rail absolute top-0 bottom-0 left-5 w-[3px] -translate-x-1/2 z-0"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-16 md:gap-24">
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

      {/* A CHI CI RIVOLGIAMO (Layout pulito editoriale) */}
      <section className="py-16 md:py-24 bg-white border-y border-[#facc15]/30 overflow-hidden">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-12 md:mb-16 text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Persone, progetti e competenze consolidate
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 text-left">
            {destinatari.map((target, idx) => (
              <Reveal key={target.title} delay={idx * 50}>
                <div className="border-t-2 border-[#1da1db]/20 pt-5">
                  <h3 className="text-xl font-extrabold text-[#012b3a] mb-2">
                    {target.title}
                  </h3>
                  <p className="text-base text-[#00779b] leading-relaxed">
                    {target.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IL VALORE AGGIUNTO FI.CO. + CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="relative bg-[#f4fafd] border-l-4 border-[#1da1db] py-12 px-8 sm:px-12 rounded-r-3xl shadow-sm text-left flex flex-col md:flex-row items-start justify-between gap-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1da1db] mb-4">
                  <Sparkles size={16} /> IL VALORE AGGIUNTO FI.CO.
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#012b3a] leading-tight mb-4">
                  Un unico interlocutore capace di collegare analisi, progettazione, coordinamento e documentazione.
                </h3>
                <p className="text-[#00779b] text-base md:text-lg leading-relaxed mb-6">
                  Ogni fase viene gestita con estrema attenzione alla tracciabilità dei dati, alla coerenza degli elaborati e alla verificabilità finale del risultato.
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#facc15]" />
                  <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.15em] text-[#0a5c75]">
                    Dall'analisi al risultato. Un processo, un unico approccio.
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <Link
                  to="/contatti"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-2xl bg-[#f5d000] text-[#012b3a] hover:bg-[#eab308] hover:scale-105 transition-all shadow-md w-full md:w-auto text-center"
                >
                  Parlaci del tuo progetto <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}