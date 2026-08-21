import { createFileRoute } from '@tanstack/react-router';
import { Megaphone, Globe, LineChart, PenTool } from "lucide-react";
import { HeroParticles } from "@/components/site/Interactive";

export const Route = createFileRoute('/business/development/marketing')({
  component: MarketingPage,
});

function MarketingPage() {
  const serviziList = [
    { categoria: "Posizionamento", titolo: "Corporate Branding", descrizione: "Curiamo l'immagine e l'identità visiva dell'azienda. Definiamo il posizionamento strategico sul mercato B2B per trasmettere in modo inequivocabile i valori di affidabilità.", icona: PenTool },
    { categoria: "Digital Strategy", titolo: "Comunicazione Multicanale", descrizione: "Sviluppiamo strategie di comunicazione integrate sfruttando i canali digitali. Creiamo piani editoriali per posizionarci come leader di pensiero.", icona: Globe },
    { categoria: "Acquisizione", titolo: "Lead Generation", descrizione: "Progettiamo campagne mirate per generare contatti qualificati. Utilizziamo funnel avanzati per intercettare i bisogni di imprese e pubbliche amministrazioni.", icona: Megaphone },
    { categoria: "Data Driven", titolo: "Analisi di Mercato", descrizione: "Studiamo l'evoluzione del mercato, i trend tecnologici e le mosse dei competitor. Utilizziamo l'analisi dei dati per orientare le scelte aziendali.", icona: LineChart },
  ];

  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      <div className="relative w-full bg-[#01425f] pt-40 pb-28 overflow-hidden">
        <HeroParticles />
        <section className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">Business Development</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Marketing Strategico
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">Costruiamo autorevolezza e visibilità. Un ecosistema di comunicazione per far conoscere le nostre competenze.</p>
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