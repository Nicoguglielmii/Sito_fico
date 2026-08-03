import { createFileRoute, Link } from '@tanstack/react-router';
import { Code, Cloud, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export const Route = createFileRoute('/servizi-it')({
  component: ServiziIT,
});

function ServiziIT() {
  const serviziList = [
    {
      titolo: "Sviluppo Software Custom",
      descrizione: "Progettiamo e sviluppiamo applicazioni web e gestionali su misura, scalabili e sicuri, perfettamente integrati con i processi della tua azienda.",
      icona: Code,
    },
    {
      titolo: "Infrastrutture Cloud",
      descrizione: "Migrazione, gestione e ottimizzazione di architetture Cloud per garantire altissime prestazioni, sicurezza dei dati e continuità operativa (Business Continuity).",
      icona: Cloud,
    },
    {
      titolo: "Sicurezza Informatica",
      descrizione: "Proteggiamo il perimetro digitale della tua impresa con audit di vulnerabilità, penetration test e l'implementazione dei più severi protocolli crittografici.",
      icona: ShieldCheck,
    },
    {
      titolo: "Consulenza e System Integration",
      descrizione: "Ti guidiamo nella vera trasformazione digitale, facendo dialogare tra loro sistemi complessi, automatizzando processi e snellendo i flussi di lavoro.",
      icona: Cpu,
    },
  ];

  return (
    <div className="min-h-screen bg-[#011C27] text-white pt-32 pb-24">
      
      {/* Hero Section */}
      <section className="container-x mx-auto px-6 lg:px-12 mb-24 text-center max-w-4xl animate-fade-in">
        <span className="text-sm uppercase tracking-[0.3em] text-[#38bdf8] font-bold">
          Innovazione Digitale
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">Soluzioni IT avanzate per il tuo business</span>
        </h1>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Semplifichiamo la complessità tecnologica. Affianchiamo la tua azienda con competenze tecniche specialistiche per progettare, sviluppare e proteggere la tua intera infrastruttura digitale.
        </p>
      </section>

      {/* Grid Servizi */}
      <section className="container-x mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {serviziList.map((servizio, index) => (
            <div 
              key={index} 
              className="group p-8 md:p-10 rounded-2xl bg-white/5 border border-[#0e7490]/30 hover:bg-[#0e7490]/20 hover:border-[#38bdf8]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0e7490]/30 text-[#38bdf8] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#38bdf8] group-hover:text-[#011C27] transition-all">
                <servizio.icona size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{servizio.titolo}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {servizio.descrizione}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container-x mx-auto px-6 lg:px-12 mt-32">
        <div className="bg-gradient-to-br from-[#0e7490]/40 to-[#011C27] border border-[#0e7490]/60 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#38bdf8]/20 via-transparent to-transparent opacity-50 pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">Pronto a scalare la tua infrastruttura</span>?
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto relative z-10">
            Contattaci per una consulenza gratuita. Analizzeremo le tue esigenze e progetteremo l'architettura IT perfetta per i tuoi obiettivi.
          </p>
          
          <Link 
            to="/contatti"
            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl bg-[#facc15] text-[#011C27] hover:bg-yellow-300 hover:scale-105 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)]"
          >
            Parlaci del tuo progetto
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}