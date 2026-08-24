// Route e Link gestiscono rispettivamente la pagina corrente e la navigazione
// interna verso i due pilastri dell'organizzazione aziendale.
import { createFileRoute, Link } from '@tanstack/react-router';

// Le icone distinguono visivamente l'operatività core dallo sviluppo strategico.
import { Layers, TrendingUp, ArrowRight } from "lucide-react";
import { HeroParticles } from "@/components/site/Interactive";

// Immagini rappresentative delle due macro-aree. Gli import statici lasciano al
// bundler la gestione dei percorsi e degli asset durante la build.
import imgUnit from "@/assets/hero-fiber.jpg";
import imgDev from "@/assets/copilot-pittogramma.jpg"; 

// Route di ingresso alla sezione Business, con il componente che ne costruisce il contenuto.
export const Route = createFileRoute('/business/')({
  component: BusinessPage,
});

function BusinessPage() {
  // Dati delle due direttrici organizzative presentate nella pagina.
  // Ogni oggetto riunisce etichetta, contenuto, icona, destinazione e immagine,
  // permettendo di riutilizzare la stessa struttura JSX per entrambe le aree.
  const aree = [
    { 
      categoria: "Operatività Core", 
      titolo: "Business Unit", 
      descrizione: "Eroga i servizi core dell'azienda e realizza i progetti operativi, generando valore concreto e fatturato. La divisione che trasforma la progettazione in realtà tangibile.", 
      icona: Layers, 
      path: "/business/unit",
      linkColor: "text-[#facc15] hover:text-yellow-300",
      immagine: imgUnit
    },
    { 
      categoria: "Crescita Strategica", 
      titolo: "Business Development", 
      descrizione: "Espande gli orizzonti di crescita dell'azienda, definendo nuove partnership strategiche, curando il posizionamento del brand e cercando nuove opportunità di sviluppo.", 
      icona: TrendingUp, 
      path: "/business/development",
      linkColor: "text-[#facc15] hover:text-yellow-300",
      immagine: imgDev
    }
  ];

  return (
    // Wrapper globale che garantisce l'altezza minima della pagina e definisce
    // i colori di base ereditati da hero e contenuti.
    <div className="min-h-screen bg-[#011C27] text-white">
      {/*
        Hero introduttiva della sezione Business. La superficie relativa contiene
        lo sfondo animato e il suo overflow impedisce agli elementi decorativi di
        oltrepassare i limiti della fascia superiore.
      */}
      <div className="relative w-full bg-[#01425f] pt-40 pb-28 overflow-hidden">
        {/* Particelle decorative collocate dietro al testo della hero. */}
        <HeroParticles />

        {/* Contenitore testuale con larghezza massima e livello superiore all'animazione. */}
        <section className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          {/* Etichetta che introduce il modello organizzativo descritto sotto. */}
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">
            Il nostro approccio
          </span>
          {/* Titolo principale, scalato progressivamente per i diversi breakpoint. */}
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Business
          </h1>
          {/* Sintesi dei due pilastri che compongono l'architettura aziendale. */}
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
            L'architettura aziendale di FI.CO. si struttura in due grandi pilastri sinergici: l'operatività sul campo e lo sviluppo strategico.
          </p>
        </section>
      </div>

      {/*
        Elenco delle macro-aree. Le sezioni alternano testo e immagine sui desktop,
        mentre su mobile seguono un flusso verticale naturale.
      */}
      <div className="pt-24 pb-32">
        {/* Contenitore comune che allinea le aree alla hero e ne regola la distanza verticale. */}
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col gap-28 lg:gap-40">
          {/* Genera un blocco omogeneo per ogni area definita nell'array editoriale. */}
          {aree.map((area, index) => {
            // Le voci dispari invertono l'ordine delle colonne solo dal breakpoint lg.
            const isReversed = index % 2 !== 0;

            return (
              // Ogni macro-area è una griglia a due colonne sui layout larghi.
              <div key={index} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/*
                  Colonna editoriale con categoria, titolo, descrizione e link.
                  L'ordine condizionale crea la composizione a scacchiera.
                */}
                <div className={`flex flex-col items-start text-left ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Linea, icona e categoria anticipano il contenuto della macro-area. */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-[3px] w-12 bg-gradient-to-r from-[#38bdf8] to-[#facc15] rounded-full"></div>
                    <div className="text-sm uppercase tracking-[0.2em] text-[#facc15] font-bold flex items-center gap-2.5">
                      <area.icona size={18} className="text-[#38bdf8]" /> 
                      {area.categoria}
                    </div>
                  </div>

                  {/* Titolo dell'area, evidenziato come punto focale della sezione. */}
                  <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#38bdf8] mb-6 leading-tight">
                    {area.titolo}
                  </h2>

                  {/* Descrizione del contributo dell'area all'organizzazione aziendale. */}
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                    {area.descrizione}
                  </p>
                  
                  {/* Link interno verso la pagina di dettaglio della macro-area. */}
                  <Link 
                    to={area.path} 
                    className={`inline-flex items-center gap-2 font-bold ${area.linkColor} transition-colors`}
                  >
                    Entra nell'area <ArrowRight size={20} />
                  </Link>
                </div>

                {/*
                  Colonna visuale. L'ordine viene invertito insieme al testo sulle
                  sezioni alternate, mantenendo il layout verticale su mobile.
                */}
                <div className={`relative w-full ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Immagine responsiva con rapporto stabile e testo alternativo derivato dal titolo. */}
                  <img 
                    src={area.immagine} 
                    alt={area.titolo} 
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-video border border-white/5"
                  />
                  {/* Bagliore decorativo posto dietro l'immagine per aggiungere profondità visiva. */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-[#38bdf8] to-[#facc15] -z-10 blur-3xl opacity-30" />
                </div>

              </div>
            );
          })}
        </section>
      </div>

    </div>
  );
}