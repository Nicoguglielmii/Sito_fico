import { createFileRoute, Link } from '@tanstack/react-router';
import { Network, Wifi, Cable, Activity, ArrowRight } from "lucide-react";

export const Route = createFileRoute('/networking-cablaggio')({
  component: NetworkingCablaggio,
});

function NetworkingCablaggio() {
  const serviziList = [
    {
      categoria: "Cablaggio Strutturato",
      titolo: "Reti LAN & WAN",
      descrizione: "Progettazione e posa in opera di cablaggi strutturati in rame e fibra ottica per edifici aziendali, capannoni industriali e uffici. Garantiamo un'infrastruttura fisica certificata, ordinata e pronta a supportare le massime velocità di trasferimento dati senza colli di bottiglia.",
      icona: Network,
    },
    {
      categoria: "Wireless Aziendale",
      titolo: "Infrastrutture Wi-Fi",
      descrizione: "Realizziamo coperture Wi-Fi aziendali e industriali ad alta densità. Dallo studio di propagazione del segnale (Site Survey) all'installazione degli Access Point, assicuriamo un roaming fluido, sicurezza degli accessi e separazione tra reti ospiti e aziendali.",
      icona: Wifi,
    },
    {
      categoria: "Fibra Ottica",
      titolo: "Giunzioni e Collaudi",
      descrizione: "Siamo specializzati nella stesura, giunzione a fusione e collaudo di reti in fibra ottica. Utilizziamo strumentazione all'avanguardia (OTDR) per certificare le tratte e garantire latenze minime e affidabilità totale per le connessioni backbone.",
      icona: Cable,
    },
    {
      categoria: "Manutenzione & Supporto",
      titolo: "Monitoraggio Attivo",
      descrizione: "Non ci limitiamo all'installazione: offriamo servizi di monitoraggio continuo dell'infrastruttura di rete. Identifichiamo e risolviamo proattivamente eventuali anomalie prima che si trasformino in disservizi, garantendo la totale Business Continuity.",
      icona: Activity,
    },
  ];

  return (
    <div className="min-h-screen bg-[#001724] text-white pt-32 pb-24">
      
      {/* Hero Section */}
      <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 mb-32 text-left animate-fade-in">
        <span className="text-sm uppercase tracking-[0.3em] text-[#38bdf8] font-bold">
          Connettività & Infrastrutture
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
          Reti veloci, sicure e <span className="text-[#38bdf8]">Affidabili</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
          Progettiamo e realizziamo infrastrutture di rete fisiche e wireless di livello enterprise. Costruiamo le fondamenta tecnologiche su cui poggia l'intera operatività della tua azienda.
        </p>
      </section>

      {/* Lista Servizi */}
      <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col gap-28">
        {serviziList.map((servizio, index) => (
          <div key={index} className="flex flex-col items-start text-left">
            
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[3px] w-12 bg-gradient-to-r from-[#38bdf8] to-[#facc15] rounded-full"></div>
              <div className="text-sm md:text-sm uppercase tracking-[0.2em] text-gray-300 font-bold flex items-center gap-2.5">
                <servizio.icona size={18} className="text-[#38bdf8]" />
                {servizio.categoria}
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#38bdf8] mb-6 leading-tight">
              {servizio.titolo}
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">
              {servizio.descrizione}
            </p>
            
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 mt-32">
        <div className="bg-gradient-to-br from-[#0e7490]/40 to-[#001724] border border-[#0e7490]/60 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden flex flex-col items-start text-left">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#38bdf8]/20 via-transparent to-transparent opacity-50 pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative z-10 text-white leading-tight">
            Devi aggiornare la tua <span className="text-[#38bdf8]">rete aziendale</span>?
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl relative z-10 text-lg md:text-xl">
            Richiedi un sopralluogo tecnico. Analizzeremo i tuoi ambienti e progetteremo un'infrastruttura su misura per garantirti le massime performance.
          </p>
          
          <Link 
            to="/contatti"
            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl bg-[#facc15] text-[#001724] hover:bg-yellow-300 hover:scale-105 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)]"
          >
            Contattaci ora
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}