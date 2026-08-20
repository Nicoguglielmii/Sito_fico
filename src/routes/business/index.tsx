import { createFileRoute, Link } from '@tanstack/react-router';
import { Layers, TrendingUp, ArrowRight } from "lucide-react";
import { HeroParticles } from "@/components/site/Interactive"; // <-- IMPORTATO SFONDO ANIMATO

// Importiamo le ultime due immagini rimaste libere nella cartella assets!
import imgUnit from "@/assets/hero-fiber.jpg";
import imgDev from "@/assets/copilot-pittogramma.jpg"; 

export const Route = createFileRoute('/business/')({
  component: BusinessPage,
});

function BusinessPage() {
  const aree = [
    { 
      categoria: "Operatività Core", 
      titolo: "Business Unit", 
      descrizione: "Eroga i servizi core dell'azienda e realizza i progetti operativi, generando valore concreto e fatturato. La divisione che trasforma la progettazione in realtà tangibile.", 
      icona: Layers, 
      path: "/business/unit",
      linkColor: "text-[#facc15] hover:text-yellow-300",
      immagine: imgUnit
    },
    { 
      categoria: "Crescita Strategica", 
      titolo: "Business Development", 
      descrizione: "Espande gli orizzonti di crescita dell'azienda, definendo nuove partnership strategiche, curando il posizionamento del brand e cercando nuove opportunità di sviluppo.", 
      icona: TrendingUp, 
      path: "/business/development",
      linkColor: "text-[#facc15] hover:text-yellow-300",
      immagine: imgDev
    }
  ];

  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      
      {/* Hero Section con particelle */}
      <div className="relative w-full bg-[#01425f] pt-40 pb-28 overflow-hidden">
        {/* SFONDO ANIMATO INSERITO QUI */}
        <HeroParticles />
        
        <section className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">
            Il nostro approccio
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Business
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
            L'architettura aziendale di FI.CO. si struttura in due grandi pilastri sinergici: l'operatività sul campo e lo sviluppo strategico.
          </p>
        </section>
      </div>

      {/* Lista Macro-Aree (Layout a scacchiera Immagine/Testo) */}
      <div className="pt-24 pb-32">
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col gap-28 lg:gap-40">
          {aree.map((area, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div key={index} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Colonna Testo */}
                <div className={`flex flex-col items-start text-left ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-[3px] w-12 bg-gradient-to-r from-[#38bdf8] to-[#facc15] rounded-full"></div>
                    <div className="text-sm uppercase tracking-[0.2em] text-gray-300 font-bold flex items-center gap-2.5">
                      <area.icona size={18} className="text-[#38bdf8]" /> 
                      {area.categoria}
                    </div>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#38bdf8] mb-6 leading-tight">
                    {area.titolo}
                  </h2>

                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                    {area.descrizione}
                  </p>
                  
                  <Link 
                    to={area.path} 
                    className={`inline-flex items-center gap-2 font-bold ${area.linkColor} transition-colors`}
                  >
                    Entra nell'area <ArrowRight size={20} />
                  </Link>
                </div>

                {/* Colonna Immagine */}
                <div className={`relative w-full ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img 
                    src={area.immagine} 
                    alt={area.titolo} 
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-video border border-white/5"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-[#38bdf8] to-[#facc15] -z-10 blur-3xl opacity-30" />
                </div>

              </div>
            );
          })}
        </section>
      </div>

    </div>
  );
}