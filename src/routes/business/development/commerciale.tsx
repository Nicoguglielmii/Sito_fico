import { createFileRoute, Link } from '@tanstack/react-router';
import { Handshake, Briefcase, TrendingUp, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute('/business/development/commerciale')({
  component: CommercialePage,
});

function CommercialePage() {
  const serviziList = [
    { categoria: "Sviluppo Rete", titolo: "Acquisizione Nuovi Clienti", descrizione: "Strutturiamo e implementiamo strategie commerciali mirate per penetrare nuovi mercati e segmenti di clientela.", icona: Users },
    { categoria: "Fidelizzazione", titolo: "Key Account Management", descrizione: "Gestiamo e consolidiamo i rapporti con i clienti strategici (Key Client). Offriamo consulenza continua e soluzioni personalizzate.", icona: Briefcase },
    { categoria: "Vendita Indiretta", titolo: "Gestione Reti di Vendita", descrizione: "Creiamo e coordiniamo reti di agenti e segnalatori sul territorio. Sviluppiamo programmi di incentivazione.", icona: Handshake },
    { categoria: "Analisi e Reportistica", titolo: "Monitoraggio KPI", descrizione: "Misuriamo costantemente le performance di vendita attraverso KPI strutturati. Analizziamo i tassi di conversione.", icona: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      <div className="w-full bg-[#01425f] pt-40 pb-28">
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">Business Development</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Sviluppo Commerciale
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">Progettiamo la crescita aziendale espandendo il portafoglio clienti e presidiando nuovi mercati.</p>
        </section>
      </div>

      <div className="pt-24 pb-24">
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col gap-28">
          {serviziList.map((servizio, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[3px] w-12 bg-gradient-to-r from-[#38bdf8] to-[#facc15] rounded-full"></div>
                <div className="text-sm uppercase tracking-[0.2em] text-gray-300 font-bold flex items-center gap-2.5">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative z-10 text-white leading-tight"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">Vuoi esplorare nuove opportunità?</span></h2>
            <p className="text-gray-300 mb-10 max-w-2xl relative z-10 text-lg">Fissa un incontro con la nostra divisione commerciale per discutere come le nostre soluzioni possono supportare la tua azienda.</p>
            <Link to="/contatti" className="relative z-10 inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl bg-[#facc15] text-[#001724] hover:bg-yellow-300 hover:scale-105 transition-all">
              Contatta la direzione <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}