import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, ArrowRight, Sparkles, CheckCircle2, Code2, Bot } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";
import { FicoImage } from "@/components/site/FicoImage";

import itservicesImg from "@/assets/itservices.jpg";
import digitaldevelopmentImg from "@/assets/digitaldevelopment.webp";

export const Route = createFileRoute("/servizi/it-software")({
  component: ItSoftwarePage,
});

function ItSoftwarePage() {
  const fasiSviluppo = [
    {
      step: "01",
      title: "Analisi",
      desc: "Obiettivi, pubblico, contenuti e requisiti funzionali.",
    },
    {
      step: "02",
      title: "UX/UI e architettura",
      desc: "Struttura delle pagine, navigazione e flussi utente.",
    },
    {
      step: "03",
      title: "Design",
      desc: "Interfaccia coerente con identità e comunicazione aziendale.",
    },
    {
      step: "04",
      title: "Sviluppo",
      desc: "Realizzazione delle funzionalità e integrazione dei contenuti.",
    },
    {
      step: "05",
      title: "Test e pubblicazione",
      desc: "Controlli, ottimizzazione e messa online della soluzione.",
    },
    {
      step: "06",
      title: "Supporto ed evoluzione",
      desc: "Aggiornamenti, manutenzione e sviluppo di nuove funzioni.",
    }
  ];

  const soluzioni = [
    { title: "Presentare l'azienda", desc: "Siti corporate e vetrina per raccontare identità, servizi, competenze, progetti e creare nuovi punti di contatto." },
    { title: "Promuovere un'offerta", desc: "Landing page dedicate a campagne, eventi, nuovi servizi e attività di lead generation." },
    { title: "Vendere online", desc: "Soluzioni e-commerce per organizzare prodotti, servizi e processi di acquisto digitali." },
    { title: "Digitalizzare un processo", desc: "Web app e applicazioni dedicate per trasformare attività operative, flussi informativi e servizi in strumenti digitali." },
    { title: "Comunicare nel tempo", desc: "Blog e piattaforme editoriali per aggiornamenti, approfondimenti, progetti e contenuti aziendali." },
    { title: "Creare un ecosistema digitale", desc: "Marketplace, portali e piattaforme capaci di mettere in relazione utenti, operatori, servizi e dati." },
    { title: "Connettere spazi, impianti e servizi", desc: "Soluzioni IoT e piattaforme digitali per raccogliere dati, monitorare dispositivi e mettere in comunicazione sistemi e impianti." },
    { title: "Rendere gli edifici intelligenti", desc: "Soluzioni Smart Building orientate all'integrazione e al monitoraggio di impianti, consumi, connettività e servizi." },
    { title: "Abilitare servizi Smart City", desc: "Tecnologie, sensori e piattaforme software per valorizzare i dati del territorio e supportare nuovi servizi per spazi pubblici." }
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
                ECOSISTEMA DIGITALE
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight text-[#012b3a] max-w-4xl pb-2">
              IT & Software
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-[#00779b] max-w-3xl leading-relaxed">
              Fi.Co. affianca servizi IT, networking e cablaggio allo sviluppo software, web e applicativo, costruendo strumenti digitali e soluzioni su misura. Dalla presenza online essenziale fino a piattaforme applicative e commerciali.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEZIONE 1: DALLA PRESENZA AL SERVIZIO */}
      <section className="py-16 md:py-24 bg-white border-b border-[#facc15]">
        <div className="container-x max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="w-full lg:w-5/12">
              <Reveal>
                <div className="relative">
                  <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#1da1db] rounded-tl-3xl pointer-events-none" />
                  <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#facc15] rounded-br-3xl pointer-events-none" />
                  <FicoImage
                    src={digitaldevelopmentImg}
                    alt="IT e Sviluppo Software FI.CO."
                    variant={3}
                    className="w-full aspect-[4/3] md:h-[460px] rounded-3xl shadow-xl"
                  />
                </div>
              </Reveal>
            </div>

            <div className="w-full lg:w-7/12 text-left">
              <Reveal delay={100}>
                <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                  DALLA PRESENZA ONLINE AL SERVIZIO DIGITALE
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight pb-2">
                  Dalla complessità, una direzione chiara
                </h2>
                <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                  Un processo strutturato per progettare esperienze web partendo dagli obiettivi e dalle esigenze operative, accompagnando ogni progetto dall'analisi all'evoluzione nel tempo.
                </p>

                <div className="mt-10 relative pl-6 sm:pl-8 border-l-2 border-[#facc15] space-y-6">
                  {fasiSviluppo.map((fase, idx) => (
                    <div key={idx} className="relative group">
                      <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#1da1db]" />
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                         <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1da1db]">
                            FASE {fase.step}
                          </span>
                      </div>
                      <h4 className="text-base font-extrabold text-[#012b3a]">{fase.title}</h4>
                      <p className="text-sm md:text-[15px] text-[#00779b] leading-relaxed">
                        {fase.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 2: SOLUZIONI PER OBIETTIVO */}
      <section
        className="py-16 md:py-24 border-b border-[#facc15] relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x max-w-6xl mx-auto flex flex-col gap-16 md:gap-20">
          
          <Reveal>
            <div className="max-w-3xl text-left">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-3">
                SOLUZIONI PER OBIETTIVO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                La tecnologia al servizio del business
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                FI.CO. trasforma esigenze, processi e dati in soluzioni digitali concrete, connesse ed evolutive: dal web alle applicazioni, fino a ecosistemi IoT per edifici e contesti urbani. Ogni soluzione viene progettata partendo dal contesto operativo e dalle persone che dovranno utilizzarla.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
             {soluzioni.map((soluzione, idx) => (
              <Reveal key={soluzione.title} delay={idx * 50}>
                <div className="bg-white border border-[#facc15] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow h-full text-left">
                  <div className="w-12 h-12 rounded-full bg-[#013a52] flex items-center justify-center text-[#facc15] mb-6">
                    <Globe size={22} />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#012b3a] mb-3">
                    {soluzione.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-[#00779b] leading-relaxed">
                    {soluzione.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* SEZIONE 3: INNOVAZIONE, VIBE CODING E AI */}
      <section className="py-16 md:py-24 bg-white border-b border-[#facc15] overflow-hidden">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-12 md:mb-16 text-left">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                RICERCA E INNOVAZIONE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Approcci avanzati e ricerca applicata
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                Il nostro sviluppo non si ferma agli standard di mercato. Sperimentiamo e implementiamo continuamente nuove metodologie e tecnologie basate sull'intelligenza artificiale per ottimizzare lo sviluppo e creare soluzioni interattive di nuova generazione.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Box 1: Vibe Coding */}
            <Reveal delay={100}>
              <div className="relative bg-white border-2 border-[#1da1db]/30 rounded-3xl p-8 sm:p-10 text-left shadow-sm h-full group hover:border-[#1da1db] transition-colors">
                <div className="w-14 h-14 rounded-xl bg-[#013a52] text-[#facc15] flex items-center justify-center mb-6">
                  <Code2 size={28} />
                </div>
                <h3 className="text-2xl font-extrabold text-[#012b3a] mb-4">
                  AI-Augmented Engineering <br/> (Vibe Coding)
                </h3>
                <p className="text-[#00779b] leading-relaxed text-[15px] sm:text-base">
                  Adottiamo un approccio di sviluppo pragmatico e potenziato dall'IA, combinando la prototipazione rapida con un'esecuzione tecnica rigorosa. Sfruttiamo i modelli LLM più avanzati (Gemini, Claude, Copilot) per abbattere i tempi di stesura del codice boilerplate, permettendo ai nostri sviluppatori di concentrarsi esclusivamente sull'architettura, sulla logica di business e sulla User Experience.
                </p>
              </div>
            </Reveal>

            {/* Box 2: Assistenti Vocali Custom & Domotica */}
            <Reveal delay={200}>
              <div className="relative bg-white border-2 border-[#facc15]/60 rounded-3xl p-8 sm:p-10 text-left shadow-sm h-full group hover:border-[#facc15] transition-colors">
                <div className="w-14 h-14 rounded-xl bg-[#013a52] text-[#facc15] flex items-center justify-center mb-6">
                  <Bot size={28} />
                </div>
                <h3 className="text-2xl font-extrabold text-[#012b3a] mb-4">
                  Assistenti Custom & <br/> Domotica Avanzata
                </h3>
                <p className="text-[#00779b] leading-relaxed text-[15px] sm:text-base">
                  Progettiamo e sviluppiamo assistenti vocali proprietari in Python (ispirati a logiche J.A.R.V.I.S.) integrati nativamente con Home Assistant tramite API REST. Sfruttiamo l'intelligenza di modelli generativi come Gemini per il processamento del linguaggio naturale, offrendo il controllo domotico degli ambienti tramite interfacce visive interattive basate su reti neurali 3D.
                </p>
              </div>
            </Reveal>
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
                  Un approccio orientato alla chiarezza, alla funzionalità e alla crescita del progetto.
                </h3>
                <p className="text-[#00779b] text-base md:text-lg leading-relaxed mb-6">
                  Un ecosistema tecnologico connesso, dove infrastrutture, reti, sistemi IT e software dialogano per creare soluzioni integrate, affidabili e costruite sulle esigenze operative.
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
                  Sviluppa il tuo ecosistema <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}