import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";

export const Route = createFileRoute("/servizi/networking")({
  head: () => ({
    meta: [
      { title: "Networking & Connettività — FI.CO. SRL" },
      {
        name: "description",
        content:
          "Infrastrutture di rete affidabili, sicure e scalabili, dalla progettazione alla gestione. Reti LAN/WAN, Wi-Fi professionale, fibra ottica e ponti radio",
      },
    ],
  }),
  component: NetworkingPage,
});

function InteractiveNetworkTopology() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const satelliteNodes = [
    { id: 1, cx: 195, cy: 135, label: "LAN / WAN" },
    { id: 2, cx: 280, cy: 42, label: "Wi-Fi & HotSpot" },
    { id: 3, cx: 350, cy: 105, label: "Fibra & Radio" },
    { id: 4, cx: 380, cy: 265, label: "Sicurezza & IoT" },
    { id: 5, cx: 185, cy: 280, label: "Monitoraggio" },
  ];

  const center = { cx: 275, cy: 205 };

  return (
    <div className="relative w-full max-w-[460px] mx-auto select-none">
      <div className="absolute inset-0 bg-[#1da1db]/10 rounded-full blur-3xl pointer-events-none" />
      <svg viewBox="120 0 310 330" className="w-full h-auto overflow-visible relative z-10">
        <circle cx={center.cx} cy={center.cy} r="58" fill="none" stroke="#facc15" strokeWidth="1" strokeDasharray="4 4" className="net-orbit" />
        <circle cx={center.cx} cy={center.cy} r="92" fill="none" stroke="#1da1db" strokeOpacity="0.25" strokeWidth="1" />

        {satelliteNodes.map((node, i) => {
          const isActive = hoveredNode === node.id;
          return (
            <g key={node.id}>
              <line x1={center.cx} y1={center.cy} x2={node.cx} y2={node.cy} stroke={isActive ? "#facc15" : "#008cb4"} strokeWidth={isActive ? "4" : "3"} strokeLinecap="round" className="transition-all duration-300" />
              <line x1={center.cx} y1={center.cy} x2={node.cx} y2={node.cy} stroke="#facc15" strokeWidth="2.5" strokeDasharray="4 18" strokeLinecap="round" className="packet-stream" style={{ animationDelay: `${i * 0.35}s` }} />
            </g>
          );
        })}

        {satelliteNodes.map((node) => {
          const isActive = hoveredNode === node.id;
          return (
            <g key={node.id} onMouseEnter={() => setHoveredNode(node.id)} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
              <circle cx={node.cx} cy={node.cy} r={isActive ? "20" : "16"} fill="#008cb4" className="transition-all duration-300" />
              <circle cx={node.cx} cy={node.cy} r="6" fill={isActive ? "#facc15" : "#ffffff"} className="transition-colors duration-300" />
            </g>
          );
        })}

        <g className="cursor-pointer" onMouseEnter={() => setHoveredNode(0)} onMouseLeave={() => setHoveredNode(null)}>
          <circle cx={center.cx} cy={center.cy} r="40" fill="#012b3a" stroke="#facc15" strokeWidth="2.5" />
          <text x={center.cx} y={center.cy + 4} textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800" letterSpacing="0.08em">NETWORK</text>
        </g>
      </svg>
    </div>
  );
}

function NetworkingPage() {
  const cicloVitaRete = [
    {
      step: "1", code: "01",
      title: "Analisi e progettazione",
      desc: "Valutiamo esigenze, copertura, vincoli e infrastruttura esistente per definire architettura, apparati e modalità di collegamento.",
    },
    {
      step: "2", code: "02",
      title: "Realizzazione e configurazione",
      desc: "Installiamo e configuriamo l'infrastruttura di rete, organizzando collegamenti e copertura in funzione dei servizi.",
    },
    {
      step: "3", code: "03",
      title: "Sicurezza e segmentazione",
      desc: "Organizziamo la rete separando utenti, dispositivi e servizi, gestendo accessi e comunicazioni in sicurezza.",
    },
    {
      step: "4", code: "04",
      title: "Monitoraggio e continuità",
      desc: "Controlliamo proattivamente lo stato dell'infrastruttura per individuare anomalie e supportare la continuità del servizio.",
    },
    {
      step: "5", code: "05",
      title: "Integrazione di sistemi",
      desc: "Predisponiamo la rete per collegare dispositivi e sistemi IoT presenti negli edifici e negli spazi operativi.",
    },
    {
      step: "6", code: "06",
      title: "Manutenzione ed evoluzione",
      desc: "L'infrastruttura viene documentata e adeguata nel tempo in funzione di nuove sedi, servizi o necessità operative.",
    },
  ];

  const destinatari = [
    { title: "PMI e aziende", desc: "Reti per sedi operative, uffici, reparti, dispositivi e servizi aziendali." },
    { title: "Enti pubblici", desc: "Collegamenti tra edifici, Wi-Fi, infrastrutture territoriali e servizi distribuiti." },
    { title: "Studi e professionisti", desc: "Connettività affidabile per lavoro, collaborazione, accesso ai dati e continuità operativa." },
    { title: "Strutture aperte al pubblico", desc: "Reti separate per attività interne, ospiti, utenti e servizi digitali." },
    { title: "Imprese e cantieri", desc: "Reti temporanee o permanenti per coordinamento, impianti, sicurezza e scambio dati." },
    { title: "Partner tecnologici", desc: "Supporto tecnico nell'integrazione della rete con sistemi IT, sicurezza e servizi cloud." }
  ];

  return (
    <div className="bg-white w-full min-h-screen pb-20 overflow-x-hidden selection:bg-[#facc15] selection:text-[#012b3a]">
      <style>{`
        @keyframes packet-flow { 0% { stroke-dashoffset: 44; } 100% { stroke-dashoffset: 0; } }
        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes bus-data { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .packet-stream { animation: packet-flow 1.8s linear infinite; }
        .net-orbit { transform-origin: 275px 205px; animation: spin-slow 24s linear infinite; }
        .network-bus-line { background: linear-gradient(90deg, #1da1db 0%, #facc15 50%, #1da1db 100%); background-size: 200% 100%; animation: bus-data 3.5s linear infinite; }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-36 pb-14 md:pb-20 border-b border-[#facc15] overflow-hidden bg-white">
        <HeroParticles />
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 text-left">
              <Reveal>
                <div className="mb-4 md:mb-6 flex flex-wrap items-center gap-3">
                  <span className="text-xs md:text-sm text-[#00779b] font-semibold tracking-[0.22em] uppercase">
                    AREA TECNOLOGICA
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[76px] font-extrabold leading-[1.05] tracking-tight text-[#012b3a] pb-2">
                  Dalla connessione <br className="hidden sm:block" />
                  all'infrastruttura
                </h1>

                <p className="mt-4 text-base md:text-lg text-[#00779b] max-w-2xl leading-relaxed">
                  Affrontiamo il networking come un'infrastruttura da progettare, governare e far evolvere nel tempo. Un unico approccio per collegare sedi, persone, dispositivi, impianti e servizi digitali.
                </p>

                <div className="mt-8 pt-6 border-t border-[#facc15]/70">
                  <div className="flex flex-wrap items-center gap-y-2">
                    {["PROGETTAZIONE", "CONFIGURAZIONE", "MONITORAGGIO", "ASSISTENZA"].map((fase, i) => (
                      <div key={fase} className="flex items-center">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#1da1db]" />
                          <span className="text-xs sm:text-sm font-extrabold tracking-[0.16em] text-[#012b3a]">
                            {fase}
                          </span>
                        </div>
                        {i < 3 && (
                          <span className="mx-3 sm:mx-4 text-[#facc15] font-black">•</span>
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm font-bold text-[#00779b]">
                    Infrastrutture di rete affidabili, sicure e scalabili.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={150}>
                <InteractiveNetworkTopology />
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* DALL'ESIGENZA ALLA CONTINUITÀ OPERATIVA — DORSALE DI ROUTING */}
      <section
        className="py-16 md:py-24 border-b border-[#facc15] relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-16 md:mb-20 text-left">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                IL METODO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Dall'esigenza alla continuità operativa
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                Attività modulabili in funzione della dimensione, della distribuzione delle sedi e delle esigenze operative del cliente.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-[3px] network-bus-line rounded-full pointer-events-none" />
            <div className="hidden lg:block absolute top-[238px] left-[6%] right-[6%] h-[3px] network-bus-line rounded-full pointer-events-none" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 relative z-10">
              {cicloVitaRete.map((item, idx) => (
                <Reveal key={item.step} delay={idx * 70}>
                  <div className="text-left group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#013a52] border-2 border-[#facc15] text-[#facc15] flex flex-col items-center justify-center shrink-0 shadow-md group-hover:bg-[#1da1db] group-hover:text-white group-hover:scale-110 transition-all">
                        <span className="text-[9px] font-bold uppercase tracking-widest opacity-80 leading-none">
                          FASE
                        </span>
                        <span className="text-lg font-extrabold leading-tight">
                          {item.code}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#1da1db]/30 shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-[#1da1db] animate-pulse" />
                      </div>
                    </div>

                    <div className="pl-4 border-l-2 border-[#facc15] bg-white/90 backdrop-blur-xs py-2 pr-3 rounded-r-xl">
                      <h3 className="text-xl font-extrabold text-[#012b3a] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-[15px] text-[#00779b] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A CHI CI RIVOLGIAMO */}
      <section className="py-16 md:py-24 bg-white border-b border-[#facc15]/30 overflow-hidden">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-12 md:mb-16 text-left">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                A CHI CI RIVOLGIAMO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Una rete progettata intorno alle attività
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                Soluzioni per organizzazioni che richiedono affidabilità, gestione centralizzata e capacità di crescita strutturale.
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
        </div>
      </section>

      {/* IL VALORE AGGIUNTO FI.CO. + CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="relative bg-[#f4fafd] border-l-4 border-[#1da1db] py-12 px-8 sm:px-12 rounded-r-3xl shadow-sm text-left flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1da1db] mb-4">
                  <Sparkles size={16} /> IL VALORE AGGIUNTO FI.CO.
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#012b3a] leading-tight mb-4">
                  Non solo installazione di apparati, ma governo dell'intera infrastruttura.
                </h3>
                <p className="text-[#00779b] text-base md:text-lg leading-relaxed mb-6">
                  Una visione che unisce connettività, sistemi IT, sicurezza, monitoraggio e assistenza continuativa, per ridurre disservizi, semplificare la gestione e accompagnare l'evoluzione tecnologica.
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#facc15]" />
                  <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.15em] text-[#0a5c75]">
                    Dall'analisi al risultato. Un processo, un unico approccio.
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full lg:w-auto">
                <Link
                  to="/contatti"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-2xl bg-[#f5d000] text-[#012b3a] hover:bg-[#eab308] hover:scale-105 transition-all shadow-md w-full lg:w-auto text-center"
                >
                  Valuta la tua rete <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}