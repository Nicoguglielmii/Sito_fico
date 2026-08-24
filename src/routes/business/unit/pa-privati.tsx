import { createFileRoute, Link } from '@tanstack/react-router';
import { Landmark, Building2, FileText, Cpu, ArrowRight } from "lucide-react";
import { HeroParticles } from "@/components/site/Interactive";

export const Route = createFileRoute('/business/unit/pa-privati')({
  component: PAPrivati,
});

function PAPrivati() {
  const serviziList = [
    { categoria: "Pubblica Amministrazione", titolo: "Progetti per gli Enti Locali", descrizione: "Supportiamo Comuni ed Enti Locali nell'adeguamento tecnologico e nello sviluppo di reti civiche, sistemi di videosorveglianza urbana e digitalizzazione dei servizi.", icona: Landmark },
    { categoria: "Settore Privato", titolo: "Soluzioni per le Imprese", descrizione: "Dalle PMI alle grandi realtà industriali, progettiamo infrastrutture su misura per stabilimenti produttivi, centri direzionali e poli logistici.", icona: Building2 },
    { categoria: "Gestione Burocratica", titolo: "Permitting e Autorizzazioni", descrizione: "Gestiamo integralmente le pratiche autorizzative (SCIA, CILA, permessi di scavo) facendo da tramite tra il committente e gli Enti gestori.", icona: FileText },
    { categoria: "Digitalizzazione", titolo: "Integrazione di Sistemi (IT)", descrizione: "Oltre alle opere civili, curiamo la parte informatica e logica. Installiamo e configuriamo apparati di rete attivi e implementiamo architetture IT.", icona: Cpu },
  ];

  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      <div className="relative w-full bg-[#01425f] pt-40 pb-28 overflow-hidden">
        <HeroParticles />
        <section className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">Business Unit</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            PA e Privati
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">Siamo il partner tecnico affidabile per la Pubblica Amministrazione e per le realtà Enterprise.</p>
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
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 mt-32">
          <div className="bg-gradient-to-br from-[#0e7490]/40 to-[#001724] border border-[#0e7490]/60 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative z-10 text-white leading-tight"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">Cerchi un partner strutturato?</span></h2>
            <p className="text-gray-300 mb-10 max-w-2xl relative z-10 text-lg">Mettiamo in campo le nostre competenze per realizzare i tuoi progetti chiavi in mano.</p>
            <Link to="/contatti" className="relative z-10 inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl bg-[#facc15] text-[#001724] hover:bg-yellow-300 hover:scale-105 transition-all">
              Contattaci per una consulenza <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}