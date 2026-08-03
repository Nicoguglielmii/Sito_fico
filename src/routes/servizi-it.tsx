import { createFileRoute, Link } from '@tanstack/react-router';
import { Code, Cloud, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export const Route = createFileRoute('/servizi-it')({
  component: ServiziIT,
});

function ServiziIT() {
  const serviziList = [
    {
      categoria: "Sviluppo & Ingegneria",
      titolo: "Sviluppo Software Custom",
      descrizione: "Progettiamo e sviluppiamo applicazioni web e gestionali su misura, scalabili e sicuri, perfettamente integrati con i processi della tua azienda. Dalla fase di analisi dei requisiti fino al deploy e alla manutenzione, utilizziamo gli stack tecnologici più moderni per garantirti performance ottimali e un vantaggio competitivo reale.",
      icona: Code,
    },
    {
      categoria: "Cloud & Architetture",
      titolo: "Infrastrutture Cloud",
      descrizione: "Migrazione, gestione e ottimizzazione di architetture Cloud per garantire altissime prestazioni, sicurezza dei dati e continuità operativa (Business Continuity). Progettiamo ambienti scalabili che si adattano dinamicamente alle esigenze del tuo business, riducendo i costi di gestione server e azzerando i tempi di inattività.",
      icona: Cloud,
    },
    {
      categoria: "Cybersecurity",
      titolo: "Sicurezza Informatica",
      descrizione: "Proteggiamo il perimetro digitale della tua impresa con audit di vulnerabilità, penetration test e l'implementazione dei più severi protocolli crittografici. Preveniamo proattivamente le minacce informatiche per assicurare la totale integrità, disponibilità e riservatezza dei tuoi dati sensibili aziendali.",
      icona: ShieldCheck,
    },
    {
      categoria: "Digital Transformation",
      titolo: "Consulenza e System Integration",
      descrizione: "Ti guidiamo nella vera trasformazione digitale, facendo dialogare tra loro sistemi complessi, automatizzando processi e snellendo i flussi di lavoro. Il nostro team di esperti analizza l'architettura IT esistente e progetta soluzioni innovative per massimizzare l'efficienza operativa del tuo team.",
      icona: Cpu,
    },
  ];

  return (
    <div className="min-h-screen bg-[#001724] text-white pt-32 pb-24">
      
      {/* Hero Section (Schiacciata a sinistra) */}
      <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 mb-32 text-left animate-fade-in">
        <span className="text-sm uppercase tracking-[0.3em] text-[#38bdf8] font-bold">
          Innovazione Digitale
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
         <span className="text-[#38bdf8]"> Soluzioni IT avanzate per il tuo business</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
          Semplifichiamo la complessità tecnologica. Affianchiamo la tua azienda con competenze tecniche specialistiche per progettare, sviluppare e proteggere la tua intera infrastruttura digitale.
        </p>
      </section>

      {/* Lista Servizi (Allineata a sinistra) */}
      <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col gap-28">
        {serviziList.map((servizio, index) => (
          <div key={index} className="flex flex-col items-start text-left">
            
            {/* Pre-titolo con lineetta sfumata */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[3px] w-12 bg-gradient-to-r from-[#38bdf8] to-[#facc15] rounded-full"></div>
              <div className="text-sm md:text-sm uppercase tracking-[0.2em] text-gray-300 font-bold flex items-center gap-2.5">
                <servizio.icona size={18} className="text-[#38bdf8]" />
                {servizio.categoria}
              </div>
            </div>

            {/* Titolo principale */}
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#38bdf8] mb-6 leading-tight">
              {servizio.titolo}
            </h2>

            {/* Paragrafo descrittivo */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">
              {servizio.descrizione}
            </p>
            
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 mt-32">
        <div className="bg-gradient-to-br from-[#0e7490]/40 to-[#001724] border border-[#0e7490]/60 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden flex flex-col items-start text-left">
          {/* Riflesso decorativo */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#38bdf8]/20 via-transparent to-transparent opacity-50 pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative z-10 text-white leading-tight">
           <span className="text-[#38bdf8]"> Pronto a scalare la tua infrastruttura? </span>
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl relative z-10 text-lg md:text-xl">
            Contattaci per una consulenza gratuita. Analizzeremo le tue esigenze e progetteremo l'architettura IT perfetta per i tuoi obiettivi.
          </p>
          
          <Link 
            to="/contatti"
            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl bg-[#facc15] text-[#001724] hover:bg-yellow-300 hover:scale-105 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)]"
          >
            Parlaci del tuo progetto
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}