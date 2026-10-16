import { createFileRoute, Link } from "@tanstack/react-router";
import { Cpu, Globe, Sparkles, Zap, Layers, Sliders, Mic, Network, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";
import { FicoImage } from "@/components/site/FicoImage";

import netwImg from "@/assets/netw.jpg";
import itservicesImg from "@/assets/itservices.jpg";
import digitaldevelopmentImg from "@/assets/digitaldevelopment.webp";

export const Route = createFileRoute("/servizi/it-software")({
  component: ItSoftwarePage,
});

function ItSoftwarePage() {
  const serviziIT = [
    {
      titleFirst: "Networking & Infrastrutture IT",
      subtitle: "CONNESSIONI SOLIDE ED EFFICIENTI",
      desc: "Progettiamo, installiamo e supportiamo le infrastrutture che permettono a sistemi, persone e dati di restare connessi.",
      image: netwImg,
      variant: 2 as const,
      activities: [
        "Installazione e manutenzione di apparati networking",
        "Progettazione e gestione delle reti",
        "Cablaggio strutturato",
      ],
    },
    {
      titleFirst: "IT Services ",
      subtitle: "CONTINUITÀ OPERATIVA, OGNI GIORNO",
      desc: "Gestiamo servizi e attività di supporto IT secondo livelli e modalità concordati con il cliente.",
      image: itservicesImg,
      variant: 1 as const,
      activities: [
        "Assistenza hardware e software",
        "Reperibilità H24 nei servizi contrattualizzati",
        "Outsourcing e gestione logistica delle scorte",
      ],
    },
    {
      titleFirst: "Software & Digital Development ",
      subtitle: "DAL CODICE ALL'INTELLIGENZA ARTIFICIALE",
      desc: "Sviluppiamo internamente software su misura, web app, piattaforme aziendali e sistemi avanzati di Intelligenza Artificiale. Affianchiamo alle soluzioni digitali per il business la progettazione di assistenti vocali interattivi e architetture modulari capaci di automatizzare e connettere processi complessi.",
      image: digitaldevelopmentImg,
      variant: 3 as const,
      activities: [
        "Siti web ad alte prestazioni, landing page e piattaforme digitali su misura",
        "Web app, gestionali e portali aziendali ad alta scalabilità",
        "Sviluppo agile potenziato dall'AI (AI-Augmented Engineering)",
        "Sistemi innovativi di Intelligenza Artificiale e assistenti vocali interattivi",
      ],
    },
  ];

  const aiPillars = [
    {
      icon: Zap,
      title: "Abbattimento dei tempi di sviluppo",
      desc: "Trasformiamo le idee in software funzionante in tempi drasticamente ridotti rispetto ai metodi tradizionali.",
    },
    {
      icon: Layers,
      title: "Scalabilità e flessibilità",
      desc: "Scriviamo codice pulito e architetture modulari pronte a crescere ed evolvere insieme al business del cliente.",
    },
    {
      icon: Sliders,
      title: "Soluzioni realmente su misura",
      desc: "Personalizziamo ogni piattaforma sulle specifiche esigenze operative aziendali, massimizzando la qualità e ottimizzando i costi.",
    },
  ];

  return (
    <div className="bg-white w-full min-h-screen pb-20 overflow-x-hidden selection:bg-[#facc15] selection:text-[#012b3a]">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-36 pb-12 md:pb-16 border-b border-[#facc15] overflow-hidden bg-white">
        <HeroParticles />
        <div className="container-x relative z-10 text-left">
          <Reveal>
            <div className="mb-4 md:mb-6">
              <span className="text-xs md:text-sm text-[#00779b] font-semibold tracking-[0.22em] uppercase">
                IT & SOFTWARE
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight text-[#012b3a] max-w-4xl pb-2">
              Dall'infrastruttura <br className="hidden md:block" />
              all'ambiente digitale
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-[#00779b] max-w-2xl leading-relaxed">
              Integriamo infrastrutture IT, servizi di assistenza e sviluppo software per costruire strumenti digitali solidi, garantendo continuità, sicurezza ed efficienza per ogni tua esigenza operativa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ELENCO PRINCIPALE DEI 3 SERVIZI IT */}
      <section className="pt-10 md:pt-14 pb-16 relative overflow-hidden bg-white">
        <div className="container-x">
          <div className="flex flex-col gap-16 md:gap-24 w-full max-w-6xl mx-auto">
            {serviziIT.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <Reveal key={item.subtitle} delay={100}>
                  <div
                    className={`flex flex-col ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center gap-8 md:gap-12 lg:gap-16`}
                  >
                    <div className="w-full md:w-1/2">
                      <FicoImage
                        src={item.image}
                        alt={item.titleFirst.trim()}
                        variant={item.variant}
                        className="w-full aspect-[4/3] md:aspect-auto md:h-[400px] rounded-3xl shadow-lg"
                      />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                      <div className="mb-4">
                        <span className="text-xs md:text-sm font-semibold text-[#00779b] uppercase tracking-wider block mb-1.5">
                          {item.subtitle}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-[#012b3a] pb-1">
                          {item.titleFirst}
                        </h3>
                      </div>

                      <p className="text-lg text-[#00779b] leading-relaxed mt-2">
                        {item.desc}
                      </p>

                      {item.activities.length > 0 && (
                        <ul className="mt-6 space-y-3 pt-6 border-t border-[#facc15]">
                          {item.activities.map((act, i) => (
                            <li
                              key={i}
                              className="text-[15px] text-[#012b3a] font-medium flex items-start gap-3"
                            >
                              <span
                                className="mt-[7px] w-2 h-2 rounded-full bg-[#1da1db] shrink-0"
                                aria-hidden="true"
                              />
                              {act}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          FOCUS APPROFONDIMENTO: SOFTWARE & DIGITAL DEVELOPMENT
         ==================================================================== */}
      <section
        className="py-16 md:py-24 border-t border-[#facc15] relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x max-w-6xl mx-auto flex flex-col gap-16 md:gap-20">
          
          {/* INTESTAZIONE FOCUS DIGITALE */}
          <Reveal>
            <div className="max-w-3xl text-left">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-3">
                FOCUS / SOFTWARE & DIGITAL DEVELOPMENT
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Soluzioni digitali concrete e tecnologie di frontiera
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                Uniamo lo sviluppo di asset digitali immediatamente cantierabili per la crescita aziendale alla ricerca su architetture software basate sull'Intelligenza Artificiale.
              </p>
            </div>
          </Reveal>

          {/* GRIGLIA: OFFERTA CORE (WEB STRATEGY) + METODOLOGIA AI-AUGMENTED */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
            
            {/* Card 1: L'Offerta Pratica / Web & Conversione */}
            <Reveal delay={100}>
              <div className="bg-white border-2 border-[#facc15] rounded-3xl p-8 md:p-10 shadow-lg h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#013a52] flex items-center justify-center text-[#facc15] shrink-0 shadow-md">
                      <Globe size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1da1db]">
                        SOLUZIONI CORE PER LE IMPRESE
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#012b3a]">
                        Web Strategy & Asset Digitali
                      </h3>
                    </div>
                  </div>

                  <p className="text-[#00779b] text-base md:text-[17px] leading-relaxed mb-6">
                    Oltre ai progetti sperimentali, realizziamo soluzioni digitali consolidate pensate per rispondere alle esigenze concrete delle aziende. Progettiamo e sviluppiamo <strong>siti web vetrina ad alte prestazioni</strong> e <strong>landing page ottimizzate per la conversione</strong>.
                  </p>
                  <p className="text-[#00779b] text-base md:text-[17px] leading-relaxed">
                    Questi strumenti non sono semplici "biglietti da visita digitali", ma veri e propri <strong>asset strategici</strong> costruiti per aumentare la visibilità del brand, supportare attivamente le campagne di marketing e lead generation e accelerare gli obiettivi di espansione territoriale e commerciale.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#facc15] flex flex-wrap gap-2">
                  {["Siti Web Performanti", "Landing Page & Conversion", "Lead Generation", "SEO & Posizionamento"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full bg-[#1da1db]/10 border border-[#1da1db]/30 text-[#012b3a] text-xs font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Card 2: Sviluppo Piattaforme & Vibe Coding / AI-Augmented */}
            <Reveal delay={200}>
              <div className="bg-white border-2 border-[#facc15] rounded-3xl p-8 md:p-10 shadow-lg h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#013a52] flex items-center justify-center text-[#facc15] shrink-0 shadow-md">
                      <Cpu size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1da1db]">
                        METODOLOGIA DI SVILUPPO
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#012b3a]">
                        Sviluppo Piattaforme & AI-Coding
                      </h3>
                    </div>
                  </div>

                  <p className="text-[#00779b] text-base md:text-[17px] leading-relaxed mb-6">
                    Il nostro elemento di differenziazione risiede nell'adozione del <strong>"Vibe Coding"</strong>: un approccio di sviluppo rapido, agile e iterativo che integra nativamente i più potenti modelli di Intelligenza Artificiale attuali (tra cui <strong>Google Gemini, Anthropic Claude e GitHub Copilot</strong>) nei nostri ambienti di ingegnerizzazione.
                  </p>

                  <div className="space-y-4 mt-6">
                    {aiPillars.map((pillar) => (
                      <div key={pillar.title} className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-[#f5d000] text-[#012b3a] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <pillar.icon size={18} />
                        </div>
                        <div>
                          <h4 className="text-[15px] font-extrabold text-[#012b3a]">
                            {pillar.title}
                          </h4>
                          <p className="text-sm text-[#00779b] leading-snug mt-0.5">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

          {/* CARD GRANDE: LA VISIONE / RICERCA E SVILUPPO AI & RETE NEURALE 3D */}
          <Reveal delay={250}>
            <div className="bg-white border-2 border-[#facc15] rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#facc15]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#1da1db]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
                
                <div className="lg:col-span-8 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5d000] text-[#012b3a] text-xs font-extrabold uppercase tracking-wider mb-4">
                    <Sparkles size={14} /> La Nostra Visione · R&D
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#012b3a] leading-tight mb-4">
                    Sistemi di Intelligenza Artificiale & Assistenti Vocali in 3D
                  </h3>

                  <p className="text-[#00779b] text-base md:text-lg leading-relaxed mb-4">
                    Progettiamo sistemi innovativi di Intelligenza Artificiale dotati di <strong>dashboard visive interattive che rappresentano una rete neurale in 3D</strong>. Il sistema reagisce agli input vocali in tempo reale: la struttura neurale si anima fluidamente mentre è in ascolto e cambia dinamicamente colore durante la fase di elaborazione.
                  </p>

                  <p className="text-[#00779b] text-base md:text-lg leading-relaxed">
                    L'interfaccia è completamente esplorabile nello spazio tridimensionale fino a visualizzare lo stato dei singoli neuroni e delle sinapsi attive. Grazie a un'<strong>architettura modulare ad "agenti"</strong>, l'assistente si interfaccia simultaneamente con molteplici ecosistemi (modelli AI come Gemini, Home Assistant per la domotica e l'IoT, motori di ricerca e flussi informativi live), fungendo da hub centrale intelligente per l'automazione.
                  </p>
                </div>

                {/* Box laterale con i punti chiave dell'architettura AI */}
                <div className="lg:col-span-4 flex flex-col gap-4 bg-[#f4fafd] border border-[#1da1db]/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#013a52] text-[#facc15] flex items-center justify-center shrink-0">
                      <Mic size={20} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#012b3a] text-sm">Interazione Vocale Real-Time</h4>
                      <p className="text-xs text-[#00779b]">Risposta dinamica e feedback visivo immediato</p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-[#facc15]/60" />

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#013a52] text-[#facc15] flex items-center justify-center shrink-0">
                      <Network size={20} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#012b3a] text-sm">Rete Neurale 3D Esplorabile</h4>
                      <p className="text-xs text-[#00779b]">Rotazione 360° e zoom su neuroni e sinapsi</p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-[#facc15]/60" />

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#013a52] text-[#facc15] flex items-center justify-center shrink-0">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#012b3a] text-sm">Architettura Multi-Agente</h4>
                      <p className="text-xs text-[#00779b]">Integrazione con LLM, IoT, API e dati live</p>
                    </div>
                  </div>

                  <Link
                    to="/contatti"
                    className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-[#f5d000] hover:bg-[#eab308] text-[#012b3a] font-bold text-sm py-3.5 px-5 rounded-xl transition-all shadow-xs"
                  >
                    Richiedi una demo <ArrowRight size={16} />
                  </Link>
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </section>

    </div>
  );
}