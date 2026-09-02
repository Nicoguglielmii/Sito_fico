import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, PenTool, GitMerge, FileText, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero-fiber.jpg";
import fibraMobileImg from "@/assets/fibraotticaemobile.jpg";
import networkingImg from "@/assets/project-it.jpg";
import energiaImg from "@/assets/Energia.jpg";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";
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

// COMPONENTE: Pittogramma con nodi sempre visibili, si collegano all'hover
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
      className="relative w-full max-w-xl mx-auto cursor-pointer flex flex-col items-center justify-center pt-0 pb-10 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-[#0e7490]/10 rounded-full blur-[80px] group-hover:bg-[#0e7490]/25 transition-colors duration-[2000ms] pointer-events-none" />
      
      <svg viewBox="0 -40 170 170" className="w-full h-auto overflow-visible z-10 relative">
        <g className="hero-piktogramma-container">
          <path 
            className="hero-piktogramma-path" 
            pathLength="100"
            d="M 20,70 C 60,10 130,-30 150,115" 
            stroke="#38bdf8" 
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
            stroke="#0e7490" 
            strokeWidth="9" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="100"
            strokeDashoffset="100"
            opacity="0" 
          />
          
          <circle cx="20" cy="70" r="10" fill="#facc15" />   
          <circle cx="55" cy="115" r="10" fill="#facc15" />  
          <circle cx="150" cy="115" r="10" fill="#facc15" /> 
        </g>
      </svg>

      <div className="mt-12 text-sm font-bold tracking-[0.3em] uppercase text-white/40 group-hover:text-[#facc15] transition-colors duration-1000">
        Passa il mouse o tocca lo schermo per connettere
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="bg-[#011C27] w-full min-h-screen">
      
      {/* =========================================
          01 — HERO
      ========================================= */}
      <section className="relative pt-20 sm:pt-24 lg:pt-48 pb-0 flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#011C27]/90 via-[#011C27]/70 to-[#011C27]" />
        </div>
        <HeroParticles />

        <div className="container-x relative z-10 flex flex-col items-start text-left w-full">
          <Reveal delay={100}>
            <br></br>
            <h1 className="font-[var(--font-display)] text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] max-w-5xl pb-2">
              Tutto parte da una connessione.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Uniamo competenze tecniche, progettuali e digitali per trasformare esigenze complesse in infrastrutture, sistemi e soluzioni capaci di evolvere.
            </p>
            <br></br>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-start items-stretch sm:items-center gap-4 md:gap-6 w-full">
              <Link to="/chi-siamo" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 font-bold rounded-xl bg-[#facc15] text-[#001724] hover:bg-yellow-300 hover:scale-105 transition-all shadow-lg sm:w-auto">
                Scopri cosa facciamo
              </Link>
              <Link to="/contatti" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 font-bold rounded-xl bg-[#facc15] text-[#001724] hover:bg-yellow-300 hover:scale-105 transition-all shadow-lg sm:w-auto">
                Parlaci del tuo progetto <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================
          01.5 — PITTOGRAMMA INTERATTIVO
      ========================================= */}
      <section className="relative z-20 pb-4">
        <div className="container-x px-4">
          <Reveal delay={400}>
            <InteractiveHeroLogo />
          </Reveal>
        </div>
      </section>

      {/* =========================================
          02 — INTRODUZIONE
      ========================================= */}
      <section className="pt-8 md:pt-12 pb-8 md:pb-12 relative z-20">
        <div className="container-x">
          <div className="max-w-4xl text-left">
            <Reveal>
              <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">
                FI.CO., IN SINTESI
              </span>
              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-[var(--font-display)] text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] pb-2">
                Dalla complessità,<br/>una direzione chiara.
              </h2>
              <div className="mt-8 space-y-6 text-white/70 text-lg md:text-xl leading-relaxed">
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

      {/* =========================================
          03 — LE AREE DI ATTIVITÀ
      ========================================= */}
      <section className="pt-8 md:pt-12 pb-0 relative z-20">
        <div className="container-x">
          <Reveal>
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[5.5rem] font-bold leading-[1.02] tracking-[-0.04em] whitespace-nowrap overflow-visible text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#dfe7d3] pb-2">
                Tre aree, un unico approccio.
              </h2>
              <p className="mt-6 max-w-[1700px] text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed">
                Competenze diverse, lo stesso metodo: comprendere il contesto, progettare con precisione e portare ogni attività verso un risultato concreto.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8 md:gap-10">
            <Reveal delay={100}>
              <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-8 py-4 border-b border-white/10 last:border-b-0">
                <img
                  src={fibraMobileImg}
                  alt="Fibra & Mobile"
                  className="w-full max-w-[420px] h-auto rounded-2xl object-cover border border-white/10"
                />
                <div className="flex-1 max-w-4xl">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-[#38bdf8] to-[#dfe7d3] bg-clip-text text-transparent">Fibra & Mobile</h3>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed mb-5 max-w-3xl">
                    Dalla survey al network design, dal permitting all'implementazione, fino agli As-Built e al supporto: gestiamo l'intero ciclo di sviluppo delle infrastrutture di telecomunicazione.
                  </p>
                  <Link to="/servizi/fibra-mobile" className="inline-flex items-center text-[#facc15] text-base md:text-lg font-bold hover:text-yellow-300 gap-2">
                    Scopri Fibra & Mobile <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-8 py-4 border-b border-white/10 last:border-b-0">
                <img
                  src={networkingImg}
                  alt="IT, Networking & Software"
                  className="w-full max-w-[420px] h-auto rounded-2xl object-cover border border-white/10"
                />
                <div className="flex-1 max-w-4xl">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-[#38bdf8] to-[#dfe7d3] bg-clip-text text-transparent">IT, Networking & Software</h3>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed mb-5 max-w-3xl">
                    Integriamo infrastrutture IT, networking, assistenza e sviluppo software per costruire strumenti digitali su misura e rispondere a esigenze operative concrete.
                  </p>
                  <Link to="/servizi/it-software" className="inline-flex items-center text-[#facc15] text-base md:text-lg font-bold hover:text-yellow-300 gap-2">
                    Scopri IT, Networking & Software <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-8 py-4 border-b border-white/10 last:border-b-0 relative">
                <img
                  src={energiaImg}
                  alt="Energia"
                  className="w-full max-w-[420px] h-auto rounded-2xl object-cover border border-white/10"
                />
                <div className="flex-1 max-w-4xl">
                  <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                    <h3 className="text-3xl md:text-4xl font-bold pb-2 bg-gradient-to-r from-[#38bdf8] to-[#dfe7d3] bg-clip-text text-transparent">Energia</h3>
                    <span className="bg-[#facc15] text-[#011C27] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">In Sviluppo</span>
                  </div>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed mb-5 max-w-3xl">
                    Stiamo costruendo nuove competenze e partnership nel settore energetico, con l'obiettivo di integrare progettazione, tecnologia e infrastrutture.
                  </p>
                  <span className="inline-flex items-center text-white/40 text-base md:text-lg font-bold gap-2 cursor-not-allowed">
                    Pagina in arrivo
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <div className="mt-12 text-left">
              <p className="text-xl text-[#38bdf8] font-medium tracking-wide">
                Ricerca e innovazione attraversano ogni area, connettendo infrastrutture, dati e nuove tecnologie.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================
          04 — IL NOSTRO METODO
      ========================================= */}
      <section className="pt-12 md:pt-20 pb-0 md:pb-8 relative z-20">
        <div className="container-x">
          <div className="max-w-3xl mb-20">
            <Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-[var(--font-display)] text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] pb-2">
                Il risultato non è un caso,<br/>
                è un processo.
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                Ogni progetto parte da un'esigenza e prende forma attraverso passaggi chiari, responsabilità definite e risultati verificabili.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <div className="hidden lg:block absolute top-10 left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#38bdf8]/20 via-[#facc15]/40 to-[#38bdf8]/20" />
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-4 relative z-10">
                {[
                  { step: "01", icon: Search, title: "Analizziamo", desc: "Mettiamo a fuoco contesto, esigenze, vincoli e obiettivi." },
                  { step: "02", icon: PenTool, title: "Progettiamo", desc: "Traduciamo l'analisi in una soluzione tecnica chiara, sostenibile e realizzabile." },
                  { step: "03", icon: GitMerge, title: "Coordiniamo", desc: "Governiamo attività, partner, interlocutori e fasi operative." },
                  { step: "04", icon: FileText, title: "Documentiamo", desc: "Rendiamo ogni passaggio tracciabile e ogni risultato verificabile." },
                  { step: "05", icon: TrendingUp, title: "Evolviamo", desc: "Miglioriamo processi e soluzioni facendo tesoro dell'esperienza." }
                ].map((item) => (
                  <div key={item.step} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                    <div className="w-20 h-20 rounded-full bg-[#01425f] border border-[#38bdf8]/50 flex items-center justify-center text-[#facc15] mb-6 shadow-lg group-hover:scale-110 group-hover:bg-[#38bdf8] group-hover:text-[#011C27] transition-all mx-auto lg:mx-0">
                      <item.icon size={32} />
                    </div>
                    <span className="text-[#38bdf8] font-bold text-sm tracking-widest mb-2">FASE {item.step}</span>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================
          06 — IDENTITÀ
      ========================================= */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-20 relative z-20">
        <div className="container-x">
          <div className="max-w-4xl text-left">
            <Reveal>
              <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">
                CIÒ CHE CI GUIDA
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight font-[var(--font-display)] text-white">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] inline-block pb-2"> La tecnica è il punto di partenza, </span> <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] inline-block pb-2">il valore è l'obiettivo.</span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 space-y-6 text-white/70 text-lg md:text-xl leading-relaxed">
                <p>
                  Competenza, responsabilità e capacità di adattamento guidano il nostro lavoro.
              
                  Operiamo in contesti in continua evoluzione, costruendo soluzioni solide per il presente e capaci di crescere nel tempo.
                
                  Per noi innovare significa applicare la tecnologia dove può generare un beneficio reale.
                </p>
                <Link to="/chi-siamo" className="inline-flex items-center gap-2 text-[#facc15] font-bold hover:text-white transition-all uppercase tracking-widest text-sm">
                  Conosci Fi.Co. <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================
          07 — CALL TO ACTION FINALE
      ========================================= */}
      <section className="container-x pb-12 sm:pb-16 md:pb-24 relative z-30">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0e7490]/40 to-[#001724] border border-[#0e7490]/60 p-6 sm:p-10 md:p-20 text-center shadow-2xl">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#facc15]/10 blur-3xl" />
            <div className="relative z-10">
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#facc15] font-bold block mb-4">
                INIZIAMO DA QUI
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight mb-6 font-[var(--font-display)] text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] pb-2">
                Il prossimo progetto parte da una conversazione.
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
                Raccontaci l'esigenza, il contesto o l'obiettivo. Metteremo in campo le competenze giuste per costruire un percorso chiaro, concreto e realizzabile.
              </p>
              <Link to="/contatti" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 font-bold rounded-xl bg-[#facc15] text-[#001724] hover:bg-yellow-300 hover:scale-105 transition-all shadow-lg w-full sm:w-auto">
                Parliamo del tuo progetto <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}