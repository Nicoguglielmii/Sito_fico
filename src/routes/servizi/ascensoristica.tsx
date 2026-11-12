import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Compass,
  HardHat,
  Layers,
  CheckCircle2,
  ArrowRight,
  Wrench,
  ShieldCheck,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";
import { FicoImage } from "@/components/site/FicoImage";

import ascensoristicaImg from "@/assets/ascensoristica.jpg";

export const Route = createFileRoute("/servizi/ascensoristica")({
  head: () => ({
    meta: [
      { title: " Ascensoristica — FI.CO. SRL" },
      {
        name: "description",
        content:
          "Servizi tecnici e architettonici per ascensori, dalla fattibilità al cantiere. Soluzioni standard e fuori standard integrate nei servizi FI.CO. SRL.",
      },
    ],
  }),
  component: AscensoristicaPage,
});

function AscensoristicaPage() {
  const processoFasi = [
    {
      step: "01",
      title: "Studi di fattibilità",
      desc: "Analisi preliminare degli spazi, dei vincoli e della tipologia di impianto più adatta.",
    },
    {
      step: "02",
      title: "Avamprogetto",
      desc: "Studio delle nuove configurazioni e ottimizzazione degli spazi disponibili su impianti esistenti o nuove installazioni.",
    },
    {
      step: "03",
      title: "Integrazione e progettazione",
      desc: "Coordinamento con facciate, strutture e opere murarie, fino allo sviluppo dell'impianto e agli elaborati tecnici di dettaglio.",
    },
    {
      step: "04",
      title: "Supporto e normative",
      desc: "Assistenza nella corretta impostazione progettuale, supporto alla definizione dei componenti e ottimizzazione tecnico-economica.",
    },
    {
      step: "05",
      title: "Cantiere",
      desc: "Disegni esecutivi, dettagli, coordinamento tecnico, verifica delle interferenze e supporto durante l'installazione.",
    }
  ];

  const destinatari = [
    {
      title: "Aziende ascensoristiche",
      desc: "Supporto in avamprogetto, disegni cliente/cantiere, sviluppo esecutivo, fuori standard e pre-produzione.",
      icon: Wrench,
    },
    {
      title: "Studi di architettura",
      desc: "Definizione degli spazi e integrazione dell'ascensore nel progetto architettonico.",
      icon: Compass,
    },
    {
      title: "Studi di ingegneria",
      desc: "Coordinamento tecnico, interferenze e supporto alla progettazione multidisciplinare.",
      icon: Layers,
    },
    {
      title: "General contractor",
      desc: "Assistenza nella definizione delle specifiche, nel coordinamento dei fornitori e nella gestione del cantiere.",
      icon: Briefcase,
    },
    {
      title: "Imprese di costruzione",
      desc: "Indicazioni per opere civili, vani, accessi e predisposizioni necessarie all'installazione.",
      icon: HardHat,
    },
    {
      title: "Committenze e property",
      desc: "Supporto tecnico nella valutazione delle soluzioni e nel confronto tra proposte impiantistiche.",
      icon: Building2,
    },
  ];

  return (
    <div className="bg-white w-full min-h-screen pb-20 overflow-x-hidden selection:bg-[#facc15] selection:text-[#012b3a]">
      <style>{`
        @keyframes elevator-cable {
          0% { background-position: 0 0; }
          100% { background-position: 0 64px; }
        }
        .shaft-rail {
          background-image: repeating-linear-gradient(
            to bottom,
            #1da1db 0px,
            #1da1db 20px,
            transparent 20px,
            transparent 36px
          );
          animation: elevator-cable 2s linear infinite;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-36 pb-12 md:pb-16 border-b border-[#facc15] overflow-hidden bg-white">
        <HeroParticles />
        <div className="container-x relative z-10 text-left">
          <Reveal>
            <div className="mb-4 md:mb-6 flex flex-wrap items-center gap-3">
              <span className="text-xs md:text-sm text-[#00779b] font-semibold tracking-[0.22em] uppercase">
                NUOVO AMBITO SPECIALISTICO
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight text-[#012b3a] max-w-4xl pb-2">
              <span className="text-[#012b3a]">Ascensoristica</span>
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-xl text-[#00779b] max-w-3xl leading-relaxed">
              Servizi tecnici e architettonici per ascensori, dalla fattibilità al cantiere.
              <br />
              Fi.Co. unisce, attraverso competenze specialistiche integrate, architettura, progettazione tecnica, produzione e cantiere.
            </p>

            <div className="mt-10 pt-6 border-t border-[#facc15]/60 inline-flex flex-wrap items-center gap-y-3">
              {["FATTIBILITÀ", "PROGETTAZIONE", "PRODUZIONE", "CANTIERE"].map((fase, i) => (
                <div key={fase} className="flex items-center">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#facc15] ring-4 ring-[#facc15]/20" />
                    <span className="text-[#012b3a] text-xs sm:text-sm font-extrabold tracking-[0.18em]">
                      {fase}
                    </span>
                  </div>
                  {i < 3 && (
                    <div className="w-6 sm:w-12 h-[2px] bg-gradient-to-r from-[#facc15] to-[#1da1db] mx-3 sm:mx-5" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEZIONE 1: PERCHÉ FI.CO. */}
      <section className="py-16 md:py-24 bg-white border-b border-[#facc15]">
        <div className="container-x max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-5/12">
              <Reveal>
                <div className="relative">
                  <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#facc15] rounded-tl-3xl pointer-events-none" />
                  <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#1da1db] rounded-br-3xl pointer-events-none" />
                  <FicoImage
                    src={ascensoristicaImg}
                    alt="Progettazione Ascensoristica FI.CO."
                    variant={1}
                    className="w-full aspect-[4/3] md:h-[460px] rounded-3xl shadow-xl"
                  />
                </div>
              </Reveal>
            </div>

            <div className="w-full lg:w-7/12 text-left">
              <Reveal delay={100}>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight pb-2">
                  Una nuova competenza, un'evoluzione naturale
                </h2>
                <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                  L'ampliamento dei servizi Fi.Co. al settore ascensoristico nasce dall'incontro tra competenze tecniche multidisciplinari e un'esperienza specialistica maturata nel settore degli impianti elevatori.
                </p>

                <div className="mt-10 relative pl-6 sm:pl-8 border-l-2 border-[#facc15] space-y-8">
                  <div className="relative group">
                    <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#1da1db]" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#1da1db] block mb-1.5">
                      APPROCCIO UNICO E FLESSIBILE
                    </span>
                    <p className="text-sm md:text-base text-[#012b3a] leading-relaxed">
                      Attività modulabili in funzione della fase progettuale, della tipologia di impianto e delle esigenze del cliente, per soluzioni standard, fuori standard e modernizzazioni.
                    </p>
                  </div>

                  <div className="relative group">
                    <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#facc15] ring-4 ring-[#facc15]/30" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0a5c75] block mb-1.5">
                      UN SERVIZIO INTEGRATO
                    </span>
                    <p className="text-sm md:text-base text-[#012b3a] leading-relaxed">
                      L'ascensore è parte dell'edificio: spazi, vano, accessi,
                      strutture, interferenze e finiture vengono coordinati con le esigenze
                      tecniche, architettoniche e di cantiere.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 2: DALL'IDEA ALL'INSTALLAZIONE */}
      <section
        className="py-16 md:py-24 border-b border-[#facc15] relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x max-w-5xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-14 md:mb-20 text-left md:text-center md:mx-auto">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                DAL VANO ALL'IMPIANTO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Dal progetto al cantiere
              </h2>
            </div>
          </Reveal>

          <div className="relative">
            <div
              className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 border-x border-[#facc15]/60 bg-white/60 backdrop-blur-[2px] pointer-events-none"
              aria-hidden="true"
            >
              <div className="shaft-rail w-[2px] h-full mx-auto opacity-80" />
            </div>

            <div
              className="md:hidden shaft-rail absolute top-0 bottom-0 left-6 w-[2px] -translate-x-1/2 pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-10 md:gap-12 relative z-10">
              {processoFasi.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <Reveal key={item.step} delay={idx * 70}>
                    <div className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#013a52] border-2 border-[#facc15] flex flex-col items-center justify-center text-[#facc15] shadow-md group-hover:scale-110 group-hover:bg-[#1da1db] group-hover:text-white transition-all duration-300">
                          <span className="text-[9px] font-bold uppercase tracking-tighter opacity-75 leading-none">
                            FASE
                          </span>
                          <span className="text-base md:text-lg font-extrabold leading-tight">
                            {item.step}
                          </span>
                        </div>
                      </div>

                      <div className={`hidden md:flex w-1/2 pr-16 ${isLeft ? "justify-end text-right" : "justify-end pointer-events-none"}`}>
                        {isLeft ? (
                          <div className="max-w-md bg-white/95 backdrop-blur-xs border-r-4 border-[#1da1db] pr-6 py-4 rounded-l-2xl shadow-sm">
                            <h3 className="text-xl font-extrabold text-[#012b3a] mb-2">{item.title}</h3>
                            <p className="text-[#00779b] text-[15px] leading-relaxed">{item.desc}</p>
                          </div>
                        ) : (
                          <span className="text-6xl font-black text-[#012b3a]/[0.05] select-none pr-4">{item.step}</span>
                        )}
                      </div>

                      <div className={`hidden md:flex w-1/2 pl-16 ${!isLeft ? "justify-start text-left" : "justify-start pointer-events-none"}`}>
                        {!isLeft ? (
                          <div className="max-w-md bg-white/95 backdrop-blur-xs border-l-4 border-[#facc15] pl-6 py-4 rounded-r-2xl shadow-sm">
                            <h3 className="text-xl font-extrabold text-[#012b3a] mb-2">{item.title}</h3>
                            <p className="text-[#00779b] text-[15px] leading-relaxed">{item.desc}</p>
                          </div>
                        ) : (
                          <span className="text-6xl font-black text-[#012b3a]/[0.05] select-none pl-4">{item.step}</span>
                        )}
                      </div>

                      <div className="md:hidden pl-16 w-full text-left">
                        <div className="bg-white/95 border-l-4 border-[#1da1db] pl-5 py-3 pr-4 rounded-r-2xl shadow-xs">
                          <h3 className="text-lg font-extrabold text-[#012b3a] mb-1.5">{item.title}</h3>
                          <p className="text-[#00779b] text-sm leading-relaxed">{item.desc}</p>
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

      {/* SEZIONE 3: A CHI CI RIVOLGIAMO */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-12 md:mb-16 text-left">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                A CHI CI RIVOLGIAMO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Un servizio tecnico per tutta la filiera
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                La progettazione ascensoristica Fi.Co. è pensata per affiancare i diversi attori
                coinvolti nella definizione, fornitura e realizzazione dell'impianto.
              </p>
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

          {/* IL VALORE AGGIUNTO FI.CO. + CTA */}
          <Reveal delay={200}>
            <div className="mt-20 relative bg-[#f4fafd] border-l-4 border-[#1da1db] py-12 px-8 sm:px-12 rounded-r-3xl shadow-sm text-left flex flex-col md:flex-row items-start justify-between gap-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1da1db] mb-4">
                  <Sparkles size={16} /> IL VALORE AGGIUNTO FI.CO.
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#012b3a] leading-tight mb-4">
                  Non solo il disegno dell'ascensore, ma il coordinamento dell'intero problema progettuale.
                </h3>
                <p className="text-[#00779b] text-base md:text-lg leading-relaxed mb-6">
                  Una visione che unisce competenza ascensoristica, esigenze architettoniche, realizzabilità tecnica e supporto operativo, con l'obiettivo di ridurre interferenze, revisioni e criticità tra progetto, produzione e cantiere.
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
                  Valuta il tuo progetto <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}