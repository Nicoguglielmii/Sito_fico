import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sun,
  Zap,
  BatteryCharging,
  Wrench,
  Activity,
  Users,
  FileCheck2,
  ArrowRight,
  Building2,
  Factory,
  Home,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";
import { FicoImage } from "@/components/site/FicoImage";

import energiaImg from "@/assets/Energia.jpg";

export const Route = createFileRoute("/servizi/energia")({
  head: () => ({
    meta: [
      { title: "Energia e Fotovoltaico — FI.CO. SRL" },
      {
        name: "description",
        content:
          "Fotovoltaico e servizi energetici  ",
      },
    ],
  }),
  component: EnergiaPage,
});

function EnergiaPage() {
  const destinatari = [
    { label: "Edifici residenziali e commerciali", icon: Building2 },
    { label: "Condomìni", icon: Home },
    { label: "Imprese e siti produttivi", icon: Factory },
  ];

  const fasiServizio = [
    { step: "01", name: "Analisi", icon: Activity },
    { step: "02", name: "Progetto", icon: Sun },
    { step: "03", name: "Installazione", icon: Zap },
    { step: "04", name: "Collaudo", icon: FileCheck2 },
    { step: "05", name: "Manutenzione", icon: Wrench },
  ];

  const dettaglioServizi = [
    {
      num: "01",
      icon: Sun,
      badge: "STUDIO E DIMENSIONAMENTO",
      title: "Analisi e progettazione energetica",
      desc: "Definiamo la soluzione fotovoltaica in base ai consumi e alle caratteristiche dell'edificio o dell'impresa.",
      items: [
        {
          code: "01",
          name: "Analisi dei consumi",
          desc: "Bollette, dati disponibili e profili di utilizzo.",
        },
        {
          code: "02",
          name: "Studio di fattibilità",
          desc: "Spazi, impianti esistenti e obiettivi del cliente.",
        },
        {
          code: "03",
          name: "Dimensionamento",
          desc: "Potenza fotovoltaica, accumulo e sistemi di ricarica.",
        },
      ],
    },
    {
      num: "02",
      icon: BatteryCharging,
      badge: "REALIZZAZIONE E INTEGRAZIONE",
      title: "Installazione e adeguamento degli impianti",
      desc: "Fi.Co. fornisce e installa il fotovoltaico e realizza gli adeguamenti necessari per integrarlo correttamente con gli impianti esistenti.",
      items: [
        {
          code: "01",
          name: "Fotovoltaico e accumulo",
          desc: "Fornitura, posa e collegamento dei componenti previsti.",
        },
        {
          code: "02",
          name: "Adeguamento impianti",
          desc: "Interventi su quadri, protezioni e collegamenti, quando necessari.",
        },
        {
          code: "03",
          name: "Collaudo e avvio",
          desc: "Verifiche funzionali e messa in servizio dell'impianto.",
        },
      ],
    },
    {
      num: "03",
      icon: Wrench,
      badge: "CONTINUITÀ ED EFFICIENZA",
      title: "Manutenzione e assistenza",
      desc: "Fi.Co. può curare la manutenzione degli impianti installati e, previa verifica tecnica, di impianti fotovoltaici esistenti.",
      items: [
        {
          code: "01",
          name: "Manutenzione programmata",
          desc: "Controlli periodici su moduli, inverter, cablaggi e protezioni.",
        },
        {
          code: "02",
          name: "Interventi su guasto",
          desc: "Diagnosi e ripristino delle anomalie rilevate.",
        },
        {
          code: "03",
          name: "Controllo delle prestazioni",
          desc: "Verifica della produzione e dei dati, anche da remoto quando previsto.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white w-full min-h-screen pb-20 overflow-x-hidden selection:bg-[#facc15] selection:text-[#012b3a]">
      <style>{`
        @keyframes energy-stream-x {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes energy-stream-y {
          0% { background-position: 0 -200%; }
          100% { background-position: 0 200%; }
        }
        @keyframes solar-ring {
          0% { transform: scale(1); opacity: 0.65; }
          70% { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        .energy-line-x {
          background: linear-gradient(90deg, #1da1db 0%, #facc15 50%, #1da1db 100%);
          background-size: 200% 100%;
          animation: energy-stream-x 3.2s linear infinite;
        }
        .energy-line-y {
          background: linear-gradient(180deg, #1da1db 0%, #facc15 50%, #1da1db 100%);
          background-size: 100% 200%;
          animation: energy-stream-y 3.2s linear infinite;
        }
        .solar-pulse::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          border: 2px solid #facc15;
          animation: solar-ring 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
          pointer-events: none;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-36 pb-14 md:pb-20 border-b border-[#facc15] overflow-hidden bg-white">
        <HeroParticles />
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#facc15]/15 blur-3xl pointer-events-none" />

        <div className="container-x relative z-10 text-left">
          <Reveal>
            <div className="mb-4 md:mb-6 flex flex-wrap items-center gap-3">
              <span className="text-xs md:text-sm text-[#00779b] font-semibold tracking-[0.22em] uppercase">
                SERVIZI ENERGETICI
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#f5d000] text-[#012b3a] text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
                <Zap size={12} /> Progettazione, Installazione & Manutenzione
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight text-[#012b3a] max-w-4xl pb-2">
              Fotovoltaico e servizi energetici <br className="hidden md:block" />
              
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-xl text-[#00779b] max-w-3xl leading-relaxed">
               Accompagniamo ogni intervento dall'analisi preliminare dei consumi fino alla messa in esercizio e al monitoraggio nel tempo.
            </p>

            {/* Destinatari su barra continua (senza card) */}
            <div className="mt-10 pt-8 border-t border-[#facc15]/70 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0a5c75] shrink-0">
                DESTINATARI:
              </span>
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6">
                {destinatari.map((item, idx) => (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <item.icon size={18} className="text-[#1da1db] shrink-0" />
                    <span className="text-sm md:text-base font-bold text-[#012b3a]">
                      {item.label}
                    </span>
                    {idx < destinatari.length - 1 && (
                      <span className="hidden sm:inline-block ml-3 text-[#facc15] font-black">•</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEZIONE 1: LA SOLUZIONE PROPOSTA — IMPAGINAZIONE ASIMMETRICA A DOPPIO POLO ENERGETICO */}
      <section className="py-16 md:py-24 bg-white border-b border-[#facc15]">
        <div className="container-x max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="w-full lg:w-5/12">
              <Reveal>
                <div className="relative">
                  <div className="hidden sm:block absolute -top-3 -left-3 right-12 h-1 energy-line-x rounded-full pointer-events-none" />
                  <div className="hidden sm:block absolute -bottom-3 left-12 -right-3 h-1 energy-line-x rounded-full pointer-events-none" />
                  <FicoImage
                    src={energiaImg}
                    alt="Fotovoltaico e Servizi Energetici FI.CO."
                    variant={3}
                    className="w-full aspect-[4/3] md:h-[450px] rounded-3xl shadow-xl"
                  />
                </div>
              </Reveal>
            </div>

            <div className="w-full lg:w-7/12 text-left">
              <Reveal delay={100}>
                <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                  LA SOLUZIONE PROPOSTA
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight pb-2">
                  Impianti progettati ad hoc e assistiti nel tempo
                </h2>

                {/* Doppio tracciato energetico verticale continuo */}
                <div className="mt-10 relative pl-8 sm:pl-10 space-y-10">
                  <div className="absolute left-0 top-2 bottom-2 w-[3px] energy-line-y rounded-full" />

                  <div className="relative group">
                    <div className="solar-pulse absolute -left-[41px] sm:-left-[49px] top-0.5 w-6 h-6 rounded-full bg-[#013a52] border-2 border-[#facc15] flex items-center justify-center text-[10px] font-extrabold text-[#facc15]">
                      01
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#1da1db]">
                        FOTOVOLTAICO E SISTEMI ENERGETICI
                      </span>
                      <span className="text-xs font-bold text-[#0a5c75]">
                        — Progettati per il sito
                      </span>
                    </div>
                    <p className="text-base md:text-lg text-[#012b3a] font-semibold leading-relaxed">
                      Fotovoltaico, accumulo, pensiline solari e ricarica elettrica.
                    </p>
                  </div>

                  <div className="relative group">
                    <div className="solar-pulse absolute -left-[41px] sm:-left-[49px] top-0.5 w-6 h-6 rounded-full bg-[#013a52] border-2 border-[#facc15] flex items-center justify-center text-[10px] font-extrabold text-[#facc15]">
                      02
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#1da1db]">
                        ADEGUAMENTI E MANUTENZIONE
                      </span>
                      <span className="text-xs font-bold text-[#0a5c75]">
                        — Assistenza nel tempo
                      </span>
                    </div>
                    <p className="text-base md:text-lg text-[#012b3a] font-semibold leading-relaxed">
                      Adeguamenti per integrare il fotovoltaico; manutenzione programmata o su guasto.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* SEZIONE 2: LE FASI DEL SERVIZIO — CIRCUITO DI CORRENTE A 5 NODI */}
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
                IL CICLO OPERATIVO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Le fasi del servizio
              </h2>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative py-4">
              {/* Condotto orizzontale animato su Desktop */}
              <div className="hidden lg:block absolute top-[48px] left-[8%] right-[8%] h-[3px] energy-line-x z-0 rounded-full" />

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                {fasiServizio.map((item) => (
                  <div
                    key={item.step}
                    className="flex flex-col items-center lg:items-center text-center group"
                  >
                    <div className="relative solar-pulse w-20 h-20 rounded-full bg-[#013a52] border-2 border-[#facc15] flex items-center justify-center text-[#facc15] mb-4 shadow-md group-hover:scale-110 group-hover:bg-[#1da1db] group-hover:text-white transition-all duration-300">
                      <item.icon size={30} />
                    </div>
                    <span className="text-xs font-extrabold tracking-[0.2em] text-[#1da1db] uppercase mb-1">
                      FASE {item.step}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#012b3a]">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEZIONE 3: DETTAGLIO DEI SERVIZI — LAYOUT EDITORIALE STICKY + FLUSSI ORIZZONTALI */}
      <section className="py-16 md:py-24 bg-white border-b border-[#facc15]">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-16 md:mb-20 text-left">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                DETTAGLIO DEI SERVIZI
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Dall'analisi energetica alla gestione dell'impianto
              </h2>
            </div>
          </Reveal>

          <div className="divide-y-2 divide-[#facc15]">
            {dettaglioServizi.map((blocco) => (
              <div key={blocco.num} className="py-12 first:pt-0 last:pb-0">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Colonna Sticky Sinistra */}
                  <div className="lg:col-span-5 lg:sticky lg:top-32 text-left">
                    <Reveal>
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#013a52] border-2 border-[#facc15] text-[#facc15] flex items-center justify-center shrink-0 shadow-md">
                          <blocco.icon size={22} />
                        </div>
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1da1db] block">
                            AMBITO {blocco.num} · {blocco.badge}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-extrabold text-[#012b3a] leading-snug mb-3">
                        {blocco.title}
                      </h3>
                      <p className="text-base text-[#00779b] leading-relaxed">
                        {blocco.desc}
                      </p>
                      <div className="mt-5 w-20 h-1 energy-line-x rounded-full" />
                    </Reveal>
                  </div>

                  {/* Colonna Destra: Tracce Tecniche Orizzontali */}
                  <div className="lg:col-span-7 divide-y divide-[#1da1db]/25 border-t border-b border-[#1da1db]/25">
                    {blocco.items.map((sub, i) => (
                      <Reveal key={sub.name} delay={i * 70}>
                        <div className="group py-6 px-3 sm:px-5 flex items-start gap-5 hover:bg-[#f4fafd] transition-colors text-left relative overflow-hidden">
                          <div className="w-9 h-9 rounded-xl bg-[#f5d000] text-[#012b3a] font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs group-hover:scale-110 transition-transform">
                            {sub.code}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-extrabold text-[#012b3a] group-hover:text-[#0a5c75] transition-colors">
                              {sub.name}
                            </h4>
                            <p className="text-sm md:text-base text-[#00779b] leading-relaxed mt-1">
                              {sub.desc}
                            </p>
                          </div>
                          <CheckCircle2
                            size={20}
                            className="text-[#1da1db] shrink-0 mt-1 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all"
                          />
                        </div>
                      </Reveal>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE 4: COMUNITÀ ENERGETICHE RINNOVABILI & PREVENTIVO SU MISURA */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x max-w-6xl mx-auto flex flex-col gap-14">
          
          {/* Fascia Aperta: Comunità Energetiche Rinnovabili */}
          <Reveal>
            <div className="relative bg-white/95 backdrop-blur-xs border-l-4 border-[#1da1db] border-y border-r border-y-[#facc15] border-r-[#facc15] rounded-r-3xl p-8 md:p-12 shadow-md text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#1da1db] mb-3">
                    <Users size={16} /> ENERGIA CONDIVISA
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#012b3a] mb-3">
                   Fonti rinnovabili per comunità resilienti
                  </h3>
                  <p className="text-base md:text-lg text-[#00779b] leading-relaxed">
                    Fi.Co. affianca imprese ed enti nella valutazione e progettazione di configurazioni energetiche condivise. Il servizio viene definito in base ai soggetti coinvolti e al progetto.
                  </p>
                </div>
                <div className="shrink-0 hidden md:flex w-20 h-20 rounded-full bg-[#013a52] border-2 border-[#facc15] items-center justify-center text-[#facc15] solar-pulse">
                  <Sparkles size={32} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Fascia Finale: Preventivo su Misura + Call to Action */}
          <Reveal delay={150}>
            <div className="relative bg-white border-y-2 border-[#facc15] py-12 px-6 sm:px-10 md:px-14 shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 energy-line-x" />

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="max-w-3xl text-left">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5d000] text-[#012b3a] text-xs font-extrabold uppercase tracking-wider mb-4">
                    <FileCheck2 size={14} /> PREVENTIVO SU MISURA
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#012b3a] leading-tight mb-4">
                    Trasparenza progettuale, tecnica ed economica
                  </h3>
                  <p className="text-[#00779b] text-base md:text-lg leading-relaxed">
                    Il preventivo specifica impianto, eventuali adeguamenti, attività e frequenza della manutenzione, opere incluse ed escluse, tempi e importo.
                  </p>
                </div>

                <div className="shrink-0 w-full lg:w-auto">
                  <Link
                    to="/contatti"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-2xl bg-[#f5d000] text-[#012b3a] hover:bg-[#eab308] hover:scale-105 transition-all shadow-md w-full lg:w-auto text-center"
                  >
                    Richiedi un preventivo <ArrowRight size={20} />
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