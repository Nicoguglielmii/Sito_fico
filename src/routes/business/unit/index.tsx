import { createFileRoute, Link } from '@tanstack/react-router';
import { Network, Zap, Building, ArrowRight } from "lucide-react";

export const Route = createFileRoute('/business/unit/')({
  component: BusinessUnitPage,
});

function BusinessUnitPage() {
  const aree = [
    { 
      categoria: "Telecomunicazioni", 
      titolo: "Fibra e Mobile", 
      descrizione: "Sviluppo di infrastrutture di telecomunicazione di ultima generazione. Progettiamo, realizziamo e manuteniamo le autostrade digitali del futuro.", 
      icona: Network, 
      path: "/business/unit/fibra-mobile",
      linkColor: "text-[#38bdf8] hover:text-blue-300"
    },
    { 
      categoria: "Transizione Energetica", 
      titolo: "Energia", 
      descrizione: "Soluzioni per l'efficientamento e le infrastrutture energetiche. Guidiamo le aziende e le pubbliche amministrazioni verso la sostenibilità.", 
      icona: Zap, 
      path: "/business/unit/energia",
      linkColor: "text-[#facc15] hover:text-yellow-300"
    },
    { 
      categoria: "Appalti e Imprese", 
      titolo: "PA e Privati", 
      descrizione: "Realizzazioni civili e digitali per la Pubblica Amministrazione e settore enterprise. Un partner unico per progetti complessi chiavi in mano.", 
      icona: Building, 
      path: "/business/unit/pa-privati",
      linkColor: "text-[#38bdf8] hover:text-blue-300"
    },
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
            Eroga i servizi core dell'azienda e realizza i progetti operativi, generando valore concreto e fatturato.
          </p>
        </section>
      </div>

      {/* Lista Micro-Aree (Layout verticale a cascata) */}
      <div className="pt-24 pb-32">
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col gap-28">
          {aree.map((area, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              
              {/* Pre-titolo con lineetta sfumata */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[3px] w-12 bg-gradient-to-r from-[#38bdf8] to-[#facc15] rounded-full"></div>
                <div className="text-sm uppercase tracking-[0.2em] text-gray-300 font-bold flex items-center gap-2.5">
                  <area.icona size={18} className="text-[#38bdf8]" /> 
                  {area.categoria}
                </div>
              </div>

              {/* Titolo principale */}
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#38bdf8] mb-6 leading-tight">
                {area.titolo}
              </h2>

              {/* Paragrafo descrittivo */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mb-8">
                {area.descrizione}
              </p>
              
              {/* Link alla pagina */}
              <Link 
                to={area.path} 
                className={`inline-flex items-center gap-2 font-bold ${area.linkColor} transition-colors`}
              >
                Esplora la divisione <ArrowRight size={20} />
              </Link>

            </div>
          ))}
        </section>
      </div>
    </div>
  );
}