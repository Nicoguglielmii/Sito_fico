import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, Cog, TrendingUp } from "lucide-react";

export const Route = createFileRoute('/business/')({
  component: BusinessGeneral,
});

function BusinessGeneral() {
  const aree = [
    {
      categoria: "Core Business",
      titolo: "Business Unit",
      descrizione: "Eroga i servizi core dell'azienda e realizza i progetti operativi sul campo, generando valore concreto e fatturato per l'impresa.",
      icona: Cog,
      linkText: "Esplora la Unit",
      path: "/business/unit",
      linkColor: "text-[#facc15] hover:text-yellow-300"
    },
    {
      categoria: "Crescita Strategica",
      titolo: "Business Development",
      descrizione: "Espande gli orizzonti di crescita dell'azienda, definendo nuove partnership strategiche e opportunità di sviluppo nel medio-lungo termine.",
      icona: TrendingUp,
      linkText: "Scopri le opportunità",
      path: "/business/development",
      linkColor: "text-[#38bdf8] hover:text-blue-300"
    }
  ];

  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      
      {/* Hero Section */}
      <div className="w-full bg-[#01425f] pt-40 pb-28">
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">
            L'ecosistema FI.CO.
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Il nostro approccio al Business
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
            Strutturiamo le nostre competenze in due macro-aree integrate. Da un lato eseguiamo i progetti core generando valore immediato, dall'altro pianifichiamo l'innovazione per guidare lo sviluppo futuro.
          </p>
        </section>
      </div>

      {/* Lista Macro-Aree (Layout verticale senza riquadri) */}
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
                {area.linkText} <ArrowRight size={20} />
              </Link>

            </div>
          ))}
        </section>
      </div>

    </div>
  );
}