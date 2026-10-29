import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Landmark,
  Briefcase,
  Users,
  HardHat,
  Share2,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";
import { FicoImage } from "@/components/site/FicoImage";

import fibraMobileImg from "@/assets/fibraotticaemobile.jpg";
import networkingImg from "@/assets/networking.jpg";
import networkingWebpImg from "@/assets/networking.webp";
import ascensoristicaImg from "@/assets/ascensoristica.jpg";
import energiaImg from "@/assets/Energia.jpg";
import infrastruttureImg from "@/assets/infrastrutture.jpg";

export const Route = createFileRoute("/servizi/")({
  component: ServiziIndex,
});

function ServiziIndex() {
  const [activeTarget, setActiveTarget] = useState<number>(0);

  const destinatari = [
    {
      title: "PMI e aziende",
      desc: "Reti per sedi operative, uffici, reparti, dispositivi e servizi aziendali.",
      icon: Building2,
    },
    {
      title: "Studi e professionisti",
      desc: "Connettività affidabile per lavoro, collaborazione, accesso ai dati e continuità operativa.",
      icon: Briefcase,
    },
    {
      title: "Imprese e cantieri",
      desc: "Reti temporanee o permanenti per coordinamento, impianti, sicurezza e scambio dati.",
      icon: HardHat,
    },
    {
      title: "Enti pubblici",
      desc: "Collegamenti tra edifici, Wi-Fi, infrastrutture territoriali e servizi distribuiti.",
      icon: Landmark,
    },
    {
      title: "Strutture e spazi aperti al pubblico",
      desc: "Reti separate per attività interne, ospiti, utenti e servizi digitali.",
      icon: Users,
    },
    {
      title: "Partner tecnologici",
      desc: "Supporto tecnico nell'integrazione della rete con sistemi IT, sicurezza e servizi cloud.",
      icon: Share2,
    },
  ];

  const currentTarget = destinatari[activeTarget];

  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes signal-wave {
          0% { stroke-dashoffset: 240; }
          100% { stroke-dashoffset: 0; }
        }
        .signal-wave-path {
          stroke-dasharray: 12 8;
          animation: signal-wave 4s linear infinite;
        }
      `}</style>

      {/* HERO */}
      <section className="relative pt-32 md:pt-36 pb-12 overflow-hidden border-b border-[#facc15] bg-white">
        <HeroParticles />
        <div className="container-x relative z-10 text-left">
          <Reveal>
            <span className="text-xs md:text-sm uppercase tracking-[0.22em] text-[#00779b] font-semibold">
              I NOSTRI SERVIZI
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight text-[#012b3a] max-w-4xl pb-2">
              Progettiamo, sviluppiamo, connettiamo
            </h1>
            <p className="mt-6 md:mt-8 text-lg md:text-xl text-[#00779b] max-w-2xl leading-relaxed">
              Competenze tecniche e digitali per progettare infrastrutture, sviluppare strumenti e governare i processi dall'analisi al risultato.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 02 — INTRODUZIONE */}
      <section className="py-12 md:py-16 relative z-20 border-b border-[#facc15] bg-white">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            <div className="w-full lg:w-1/2 text-left">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight font-[var(--font-display)] text-[#012b3a] pb-2 mb-6">
                  Dalle infrastrutture al software
                </h2>
                <p className="text-[#00779b] text-lg md:text-xl leading-relaxed">
                  Fi.Co. opera attraverso competenze specialistiche plurali e una metodologia condivisa per comprendere un'esigenza, progettare una soluzione realizzabile e governarne ogni fase. Forniamo servizi nel settore delle telecomunicazioni e nella progettazione di reti in fibra ottica. Stiamo ampliando la nostra offerta verso servizi IT, networking, sviluppo software, progettazione ascensoristica e soluzioni nel settore energetico. Oggi lavoriamo su progetti nei quali infrastrutture, dati e tecnologia possano integrarsi per rispondere alle esigenze di operatori, imprese, enti e privati.
                </p>
              </Reveal>
            </div>

            <div className="w-full lg:w-1/2">
              <Reveal delay={150}>
                <FicoImage 
                  src={infrastruttureImg} 
                  alt="Dalle infrastrutture al software" 
                  variant={1}
                  className="w-full aspect-video lg:aspect-auto lg:h-[400px] rounded-3xl shadow-lg" 
                />
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 03 — AMBITI DI APPLICAZIONE */}
      <section className="py-12 md:py-20 relative z-20 border-b border-[#facc15] bg-white">
        <div className="container-x">
          <div className="text-left max-w-4xl mb-12">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-[var(--font-display)] text-[#012b3a] pb-2">
                Competenze al servizio di contesti diversi
              </h2>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* COLONNA SINISTRA: Elenco aperto a righe di segnale */}
              <div className="lg:col-span-6 relative">
                <div className="border-l-2 border-[#facc15] pl-4 sm:pl-6 space-y-2">
                  {destinatari.map((target, idx) => {
                    const isSelected = activeTarget === idx;
                    return (
                      <div
                        key={target.title}
                        onMouseEnter={() => setActiveTarget(idx)}
                        onClick={() => setActiveTarget(idx)}
                        className={`group relative cursor-pointer py-4 px-5 rounded-r-2xl transition-all duration-300 text-left flex items-center justify-between gap-4 ${
                          isSelected
                            ? "bg-[#012b3a] text-white shadow-lg translate-x-2"
                            : "bg-white/85 hover:bg-white text-[#012b3a]"
                        }`}
                      >
                        <span
                          className={`absolute -left-[23px] sm:-left-[31px] w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                            isSelected
                              ? "bg-[#facc15] ring-4 ring-[#facc15]/40 scale-125"
                              : "bg-white border-2 border-[#1da1db]"
                          }`}
                        />

                        <div className="flex items-center gap-4">
                          <span
                            className={`text-xs font-extrabold tabular-nums tracking-widest ${
                              isSelected ? "text-[#facc15]" : "text-[#1da1db]"
                            }`}
                          >
                            0{idx + 1}
                          </span>
                          <h3
                            className={`text-lg sm:text-xl font-extrabold transition-colors ${
                              isSelected ? "text-white" : "text-[#012b3a]"
                            }`}
                          >
                            {target.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span
                            className={`hidden sm:inline-block text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                              isSelected
                                ? "bg-[#f5d000] text-[#012b3a]"
                                : "bg-[#f4fafd] text-[#00779b]"
                            }`}
                          >
                            NODE 0{idx + 1}
                          </span>
                          <ArrowRight
                            size={18}
                            className={`transition-transform duration-300 ${
                              isSelected
                                ? "text-[#facc15] translate-x-1"
                                : "text-[#1da1db] opacity-40 group-hover:opacity-100"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* COLONNA DESTRA: Display Dinamico Aperto del Nodo Attivo */}
              <div className="lg:col-span-6">
                <div className="relative bg-white/95 backdrop-blur-xs border-l-4 border-[#1da1db] border-y border-r border-y-[#facc15] border-r-[#facc15] rounded-r-3xl p-8 sm:p-12 shadow-xl text-left overflow-hidden min-h-[340px] flex flex-col justify-between">
                  <span className="absolute -bottom-6 -right-2 text-[140px] font-black text-[#012b3a]/[0.04] leading-none select-none pointer-events-none">
                    0{activeTarget + 1}
                  </span>

                  <div>
                    <div className="flex items-center justify-between gap-4 pb-6 mb-8 border-b border-[#facc15]">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-[#f5d000] text-[#012b3a] flex items-center justify-center shadow-sm">
                          <currentTarget.icon size={28} />
                        </div>
                        <div>
                          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#1da1db]">
                            <span className="w-2 h-2 rounded-full bg-[#1da1db] animate-ping" />
                            ACTIVE LINK · NODE 0{activeTarget + 1}
                          </span>
                          <p className="text-xs font-bold text-[#0a5c75] mt-0.5">
                            Canale dedicato Fi.Co.
                          </p>
                        </div>
                      </div>

                      <svg width="90" height="32" viewBox="0 0 90 32" className="hidden sm:block">
                        <path
                          d="M 2,16 Q 15,2 28,16 T 54,16 T 80,16 L 88,16"
                          fill="none"
                          stroke="#1da1db"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          className="signal-wave-path"
                        />
                      </svg>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#012b3a] mb-4 leading-tight">
                      {currentTarget.title}
                    </h3>

                    <p className="text-base sm:text-lg md:text-xl text-[#00779b] leading-relaxed">
                      {currentTarget.desc}
                    </p>
                  </div>

                  <div className="mt-10 pt-5 border-t border-[#1da1db]/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {destinatari.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveTarget(i)}
                          aria-label={`Seleziona destinatario ${i + 1}`}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            activeTarget === i
                              ? "w-8 bg-[#1da1db]"
                              : "w-2 bg-[#facc15] hover:bg-[#1da1db]/50"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#012b3a]">
                      0{activeTarget + 1} / 0{destinatari.length}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* AREE PRINCIPALI (05 FIBRA & MOBILE -> 06 NETWORKING -> 07 IT & SOFTWARE -> 08 ENERGIA -> 09 ASCENSORISTICA) */}
      <section
        className="py-12 md:py-16 relative z-20"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x">
          <div className="max-w-3xl mb-6 text-left">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight font-[var(--font-display)] text-[#012b3a] pb-2">
                Cinque aree, un unico approccio
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col gap-8 md:gap-12">
            
            {/* 05 — FIBRA & MOBILE */}
            <Reveal delay={100}>
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 py-8 border-b border-[#facc15] last:border-b-0">
                <Link 
                  to="/servizi/fibra-mobile" 
                  className="block group overflow-hidden shrink-0 rounded-3xl w-full md:max-w-[400px] lg:max-w-[480px] shadow-md"
                >
                  <FicoImage
                    src={fibraMobileImg}
                    alt="Fibra & Mobile"
                    variant={1}
                    className="w-full aspect-video rounded-3xl"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 pb-1 text-[#013547]">
                    Fibra & Mobile
                  </h3>
                  <p className="text-[#00779b] text-lg leading-relaxed mb-6 max-w-2xl">
                    Dalla survey al network design, dal permitting all'implementazione, fino agli As-Built e al supporto operativo.
                  </p>
                  <Link to="/servizi/fibra-mobile" className="inline-flex items-center text-[#1da1db] font-bold hover:text-[#012b3a] transition-colors gap-2 w-max">
                    Scopri di più <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* 06 — NETWORKING */}
            <Reveal delay={150}>
              <div className="flex flex-col md:flex-row-reverse md:items-center gap-8 md:gap-12 py-8 border-b border-[#facc15] last:border-b-0 relative">
                <Link 
                  to="/servizi/networking" 
                  className="block group overflow-hidden shrink-0 rounded-3xl w-full md:max-w-[400px] lg:max-w-[480px] shadow-md"
                >
                  <FicoImage
                    src={networkingWebpImg}
                    alt="Networking"
                    variant={2}
                    className="w-full aspect-video rounded-3xl"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 pb-1 text-[#013547]">
                    Networking
                  </h3>
                  <p className="text-[#00779b] text-lg leading-relaxed mb-6 max-w-2xl">
                    Progettazione, configurazione e gestione di architetture di rete, apparati di comunicazione e cablaggio strutturato per garantire connessioni sicure e performanti.
                  </p>
                  <Link to="/servizi/networking" className="inline-flex items-center text-[#1da1db] font-bold hover:text-[#012b3a] transition-colors gap-2 w-max">
                    Scopri di più <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* 07 — IT & SOFTWARE */}
            <Reveal delay={200}>
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 py-8 border-b border-[#facc15] last:border-b-0">
                <Link 
                  to="/servizi/it-software" 
                  className="block group overflow-hidden shrink-0 rounded-3xl w-full md:max-w-[400px] lg:max-w-[480px] shadow-md"
                >
                  <FicoImage
                    src={networkingImg}
                    alt="IT, Networking & Software"
                    variant={2}
                    className="w-full aspect-video rounded-3xl"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 pb-1 text-[#013547]">
                    IT & Software
                  </h3>
                  <p className="text-[#00779b] text-lg leading-relaxed mb-6 max-w-2xl">
                    Dall'infrastruttura fisica agli ambienti digitali, sviluppiamo e integriamo soluzioni tecnologiche per esigenze operative.
                  </p>
                  <Link to="/servizi/it-software" className="inline-flex items-center text-[#1da1db] font-bold hover:text-[#012b3a] transition-colors gap-2 w-max">
                    Scopri di più <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* 08 — ENERGIA */}
            <Reveal delay={250}>
              <div className="flex flex-col md:flex-row-reverse md:items-center gap-8 md:gap-12 py-8 border-b border-[#facc15] last:border-b-0 relative">
                <Link 
                  to="/servizi/energia" 
                  className="block group overflow-hidden shrink-0 rounded-3xl w-full md:max-w-[400px] lg:max-w-[480px] shadow-md"
                >
                  <FicoImage
                    src={energiaImg}
                    alt="Energia"
                    variant={3}
                    className="w-full aspect-video rounded-3xl"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 pb-1 text-[#013547]">
                    Energia
                  </h3>
                  <p className="text-[#00779b] text-lg leading-relaxed mb-6 max-w-2xl">
                    Fotovoltaico e servizi energetici per edifici e imprese: progettazione, installazione, adeguamento e manutenzione degli impianti.
                  </p>
                  <Link to="/servizi/energia" className="inline-flex items-center text-[#1da1db] font-bold hover:text-[#012b3a] transition-colors gap-2 w-max">
                    Scopri di più <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* 09 — ASCENSORISTICA */}
            <Reveal delay={300}>
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 py-8 border-b border-[#facc15] last:border-b-0">
                <Link 
                  to="/servizi/ascensoristica" 
                  className="block group overflow-hidden shrink-0 rounded-3xl w-full md:max-w-[400px] lg:max-w-[480px] shadow-md"
                >
                  <FicoImage
                    src={ascensoristicaImg}
                    alt="Progettazione Ascensoristica"
                    variant={1}
                    className="w-full aspect-video rounded-3xl"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 pb-1 text-[#013547]">
                     Ascensoristica
                  </h3>
                  <p className="text-[#00779b] text-lg leading-relaxed mb-6 max-w-2xl">
                    Servizi tecnici e architettonici per ascensori, dalla fattibilità al cantiere.
                  </p>
                  <Link to="/servizi/ascensoristica" className="inline-flex items-center text-[#1da1db] font-bold hover:text-[#012b3a] transition-colors gap-2 w-max">
                    Scopri di più <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>

          <Reveal delay={350}>
            <div className="mt-10 border-t border-[#facc15] pt-8 text-left sm:mt-12">
              <div className="max-w-3xl">
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#00779b] sm:text-sm">
                  Parliamone
                </span>
                <h2 className="font-[var(--font-display)] text-2xl font-extrabold leading-tight text-[#012b3a] sm:text-3xl md:text-4xl">
                  Hai un progetto da realizzare?
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#00779b] sm:text-lg">
                  Raccontaci la tua esigenza: metteremo in campo le competenze giuste per costruire
                  una soluzione concreta.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to="/contatti"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f5d000] px-7 py-4 font-bold text-[#012b3a] shadow-md transition-all hover:scale-105 hover:bg-[#eab308] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012b3a] sm:w-auto"
                >
                  Parliamo del tuo progetto <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
