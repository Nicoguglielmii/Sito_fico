import { createFileRoute } from '@tanstack/react-router';
import { Lightbulb, Cpu, Telescope, Rocket } from "lucide-react";
import { HeroParticles } from "@/components/site/Interactive";

export const Route = createFileRoute('/business/development/innovazione')({
  component: InnovazionePage,
});

function InnovazionePage() {
  const serviziList = [
    { categoria: "Ricerca e Sviluppo", titolo: "R&D Lab e Prototipazione", descrizione: "Investiamo attivamente nello studio di tecnologie emergenti. Il nostro laboratorio interno testa nuovi materiali, apparati IoT e sensori avanzati.", icona: Telescope },
    { categoria: "Città del Futuro", titolo: "Smart City e Sensori", descrizione: "Sviluppiamo nuovi modelli di business legati alle Smart City. Integriamo l'intelligenza artificiale (AI) e le reti neurali all'interno delle infrastrutture civiche.", icona: Cpu },
    { categoria: "Transizione Digitale", titolo: "Nuovi Servizi IT", descrizione: "Progettiamo servizi innovativi per supportare l'Industria 5.0, dall'implementazione di reti private 5G per l'automazione industriale avanzata alla cybersecurity.", icona: Rocket },
    { categoria: "Miglioramento Continuo", titolo: "Innovazione di Processo", descrizione: "Digitalizziamo costantemente i nostri processi aziendali adottando piattaforme BIM e software gestionali evoluti per ottimizzare cantieri e progettazione.", icona: Lightbulb },
  ];

  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      <div className="relative w-full bg-[#01425f] pt-40 pb-28 overflow-hidden">
        <HeroParticles />
        <section className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">Business Development</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Innovazione e Nuovi Servizi
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">Guardiamo oltre il presente. Anticipiamo i trend tecnologici per definire i nuovi standard infrastrutturali e digitali di domani.</p>
        </section>
      </div>

      <div className="pt-24 pb-24">
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col gap-28">
          {serviziList.map((servizio, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[3px] w-12 bg-gradient-to-r from-[#38bdf8] to-[#facc15] rounded-full"></div>
                <div className="text-sm uppercase tracking-[0.2em] text-[#facc15] font-bold flex items-center gap-2.5">
                  <servizio.icona size={18} className="text-[#38bdf8]" /> {servizio.categoria}
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#38bdf8] mb-6 leading-tight">{servizio.titolo}</h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">{servizio.descrizione}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}