import { createFileRoute, Link } from '@tanstack/react-router';
import { Cable, Radio, Activity, HardHat, ArrowRight } from "lucide-react";
import { HeroParticles } from "@/components/site/Interactive";

export const Route = createFileRoute('/business/unit/fibra-mobile')({
  component: FibraMobile,
});

function FibraMobile() {
  const serviziList = [
    { categoria: "Infrastrutture Fisse", titolo: "Reti in Fibra Ottica (FTTH/FTTC)", descrizione: "Gestiamo l'intero ciclo di vita delle reti in fibra ottica: dai sopralluoghi (walk-in) alla progettazione esecutiva, fino alla posa dei cavi, giunzione a fusione e collaudo ottico con strumentazione OTDR.", icona: Cable },
    { categoria: "Telecomunicazioni Mobili", titolo: "Siti Radio 5G e 4G", descrizione: "Realizziamo infrastrutture per reti mobili (Raw Land e Roof Top). Ci occupiamo delle opere civili, dell'installazione di carpenterie metalliche, del montaggio e puntamento degli apparati radianti.", icona: Radio },
    { categoria: "Operatività sul campo", titolo: "Cantieristica e Opere Civili", descrizione: "Disponiamo di squadre operative specializzate per l'esecuzione di scavi tradizionali e minitrincee a basso impatto ambientale.", icona: HardHat },
    { categoria: "Supporto continuo", titolo: "Manutenzione (Assurance)", descrizione: "Forniamo servizi di manutenzione preventiva e correttiva h24/7 garantendo il ripristino dei servizi (SLA) per minimizzare i tempi di disservizio.", icona: Activity },
  ];

  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      <div className="relative w-full bg-[#01425f] pt-40 pb-28 overflow-hidden">
        <HeroParticles />
        <section className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">Business Unit</span>
          {/* Titolo Hero */}
          <h1 className="font-[var(--font-display)] mt-4 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Fibra e Mobile
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">Progettiamo, realizziamo e manuteniamo le autostrade digitali del futuro.</p>
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
              Hai un progetto infrastrutturale?
            </h2>
            <p className="text-gray-300 mb-10 max-w-2xl relative z-10 text-lg">I nostri tecnici sono pronti a supportarti dalla progettazione al collaudo finale.</p>
            <Link to="/contatti" className="relative z-10 inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl bg-[#facc15] text-[#001724] hover:bg-yellow-300 hover:scale-105 transition-all">
              Richiedi una consulenza <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}