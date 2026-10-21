import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, PenTool, GitMerge, FileText, TrendingUp } from "lucide-react";
import fibraMobileImg from "@/assets/fibraotticaemobile.jpg";
import networkingImg from "@/assets/project-it.jpg";
import ascensoristicaImg from "@/assets/ascensoristica.jpg";
import energiaImg from "@/assets/Energia.jpg";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";
import { FicoImage } from "@/components/site/FicoImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — FI.CO. SRL" },
      {
        name: "description",
        content: "FI.CO. SRL: Uniamo competenze tecniche, progettuali e digitali per trasformare esigenze complesse in infrastrutture, sistemi e soluzioni capaci di evolvere.",
      },
      { property: "og:title", content: "FI.CO. SRL — Tutto parte da una connessione" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function InteractiveHeroLogo() {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    gsap.set(".hero-piktogramma-path", { opacity: 0, strokeDashoffset: 100 });

    tl.current = gsap.timeline({ paused: true });
    tl.current
      .set(".hero-piktogramma-path", { opacity: 1 })
      .to(".hero-piktogramma-path", {
        strokeDashoffset: 0,
        duration: 2.5,
        ease: "power2.inOut",
      });
  }, { scope: container });

  const handleMouseEnter = () => tl.current?.play();
  const handleMouseLeave = () => tl.current?.reverse();

  return (
    <div 
      ref={container}
      className="relative w-full max-w-full sm:max-w-xl mx-auto cursor-pointer flex flex-col items-center justify-center pt-4 pb-10 group overflow-hidden sm:overflow-visible"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-[#facc15]/35 rounded-full blur-[60px] sm:blur-[80px] group-hover:bg-[#facc15]/50 transition-colors duration-[2000ms] pointer-events-none" />
      
      <svg viewBox="0 -40 170 170" className="w-full h-auto overflow-hidden sm:overflow-visible z-10 relative px-4 sm:px-0">
        <g className="hero-piktogramma-container">
          <path 
            className="hero-piktogramma-path" 
            pathLength="100"
            d="M 20,70 C 60,10 130,-30 150,115" 
            stroke="#00a8cc" 
            strokeWidth="9" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="100"
            strokeDashoffset="100"
            opacity="0" 
          />
          <path 
            className="hero-piktogramma-path" 
            pathLength="100"
            d="M 20,70 C 25,-20 55,0 55,115 C 80,45 125,45 150,115" 
            stroke="#0284c7" 
            strokeWidth="9" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="100"
            strokeDashoffset="100"
            opacity="0" 
          />
          
          <circle cx="20" cy="70" r="10" fill="#f5b800" />   
          <circle cx="55" cy="115" r="10" fill="#f5b800" />  
          <circle cx="150" cy="115" r="10" fill="#f5b800" /> 
        </g>
      </svg>

      <div className="mt-8 sm:mt-12 text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#00779b]/70 group-hover:text-[#012b3a] transition-colors duration-1000 text-center">
        Passa il mouse o tocca lo schermo per connettere
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="bg-white w-full max-w-[100vw] min-h-screen overflow-x-hidden flex flex-col">
      
      {/* HERO SECTION */}
      <section className="relative pt-28 sm:pt-36 lg:pt-44 pb-8 sm:pb-12 flex flex-col justify-center overflow-hidden w-full max-w-[100vw] bg-white">
        <HeroParticles />

        <div className="container-x relative z-10 flex flex-col items-start text-left w-full">
          <Reveal delay={100}>
            <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-7xl lg:text-[84px] font-extrabold leading-[1.05] tracking-tight text-[#012b3a] max-w-5xl pb-2 mt-4 sm:mt-0">
              Tutto parte da una connessione
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#012b3a] max-w-2xl leading-relaxed">
              Uniamo competenze tecniche, progettuali e digitali per trasformare esigenze complesse in infrastrutture, sistemi e soluzioni capaci di evolvere.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-start items-stretch sm:items-center gap-4 w-full">
              <Link
                to="/chi-siamo"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-4 font-bold rounded-2xl bg-[#f5d000] text-[#012b3a] hover:bg-[#eab308] hover:scale-105 transition-all shadow-sm w-full sm:w-auto text-center"
              >
                Scopri cosa facciamo
              </Link>
              <Link
                to="/contatti"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-4 font-bold rounded-2xl bg-[#f5d000] text-[#012b3a] hover:bg-[#eab308] hover:scale-105 transition-all shadow-sm w-full sm:w-auto text-center"
              >
                Parlaci del tuo progetto <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PITTOGRAMMA INTERATTIVO */}
      <section className="relative z-20 pb-8 w-full max-w-[100vw] overflow-hidden bg-white">
        <div className="container-x px-4">
          <Reveal delay={400}>
            <InteractiveHeroLogo />
          </Reveal>
        </div>
      </section>

      {/* CONTENUTO CENTRALE CON PATTERN DI PUNTINI GIALLI */}
      <div
        className="w-full"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* INTRODUZIONE */}
        <section className="pt-10 md:pt-14 pb-8 md:pb-12 relative z-20 w-full overflow-hidden">
          <div className="container-x">
            <div className="max-w-4xl text-left">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-[var(--font-display)] text-[#012b3a] pb-2">
                  <br /><span className="text-[#0a5c75]">Dalla complessità,
                  una direzione chiara</span>
                </h2>
                <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-[#00779b] text-base sm:text-lg md:text-xl leading-relaxed">
                  <p>
                    Fi.Co. affianca operatori, imprese, enti e privati nello sviluppo di infrastrutture e soluzioni tecnologiche.
                    Mettiamo in relazione progettazione, coordinamento e capacità operativa per governare ogni fase: dall'analisi dell'esigenza alla documentazione del risultato.
                    Un interlocutore. Una visione d'insieme. Un processo verificabile.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* AREE DI ATTIVITÀ */}
        <section className="pt-4 pb-8 relative z-20 w-full overflow-hidden">
          <div className="container-x">
            <Reveal>
              <div className="mb-8 md:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-[#012b3a] pb-2">
                 <span className="text-[#0a5c75]"> Quattro aree, un unico approccio</span>
                </h2>
                <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-[#3b8ea5] leading-relaxed">
                  Competenze diverse, lo stesso metodo: comprendere il contesto, progettare con precisione e portare ogni attività verso un risultato concreto.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col gap-12 md:gap-16">
              {/* 1. FIBRA & MOBILE */}
              <Reveal delay={100}>
                <div className="flex flex-col gap-5">
                  <Link
                    to="/servizi/fibra-mobile"
                    className="block group overflow-hidden rounded-3xl w-full shadow-md"
                  >
                    <FicoImage
                      src={fibraMobileImg}
                      alt="Fibra & Mobile"
                      variant={1}
                      className="w-full h-[280px] sm:h-[380px] md:h-[460px] rounded-3xl"
                    />
                  </Link>
                  <div className="max-w-4xl text-left pt-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 text-[#013547]">
                      Fibra & Mobile
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-[#00779b] leading-relaxed mb-4 max-w-3xl">
                      Dalla survey al network design, dal permitting all'implementazione, fino agli As-Built e al supporto: gestiamo l'intero ciclo di sviluppo delle infrastrutture di telecomunicazione.
                    </p>
                    <Link
                      to="/servizi/fibra-mobile"
                      className="inline-flex items-center text-[#1da1db] text-sm sm:text-base md:text-lg font-bold hover:text-[#012b3a] transition-colors gap-2"
                    >
                      Scopri Fibra & Mobile <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* 2. IT, NETWORKING & SOFTWARE */}
              <Reveal delay={200}>
                <div className="flex flex-col gap-5">
                  <Link
                    to="/servizi/it-software"
                    className="block group overflow-hidden rounded-3xl w-full shadow-md"
                  >
                    <FicoImage
                      src={networkingImg}
                      alt="IT, Networking & Software"
                      variant={2}
                      className="w-full h-[280px] sm:h-[380px] md:h-[460px] rounded-3xl"
                    />
                  </Link>
                  <div className="max-w-4xl text-left pt-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 text-[#013547]">
                      IT, Networking & Software
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-[#00779b] leading-relaxed mb-4 max-w-3xl">
                      Integriamo infrastrutture IT, networking, assistenza e sviluppo software per costruire strumenti digitali su misura e rispondere a esigenze operative concrete.
                    </p>
                    <Link
                      to="/servizi/it-software"
                      className="inline-flex items-center text-[#1da1db] text-sm sm:text-base md:text-lg font-bold hover:text-[#012b3a] transition-colors gap-2"
                    >
                      Scopri IT, Networking & Software <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* 3. PROGETTAZIONE ASCENSORISTICA */}
              <Reveal delay={250}>
                <div className="flex flex-col gap-5">
                  <Link
                    to="/servizi/ascensoristica"
                    className="block group overflow-hidden rounded-3xl w-full shadow-md"
                  >
                    <FicoImage
                      src={ascensoristicaImg}
                      alt="Progettazione Ascensoristica"
                      variant={1}
                      className="w-full h-[280px] sm:h-[380px] md:h-[460px] rounded-3xl"
                    />
                  </Link>
                  <div className="max-w-4xl text-left pt-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 text-[#013547]">
                      Progettazione Ascensoristica
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-[#00779b] leading-relaxed mb-4 max-w-3xl">
                      Servizi tecnici e architettonici per ascensori standard e fuori standard, dalla fattibilità alla progettazione esecutiva, fino alla produzione e al cantiere.
                    </p>
                    <Link
                      to="/servizi/ascensoristica"
                      className="inline-flex items-center text-[#1da1db] text-sm sm:text-base md:text-lg font-bold hover:text-[#012b3a] transition-colors gap-2"
                    >
                      Scopri Progettazione Ascensoristica <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* 4. ENERGIA */}
              <Reveal delay={300}>
                <div className="flex flex-col gap-5 relative">
                  <Link
                    to="/servizi/energia"
                    className="block group overflow-hidden rounded-3xl w-full shadow-md"
                  >
                    <FicoImage
                      src={energiaImg}
                      alt="Energia"
                      variant={3}
                      className="w-full h-[280px] sm:h-[380px] md:h-[460px] rounded-3xl"
                    />
                  </Link>
                  <div className="max-w-4xl text-left pt-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 text-[#013547]">
                      Energia
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-[#00779b] leading-relaxed mb-4 max-w-3xl">
                      Fotovoltaico e servizi energetici per edifici e imprese: progettazione, installazione, adeguamento e manutenzione degli impianti.
                    </p>
                    <Link
                      to="/servizi/energia"
                      className="inline-flex items-center text-[#1da1db] text-sm sm:text-base md:text-lg font-bold hover:text-[#012b3a] transition-colors gap-2"
                    >
                      Scopri Energia <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={400}>
              <div className="mt-12 sm:mt-16 text-left max-w-4xl">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-[#013547]">
                  <span className="text-[#1da1db]"> Ricerca e innovazione attraversano{" "}                 
                    ogni area, connettendo infrastrutture, dati e nuove tecnologie.
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* IL NOSTRO METODO */}
        <section className="pt-8 md:pt-12 pb-12 md:pb-16 relative z-20 w-full overflow-hidden">
          <div className="container-x">
            <div className="max-w-3xl mb-12 md:mb-16 text-left">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-[var(--font-display)] text-[#012b3a] pb-2">
                  Il risultato non è un caso,
                  <br />è un processo
                </h2>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#00779b] leading-relaxed">
                  Ogni progetto parte da un'esigenza e prende forma attraverso passaggi chiari, responsabilità definite e risultati verificabili.
                </p>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="relative">
                <div className="hidden lg:block absolute top-10 left-[5%] right-[5%] h-[2px] bg-[#facc15]" />

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                  {[
                    { step: "01", icon: Search, title: "Analizziamo", desc: "Mettiamo a fuoco contesto, esigenze, vincoli e obiettivi." },
                    { step: "02", icon: PenTool, title: "Progettiamo", desc: "Traduciamo l'analisi in una soluzione tecnica chiara, sostenibile e realizzabile." },
                    { step: "03", icon: GitMerge, title: "Coordiniamo", desc: "Governiamo attività, partner, interlocutori e fasi operative." },
                    { step: "04", icon: FileText, title: "Documentiamo", desc: "Rendiamo ogni passaggio tracciabile e ogni risultato verificabile." },
                    { step: "05", icon: TrendingUp, title: "Evolviamo", desc: "Miglioriamo processi e soluzioni facendo tesoro dell'esperienza." }
                  ].map((item) => (
                    <div key={item.step} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#013a52] flex items-center justify-center text-[#facc15] mb-4 sm:mb-6 shadow-md group-hover:scale-110 transition-all mx-auto lg:mx-0">
                        <item.icon size={32} className="sm:w-9 sm:h-9" />
                      </div>
                      <span className="text-[#1da1db] font-bold text-xs sm:text-sm tracking-widest mb-1">FASE {item.step}</span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#012b3a] mb-2">{item.title}</h3>
                      <p className="text-[#00779b] text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* IDENTITÀ */}
        <section className="pt-8 md:pt-12 pb-12 md:pb-20 relative z-20 w-full overflow-hidden">
          <div className="container-x">
            <div className="max-w-4xl text-left">
              <Reveal>
                <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#00779b] font-bold">
                  CIÒ CHE CI GUIDA
                </span>
                <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-[var(--font-display)] text-[#012b3a]">
                  La tecnica è il punto di partenza, <br />
                  il valore è l'obiettivo
                </h2>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-[#00779b] text-base sm:text-lg md:text-xl leading-relaxed">
                  <p>
                    Competenza, responsabilità e capacità di adattamento guidano il nostro lavoro.
                    Operiamo in contesti in continua evoluzione, costruendo soluzioni solide per il presente e capaci di crescere nel tempo.
                    Per noi innovare significa applicare la tecnologia dove può generare un beneficio reale.
                  </p>
                  <Link
                    to="/chi-siamo"
                    className="inline-flex items-center gap-2 text-[#1da1db] font-bold hover:text-[#012b3a] transition-all uppercase tracking-widest text-xs sm:text-sm mt-4"
                  >
                    Conosci Fi.Co. <ArrowRight size={18} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION FINALE */}
        <section className="container-x pb-12 sm:pb-16 md:pb-24 relative z-30 w-full overflow-hidden">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-[#facc15] p-6 sm:p-10 md:p-20 text-center shadow-xl">
              <div className="absolute -top-20 -right-20 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#facc15]/20 blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#00779b] font-bold block mb-3 sm:mb-4">
                  INIZIAMO DA QUI
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-3xl mx-auto leading-tight mb-4 sm:mb-6 font-[var(--font-display)] text-[#012b3a] pb-2">
                  Il prossimo progetto parte da unaconversazione.
                </h2>
                <p className="text-base sm:text-lg text-[#00779b] max-w-2xl mx-auto mb-8 sm:mb-10">
                  Raccontaci l'esigenza, il contesto o l'obiettivo. Metteremo in campo le competenze giuste per costruire un percorso chiaro, concreto e realizzabile.
                </p>
                <Link
                  to="/contatti"
                  className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-4 font-bold rounded-2xl bg-[#f5d000] text-[#012b3a] hover:bg-[#eab308] hover:scale-105 transition-all shadow-md w-full sm:w-auto"
                >
                  Parliamo del tuo progetto <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}