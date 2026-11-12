import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sun,
  BatteryCharging,
  Wrench,
  Users,
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
          "Fotovoltaico e servizi energetici. Dalla progettazione all'efficienza e manutenzione.",
      },
    ],
  }),
  component: EnergiaPage,
});

function EnergiaPage() {
  const destinatari = [
    { label: "Edifici residenziali e commerciali", icon: Building2 },
    { label: "Condomìni", icon: Home },
    { label: "PMI e siti produttivi", icon: Factory },
  ];

  const dettaglioServizi = [
    {
      num: "01",
      icon: Sun,
      title: "Analisi e progettazione energetica",
      items: [
        { name: "Analisi dei consumi", desc: "Bollette, dati disponibili e profili di utilizzo." },
        { name: "Studio di fattibilità", desc: "Spazi, impianti esistenti e obiettivi del cliente." },
        { name: "Dimensionamento", desc: "Potenza fotovoltaica, accumulo e sistemi di ricarica." },
      ],
    },
    {
      num: "02",
      icon: BatteryCharging,
      title: "Installazione e adeguamento degli impianti",
      items: [
        { name: "Fotovoltaico e accumulo", desc: "Fornitura, posa e collegamento dei componenti previsti." },
        { name: "Adeguamento impianti", desc: "Interventi su quadri, protezioni e collegamenti, quando necessari." },
        { name: "Collaudo e avvio", desc: "Verifiche funzionali e messa in servizio dell'impianto." },
      ],
    },
    {
      num: "03",
      icon: Wrench,
      title: "Manutenzione e assistenza",
      items: [
        { name: "Manutenzione programmata", desc: "Controlli periodici su moduli, inverter, cablaggi e protezioni." },
        { name: "Interventi su guasto", desc: "Diagnosi e ripristino delle anomalie rilevate." },
        { name: "Controllo delle prestazioni", desc: "Verifica della produzione e dei dati, anche da remoto." },
      ],
    },
  ];

  return (
    <div className="bg-white w-full min-h-screen pb-20 overflow-x-hidden selection:bg-[#facc15] selection:text-[#012b3a]">
      <style>{`
        @keyframes energy-stream-x { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .energy-line-x { background: linear-gradient(90deg, #1da1db 0%, #facc15 50%, #1da1db 100%); background-size: 200% 100%; animation: energy-stream-x 3.2s linear infinite; }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-36 pb-14 md:pb-20 border-b border-[#facc15] overflow-hidden bg-white">
        <HeroParticles />
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#facc15]/15 blur-3xl pointer-events-none" />

        <div className="container-x relative z-10 text-left">
          <Reveal>
            <div className="mb-4 md:mb-6 flex flex-wrap items-center gap-3">
              <span className="text-xs md:text-sm text-[#00779b] font-semibold tracking-[0.22em] uppercase">
                LA PROSSIMA CONNESSIONE
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight text-[#012b3a] max-w-4xl pb-2">
              Energia
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-xl text-[#00779b] max-w-3xl leading-relaxed">
              Fi.Co. sta sviluppando nuove competenze e partnership nel settore energetico, con l'obiettivo di integrare progettazione, tecnologia e infrastrutture in una nuova area di attività.
              Un percorso costruito con gradualità, concretezza e la stessa attenzione ai processi che caratterizza gli altri ambiti dell'azienda.
            </p>

            <div className="mt-10 pt-8 border-t border-[#facc15]/70 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0a5c75] shrink-0">
                AMBITI DI APPLICAZIONE:
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

      {/* SEZIONE 1: DALL'ANALISI ALL'EFFICIENZA */}
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
                  SOLUZIONI EFFICIENTI
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight pb-2">
                  Dall'analisi all'efficienza
                </h2>
                <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                  Soluzioni energetiche, efficienza, infrastrutture e tecnologie integrate. Mettiamo in relazione esigenze, impianti, tecnologie e dati per costruire soluzioni capaci di migliorare consumi, gestione e prestazioni.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 2: DETTAGLIO DEI SERVIZI */}
      <section className="py-16 md:py-24 bg-white border-b border-[#facc15]">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-16 md:mb-20 text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Le fasi del servizio
              </h2>
            </div>
          </Reveal>

          <div className="divide-y-2 divide-[#facc15]">
            {dettaglioServizi.map((blocco) => (
              <div key={blocco.num} className="py-12 first:pt-0 last:pb-0">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  <div className="lg:col-span-5 lg:sticky lg:top-32 text-left">
                    <Reveal>
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#013a52] border-2 border-[#facc15] text-[#facc15] flex items-center justify-center shrink-0 shadow-md">
                          <blocco.icon size={22} />
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-[#012b3a] leading-snug mb-3">
                        {blocco.title}
                      </h3>
                      <div className="mt-5 w-20 h-1 energy-line-x rounded-full" />
                    </Reveal>
                  </div>

                  <div className="lg:col-span-7 divide-y divide-[#1da1db]/25 border-t border-b border-[#1da1db]/25">
                    {blocco.items.map((sub, i) => (
                      <Reveal key={sub.name} delay={i * 70}>
                        <div className="group py-6 px-3 flex flex-col text-left">
                          <h4 className="text-lg font-extrabold text-[#012b3a]">
                            {sub.name}
                          </h4>
                          <p className="text-sm md:text-base text-[#00779b] leading-relaxed mt-1">
                            {sub.desc}
                          </p>
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

      {/* SEZIONE 3: COMUNITÀ ENERGETICHE E VALORE AGGIUNTO */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x max-w-6xl mx-auto flex flex-col gap-14">
          
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
                    Fi.Co. può affiancare imprese ed enti nella valutazione e progettazione di configurazioni energetiche condivise.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
             <div className="relative bg-[#f4fafd] border-l-4 border-[#1da1db] py-12 px-8 sm:px-12 rounded-r-3xl shadow-sm text-left flex flex-col md:flex-row items-start justify-between gap-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1da1db] mb-4">
                  <Sparkles size={16} /> IL VALORE AGGIUNTO FI.CO.
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#012b3a] leading-tight mb-4">
                  Un approccio orientato all'efficienza, all'integrazione e alla sostenibilità concreta.
                </h3>
                <p className="text-[#00779b] text-base md:text-lg leading-relaxed mb-6">
                  Mettiamo in relazione esigenze energetiche, impianti, tecnologie e dati per costruire soluzioni capaci di migliorare consumi, gestione e prestazioni, accompagnando il progetto dalla valutazione iniziale alla sua evoluzione nel tempo.
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