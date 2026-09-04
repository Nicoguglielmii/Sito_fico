import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";

// Questi asset identificano le aree di servizio presentate nella prima parte della pagina.
// Gli import espliciti permettono al bundler di gestire correttamente i percorsi e le
// ottimizzazioni delle immagini senza affidarsi a stringhe costruite a runtime.
import fibraMobileImg from "@/assets/fibraotticaemobile.jpg";
import networkingImg from "@/assets/networking.jpg";
import energiaImg from "@/assets/Energia.jpg";
import infrastruttureImg from "@/assets/infrastrutture.jpg";

// Queste immagini accompagnano i principali contesti in cui vengono applicate le competenze.
// Sono mantenute separate dagli asset dei servizi per rendere chiara la distinzione tra
// cio che Fi.Co. offre e i destinatari o gli scenari a cui l'offerta si rivolge.
import operatoriImg from "@/assets/provider.avif";
import paImg from "@/assets/pubblicaamministrazione.jpg";
import privatiImg from "@/assets/privati.jpg";

export const Route = createFileRoute("/servizi/")({
  component: ServiziIndex,
});

function ServiziIndex() {
  return (
    <div className="bg-[#011C27] w-full min-h-screen">
      {/*
        HERO: introduce in modo diretto l'ampiezza dell'offerta e prepara il passaggio
        alle sezioni successive. Lo sfondo interattivo rimane dietro al contenuto,
        mentre il container mantiene testo e titolo allineati al resto del sito.
      */}
      <section className="relative pt-36 pb-4 overflow-hidden">
        <HeroParticles />
        <div className="container-x relative z-10 text-left">
          <Reveal>
            <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">
              I NOSTRI SERVIZI
            </span>
            <h1 className="mt-4 text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] max-w-4xl pb-2">
              Progettiamo, sviluppiamo, connettiamo.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed text-justify">
              Competenze tecniche e digitali per progettare infrastrutture, sviluppare strumenti e governare i processi dall'analisi al risultato.
            </p>
          </Reveal>
        </div>
      </section>

      {/*
        INTRODUZIONE: collega la competenza infrastrutturale alla componente software.
        Il layout a due colonne desktop diventa una sequenza verticale su schermi stretti,
        così il testo resta leggibile e l'immagine conserva un ruolo narrativo chiaro.
      */}
      <section className="py-12 md:py-16 relative z-20 border-t border-[#0e7490]/30">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Il testo definisce il metodo di lavoro e il collegamento tra le diverse aree. */}
            <div className="w-full lg:w-1/2 text-left">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight font-[var(--font-display)] text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] pb-2 mb-6">
                  Dalle infrastrutture al software.
                </h2>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed text-justify">
                  Fi.Co. opera attraverso competenze specialistiche unite dallo stesso metodo: comprendere un'esigenza, progettare una soluzione realizzabile e governarne ogni fase. Il nostro percorso nasce nelle telecomunicazioni e nella progettazione di reti in fibra ottica, per ampliarsi verso servizi IT, networking, sviluppo software e nuove opportunità nel settore energetico. Oggi lavoriamo su progetti nei quali infrastrutture, dati e tecnologia possono integrarsi per rispondere alle esigenze di operatori, imprese, enti e privati.
                </p>
              </Reveal>
            </div>

            {/* L'immagine completa il messaggio introduttivo senza interrompere il flusso del testo. */}
            <div className="w-full lg:w-1/2">
              <Reveal delay={150}>
                <img 
                  src={infrastruttureImg} 
                  alt="Dalle infrastrutture al software" 
                  className="w-full h-auto aspect-video lg:aspect-auto lg:h-[400px] object-cover rounded-3xl border border-[#0e7490]/30 shadow-2xl" 
                />
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/*
        AREE PRINCIPALI: raccoglie i tre servizi in una sequenza alternata.
        Ogni riga combina un'immagine, una sintesi e un'azione; l'alternanza visiva
        aiuta a distinguere le aree mantenendo una struttura unica e prevedibile.
      */}
      <section className="py-12 relative z-20 border-t border-[#0e7490]/30">
        <div className="container-x">
          <div className="max-w-3xl mb-4 text-left">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight font-[var(--font-display)] text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] pb-2">
                Tre aree, un unico approccio.
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col gap-8 md:gap-12">
            
            {/* FIBRA & MOBILE: primo servizio, con immagine a sinistra e accesso alla pagina dedicata. */}
            <Reveal delay={100}>
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 py-8 border-b border-white/10 last:border-b-0">
                {/* Il link avvolge l'immagine e abilita lo zoom solo come feedback visivo dell'interazione. */}
                <Link 
                  to="/servizi/fibra-mobile" 
                  className="block group overflow-hidden shrink-0 rounded-2xl w-full md:max-w-[400px] lg:max-w-[480px] border border-[#0e7490]/30 shadow-lg"
                >
                  <img
                    src={fibraMobileImg}
                    alt="Fibra & Mobile"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent">
                    Fibra & Mobile
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl text-justify">
                    Dalla survey al network design, dal permitting all'implementazione, fino agli As-Built e al supporto operativo.
                  </p>
                  <Link to="/servizi/fibra-mobile" className="inline-flex items-center text-[#facc15] font-bold hover:text-yellow-300 gap-2 w-max">
                    Scopri di più <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* IT & SOFTWARE: secondo servizio, disposto specularmente rispetto al precedente. */}
            <Reveal delay={200}>
              <div className="flex flex-col md:flex-row-reverse md:items-center gap-8 md:gap-12 py-8 border-b border-white/10 last:border-b-0">
                {/* Anche questa immagine e cliccabile e porta alla relativa scheda di approfondimento. */}
                <Link 
                  to="/servizi/it-software" 
                  className="block group overflow-hidden shrink-0 rounded-2xl w-full md:max-w-[400px] lg:max-w-[480px] border border-[#0e7490]/30 shadow-lg"
                >
                  <img
                    src={networkingImg}
                    alt="IT, Networking & Software"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent">
                    IT, Networking & Software
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl text-justify">
                    Dall'infrastruttura fisica agli ambienti digitali, sviluppiamo e integriamo soluzioni tecnologiche per esigenze operative.
                  </p>
                  <Link to="/servizi/it-software" className="inline-flex items-center text-[#facc15] font-bold hover:text-yellow-300 gap-2 w-max">
                    Scopri di più <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* ENERGIA: area in sviluppo, mostrata senza link finche la pagina dedicata non e disponibile. */}
            <Reveal delay={300}>
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 py-8 border-b border-white/10 last:border-b-0 relative">
                {/* L'immagine resta statica per comunicare che il servizio e ancora in preparazione. */}
                <div className="overflow-hidden shrink-0 rounded-2xl w-full md:max-w-[400px] lg:max-w-[480px] border border-[#0e7490]/30 shadow-lg">
                  <img
                    src={energiaImg}
                    alt="Energia"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center text-left">
                  <div className="flex items-center gap-4 flex-wrap mb-4">
                    <h3 className="text-3xl md:text-4xl font-bold pb-2 bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent">
                      Energia
                    </h3>
                    <span className="bg-[#facc15] text-[#011C27] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                      In Sviluppo
                    </span>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl text-justify">
                    Stiamo sviluppando nuove competenze nel settore energetico, per integrare progettazione, tecnologia ed efficienza.
                  </p>
                  <span className="inline-flex items-center text-white/40 font-semibold gap-2 cursor-not-allowed w-max">
                    Pagina in arrivo
                  </span>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/*
        AMBITI DI APPLICAZIONE: sposta l'attenzione dai servizi ai contesti operativi.
        Le tre righe condividono proporzioni e spaziature, ma alternano la posizione
        dell'immagine per mantenere ritmo e riconoscibilita durante lo scorrimento.
      */}
      <section className="pt-12 md:pt-24 pb-8 md:pb-16 relative z-20 border-t border-[#0e7490]/30">
        <div className="container-x">
          <div className="text-left max-w-[100%] mb-8 overflow-hidden">
            <Reveal>
              <h2 className="text-[clamp(2.8rem,4vw,6.8rem)] font-bold leading-[0.85] tracking-[-0.05em] font-[var(--font-display)] text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] pb-2 whitespace-nowrap w-fit">
                Competenze al servizio di contesti diversi.
              </h2>
            </Reveal>
          </div>
          
          <div className="flex flex-col gap-16 md:gap-24 w-full">
            
            {/* OPERATORI: contesto telecomunicazioni, con immagine a sinistra. */}
            <Reveal delay={100}>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2">
                  <img 
                    src={operatoriImg} 
                    alt="Operatori" 
                    className="w-full aspect-[4/3] md:aspect-auto md:h-[350px] object-cover rounded-3xl border border-[#0e7490]/30 shadow-2xl" 
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent">
                    Operatori
                  </h3>
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed text-justify">
                    Sviluppo, documentazione e supporto per infrastrutture di telecomunicazione.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* PUBBLICHE AMMINISTRAZIONI: contesto istituzionale, con disposizione invertita. */}
            <Reveal delay={200}>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2">
                  <img 
                    src={paImg} 
                    alt="Pubbliche Amministrazioni" 
                    className="w-full aspect-[4/3] md:aspect-auto md:h-[350px] object-cover rounded-3xl border border-[#0e7490]/30 shadow-2xl" 
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent">
                    Pubbliche Amministrazioni
                  </h3>
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed text-justify">
                    Gestione autorizzativa, servizi tecnologici e soluzioni digitali integrate.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* IMPRESE E PRIVATI: contesto aziendale e consumer, nuovamente con immagine a sinistra. */}
            <Reveal delay={300}>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2">
                  <img 
                    src={privatiImg} 
                    alt="Imprese e Privati" 
                    className="w-full aspect-[4/3] md:aspect-auto md:h-[350px] object-cover rounded-3xl border border-[#0e7490]/30 shadow-2xl" 
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent">
                    Imprese e Privati
                  </h3>
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed text-justify">
                    Infrastrutture di rete, servizi IT, sviluppo web e consulenza tecnologica.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </div>
  );
}