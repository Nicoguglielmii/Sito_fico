import { createFileRoute, Link } from '@tanstack/react-router';
import { Briefcase, Megaphone, Handshake, FileText, Lightbulb, ArrowRight } from "lucide-react";
import { HeroParticles } from "@/components/site/Interactive"; // <-- IMPORTATO SFONDO ANIMATO

// Importo immagini DIVERSE dalla cartella assets
import imgCommerciale from "@/assets/project-telco.jpg";
import imgMarketing from "@/assets/pittogramma.jpg";
import imgPartnership from "@/assets/connessioni.png";
import imgGare from "@/assets/logo-scritto.jpg";
import imgInnovazione from "@/assets/copilot-logo.jpg";

export const Route = createFileRoute('/business/development/')({
  component: BusinessDevelopmentPage,
});

function BusinessDevelopmentPage() {
  const aree = [
    { 
      categoria: "Sviluppo Rete", 
      titolo: "Commerciale", 
      descrizione: "Acquisizione di nuovi clienti e presidio dei mercati di riferimento. Costruiamo relazioni solide e durature per garantire una crescita costante del portafoglio aziendale.", 
      icona: Briefcase, 
      path: "/business/development/commerciale",
      linkColor: "text-[#38bdf8] hover:text-blue-300",
      immagine: imgCommerciale
    },
    { 
      categoria: "Comunicazione", 
      titolo: "Marketing", 
      descrizione: "Posizionamento del brand e strategie di comunicazione multicanale. Diamo voce ai nostri progetti e valorizziamo l'identità di FI.CO. sul mercato nazionale.", 
      icona: Megaphone, 
      path: "/business/development/marketing",
      linkColor: "text-[#facc15] hover:text-yellow-300",
      immagine: imgMarketing
    },
    { 
      categoria: "Alleanze", 
      titolo: "Partnership Strategiche", 
      descrizione: "Creazione di ecosistemi di valore e alleanze condivise. Lavoriamo fianco a fianco con i principali player di settore per moltiplicare le opportunità di successo.", 
      icona: Handshake, 
      path: "/business/development/partnership",
      linkColor: "text-[#38bdf8] hover:text-blue-300",
      immagine: imgPartnership
    },
    { 
      categoria: "Tender & Bids", 
      titolo: "Gare e Opportunità", 
      descrizione: "Monitoraggio, analisi e partecipazione a bandi pubblici e privati. Strutturiamo proposte tecnico-economiche vincenti per aggiudicarci progetti ad alto impatto infrastrutturale.", 
      icona: FileText, 
      path: "/business/development/gare",
      linkColor: "text-[#facc15] hover:text-yellow-300",
      immagine: imgGare
    },
    { 
      categoria: "R&D", 
      titolo: "Innovazione e Nuovi Servizi", 
      descrizione: "Ricerca e sviluppo per anticipare le esigenze del domani. Sperimentiamo tecnologie e metodologie inedite per mantenere l'offerta aziendale sempre all'avanguardia.", 
      icona: Lightbulb, 
      path: "/business/development/innovazione",
      linkColor: "text-[#38bdf8] hover:text-blue-300",
      immagine: imgInnovazione
    },
  ];

  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      
      {/* Hero Section con particelle */}
      <div className="relative w-full bg-[#01425f] pt-40 pb-28 overflow-hidden">
        {/* SFONDO ANIMATO INSERITO QUI */}
        <HeroParticles />
        
        <section className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">
            Crescita Strategica
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Business Development
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
            Espande gli orizzonti di crescita dell'azienda, definendo nuove partnership strategiche e opportunità di sviluppo nel medio-lungo termine.
          </p>
        </section>
      </div>

      {/* Lista Micro-Aree (Layout a scacchiera Immagine/Testo) */}
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
                    Scopri di più <ArrowRight size={20} />
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