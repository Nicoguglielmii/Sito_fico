import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Network,
  Wifi,
  Radio,
  Server,
  Shield,
  Activity,
  Wrench,
  Cctv,
  Cpu,
  FileCode2,
  Building2,
  Landmark,
  Briefcase,
  Users,
  HardHat,
  Share2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";
import { FicoImage } from "@/components/site/FicoImage";

import netwImg from "@/assets/netw.jpg";

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
        {/* Cerchi radar concentrici attorno all'Hub centrale */}
        <circle
          cx={center.cx}
          cy={center.cy}
          r="58"
          fill="none"
          stroke="#facc15"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="net-orbit"
        />
        <circle
          cx={center.cx}
          cy={center.cy}
          r="92"
          fill="none"
          stroke="#1da1db"
          strokeOpacity="0.25"
          strokeWidth="1"
        />

        {/* Linee di connessione + Pacchetti dati in transito */}
        {satelliteNodes.map((node, i) => {
          const isActive = hoveredNode === node.id;
          return (
            <g key={node.id}>
              <line
                x1={center.cx}
                y1={center.cy}
                x2={node.cx}
                y2={node.cy}
                stroke={isActive ? "#facc15" : "#008cb4"}
                strokeWidth={isActive ? "4" : "3"}
                strokeLinecap="round"
                className="transition-all duration-300"
              />
              {/* Linea tratteggiata animata che simula il flusso pacchetti */}
              <line
                x1={center.cx}
                y1={center.cy}
                x2={node.cx}
                y2={node.cy}
                stroke="#facc15"
                strokeWidth="2.5"
                strokeDasharray="4 18"
                strokeLinecap="round"
                className="packet-stream"
                style={{ animationDelay: `${i * 0.35}s` }}
              />
            </g>
          );
        })}

        {/* Nodi Satelliti */}
        {satelliteNodes.map((node) => {
          const isActive = hoveredNode === node.id;
          return (
            <g
              key={node.id}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              <circle
                cx={node.cx}
                cy={node.cy}
                r={isActive ? "20" : "16"}
                fill="#008cb4"
                className="transition-all duration-300"
              />
              <circle
                cx={node.cx}
                cy={node.cy}
                r="6"
                fill={isActive ? "#facc15" : "#ffffff"}
                className="transition-colors duration-300"
              />
            </g>
          );
        })}

        {/* Nodo Centrale NETWORK */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setHoveredNode(0)}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <circle
            cx={center.cx}
            cy={center.cy}
            r="40"
            fill="#012b3a"
            stroke="#facc15"
            strokeWidth="2.5"
          />
          <text
            x={center.cx}
            y={center.cy + 4}
            textAnchor="middle"
            fill="#ffffff"
            fontSize="11"
            fontWeight="800"
            letterSpacing="0.08em"
          >
            NETWORK
          </text>
        </g>
      </svg>
    </div>
  );
}

function NetworkingPage() {
  const [activeTarget, setActiveTarget] = useState<number>(0);

  const cicloVitaRete = [
    {
      step: "1",
      code: "01",
      title: "Analisi e sopralluogo",
      desc: "Esigenze, copertura, vincoli e stato della rete.",
    },
    {
      step: "2",
      code: "02",
      title: "Progettazione",
      desc: "Architettura, apparati e modalità di collegamento.",
    },
    {
      step: "3",
      code: "03",
      title: "Realizzazione",
      desc: "Installazione e configurazione della soluzione.",
    },
    {
      step: "4",
      code: "04",
      title: "Sicurezza",
      desc: "Segmentazione, accessi e protezione delle comunicazioni.",
    },
    {
      step: "5",
      code: "05",
      title: "Monitoraggio",
      desc: "Controllo centralizzato e individuazione delle anomalie.",
    },
    {
      step: "6",
      code: "06",
      title: "Evoluzione",
      desc: "Manutenzione, ampliamento e adeguamento nel tempo.",
    },
  ];

  const serviziNetworking = [
    {
      port: "01",
      icon: Network,
      name: "Reti LAN e WAN",
      desc: "Progettazione e realizzazione di reti locali e geografiche, collegamenti tra sedi e organizzazione dell'architettura.",
    },
    {
      port: "02",
      icon: Wifi,
      name: "Wi-Fi professionale e HotSpot",
      desc: "Copertura wireless per uffici, edifici, aree operative e spazi destinati a ospiti o utenti.",
    },
    {
      port: "03",
      icon: Radio,
      name: "Fibra ottica e ponti radio",
      desc: "Collegamenti per sedi, edifici, servizi distribuiti, impianti e infrastrutture territoriali.",
    },
    {
      port: "04",
      icon: Server,
      name: "Apparati e configurazione",
      desc: "Configurazione di switch, router, access point, firewall, gateway e dispositivi di rete.",
    },
    {
      port: "05",
      icon: Shield,
      name: "Sicurezza e segmentazione",
      desc: "Separazione logica di utenti, dispositivi e servizi, gestione degli accessi e protezione delle comunicazioni.",
    },
    {
      port: "06",
      icon: Activity,
      name: "Monitoraggio centralizzato",
      desc: "Controllo dello stato degli apparati, gestione delle configurazioni e individuazione delle anomalie.",
    },
    {
      port: "07",
      icon: Wrench,
      name: "Manutenzione e assistenza",
      desc: "Diagnostica, interventi da remoto e on-site, aggiornamenti, ampliamenti e supporto continuativo.",
    },
    {
      port: "08",
      icon: Cctv,
      name: "Reti per videosorveglianza",
      desc: "Trasporto dati per telecamere, controllo accessi, lettura targhe e collegamento con centrali operative.",
    },
    {
      port: "09",
      icon: Cpu,
      name: "Networking per IoT",
      desc: "Infrastrutture per sensori, dispositivi connessi e raccolta centralizzata dei dati, come area progettuale e di sviluppo.",
    },
    {
      port: "10",
      icon: FileCode2,
      name: "Documentazione tecnica",
      desc: "Schemi di rete, configurazioni, inventario apparati e supporto alla gestione ordinata dell'infrastruttura.",
    },
  ];

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
    <div className="bg-white w-full min-h-screen pb-20 overflow-x-hidden selection:bg-[#facc15] selection:text-[#012b3a]">
      <style>{`
        @keyframes packet-flow {
          0% { stroke-dashoffset: 44; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bus-data {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes signal-wave {
          0% { stroke-dashoffset: 240; }
          100% { stroke-dashoffset: 0; }
        }
        .packet-stream {
          animation: packet-flow 1.8s linear infinite;
        }
        .net-orbit {
          transform-origin: 275px 205px;
          animation: spin-slow 24s linear infinite;
        }
        .network-bus-line {
          background: linear-gradient(90deg, #1da1db 0%, #facc15 50%, #1da1db 100%);
          background-size: 200% 100%;
          animation: bus-data 3.5s linear infinite;
        }
        .signal-wave-path {
          stroke-dasharray: 12 8;
          animation: signal-wave 4s linear infinite;
        }
      `}</style>

      {/* HERO SECTION CON TOPOLOGIA DI RETE INTERATTIVA */}
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
                  <span className="bg-[#f5d000] text-[#012b3a] text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
                    La rete come infrastruttura strategica
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[76px] font-extrabold leading-[1.05] tracking-tight text-[#012b3a] pb-2">
                  Networking & <br className="hidden sm:block" />
                  <span className="text-[#012b3a]">Connettività</span>
                </h1>

                <p className="mt-5 text-lg md:text-2xl font-bold text-[#0a5c75] max-w-2xl leading-snug">
                  Infrastrutture di rete affidabili, sicure e scalabili, dalla progettazione alla gestione.
                </p>

                <p className="mt-4 text-base md:text-lg text-[#00779b] max-w-2xl leading-relaxed">
                  Un unico approccio per collegare sedi, persone, dispositivi, impianti e servizi digitali, integrando progettazione, configurazione, monitoraggio e assistenza.
                </p>

                {/* Tracciato fasi lineare */}
                <div className="mt-8 pt-6 border-t border-[#facc15]/70">
                  <div className="flex flex-wrap items-center gap-y-2">
                    {["ANALISI", "PROGETTAZIONE", "REALIZZAZIONE", "GESTIONE"].map((fase, i) => (
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
                    Reti LAN/WAN, Wi-Fi professionale, fibra ottica e ponti radio
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

      {/* SEZIONE 1: PERCHÉ FI.CO. — DALLA RETE AL SERVIZIO INTEGRATO */}
      <section className="py-16 md:py-24 bg-white border-b border-[#facc15]">
        <div className="container-x max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="w-full lg:w-5/12">
              <Reveal>
                <div className="relative">
                  <div className="hidden sm:block absolute -top-3 -left-3 right-12 h-1 network-bus-line rounded-full pointer-events-none" />
                  <div className="hidden sm:block absolute -bottom-3 left-12 -right-3 h-1 network-bus-line rounded-full pointer-events-none" />
                  <FicoImage
                    src={netwImg}
                    alt="Networking & Connettività FI.CO."
                    variant={2}
                    className="w-full aspect-[4/3] md:h-[430px] rounded-3xl shadow-xl"
                  />
                </div>
              </Reveal>
            </div>

            <div className="w-full lg:w-7/12 text-left">
              <Reveal delay={100}>
                <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                  PERCHÉ FI.CO.
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight pb-2">
                  La connettività come base di ogni servizio digitale
                </h2>
                <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                  Fi.Co. affronta il networking come un'infrastruttura da progettare, governare e far evolvere nel tempo
                </p>

                {/* Connessione diretta a 2 nodi senza card */}
                <div className="mt-10 relative pl-7 sm:pl-9 border-l-2 border-[#1da1db] space-y-8">
                  <div className="relative">
                    <span className="absolute -left-[35px] sm:-left-[43px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#1da1db]" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#1da1db] block mb-1.5">
                      DALLA RETE…
                    </span>
                    <p className="text-sm md:text-base text-[#012b3a] leading-relaxed">
                      Analisi dell'infrastruttura, definizione dell'architettura e realizzazione dei collegamenti cablati e wireless.
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[35px] sm:-left-[43px] top-1 w-4 h-4 rounded-full bg-[#facc15] ring-4 ring-[#facc15]/30" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0a5c75] block mb-1.5">
                      …AL SERVIZIO INTEGRATO
                    </span>
                    <p className="text-sm md:text-base text-[#012b3a] leading-relaxed">
                      Configurazione, sicurezza, monitoraggio e assistenza vengono coordinati in un unico modello operativo.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* SEZIONE 2: DALL'ESIGENZA ALLA CONTINUITÀ OPERATIVA — DORSALE DI ROUTING A 6 HOP */}
      <section
        className="py-16 md:py-24 border-b border-[#facc15] relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-14 md:mb-16 text-left">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                IL MODELLO OPERATIVO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Dall'esigenza alla continuità operativa
              </h2>
            </div>
          </Reveal>

          {/* Matrice di Routing su 2 dorsali interconnesse */}
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
                          HOP
                        </span>
                        <span className="text-lg font-extrabold leading-tight">
                          {item.code}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#1da1db]/30 shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-[#1da1db] animate-pulse" />
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#012b3a]">
                          {item.step}. {item.title}
                        </span>
                      </div>
                    </div>

                    <div className="pl-4 border-l-2 border-[#facc15] bg-white/90 backdrop-blur-xs py-2 pr-3 rounded-r-xl">
                      <h3 className="text-xl font-extrabold text-[#012b3a] mb-1">
                        {item.step}. {item.title}
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

          <Reveal delay={300}>
            <div className="mt-14 pt-8 border-t-2 border-[#1da1db] flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/95 px-6 py-5 rounded-2xl shadow-sm">
              <div className="w-11 h-11 rounded-full bg-[#f5d000] text-[#012b3a] flex items-center justify-center shrink-0">
                <Network size={22} />
              </div>
              <p className="text-base md:text-lg font-bold text-[#012b3a] text-left">
                Il risultato:{" "}
                <span className="text-[#00779b] font-medium">
                  un unico interlocutore per l'intero ciclo di vita della rete.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEZIONE 3: COSA FACCIAMO — ARCHITETTURA SWITCH / PATCH PANEL A 10 PORTE */}
      <section className="py-16 md:py-24 bg-white border-b border-[#facc15]">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-14 md:mb-16 text-left">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                COSA FACCIAMO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Servizi di networking e connettività
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                Attività modulabili in funzione della dimensione, della distribuzione delle sedi e delle esigenze operative del cliente.
              </p>
            </div>
          </Reveal>

          {/* Barra Superiore dello Switch Logico */}
          <Reveal delay={100}>
            <div className="bg-[#012b3a] text-white px-6 py-3.5 rounded-t-3xl border-b-2 border-[#facc15] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#facc15] animate-ping" />
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#facc15]">
                  FI.CO. NETWORK ARCHITECTURE · 10 ACTIVE PORTS
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                {serviziNetworking.map((s) => (
                  <span
                    key={s.port}
                    className="px-2 py-0.5 rounded bg-[#013a52] border border-[#1da1db]/40 text-[10px] font-bold text-[#1da1db]"
                  >
                    P{s.port}
                  </span>
                ))}
              </div>
            </div>

            {/* Elenco Tecnico Bicolonna a Porte Connesse */}
            <div className="grid md:grid-cols-2 border-x-2 border-b-2 border-[#facc15] rounded-b-3xl divide-y divide-[#1da1db]/20 md:divide-x bg-white overflow-hidden shadow-lg">
              {serviziNetworking.map((srv, idx) => (
                <div
                  key={srv.name}
                  className={`group p-6 sm:p-8 flex items-start gap-5 hover:bg-[#f4fafd] transition-colors text-left relative ${
                    idx === 0 ? "md:border-t-0" : ""
                  }`}
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#013a52] border border-[#facc15] text-[#facc15] flex items-center justify-center group-hover:bg-[#1da1db] group-hover:text-white transition-colors shadow-xs">
                      <srv.icon size={22} />
                    </div>
                    <span className="mt-1.5 text-[10px] font-extrabold tracking-widest text-[#1da1db]">
                      P.{srv.port}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-lg md:text-xl font-extrabold text-[#012b3a] group-hover:text-[#0a5c75] transition-colors">
                        {srv.name}
                      </h3>
                      <CheckCircle2
                        size={18}
                        className="text-[#1da1db] shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <p className="text-sm md:text-[15px] text-[#00779b] leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          SEZIONE 4: A CHI CI RIVOLGIAMO — ROUTING SELETTIVO INTERATTIVO (ZERO CARD)
         ========================================================================= */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-14 md:mb-16 text-left">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                A CHI CI RIVOLGIAMO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Una rete progettata intorno alle attività
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                Soluzioni per organizzazioni che richiedono affidabilità, gestione centralizzata e capacità di crescita.
              </p>
            </div>
          </Reveal>

          {/* Console di instradamento senza card: Selettore canali a sinistra + Display Nodo a destra */}
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
                        {/* Indicatore luminoso sulla dorsale sinistra */}
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
                  {/* Filigrana numerica gigante */}
                  <span className="absolute -bottom-6 -right-2 text-[140px] font-black text-[#012b3a]/[0.04] leading-none select-none pointer-events-none">
                    0{activeTarget + 1}
                  </span>

                  {/* Intestazione tecnica con onda di segnale SVG */}
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
                            Canale dedicato Fi.Co. Networking
                          </p>
                        </div>
                      </div>

                      {/* Onda sinaptica di traffico dati */}
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

                  {/* Barra di stato inferiore con pallini di selezione rapida */}
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

          {/* IL VALORE AGGIUNTO FI.CO. + CTA */}
          <Reveal delay={250}>
            <div className="mt-20 relative bg-white border-y-2 border-[#facc15] py-12 px-6 sm:px-10 md:px-14 shadow-md overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 network-bus-line" />

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="max-w-3xl text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5d000] text-[#012b3a] text-xs font-extrabold uppercase tracking-wider mb-4">
                    <Sparkles size={14} /> IL VALORE AGGIUNTO FI.CO.
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#012b3a] leading-tight mb-4">
                    Non solo installazione di apparati, ma governo dell'intera infrastruttura di rete
                  </h3>
                  <p className="text-[#00779b] text-base md:text-lg leading-relaxed mb-5">
                    Una visione che unisce connettività, sistemi IT, sicurezza, monitoraggio e assistenza continuativa, per ridurre disservizi, semplificare la gestione e accompagnare l'evoluzione tecnologica.
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#0a5c75] mb-2">
                    DALLA CONNESSIONE ALL'INFRASTRUTTURA. DALLA RETE AL SERVIZIO.
                  </p>
                  <p className="text-sm font-semibold text-[#00779b]">
                    Fi.Co. integra il networking nei propri servizi tecnologici e di assistenza. Contattaci per valutare insieme la tua infrastruttura di rete.
                  </p>
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
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}