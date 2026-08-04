import { createFileRoute, Link } from '@tanstack/react-router';
import { Network, Zap, Building, ArrowRight } from "lucide-react";

export const Route = createFileRoute('/business/unit/')({
  component: BusinessUnitPage,
});

function BusinessUnitPage() {
  const aree = [
    { titolo: "Fibra e Mobile", icona: Network, path: "/business/unit/fibra-mobile", desc: "Sviluppo di infrastrutture di telecomunicazione di ultima generazione." },
    { titolo: "Energia", icona: Zap, path: "/business/unit/energia", desc: "Soluzioni per l'efficientamento e le infrastrutture energetiche." },
    { titolo: "PA e Privati", icona: Building, path: "/business/unit/pa-privati", desc: "Realizzazioni civili e digitali per la Pubblica Amministrazione e settore enterprise." },
  ];

  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      <div className="w-full bg-[#01425f] pt-40 pb-28">
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">Operatività Core</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Business Unit
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
            Eroga i servizi core dell'azienda e realizza i progetti, generando valore e fatturato.
          </p>
        </section>
      </div>

      <div className="pt-24 pb-24 w-full max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-8">
          {aree.map((area, i) => (
            <div key={i} className="bg-[#001724] border border-[#0e7490]/30 p-8 rounded-2xl flex flex-col items-start hover:bg-white/5 transition-all">
              <div className="w-12 h-12 bg-[#0e7490]/20 text-[#38bdf8] rounded-xl flex items-center justify-center mb-6"><area.icona size={24} /></div>
              <h3 className="text-2xl font-bold mb-3">{area.titolo}</h3>
              <p className="text-gray-400 mb-8 flex-1">{area.desc}</p>
              <Link to={area.path} className="inline-flex items-center gap-2 font-bold text-[#facc15] hover:text-yellow-300">
                Leggi di più <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}