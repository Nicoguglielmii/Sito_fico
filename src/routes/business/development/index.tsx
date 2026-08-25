// TanStack Router fornisce la definizione della route e il componente Link per
// la navigazione interna, evitando il ricaricamento completo della pagina.
import { createFileRoute, Link } from '@tanstack/react-router';

// Le icone rendono immediatamente riconoscibile il tipo di attività associato
// a ciascuna area del dipartimento Business Development.
import { Briefcase, Megaphone, Handshake, FileText, Lightbulb, ArrowRight } from "lucide-react";

// Particelle decorative condivise con la hero delle altre pagine del sito.
import { HeroParticles } from "@/components/site/Interactive";

// Ogni immagine è importata come asset del progetto, così il bundler può
// gestirne percorso, ottimizzazione e inclusione nella build finale.
import imgCommerciale from "@/assets/project-telco.jpg";
import imgMarketing from "@/assets/pittogramma.jpg";
import imgPartnership from "@/assets/connessioni.png";
import imgGare from "@/assets/logo-scritto.jpg";
import imgInnovazione from "@/assets/copilot-logo.jpg";

// Route principale del dipartimento: presenta una panoramica delle aree e
// indirizza l'utente verso le pagine di dettaglio tramite i link delle sezioni.
export const Route = createFileRoute('/business/development/')({
  component: BusinessDevelopmentPage,
});

function BusinessDevelopmentPage() {
  // Modello dati usato per costruire tutte le sezioni della pagina.
  //
  // La struttura è intenzionalmente uniforme: il titolo, la descrizione, l'icona,
  // l'immagine e la destinazione del link appartengono sempre alla stessa area.
  // Il render può quindi essere generato da una sola funzione `map`, riducendo
  // la duplicazione del markup e mantenendo contenuti e collegamenti sincronizzati.
  const aree = [
    { 
      categoria: "Sviluppo Rete", 
      titolo: "Commerciale", 
      descrizione: "Acquisizione di nuovi clienti e presidio dei mercati di riferimento. Costruiamo relazioni solide e durature per garantire una crescita costante del portafoglio aziendale.", 
      icona: Briefcase, 
      path: "/business/development/commerciale",
      linkColor: "text-[#facc15] hover:text-yellow-300",
      immagine: imgCommerciale
    },
    { 
      categoria: "Comunicazione", 
      titolo: "Marketing", 
      descrizione: "Posizionamento del brand e strategie di comunicazione multicanale. Diamo voce ai nostri progetti e valorizziamo l'identità di FI.CO. sul mercato nazionale.", 
      icona: Megaphone, 
      path: "/business/development/marketing",
      linkColor: "text-[#facc15] hover:text-yellow-300",
      immagine: imgMarketing
    },
    { 
      categoria: "Alleanze", 
      titolo: "Partnership Strategiche", 
      descrizione: "Creazione di ecosistemi di valore e alleanze condivise. Lavoriamo fianco a fianco con i principali player di settore per moltiplicare le opportunità di successo.", 
      icona: Handshake, 
      path: "/business/development/partnership",
      linkColor: "text-[#facc15] hover:text-yellow-300",
      immagine: imgPartnership
    },
    { 
      categoria: "Tender & Bids", 
      titolo: "Gare e Opportunità", 
      descrizione: "Monitoraggio, analisi e partecipazione a bandi pubblici e privati. Strutturiamo proposte tecnico-economiche vincenti per aggiudicarci progetti ad alto impatto infrastrutturale.", 
      icona: FileText, 
      path: "/business/development/gare",
      linkColor: "text-[#facc15] hover:text-yellow-300",
      immagine: imgGare
    },
    { 
      categoria: "R & D", 
      titolo: "Innovazione e Nuovi Servizi", 
      descrizione: "Ricerca e sviluppo per anticipare le esigenze del domani. Sperimentiamo tecnologie e metodologie inedite per mantenere l'offerta aziendale sempre all'avanguardia.", 
      icona: Lightbulb, 
      path: "/business/development/innovazione",
      linkColor: "text-[#facc15] hover:text-yellow-300",
      immagine: imgInnovazione
    },
  ];

  return (
    // Il wrapper esterno occupa almeno tutta l'altezza della viewport e imposta
    // i colori di base ereditati dai contenuti della pagina.
    <div className="min-h-screen bg-[#011C27] text-white">
      {/*
        Hero introduttiva del dipartimento. La sezione usa un contesto relativo
        per contenere le particelle e ritagliare gli elementi che superano i suoi
        bordi, evitando che lo sfondo decorativo interferisca con il resto della pagina.
      */}
      <div className="relative w-full bg-[#01425f] pt-40 pb-28 overflow-hidden">
        {/*
          Sfondo animato decorativo. Non contiene informazioni essenziali: il
          testo rimane disponibile e leggibile anche indipendentemente dall'animazione.
        */}
        <HeroParticles />

        {/*
          Contenitore semantico del testo iniziale. `max-w-screen-xl` e i padding
          laterali allineano la hero al corpo della pagina e limitano la lunghezza
          delle righe sui display più ampi. `z-10` porta il contenuto sopra le particelle.
        */}
        <section className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          {/* Etichetta breve che identifica il tema strategico della sezione. */}
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">
            Crescita Strategica
          </span>

          {/* MODIFICA: font-display, tracking-tight, colore solido azzurro */}
          <h1 className="font-[var(--font-display)] mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-[#38bdf8]">
            Business Development
          </h1>

          {/* Descrizione introduttiva che chiarisce il ruolo del dipartimento. */}
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
            Espande gli orizzonti di crescita dell'azienda, definendo nuove partnership strategiche e opportunità di sviluppo nel medio-lungo termine.
          </p>
        </section>
      </div>

      {/*
        Corpo della pagina: qui viene mostrata la panoramica delle singole aree.
        Il padding superiore e inferiore crea respiro tra hero e contenuti, mentre
        il gap del contenitore separa chiaramente una sezione dalla successiva.
      */}
      <div className="pt-24 pb-32">
        {/*
          Contenitore comune a tutte le aree. La colonna singola è il comportamento
          naturale su schermi piccoli; dal breakpoint `lg` ogni voce diventa una
          griglia a due colonne con testo e immagine affiancati.
        */}
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col gap-28 lg:gap-40">
          {/*
            Generazione delle sezioni a partire dai dati editoriali. L'indice è
            usato per alternare l'ordine delle colonne e come chiave del blocco.
          */}
          {aree.map((area, index) => {
            // Le aree in posizione dispari usano l'ordine inverso solo su desktop:
            // su mobile il testo resta sempre prima dell'immagine per mantenere un
            // percorso di lettura lineare e prevedibile.
            const isReversed = index % 2 !== 0;

            return (
              // Ogni elemento della lista è una sezione autonoma composta da una
              // colonna editoriale e da una colonna visuale.
              <div key={index} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/*
                  Colonna testuale. La classe di ordine modifica solo il layout
                  largo, mentre su mobile il blocco segue il normale flusso verticale.
                */}
                <div className={`flex flex-col items-start text-left ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/*
                    Intestazione della singola area: la linea decorativa e la
                    categoria forniscono un punto di orientamento prima del titolo.
                  */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-[3px] w-12 bg-gradient-to-r from-[#38bdf8] to-[#facc15] rounded-full"></div>
                    <div className="text-sm uppercase tracking-[0.2em] text-[#facc15] font-bold flex items-center gap-2.5">
                      {/* L'icona viene scelta dai dati e riceve dimensione e colore uniformi. */}
                      <area.icona size={18} className="text-[#38bdf8]" /> 
                      {area.categoria}
                    </div>
                  </div>

                  {/* MODIFICA: font-display, tracking-tight, font-bold invece di font-black */}
                  <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-[#38bdf8] mb-6 leading-tight">
                    {area.titolo}
                  </h2>

                  {/* Testo descrittivo che dettaglia il valore dell'area per l'azienda. */}
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                    {area.descrizione}
                  </p>

                  {/*
                    Navigazione verso il dettaglio. Il percorso arriva dallo stesso
                    oggetto che contiene titolo e descrizione, evitando destinazioni
                    scritte separatamente nel JSX; ArrowRight segnala visivamente l'azione.
                  */}
                  <Link 
                    to={area.path} 
                    className={`inline-flex items-center gap-2 font-bold ${area.linkColor} transition-colors`}
                  >
                    Scopri di più <ArrowRight size={20} />
                  </Link>
                </div>

                {/*
                  Colonna visuale. L'ordine viene invertito insieme a quello del
                  testo nelle sezioni dispari, producendo l'effetto a scacchiera
                  sui desktop senza duplicare la struttura della pagina.
                */}
                <div className={`relative w-full ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/*
                    L'immagine usa il titolo dell'area come testo alternativo, così
                    il contenuto resta identificabile anche con immagini disabilitate
                    o durante la navigazione assistita. `aspect-video` mantiene una
                    proporzione stabile mentre la larghezza si adatta al contenitore.
                  */}
                  <img 
                    src={area.immagine} 
                    alt={area.titolo} 
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-video border border-white/5"
                  />

                  {/*
                    Bagliore decorativo assoluto. Il livello negativo lo mantiene
                    dietro l'immagine, mentre blur e opacità ne attenuano la presenza
                    per non sottrarre attenzione al contenuto principale.
                  */}
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