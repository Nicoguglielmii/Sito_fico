import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";
import { FicoImage } from "@/components/site/FicoImage";

import netwImg from "@/assets/netw.jpg";
import itservicesImg from "@/assets/itservices.jpg";
import digitaldevelopmentImg from "@/assets/digitaldevelopment.webp";

export const Route = createFileRoute("/servizi/it-software")({
  component: ItSoftwarePage,
});

function ItSoftwarePage() {
  const serviziIT = [
    {
      titleFirst: "Networking & ",
      titleHighlight: "Infrastrutture IT",
      subtitle: "CONNESSIONI SOLIDE ED EFFICIENTI",
      desc: "Progettiamo, installiamo e supportiamo le infrastrutture che permettono a sistemi, persone e dati di restare connessi.",
      image: netwImg,
      variant: 2 as const,
      activities: [
        "Installazione e manutenzione di apparati networking",
        "Progettazione e gestione delle reti",
        "Cablaggio strutturato"
      ]
    },
    {
      titleFirst: "IT ",
      titleHighlight: "Services",
      subtitle: "CONTINUITÀ OPERATIVA, OGNI GIORNO",
      desc: "Gestiamo servizi e attività di supporto IT secondo livelli e modalità concordati con il cliente.",
      image: itservicesImg,
      variant: 1 as const,
      activities: [
        "Assistenza hardware e software",
        "Reperibilità H24 nei servizi contrattualizzati",
        "Outsourcing e gestione logistica delle scorte"
      ]
    },
    {
      titleFirst: "Software & ",
      titleHighlight: "Digital Development",
      subtitle: "DAL CODICE ALL'APPLICAZIONE",
      desc: "Sviluppiamo internamente software, piattaforme e strumenti digitali progettati per rispondere a esigenze specifiche.",
      image: digitaldevelopmentImg,
      variant: 3 as const,
      activities: [
        "Siti web e piattaforme digitali sviluppati su misura",
        "Programmi e strumenti per esigenze operative",
        "Applicazioni e portali aziendali"
      ]
    }
  ];

  return (
    <div className="bg-white w-full min-h-screen pb-16 overflow-x-hidden selection:bg-[#facc15] selection:text-[#012b3a]">
      
      {/* HERO */}
      <section className="relative pt-32 md:pt-36 pb-12 md:pb-16 border-b border-[#facc15] overflow-hidden bg-white">
        <HeroParticles />
        <div className="container-x relative z-10 text-left">
          <Reveal>
            <div className="mb-4 md:mb-6">
              <span className="text-xs md:text-sm text-[#00779b] font-semibold tracking-[0.22em] uppercase">
                IT & SOFTWARE
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight text-[#012b3a] max-w-4xl pb-2">
              Dall'infrastruttura <br className="hidden md:block" />
              all'<span className="text-[#1da1db]">ambiente</span> digitale
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-[#00779b] max-w-2xl leading-relaxed">
              Integriamo infrastrutture IT, servizi di assistenza e sviluppo software per costruire strumenti digitali solidi, garantendo continuità, sicurezza ed efficienza per ogni tua esigenza operativa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVIZI IT */}
      <section className="pt-10 md:pt-14 pb-0 relative overflow-hidden bg-white">
        <div className="container-x">
          <div className="flex flex-col gap-16 md:gap-24 w-full max-w-6xl mx-auto">
            
            {serviziIT.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <Reveal key={item.subtitle} delay={100}>
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-16`}>
                    
                    <div className="w-full md:w-1/2">
                      <FicoImage
                        src={item.image}
                        alt={`${item.titleFirst}${item.titleHighlight}`}
                        variant={item.variant}
                        className="w-full aspect-[4/3] md:aspect-auto md:h-[400px] rounded-3xl shadow-lg"
                      />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                      <div className="mb-4">
                        <span className="text-xs md:text-sm font-semibold text-[#00779b] uppercase tracking-wider block mb-1.5">
                          {item.subtitle}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-[#012b3a] pb-1">
                          {item.titleFirst}
                          <span className="text-[#0a5c75]">{item.titleHighlight}</span>
                        </h3>
                      </div>
                      
                      <p className="text-lg text-[#00779b] leading-relaxed mt-2">
                        {item.desc}
                      </p>

                      {item.activities.length > 0 && (
                        <ul className="mt-6 space-y-3 pt-6 border-t border-[#facc15]">
                          {item.activities.map((act, i) => (
                            <li key={i} className="text-[15px] text-[#012b3a] font-medium flex items-start gap-3">
                              <span className="mt-[7px] w-2 h-2 rounded-full bg-[#1da1db] shrink-0" aria-hidden="true" />
                              {act}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                  </div>
                </Reveal>
              );
            })}

          </div>
        </div>
      </section>

    </div>
  );
}