// `createFileRoute` collega questo file alla route generata da TanStack Router.
// In questo modo la pagina viene individuata usando il percorso del file e non
// richiede una registrazione manuale aggiuntiva nel router dell'applicazione.
import { createFileRoute } from '@tanstack/react-router';

// Le icone vengono importate singolarmente per mantenere chiaro il rapporto
// tra ogni servizio e il simbolo che lo rappresenta nella pagina.
import { FileText, Search, Calculator, Landmark } from "lucide-react";

// Sfondo interattivo condiviso dalle pagine del sito. È un elemento decorativo:
// il contenuto testuale resta indipendente e leggibile anche senza di esso.
import { HeroParticles } from "@/components/site/Interactive";

// Definizione della route relativa alla pagina dedicata a gare e opportunità.
// La proprietà `component` indica il componente React responsabile del render.
export const Route = createFileRoute('/business/development/gare')({
  component: GarePage,
});

function GarePage() {
  // Contenuto editoriale delle quattro fasi principali del servizio.
  //
  // Ogni oggetto conserva tutti i dati necessari al render di una voce:
  // - `categoria` è l'etichetta breve mostrata sopra il titolo;
  // - `titolo` e `descrizione` costituiscono il contenuto principale;
  // - `icona` contiene il componente Lucide da renderizzare accanto alla categoria.
  // Tenere questi dati in una lista evita di duplicare la stessa struttura JSX
  // e rende più semplice aggiungere o riordinare un servizio in futuro.
  const serviziList = [
    { categoria: "Scouting", titolo: "Monitoraggio Bandi", descrizione: "Analizziamo quotidianamente le piattaforme di e-procurement per individuare le migliori opportunità di business in ambito pubblico e privato.", icona: Search },
    { categoria: "Progettazione", titolo: "Proposte Tecnico-Economiche", descrizione: "Il nostro team elabora progetti tecnici e piani economici altamente competitivi per massimizzare le probabilità di aggiudicazione.", icona: Calculator },
    { categoria: "Burocrazia", titolo: "Gestione Documentale", descrizione: "Seguiamo l'intero iter burocratico e amministrativo necessario per la partecipazione alle gare d'appalto, garantendo la massima precisione e conformità.", icona: FileText },
    { categoria: "Istituzioni", titolo: "Relazioni Stazioni Appaltanti", descrizione: "Manteniamo un dialogo costante e trasparente con le Pubbliche Amministrazioni e gli enti erogatori per tutta la durata dell'iter di gara.", icona: Landmark },
  ];

  return (
    // Il contenitore principale imposta il fondo scuro dell'intera pagina e il
    // colore di base del testo, così le sezioni interne ereditano una superficie
    // visiva coerente con le altre pagine dell'area Business Development.
    <div className="min-h-screen bg-[#011C27] text-white">
      {/*
        Hero della pagina: occupa la prima fascia visibile e introduce il tema.
        `relative` è necessario perché le particelle decorative possano essere
        posizionate rispetto a questa sezione senza uscire dal suo contesto.
        `overflow-hidden` ritaglia eventuali particelle oltre i bordi della hero.
      */}
      <div className="relative w-full bg-[#01425f] pt-40 pb-28 overflow-hidden">
        {/* Sfondo animato decorativo, mantenuto dietro al contenuto testuale. */}
        <HeroParticles />

        {/*
          Contenitore del testo hero. La larghezza massima limita la lunghezza
          delle righe sui monitor ampi, mentre padding e classi responsive
          mantengono margini adeguati su mobile e desktop.
        */}
        <section className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          {/* Etichetta di contesto che identifica il dipartimento proprietario del servizio. */}
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">Business Development</span>

          {/* Titolo principale della pagina, più grande della gerarchia sottostante. */}
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Gare e Opportunità
          </h1>

          {/* Sintesi del servizio, limitata in larghezza per favorire la lettura. */}
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">Monitoraggio, analisi e partecipazione a bandi pubblici e privati. Strutturiamo proposte vincenti.</p>
        </section>
      </div>

      {/* Corpo della pagina: la spaziatura verticale separa la hero dai servizi. */}
      <div className="pt-24 pb-24">
        {/*
          La larghezza massima allinea il contenuto alla hero. Il layout a colonna
          lascia a ogni servizio spazio sufficiente per titolo e descrizione.
        */}
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col gap-28">
          {/* La lista viene trasformata in markup senza duplicare la struttura JSX. */}
          {serviziList.map((servizio, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              {/*
                Riga introduttiva del servizio: linea, categoria e icona
                anticipano il tipo di attività descritto nel titolo.
              */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[3px] w-12 bg-gradient-to-r from-[#38bdf8] to-[#facc15] rounded-full"></div>
                <div className="text-sm uppercase tracking-[0.2em] text-[#facc15] font-bold flex items-center gap-2.5">
                  {/* Ogni voce fornisce il proprio componente Lucide come icona dinamica. */}
                  <servizio.icona size={18} className="text-[#38bdf8]" /> {servizio.categoria}
                </div>
              </div>

              {/* Titolo specifico della voce, con dimensioni responsive. */}
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#38bdf8] mb-6 leading-tight">{servizio.titolo}</h2>

              {/* Descrizione editoriale del servizio, contenuta per evitare righe troppo lunghe. */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">{servizio.descrizione}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}