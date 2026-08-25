import { createFileRoute, Link } from '@tanstack/react-router';
import { Zap, Sun, BatteryCharging, Lightbulb, ArrowRight } from "lucide-react";
import { HeroParticles } from "@/components/site/Interactive";

export const Route = createFileRoute('/business/unit/energia')({
  component: Energia,
});

function Energia() {
  const serviziList = [
    { categoria: "Transizione Energetica", titolo: "Impianti Fotovoltaici", descrizione: "Progettiamo e installiamo impianti fotovoltaici industriali e civili.", icona: Sun },
    { categoria: "Infrastrutture Elettriche", titolo: "Reti ed Efficientamento", descrizione: "Realizziamo cabine di trasformazione MT/BT e adeguamenti impiantistici per industrie e grandi strutture.", icona: Zap },
    { categoria: "Mobilità Sostenibile", titolo: "Sistemi di Ricarica EV", descrizione: "Forniamo servizi completi per l'installazione di colonnine di ricarica per veicoli elettrici (EV).", icona: BatteryCharging },
    { categoria: "Smart City", titolo: "Illuminazione Pubblica Intelligente", descrizione: "Aggiorniamo le reti di illuminazione pubblica con tecnologia LED ad alta efficienza abbinata a sistemi di telecontrollo.", icona: Lightbulb },
  ];

  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      <div className="relative w-full bg-[#01425f] pt-40 pb-28 overflow-hidden">
        <HeroParticles />
        <section className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">Business Unit</span>
          {/* Titolo Hero */}
          <h1 className="font-[var(--font-display)] mt-4 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Energia
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">Guidiamo le aziende e le pubbliche amministrazioni verso la transizione energetica.</p>
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
              {/* MODIFICA: font-display e tracking-tight applicati ai titoli dei servizi */}
              <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-[#38bdf8] mb-6 leading-tight">
                {servizio.titolo}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">{servizio.descrizione}</p>
            </div>
          ))}
        </section>
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 mt-32">
          <div className="bg-gradient-to-br from-[#0e7490]/40 to-[#001724] border border-[#0e7490]/60 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden flex flex-col items-start text-left">
            {/* MODIFICA: font-display e tracking-tight applicati al CTA */}
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] leading-tight">
              Pronto a tagliare i costi energetici?
            </h2>
            <p className="text-gray-300 mb-10 max-w-2xl relative z-10 text-lg">Scopri come le nostre soluzioni integrate possono rendere la tua infrastruttura più efficiente ed ecologica.</p>
            <Link to="/contatti" className="relative z-10 inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl bg-[#facc15] text-[#001724] hover:bg-yellow-300 hover:scale-105 transition-all">
              Richiedi uno studio di fattibilità <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}