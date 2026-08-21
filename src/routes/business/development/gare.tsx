import { createFileRoute } from '@tanstack/react-router';
import { FileText, Search, Calculator, Landmark } from "lucide-react";
import { HeroParticles } from "@/components/site/Interactive";

export const Route = createFileRoute('/business/development/gare')({
  component: GarePage,
});

function GarePage() {
  const serviziList = [
    { categoria: "Scouting", titolo: "Monitoraggio Bandi", descrizione: "Analizziamo quotidianamente le piattaforme di e-procurement per individuare le migliori opportunità di business in ambito pubblico e privato.", icona: Search },
    { categoria: "Progettazione", titolo: "Proposte Tecnico-Economiche", descrizione: "Il nostro team elabora progetti tecnici e piani economici altamente competitivi per massimizzare le probabilità di aggiudicazione.", icona: Calculator },
    { categoria: "Burocrazia", titolo: "Gestione Documentale", descrizione: "Seguiamo l'intero iter burocratico e amministrativo necessario per la partecipazione alle gare d'appalto, garantendo la massima precisione e conformità.", icona: FileText },
    { categoria: "Istituzioni", titolo: "Relazioni Stazioni Appaltanti", descrizione: "Manteniamo un dialogo costante e trasparente con le Pubbliche Amministrazioni e gli enti erogatori per tutta la durata dell'iter di gara.", icona: Landmark },
  ];

  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      <div className="relative w-full bg-[#01425f] pt-40 pb-28 overflow-hidden">
        <HeroParticles />
        <section className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">Business Development</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Gare e Opportunità
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">Monitoraggio, analisi e partecipazione a bandi pubblici e privati. Strutturiamo proposte vincenti.</p>
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