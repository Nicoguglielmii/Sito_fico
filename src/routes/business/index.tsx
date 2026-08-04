import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, Cog, TrendingUp } from "lucide-react";

export const Route = createFileRoute('/business/')({
  component: BusinessGeneral,
});

function BusinessGeneral() {
  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      <div className="w-full bg-[#01425f] pt-40 pb-28">
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">L'ecosistema FI.CO.</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Il nostro approccio al Business
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
            Strutturiamo le nostre competenze in due macro-aree integrate. Da un lato eseguiamo i progetti core generando valore immediato, dall'altro pianifichiamo l'innovazione per guidare lo sviluppo futuro.
          </p>
        </section>
      </div>

      <div className="pt-24 pb-24 w-full max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#001724] border border-[#0e7490]/30 p-10 rounded-3xl hover:border-[#38bdf8]/50 transition-all flex flex-col items-start">
            <Cog size={40} className="text-[#38bdf8] mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Business Unit</h2>
            <p className="text-gray-400 text-lg mb-8 flex-1">
              Eroga i servizi core dell'azienda e realizza i progetti operativi sul campo, generando valore concreto e fatturato per l'impresa.
            </p>
            <Link to="/business/unit" className="inline-flex items-center gap-2 font-bold text-[#facc15] hover:text-yellow-300">
              Esplora la Unit <ArrowRight size={20} />
            </Link>
          </div>
          <div className="bg-[#001724] border border-[#0e7490]/30 p-10 rounded-3xl hover:border-[#facc15]/50 transition-all flex flex-col items-start">
            <TrendingUp size={40} className="text-[#facc15] mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Business Development</h2>
            <p className="text-gray-400 text-lg mb-8 flex-1">
              Espande gli orizzonti di crescita dell'azienda, definendo nuove partnership strategiche e opportunità di sviluppo nel medio-lungo termine.
            </p>
            <Link to="/business/development" className="inline-flex items-center gap-2 font-bold text-[#38bdf8] hover:text-blue-300">
              Scopri le opportunità <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}