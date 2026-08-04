import { createFileRoute, Link } from '@tanstack/react-router';
import { Handshake, Megaphone, Target, FileSignature, Lightbulb, ArrowRight } from "lucide-react";

export const Route = createFileRoute('/business/development/')({
  component: BusinessDevPage,
});

function BusinessDevPage() {
  const aree = [
    { titolo: "Commerciale", icona: Handshake, path: "/business/development/commerciale", desc: "Espansione della rete clienti e consolidamento del portafoglio." },
    { titolo: "Marketing", icona: Megaphone, path: "/business/development/marketing", desc: "Posizionamento del brand e strategie di comunicazione multicanale." },
    { titolo: "Partnership Strategiche", icona: Target, path: "/business/development/partnership", desc: "Alleanze di settore per creare sinergie e vantaggi competitivi." },
    { titolo: "Gare e Opportunità", icona: FileSignature, path: "/business/development/gare", desc: "Partecipazione a bandi pubblici e acquisizione di grandi appalti." },
    { titolo: "Innovazione e Nuovi Servizi", icona: Lightbulb, path: "/business/development/innovazione", desc: "Ricerca e sviluppo per introdurre tecnologie all'avanguardia sul mercato." },
  ];

  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      <div className="w-full bg-[#01425f] pt-40 pb-28">
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">Espansione e Futuro</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Business Development
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
            Espande gli orizzonti di crescita dell'azienda, definendo nuove opportunità di sviluppo nel medio-lungo termine.
          </p>
        </section>
      </div>

      <div className="pt-24 pb-24 w-full max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-8">
          {aree.map((area, i) => (
            <div key={i} className="bg-[#001724] border border-[#0e7490]/30 p-8 rounded-2xl flex flex-col items-start hover:bg-white/5 transition-all">
              <div className="w-12 h-12 bg-[#0e7490]/20 text-[#facc15] rounded-xl flex items-center justify-center mb-6"><area.icona size={24} /></div>
              <h3 className="text-2xl font-bold mb-3">{area.titolo}</h3>
              <p className="text-gray-400 mb-8 flex-1">{area.desc}</p>
              <Link to={area.path} className="inline-flex items-center gap-2 font-bold text-[#38bdf8] hover:text-blue-300">
                Leggi di più <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}