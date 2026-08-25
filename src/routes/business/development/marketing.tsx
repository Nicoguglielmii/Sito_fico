// Collega il file alla route generata da TanStack Router e permette alla pagina
// di essere caricata attraverso la navigazione interna dell'applicazione.
import { createFileRoute } from '@tanstack/react-router';

// Le icone rappresentano i diversi ambiti del marketing: identità, canali,
// acquisizione e analisi delle informazioni di mercato.
import { Megaphone, Globe, LineChart, PenTool } from "lucide-react";

// Sfondo interattivo condiviso dalle hero del sito, usato qui come elemento
// visivo decorativo indipendente dai contenuti testuali.
import { HeroParticles } from "@/components/site/Interactive";

// Route della pagina che presenta il marketing come area strategica del
// dipartimento Business Development.
export const Route = createFileRoute('/business/development/marketing')({
  component: MarketingPage,
});

function MarketingPage() {
  // Dati editoriali delle attività principali di marketing.
  //
  // Ogni voce raccoglie categoria, titolo, descrizione e icona in un unico
  // oggetto. La pagina può così utilizzare una struttura JSX comune per tutti
  // i servizi, mentre il contenuto resta facile da aggiornare o riordinare.
  const serviziList = [
    { categoria: "Posizionamento", titolo: "Corporate Branding", descrizione: "Curiamo l'immagine e l'identità visiva dell'azienda. Definiamo il posizionamento strategico sul mercato B2B per trasmettere in modo inequivocabile i valori di affidabilità.", icona: PenTool },
    { categoria: "Digital Strategy", titolo: "Comunicazione Multicanale", descrizione: "Sviluppiamo strategie di comunicazione integrate sfruttando i canali digitali. Creiamo piani editoriali per posizionarci come leader di pensiero.", icona: Globe },
    { categoria: "Acquisizione", titolo: "Lead Generation", descrizione: "Progettiamo campagne mirate per generare contatti qualificati. Utilizziamo funnel avanzati per intercettare i bisogni di imprese e pubbliche amministrazioni.", icona: Megaphone },
    { categoria: "Data Driven", titolo: "Analisi di Mercato", descrizione: "Studiamo l'evoluzione del mercato, i trend tecnologici e le mosse dei competitor. Utilizziamo l'analisi dei dati per orientare le scelte aziendali.", icona: LineChart },
  ];

  return (
    // Contenitore globale della pagina: imposta altezza minima, sfondo e colore
    // del testo ereditato dalle sezioni interne.
    <div className="min-h-screen bg-[#011C27] text-white">
      {/*
        Hero introduttiva. Il contesto relativo contiene le particelle decorative
        e `overflow-hidden` impedisce che l'animazione oltrepassi questa fascia.
      */}
      <div className="relative w-full bg-[#01425f] pt-40 pb-28 overflow-hidden">
        {/* Sfondo animato non essenziale, posizionato dietro alla gerarchia testuale. */}
        <HeroParticles />

        {/*
          Blocco testuale della hero. Il livello z-index superiore garantisce la
          leggibilità sopra l'animazione; larghezza massima e padding mantengono
          l'allineamento con il contenuto della pagina sui diversi schermi.
        */}
        <section className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          {/* Etichetta di contesto che identifica l'area organizzativa della pagina. */}
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">Business Development</span>

          {/* MODIFICA: font-display, font-bold e tracking-tight */}
          <h1 className="font-[var(--font-display)] mt-4 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Marketing Strategico
          </h1>

          {/*
            Sintesi del posizionamento del servizio. `max-w-3xl` evita che il testo
            occupi una riga eccessivamente lunga sui monitor di grandi dimensioni.
          */}
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">Costruiamo autorevolezza e visibilità. Un ecosistema di comunicazione per far conoscere le nostre competenze.</p>
        </section>
      </div>

      {/*
        Corpo della pagina. Il padding crea distanza dalla hero e il contenitore
        interno separa visivamente le singole aree attraverso un gap verticale ampio.
      */}
      <div className="pt-24 pb-24">
        {/*
          Layout centrato e a colonna: ogni servizio ha una propria sequenza di
          categoria, titolo e descrizione, leggibile anche su schermi stretti.
        */}
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col gap-28">
          {/*
            Rendering dichiarativo dei servizi. L'indice fornisce una chiave
            distinta ai blocchi generati dalla lista.
          */}
          {serviziList.map((servizio, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              {/*
                Riga di intestazione: la linea colorata separa le aree, mentre
                categoria e icona offrono un'indicazione rapida dell'argomento.
              */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[3px] w-12 bg-gradient-to-r from-[#38bdf8] to-[#facc15] rounded-full"></div>
                <div className="text-sm uppercase tracking-[0.2em] text-[#facc15] font-bold flex items-center gap-2.5">
                  {/* L'icona dinamica è fornita direttamente dalla voce corrente. */}
                  <servizio.icona size={18} className="text-[#38bdf8]" /> {servizio.categoria}
                </div>
              </div>

              {/* MODIFICA: font-display, font-bold e tracking-tight */}
              <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-[#38bdf8] mb-6 leading-tight">
                {servizio.titolo}
              </h2>

              {/*
                Descrizione dell'attività. La dimensione del testo e l'interlinea
                privilegiano la lettura, mentre il limite di larghezza evita righe
                troppo estese sui layout desktop.
              */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">{servizio.descrizione}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}