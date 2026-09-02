import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";

// Importazione delle immagini reali per i servizi IT & Software
import netwImg from "@/assets/netw.jpg";
import itservicesImg from "@/assets/itservices.jpg";
import digitaldevelopmentImg from "@/assets/digitaldevelopment.webp";

export const Route = createFileRoute("/servizi/it-software")({
  component: ItSoftwarePage,
});

function ItSoftwarePage() {
  const serviziIT = [
    {
      title: "Networking & Infrastrutture IT",
      subtitle: "CONNESSIONI SOLIDE ED EFFICIENTI.",
      desc: "Progettiamo, installiamo e supportiamo le infrastrutture che permettono a sistemi, persone e dati di restare connessi.",
      image: netwImg,
      activities: [
        "Installazione e manutenzione di apparati networking",
        "Progettazione e gestione delle reti",
        "Cablaggio strutturato"
      ]
    },
    {
      title: "IT Services",
      subtitle: "CONTINUITÀ OPERATIVA, OGNI GIORNO.",
      desc: "Gestiamo servizi e attività di supporto IT secondo livelli e modalità concordati con il cliente.",
      image: itservicesImg,
      activities: [
        "Assistenza hardware e software",
        "Reperibilità H24 nei servizi contrattualizzati",
        "Outsourcing e gestione logistica delle scorte"
      ]
    },
    {
      title: "Software & Digital Development",
      subtitle: "DAL CODICE ALL'APPLICAZIONE.",
      desc: "Sviluppiamo internamente software, piattaforme e strumenti digitali progettati per rispondere a esigenze specifiche.",
      image: digitaldevelopmentImg,
      activities: [
        "Siti web e piattaforme digitali sviluppati su misura",
        "Programmi e strumenti per esigenze operative",
        "Applicazioni e portali aziendali"
      ]
    }
  ];

  return (
    <div className="bg-[#011C27] w-full min-h-screen pb-14 overflow-x-hidden selection:bg-[#facc15] selection:text-[#011C27]">
      
      {/* =========================================
          HERO (Allineato a sinistra)
      ========================================= */}
      <section className="relative pt-36 pb-12 md:pb-16 border-b border-[#0e7490]/30 overflow-hidden">
        <HeroParticles />
        <div className="container-x relative z-10 text-left">
          <Reveal>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#facc15]" aria-hidden="true" />
              <span className="text-xs md:text-sm text-[#facc15] font-medium tracking-[0.2em] uppercase">IT & Software</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] max-w-4xl pb-2">
              Dall'infrastruttura <br className="hidden md:block" />all'ambiente digitale.
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-white/75 max-w-2xl leading-relaxed text-justify">
              Integriamo infrastrutture IT, servizi di assistenza e sviluppo software per costruire strumenti digitali solidi, garantendo continuità, sicurezza ed efficienza per ogni tua esigenza operativa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =========================================
          SERVIZI IT (LAYOUT ALTERNATO LINEARE SENZA DECORAZIONI EXTRA)
      ========================================= */}
      <section className="pt-8 md:pt-12 pb-0 relative overflow-hidden">
        <div className="container-x">
          <div className="flex flex-col gap-16 md:gap-24 w-full max-w-6xl mx-auto">
            
            {serviziIT.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <Reveal key={item.title} delay={100}>
                  {/* Container flessibile: si inverte su desktop se dispari */}
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-16`}>
                    
                    {/* Blocco Immagine PULITO */}
                    <div className="w-full md:w-1/2">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full aspect-[4/3] md:aspect-auto md:h-[400px] object-cover rounded-3xl border border-[#0e7490]/30 shadow-2xl relative z-10" 
                      />
                    </div>

                    {/* Blocco Testo */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                      <div className="mb-4">
                        <span className="text-xs font-bold text-[#facc15] uppercase tracking-wider block mb-1">
                          {item.subtitle}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent pb-1">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-lg text-white/70 leading-relaxed text-justify mt-2">
                        {item.desc}
                      </p>

                      {item.activities.length > 0 && (
                        <ul className="mt-6 space-y-3 pt-6 border-t border-white/10">
                          {item.activities.map((act, i) => (
                            <li key={i} className="text-[15px] text-white/60 flex items-start gap-3">
                              <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#38bdf8]/70 shrink-0" aria-hidden="true" />
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