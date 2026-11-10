import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, PenTool, GitMerge, FileText, TrendingUp, Users, Building2, Briefcase, MapPin, Handshake, Lightbulb, ShieldCheck, RefreshCw, Share2 } from "lucide-react";
import fibraMobileImg from "@/assets/fibraotticaemobile.jpg";
import networkingImg from "@/assets/project-it.jpg";
import networkingWebpImg from "@/assets/networking.webp";
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
    <div className="bg-white w-full max-w-[100vw] min-h-screen overflow-x-hidden flex flex-col selection:bg-[#facc15] selection:text-[#012b3a]">
      
      {/* 01 - HERO SECTION */}
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
                Scopri l'azienda
              </Link>
              <Link
                to="/contatti"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-4 font-bold rounded-2xl bg-transparent border-2 border-[#f5d000] text-[#012b3a] hover:bg-[#f5d000]/10 hover:scale-105 transition-all w-full sm:w-auto text-center"
              >
                Parlaci del tuo progetto <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 - PITTOGRAMMA INTERATTIVO */}
      <section className="relative z-20 pb-8 w-full max-w-[100vw] overflow-hidden bg-white border-b border-[#facc15]">
        <div className="container-x px-4">
          <Reveal delay={400}>
            <InteractiveHeroLogo />
          </Reveal>
        </div>
      </section>

      <div
        className="w-full"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* 03 - INTRODUZIONE */}
        <section className="pt-16 md:pt-24 pb-12 relative z-20 w-full overflow-hidden">
          <div className="container-x">
            <div className="max-w-4xl text-left">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-[var(--font-display)] text-[#012b3a] pb-2">
                  <span className="text-[#012b3a]">Dalla complessità, <br /> una direzione chiara</span>
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

        {/* 04 - IL NOSTRO METODO */}
        <section className="py-12 md:py-16 relative z-20 w-full overflow-hidden border-b border-[#facc15]/30">
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
                <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-[#facc15]" />

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
                  {[
                    { step: "01", title: "Analizziamo" },
                    { step: "02", title: "Progettiamo" },
                    { step: "03", title: "Coordiniamo" },
                    { step: "04", title: "Documentiamo" },
                    { step: "05", title: "Evolviamo" }
                  ].map((item) => (
                    <div key={item.step} className="flex flex-col items-start text-left group relative">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-[#013a52] flex items-center justify-center mb-4 z-10">
                        <div className="w-2 h-2 rounded-full bg-[#1da1db] group-hover:bg-[#facc15] transition-colors" />
                      </div>
                      <span className="text-[#012b3a] font-extrabold text-xs sm:text-sm tracking-[0.2em] mb-1">FASE {item.step}</span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#1da1db]">{item.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 05 - AREE DI ATTIVITÀ (Layout Alternato) */}
        <section className="pt-16 pb-20 relative z-20 w-full overflow-hidden">
          <div className="container-x">
            <Reveal>
              <div className="mb-16 md:mb-24">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-[#012b3a] pb-2">
                 <span className="text-[#012b3a]"> Cinque aree, un unico approccio</span>
                </h2>
                <div className="mt-4 sm:mt-6 space-y-4 max-w-3xl text-base sm:text-lg md:text-xl text-[#3b8ea5] leading-relaxed">
                  <p>
                    L'innovazione, per Fi.Co., nasce dalla capacità di esplorare nuove tecnologie, sviluppare strumenti e trasformare esigenze operative in soluzioni applicabili. È un'attività trasversale che collega infrastrutture, software, dati e nuove competenze, alimentando l'evoluzione di tutte le aree.
                  </p>
                  
                    Competenze diverse, lo stesso metodo: comprendere il contesto, progettare con precisione e portare ogni attività verso un risultato concreto.
                  
                </div>
              </div>
            </Reveal>

            <div className="space-y-20 md:space-y-32">
              
              {/* 1. FIBRA & MOBILE (Testo Sinistra, Immagine Destra) */}
              <Reveal delay={100}>
                <div className="group">
                  <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div>
                      <span className="text-[#1da1db] font-extrabold text-xs uppercase tracking-[0.2em] block mb-2">PROGETTIAMO LA RETE, GOVERNIAMO IL PROCESSO</span>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-[#012b3a] mb-4">Fibra & Mobile</h3>
                    <p className="text-sm md:text-base text-[#00779b] leading-relaxed mb-6">Progettazione e gestione tecnica di infrastrutture di telecomunicazione, dalla survey alla documentazione finale.</p>
                      <Link to="/servizi/fibra-mobile" className="inline-flex items-center gap-2 rounded-full bg-[#013a52] px-4 py-2.5 text-sm md:text-base font-bold text-white shadow-sm transition-colors hover:bg-[#012b3a]">
                        Approfondisci <ArrowRight size={18} />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <FicoImage src={fibraMobileImg} alt="Fibra & Mobile" variant={1} className="w-full aspect-[4/3] rounded-3xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 2. NETWORKING (Immagine Sinistra, Testo Destra) */}
              <Reveal delay={150}>
                <div className="group">
                  <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="hidden md:block order-2 md:order-1">
                      <FicoImage src={networkingWebpImg} alt="Networking" variant={2} className="w-full aspect-[4/3] rounded-3xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                    <div className="order-1 md:order-2">
                      <span className="text-[#1da1db] font-extrabold text-xs uppercase tracking-[0.2em] block mb-2">DALLA CONNESSIONE ALL'INFRASTRUTTURA, DALLA RETE AL SERVIZIO</span>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-[#012b3a] mb-4">Networking</h3>
                      <p className="text-sm md:text-base text-[#00779b] leading-relaxed mb-6">Integriamo infrastrutture IT, networking, assistenza e sviluppo software per costruire strumenti digitali su misura e rispondere a esigenze operative concrete.</p>
                      <Link to="/servizi/networking" className="inline-flex items-center gap-2 rounded-full bg-[#013a52] px-4 py-2.5 text-sm md:text-base font-bold text-white shadow-sm transition-colors hover:bg-[#012b3a]">
                        Approfondisci <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 3. IT & SOFTWARE (Testo Sinistra, Immagine Destra) */}
              <Reveal delay={200}>
                <div className="group">
                  <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div>
                      <span className="text-[#1da1db] font-extrabold text-xs uppercase tracking-[0.2em] block mb-2">ECOSISTEMA DIGITALE</span>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-[#012b3a] mb-4">IT & Software</h3>
                      <p className="text-sm md:text-base text-[#00779b] leading-relaxed mb-6">Soluzioni web progettate per presentare, promuovere e digitalizzare attività, servizi e processi.</p>
                      <Link to="/servizi/it-software" className="inline-flex items-center gap-2 rounded-full bg-[#013a52] px-4 py-2.5 text-sm md:text-base font-bold text-white shadow-sm transition-colors hover:bg-[#012b3a]">
                        Approfondisci <ArrowRight size={18} />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <FicoImage src={networkingImg} alt="IT & Software" variant={3} className="w-full aspect-[4/3] rounded-3xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 4. ENERGIA (Immagine Sinistra, Testo Destra) */}
              <Reveal delay={250}>
                <div className="group">
                  <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="hidden md:block order-2 md:order-1">
                      <FicoImage src={energiaImg} alt="Energia" variant={1} className="w-full aspect-[4/3] rounded-3xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                    <div className="order-1 md:order-2">
                      <span className="text-[#1da1db] font-extrabold text-xs uppercase tracking-[0.2em] block mb-2">LA PROSSIMA CONNESSIONE</span>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-[#012b3a] mb-4">Energia</h3>
                     <p className="text-sm md:text-base text-[#00779b] leading-relaxed mb-6">Stiamo costruendo nuove competenze e partnership nel settore energetico, con l'obiettivo di integrare progettazione, tecnologia e infrastrutture.</p>
                      <Link to="/servizi/energia" className="inline-flex items-center gap-2 rounded-full bg-[#013a52] px-4 py-2.5 text-sm md:text-base font-bold text-white shadow-sm transition-colors hover:bg-[#012b3a]">
                        Approfondisci <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 5. ASCENSORISTICA (Testo Sinistra, Immagine Destra) */}
              <Reveal delay={300}>
                <div className="group">
                  <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div>
                      <span className="text-[#1da1db] font-extrabold text-xs uppercase tracking-[0.2em] block mb-2">UNA NUOVA COMPETENZA, UN'EVOLUZIONE NATURALE</span>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-[#012b3a] mb-4">Ascensoristica</h3>
                     <p className="text-sm md:text-base text-[#00779b] leading-relaxed mb-6">L'ampliamento settore nasce dall'incontro tra competenze tecniche multidisciplinari e un'esperienza specialistica maturata nel settore degli impianti elevatori.</p>
                      <Link to="/servizi/ascensoristica" className="inline-flex items-center gap-2 rounded-full bg-[#013a52] px-4 py-2.5 text-sm md:text-base font-bold text-white shadow-sm transition-colors hover:bg-[#012b3a]">
                        Approfondisci <ArrowRight size={18} />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <FicoImage src={ascensoristicaImg} alt="Ascensoristica" variant={2} className="w-full aspect-[4/3] rounded-3xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </Reveal>
              
            </div>
          </div>
        </section>

        {/* 06 - ECOSISTEMA E CONNESSIONI */}
        <section className="py-16 md:py-24 relative z-20 w-full overflow-hidden border-y border-[#1da1db]/20 bg-white">
          <div className="container-x">
            <div className="max-w-4xl text-left mb-16">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-[var(--font-display)] text-[#012b3a] pb-2">
                  Connessioni che diventano progetti
                </h2>
                <p className="mt-4 text-base sm:text-lg md:text-xl text-[#00779b] leading-relaxed">
                  Lavoriamo al centro di un ecosistema fatto di operatori, imprese, enti, professionisti e partner tecnologici. Mettiamo in connessione competenze, esigenze e responsabilità diverse per trasformarle in progetti concreti, coordinati e realizzabili.
                </p>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="relative w-full text-left">
                <div className="hidden md:block absolute top-[5px] left-[20px] right-[20px] h-[2px] bg-gradient-to-r from-[#1da1db] to-[#facc15] z-0" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
                  {[
                    { title: "OPERATORI E FILIERA", icon: Share2 },
                    { title: "ISTITUZIONI E IMPRESE", icon: Building2 },
                    { title: "PROFESSIONISTI E PARTNER", icon: Briefcase },
                    { title: "SPAZI E PROGETTI", icon: MapPin }
                  ].map((item, idx) => (
                    <div key={item.title} className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-5 group">
                      
                      <div className="hidden md:block w-3 h-3 rounded-full bg-[#facc15] shrink-0 ml-[14px]" />
                      
                      <div className="w-10 h-10 rounded-full bg-[#013a52] flex items-center justify-center text-[#facc15] shrink-0 shadow-sm">
                        <item.icon size={18} />
                      </div>
                      
                      <span className="font-extrabold text-[#012b3a] text-sm lg:text-base leading-tight md:pr-4">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 07 - VALORI E CHIUSURA */}
        <section className="pt-16 md:pt-24 pb-12 md:pb-20 relative z-20 w-full overflow-hidden">
          <div className="container-x">
            <div className="max-w-4xl text-left mb-12">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-[var(--font-display)] text-[#012b3a] pb-2">
                  La tecnica è il punto di partenza, <br />
                  il valore è l'obiettivo
                </h2>
                <div className="mt-6 space-y-4 text-[#00779b] text-base sm:text-lg md:text-xl leading-relaxed">
                  
                    Competenza, responsabilità e capacità di adattamento guidano il nostro lavoro. Operiamo in contesti in continua evoluzione, costruendo soluzioni solide per il presente e capaci di crescere nel tempo.
                  
                   Per noi innovare significa applicare la tecnologia dove può generare un beneficio reale.
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-4xl border-t border-[#facc15]/50 pt-8">
                {[
                  { icon: Handshake, text: "FIDUCIA & CONNESSIONE" },
                  { icon: Lightbulb, text: "INNOVAZIONE & PROBLEM SOLVING" },
                  { icon: TrendingUp, text: "CRESCITA" },
                  { icon: ShieldCheck, text: "ADATTABILITÀ & RESILIENZA" }
                ].map((val) => (
                  <div key={val.text} className="flex items-center gap-4 group">
                    <val.icon className="text-[#1da1db] shrink-0 group-hover:text-[#facc15] transition-colors" size={24} />
                    <span className="font-extrabold text-[#012b3a] tracking-wider uppercase text-sm md:text-base">
                      {val.text}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

      </div>
    </div>
  );
}