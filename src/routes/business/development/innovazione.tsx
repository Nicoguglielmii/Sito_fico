// Collega il file al sistema di routing basato sulla struttura delle cartelle.
// La route risultante espone il componente della pagina senza registrazioni manuali.
import { createFileRoute } from '@tanstack/react-router';

// Ogni icona sintetizza visivamente una delle aree operative dell'innovazione:
// ricerca, tecnologia, sviluppo di nuovi servizi e miglioramento dei processi.
import { Lightbulb, Cpu, Telescope, Rocket } from "lucide-react";

// Componente grafico condiviso usato come sfondo decorativo della hero.
import { HeroParticles } from "@/components/site/Interactive";

// Route della pagina dedicata all'innovazione e allo sviluppo di nuovi servizi.
export const Route = createFileRoute('/business/development/innovazione')({
  component: InnovazionePage,
});

function InnovazionePage() {
  // Elenco delle aree in cui il dipartimento traduce la ricerca tecnologica
  // in soluzioni, servizi e processi applicabili al contesto aziendale.
  //
  // La proprietà `icona` contiene direttamente il componente Lucide da usare
  // nel render. In questo modo ogni voce mantiene insieme contenuto editoriale
  // e rappresentazione visiva, mentre il markup può restare condiviso.
  const serviziList = [
    { categoria: "Ricerca e Sviluppo", titolo: "R&D Lab e Prototipazione", descrizione: "Investiamo attivamente nello studio di tecnologie emergenti. Il nostro laboratorio interno testa nuovi materiali, apparati IoT e sensori avanzati.", icona: Telescope },
    { categoria: "Città del Futuro", titolo: "Smart City e Sensori", descrizione: "Sviluppiamo nuovi modelli di business legati alle Smart City. Integriamo l'intelligenza artificiale (AI) e le reti neurali all'interno delle infrastrutture civiche.", icona: Cpu },
    { categoria: "Transizione Digitale", titolo: "Nuovi Servizi IT", descrizione: "Progettiamo servizi innovativi per supportare l'Industria 5.0, dall'implementazione di reti private 5G per l'automazione industriale avanzata alla cybersecurity.", icona: Rocket },
    { categoria: "Miglioramento Continuo", titolo: "Innovazione di Processo", descrizione: "Digitalizziamo costantemente i nostri processi aziendali adottando piattaforme BIM e software gestionali evoluti per ottimizzare cantieri e progettazione.", icona: Lightbulb },
  ];

  return (
    // Wrapper della pagina: garantisce almeno l'altezza della viewport e imposta
    // il fondo scuro comune alle pagine dell'area Business Development.
    <div className="min-h-screen bg-[#011C27] text-white">
      {/*
        Hero introduttiva della pagina. La posizione relativa crea il riferimento
        per gli elementi decorativi e `overflow-hidden` impedisce alle particelle
        di invadere le sezioni successive.
      */}
      <div className="relative w-full bg-[#01425f] pt-40 pb-28 overflow-hidden">
        {/* Sfondo animato puramente decorativo, collocato dietro al testo della hero. */}
        <HeroParticles />

        {/*
          Area testuale della hero. Il livello superiore mantiene titolo e testo
          leggibili sopra l'animazione; larghezza massima e padding assicurano
          una composizione ordinata sia su schermi grandi sia su dispositivi mobili.
        */}
        <section className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          {/* Etichetta di contesto che riconduce la pagina al dipartimento principale. */}
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">Business Development</span>

          {/* MODIFICA: font-display, font-bold e tracking-tight applicati al titolo principale */}
          <h1 className="font-[var(--font-display)] mt-4 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15]">
            Innovazione e Nuovi Servizi
          </h1>

          {/*
            Sottotitolo introduttivo. La larghezza massima limita la lunghezza
            delle righe per rendere più immediata la lettura del messaggio.
          */}
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">Guardiamo oltre il presente. Anticipiamo i trend tecnologici per definire i nuovi standard infrastrutturali e digitali di domani.</p>
        </section>
      </div>

      {/*
        Sezione dei servizi. Il padding separa il contenuto dalla hero e il gap
        verticale crea una pausa visiva tra un'area di innovazione e la successiva.
      */}
      <div className="pt-24 pb-24">
        {/*
          Contenitore centrato e limitato in larghezza. Il layout a colonna è
          intenzionale: ogni servizio viene letto come un passaggio autonomo,
          con una gerarchia costante e facilmente scansionabile.
        */}
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col gap-28">
          {/*
            La stessa struttura JSX viene riutilizzata per tutti i servizi.
            L'indice consente di fornire una chiave distinta a ogni elemento
            generato dalla lista.
          */}
          {serviziList.map((servizio, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              {/*
                Intestazione del servizio: la linea colorata funziona da separatore,
                mentre categoria e icona anticipano l'argomento della sezione.
              */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[3px] w-12 bg-gradient-to-r from-[#38bdf8] to-[#facc15] rounded-full"></div>
                <div className="text-sm uppercase tracking-[0.2em] text-[#facc15] font-bold flex items-center gap-2.5">
                  {/*
                    Il componente viene scelto dai dati della voce, così ogni
                    categoria può avere un'icona diversa senza duplicare il layout.
                  */}
                  <servizio.icona size={18} className="text-[#38bdf8]" /> {servizio.categoria}
                </div>
              </div>

              {/* MODIFICA: font-display, font-bold (rimosso font-black) e tracking-tight */}
              <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-[#38bdf8] mb-6 leading-tight">
                {servizio.titolo}
              </h2>

              {/*
                Descrizione editoriale dell'attività. Il limite di larghezza evita
                righe eccessivamente lunghe e conserva una lettura confortevole.
              */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">{servizio.descrizione}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}