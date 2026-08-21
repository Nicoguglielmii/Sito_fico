import { createFileRoute } from '@tanstack/react-router';
import { Target, Network, Handshake, ShieldCheck } from "lucide-react";
import { HeroParticles } from "@/components/site/Interactive";

export const Route = createFileRoute('/business/development/partnership')({
  component: PartnershipPage,
});

function PartnershipPage() {
  const serviziList = [
    { categoria: "Alleanze Industriali", titolo: "Joint Venture e ATI", descrizione: "Strutturiamo partnership e Associazioni Temporanee di Impresa (ATI) con player nazionali e internazionali. Uniamo le forze per vincere grandi appalti.", icona: Handshake },
    { categoria: "Ecosistema", titolo: "Reti d'Impresa", descrizione: "Costruiamo e partecipiamo a reti d'impresa per favorire lo scambio di know-how e l'innovazione tecnologica. Crediamo nella sinergia.", icona: Network },
    { categoria: "Sviluppo Congiunto", titolo: "Co-Marketing e Ricerca", descrizione: "Collaboriamo strettamente con i principali Vendor tecnologici e Università per sviluppare soluzioni pionieristiche e avere accesso a nuove tecnologie.", icona: Target },
    { categoria: "Affidabilità", titolo: "Selezione Subappaltatori", descrizione: "Qualifichiamo rigorosamente la nostra rete di partner operativi e subappaltatori per garantire altissimi standard di sicurezza e qualità.", icona: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      <div className="relative w-full bg-[#01425f] pt-40 pb-28 overflow-hidden">
        <HeroParticles />
        <section className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">Business Development</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Partnership Strategiche
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">L'unione fa la forza. Creiamo ecosistemi di valore collaborando con imprese eccellenti per affrontare le sfide più complesse del mercato.</p>
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