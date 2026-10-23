import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";
import { FicoImage } from "@/components/site/FicoImage";

import fibraMobileImg from "@/assets/fibraotticaemobile.jpg";
import networkingImg from "@/assets/networking.jpg";
import netwImg from "@/assets/netw.jpg";
import ascensoristicaImg from "@/assets/ascensoristica.jpg";
import energiaImg from "@/assets/Energia.jpg";
import infrastruttureImg from "@/assets/infrastrutture.jpg";

import operatoriImg from "@/assets/provider.avif";
import paImg from "@/assets/pubblicaamministrazione.jpg";
import privatiImg from "@/assets/privati.jpg";

export const Route = createFileRoute("/servizi/")({
  component: ServiziIndex,
});

function ServiziIndex() {
  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-32 md:pt-36 pb-12 overflow-hidden border-b border-[#facc15] bg-white">
        <HeroParticles />
        <div className="container-x relative z-10 text-left">
          <Reveal>
            <span className="text-xs md:text-sm uppercase tracking-[0.22em] text-[#00779b] font-semibold">
              I NOSTRI SERVIZI
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight text-[#012b3a] max-w-4xl pb-2">
              Progettiamo, sviluppiamo, connettiamo
            </h1>
            <p className="mt-6 md:mt-8 text-lg md:text-xl text-[#00779b] max-w-2xl leading-relaxed">
              Competenze tecniche e digitali per progettare infrastrutture, sviluppare strumenti e governare i processi dall'analisi al risultato.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTRODUZIONE */}
      <section className="py-12 md:py-16 relative z-20 border-b border-[#facc15] bg-white">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            <div className="w-full lg:w-1/2 text-left">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight font-[var(--font-display)] text-[#012b3a] pb-2 mb-6">
                  Dalle infrastrutture al software
                </h2>
                <p className="text-[#00779b] text-lg md:text-xl leading-relaxed">
                  Fi.Co. opera attraverso competenze specialistiche plurali e una metodologia condivisa per comprendere un'esigenza, progettare una soluzione realizzabile e governarne ogni fase. Forniamo servizi nel settore delle telecomunicazioni e nella progettazione di reti in fibra ottica. Stiamo ampliando la nostra offerta verso servizi IT, networking, sviluppo software, progettazione ascensoristica e soluzioni nel settore energetico. Oggi lavoriamo su progetti nei quali infrastrutture, dati e tecnologia possano integrarsi per rispondere alle esigenze di operatori, imprese, enti e privati.
                </p>
              </Reveal>
            </div>

            <div className="w-full lg:w-1/2">
              <Reveal delay={150}>
                <FicoImage 
                  src={infrastruttureImg} 
                  alt="Dalle infrastrutture al software" 
                  variant={1}
                  className="w-full aspect-video lg:aspect-auto lg:h-[400px] rounded-3xl shadow-lg" 
                />
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* AREE PRINCIPALI */}
      <section
        className="py-12 md:py-16 relative z-20 border-b border-[#facc15]"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x">
          <div className="max-w-3xl mb-6 text-left">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight font-[var(--font-display)] text-[#012b3a] pb-2">
                Cinque aree, un unico approccio
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col gap-8 md:gap-12">
            
            {/* FIBRA & MOBILE */}
            <Reveal delay={100}>
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 py-8 border-b border-[#facc15] last:border-b-0">
                <Link 
                  to="/servizi/fibra-mobile" 
                  className="block group overflow-hidden shrink-0 rounded-3xl w-full md:max-w-[400px] lg:max-w-[480px] shadow-md"
                >
                  <FicoImage
                    src={fibraMobileImg}
                    alt="Fibra & Mobile"
                    variant={1}
                    className="w-full aspect-video rounded-3xl"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 pb-1 text-[#013547]">
                    Fibra & Mobile
                  </h3>
                  <p className="text-[#00779b] text-lg leading-relaxed mb-6 max-w-2xl">
                    Dalla survey al network design, dal permitting all'implementazione, fino agli As-Built e al supporto operativo.
                  </p>
                  <Link to="/servizi/fibra-mobile" className="inline-flex items-center text-[#1da1db] font-bold hover:text-[#012b3a] transition-colors gap-2 w-max">
                    Scopri di più <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* IT & SOFTWARE */}
            <Reveal delay={200}>
              <div className="flex flex-col md:flex-row-reverse md:items-center gap-8 md:gap-12 py-8 border-b border-[#facc15] last:border-b-0">
                <Link 
                  to="/servizi/it-software" 
                  className="block group overflow-hidden shrink-0 rounded-3xl w-full md:max-w-[400px] lg:max-w-[480px] shadow-md"
                >
                  <FicoImage
                    src={networkingImg}
                    alt="IT, Networking & Software"
                    variant={2}
                    className="w-full aspect-video rounded-3xl"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 pb-1 text-[#013547]">
                    IT & Software
                  </h3>
                  <p className="text-[#00779b] text-lg leading-relaxed mb-6 max-w-2xl">
                    Dall'infrastruttura fisica agli ambienti digitali, sviluppiamo e integriamo soluzioni tecnologiche per esigenze operative.
                  </p>
                  <Link to="/servizi/it-software" className="inline-flex items-center text-[#1da1db] font-bold hover:text-[#012b3a] transition-colors gap-2 w-max">
                    Scopri di più <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* PROGETTAZIONE ASCENSORISTICA */}
            <Reveal delay={250}>
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 py-8 border-b border-[#facc15] last:border-b-0">
                <Link 
                  to="/servizi/ascensoristica" 
                  className="block group overflow-hidden shrink-0 rounded-3xl w-full md:max-w-[400px] lg:max-w-[480px] shadow-md"
                >
                  <FicoImage
                    src={ascensoristicaImg}
                    alt="Progettazione Ascensoristica"
                    variant={1}
                    className="w-full aspect-video rounded-3xl"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 pb-1 text-[#013547]">
                     Ascensoristica
                  </h3>
                  <p className="text-[#00779b] text-lg leading-relaxed mb-6 max-w-2xl">
                    Servizi tecnici e architettonici per ascensori, dalla fattibilità al cantiere.
                  </p>
                  <Link to="/servizi/ascensoristica" className="inline-flex items-center text-[#1da1db] font-bold hover:text-[#012b3a] transition-colors gap-2 w-max">
                    Scopri di più <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* ENERGIA */}
            <Reveal delay={300}>
              <div className="flex flex-col md:flex-row-reverse md:items-center gap-8 md:gap-12 py-8 border-b border-[#facc15] last:border-b-0 relative">
                <Link 
                  to="/servizi/energia" 
                  className="block group overflow-hidden shrink-0 rounded-3xl w-full md:max-w-[400px] lg:max-w-[480px] shadow-md"
                >
                  <FicoImage
                    src={energiaImg}
                    alt="Energia"
                    variant={3}
                    className="w-full aspect-video rounded-3xl"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 pb-1 text-[#013547]">
                    Energia
                  </h3>
                  <p className="text-[#00779b] text-lg leading-relaxed mb-6 max-w-2xl">
                    Fotovoltaico e servizi energetici per edifici e imprese: progettazione, installazione, adeguamento e manutenzione degli impianti.
                  </p>
                  <Link to="/servizi/energia" className="inline-flex items-center text-[#1da1db] font-bold hover:text-[#012b3a] transition-colors gap-2 w-max">
                    Scopri di più <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* NETWORKING (IN SVILUPPO) */}
            <Reveal delay={350}>
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 py-8 border-b border-[#facc15] last:border-b-0 relative">
                <div className="overflow-hidden shrink-0 rounded-3xl w-full md:max-w-[400px] lg:max-w-[480px] shadow-md">
                  <FicoImage
                    src={netwImg}
                    alt="Networking"
                    variant={2}
                    className="w-full aspect-video rounded-3xl"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center text-left">
                  <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                    <h3 className="text-3xl md:text-4xl font-extrabold pb-1 text-[#013547]">
                      Networking
                    </h3>
                    <span className="bg-[#f5d000] text-[#012b3a] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      In Sviluppo
                    </span>
                  </div>
                  <p className="text-[#00779b] text-lg leading-relaxed mb-6 max-w-2xl">
                    Progettazione, configurazione e gestione di architetture di rete, apparati di comunicazione e cablaggio strutturato per garantire connessioni sicure e performanti.
                  </p>
                  <span className="inline-flex items-center text-[#1da1db] font-bold gap-2 cursor-not-allowed w-max">
                    Pagina in arrivo
                  </span>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* AMBITI DI APPLICAZIONE */}
      <section className="py-12 md:py-20 relative z-20 bg-white">
        <div className="container-x">
          <div className="text-left max-w-4xl mb-12">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-[var(--font-display)] text-[#012b3a] pb-2">
                Competenze al servizio di contesti diversi
              </h2>
            </Reveal>
          </div>
          
          <div className="flex flex-col gap-16 md:gap-24 w-full">
            
            {/* OPERATORI */}
            <Reveal delay={100}>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2">
                  <FicoImage 
                    src={operatoriImg} 
                    alt="Operatori" 
                    variant={1}
                    className="w-full aspect-[4/3] md:aspect-auto md:h-[350px] rounded-3xl shadow-lg" 
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 pb-1 text-[#012b3a]">
                    Operatori
                  </h3>
                  <p className="text-lg md:text-xl text-[#00779b] leading-relaxed">
                    Sviluppo, documentazione e supporto per infrastrutture di telecomunicazione.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* PUBBLICHE AMMINISTRAZIONI */}
            <Reveal delay={200}>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2">
                  <FicoImage 
                    src={paImg} 
                    alt="Pubbliche Amministrazioni" 
                    variant={2}
                    className="w-full aspect-[4/3] md:aspect-auto md:h-[350px] rounded-3xl shadow-lg" 
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 pb-1 text-[#012b3a]">
                    Pubbliche Amministrazioni
                  </h3>
                  <p className="text-lg md:text-xl text-[#00779b] leading-relaxed">
                    Gestione autorizzativa, servizi tecnologici e soluzioni digitali integrate.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* IMPRESE E PRIVATI */}
            <Reveal delay={300}>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2">
                  <FicoImage 
                    src={privatiImg} 
                    alt="Imprese e Privati" 
                    variant={3}
                    className="w-full aspect-[4/3] md:aspect-auto md:h-[350px] rounded-3xl shadow-lg" 
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 pb-1 text-[#012b3a]">
                    Imprese e Privati
                  </h3>
                  <p className="text-lg md:text-xl text-[#00779b] leading-relaxed">
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