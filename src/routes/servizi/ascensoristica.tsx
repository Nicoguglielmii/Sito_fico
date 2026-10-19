import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Compass,
  HardHat,
  Layers,
  CheckCircle2,
  ArrowRight,
  DraftingCompass,
  Wrench,
  ShieldCheck,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";
import { FicoImage } from "@/components/site/FicoImage";

import ascensoristicaImg from "@/assets/ascensoristica.jpg";

export const Route = createFileRoute("/servizi/ascensoristica")({
  head: () => ({
    meta: [
      { title: "Progettazione Ascensoristica — FI.CO. SRL" },
      {
        name: "description",
        content:
          "Servizi tecnici e architettonici per ascensori, dalla fattibilità al cantiere. Soluzioni standard e fuori standard integrate nei servizi FI.CO. SRL.",
      },
    ],
  }),
  component: AscensoristicaPage,
});

function AscensoristicaPage() {
  const processoFasi = [
    {
      step: "01",
      title: "Analisi e fattibilità",
      desc: "Valutazione degli spazi, dei vincoli e delle possibili configurazioni impiantistiche.",
    },
    {
      step: "02",
      title: "Avamprogetto",
      desc: "Definizione della soluzione, degli ingombri e del corretto inserimento nell'edificio.",
    },
    {
      step: "03",
      title: "Progettazione esecutiva",
      desc: "Elaborati tecnici, layout, dettagli costruttivi e documentazione per lo sviluppo dell'impianto.",
    },
    {
      step: "04",
      title: "Produzione",
      desc: "Supporto alla definizione dei componenti e degli elaborati necessari alla messa in produzione.",
    },
    {
      step: "05",
      title: "Cantiere",
      desc: "Coordinamento tecnico, gestione delle interferenze e supporto alle modifiche che emergono in fase di installazione.",
    },
    {
      step: "06",
      title: "Ottimizzazione",
      desc: "Confronto tra soluzioni alternative per migliorare ingombri, funzionalità, realizzabilità e costi.",
    },
  ];

  const macroServizi = [
    {
      code: "AREA 01",
      icon: Compass,
      badge: "IMPOSTAZIONE & STUDIO",
      title: "Fattibilità, Avamprogetto & Scelte Impiantistiche",
      items: [
        {
          name: "Studi di fattibilità e avamprogetto",
          desc: "Analisi preliminare degli spazi, dei vincoli e della tipologia di impianto più adatta.",
        },
        {
          name: "Progettazione preliminare ed esecutiva",
          desc: "Sviluppo dell'impianto dalla configurazione iniziale agli elaborati tecnici di dettaglio.",
        },
        {
          name: "Ascensori standard e fuori standard",
          desc: "Soluzioni per configurazioni ricorrenti e impianti speciali o personalizzati.",
        },
        {
          name: "Nuove installazioni ed edifici esistenti",
          desc: "Progettazione per nuove costruzioni e inserimento di impianti in contesti con vincoli dimensionali o architettonici.",
        },
        {
          name: "Modernizzazioni e sostituzioni",
          desc: "Studio delle nuove configurazioni e ottimizzazione degli spazi disponibili su impianti esistenti.",
        },
      ],
    },
    {
      code: "AREA 02",
      icon: DraftingCompass,
      badge: "INGEGNERIA & ARCHITETTURA",
      title: "Modellazione, Strutture & Integrazione Edilizia",
      items: [
        {
          name: "Disegni 2D e modellazione 3D",
          desc: "Documentazione grafica per cliente, progettazione, produzione e coordinamento tecnico.",
        },
        {
          name: "Layout, piante, sezioni e prospetti",
          desc: "Elaborati di disposizione per vano, cabina, porte, accessi e componenti principali.",
        },
        {
          name: "Vani ascensore e strutture metalliche",
          desc: "Definizione geometrica, verifiche dimensionali e progettazione delle incastellature di supporto.",
        },
        {
          name: "Cabine, porte e configurazioni speciali",
          desc: "Sviluppo di soluzioni personalizzate, accessi contrapposti o adiacenti e particolari esigenze dimensionali.",
        },
        {
          name: "Integrazione architettonica",
          desc: "Coordinamento con facciate, scale, passerelle, tamponamenti, vetrate e finiture.",
        },
        {
          name: "Verifica interferenze",
          desc: "Coordinamento con strutture, opere murarie, impianti e altri elementi dell'edificio.",
        },
      ],
    },
    {
      code: "AREA 03",
      icon: HardHat,
      badge: "PRODUZIONE, NORMATIVA & CANTIERE",
      title: "Supporto Operativo, Capitolati & Ottimizzazione",
      items: [
        {
          name: "Supporto a produzione e pre-produzione",
          desc: "Predisposizione e verifica degli elaborati necessari allo sviluppo dei componenti e alla produzione.",
        },
        {
          name: "Capitolati e specifiche tecniche",
          desc: "Supporto alla definizione delle caratteristiche dell'impianto per gare, affidamenti e richieste d'offerta.",
        },
        {
          name: "Supporto normativo e accessibilità",
          desc: "Assistenza nella corretta impostazione progettuale rispetto ai requisiti tecnici e di accessibilità applicabili.",
        },
        {
          name: "Documentazione e assistenza di cantiere",
          desc: "Disegni esecutivi, dettagli e supporto tecnico durante l'installazione.",
        },
        {
          name: "Ottimizzazione tecnico-economica",
          desc: "Valutazione di soluzioni alternative per migliorare prestazioni, ingombri, realizzabilità e costi.",
        },
      ],
    },
  ];

  const destinatari = [
    {
      title: "Aziende ascensoristiche",
      desc: "Supporto in avamprogetto, disegni cliente/cantiere, sviluppo esecutivo, fuori standard e pre-produzione.",
      icon: Wrench,
    },
    {
      title: "Studi di architettura",
      desc: "Definizione degli spazi e integrazione dell'ascensore nel progetto architettonico.",
      icon: Compass,
    },
    {
      title: "Studi di ingegneria",
      desc: "Coordinamento tecnico, interferenze e supporto alla progettazione multidisciplinare.",
      icon: Layers,
    },
    {
      title: "General contractor",
      desc: "Assistenza nella definizione delle specifiche, nel coordinamento dei fornitori e nella gestione del cantiere.",
      icon: Briefcase,
    },
    {
      title: "Imprese di costruzione",
      desc: "Indicazioni per opere civili, vani, accessi e predisposizioni necessarie all'installazione.",
      icon: HardHat,
    },
    {
      title: "Committenze e property",
      desc: "Supporto tecnico nella valutazione delle soluzioni e nel confronto tra proposte impiantistiche.",
      icon: Building2,
    },
  ];

  return (
    <div className="bg-white w-full min-h-screen pb-20 overflow-x-hidden selection:bg-[#facc15] selection:text-[#012b3a]">
      <style>{`
        @keyframes elevator-cable {
          0% { background-position: 0 0; }
          100% { background-position: 0 64px; }
        }
        .shaft-rail {
          background-image: repeating-linear-gradient(
            to bottom,
            #1da1db 0px,
            #1da1db 20px,
            transparent 20px,
            transparent 36px
          );
          animation: elevator-cable 2s linear infinite;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-36 pb-12 md:pb-16 border-b border-[#facc15] overflow-hidden bg-white">
        <HeroParticles />
        <div className="container-x relative z-10 text-left">
          <Reveal>
            <div className="mb-4 md:mb-6 flex flex-wrap items-center gap-3">
              <span className="text-xs md:text-sm text-[#00779b] font-semibold tracking-[0.22em] uppercase">
                NUOVO AMBITO SPECIALISTICO
              </span>
              <span className="bg-[#f5d000] text-[#012b3a] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Soluzioni Standard e Fuori Standard
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight text-[#012b3a] max-w-4xl pb-2">
              Progettazione <br className="hidden md:block" />
              <span className="text-[#012b3a]">ascensoristica.</span>
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-xl text-[#00779b] max-w-3xl leading-relaxed">
              Servizi tecnici e architettonici per ascensori, dalla fattibilità al cantiere.
              Competenza ascensoristica specialistica integrata nei servizi Fi.Co.: un unico
              approccio per collegare architettura, progettazione tecnica, produzione e cantiere.
            </p>

            {/* Stepper lineare architettonico al posto dei badge isolati */}
            <div className="mt-10 pt-6 border-t border-[#facc15]/60 inline-flex flex-wrap items-center gap-y-3">
              {["FATTIBILITÀ", "PROGETTAZIONE", "PRODUZIONE", "CANTIERE"].map((fase, i) => (
                <div key={fase} className="flex items-center">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#facc15] ring-4 ring-[#facc15]/20" />
                    <span className="text-[#012b3a] text-xs sm:text-sm font-extrabold tracking-[0.18em]">
                      {fase}
                    </span>
                  </div>
                  {i < 3 && (
                    <div className="w-6 sm:w-12 h-[2px] bg-gradient-to-r from-[#facc15] to-[#1da1db] mx-3 sm:mx-5" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEZIONE 1: PERCHÉ FI.CO. — TRANSIZIONE ARCHITETTONICA CONTINUA */}
      <section className="py-16 md:py-24 bg-white border-b border-[#facc15]">
        <div className="container-x max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-5/12">
              <Reveal>
                <div className="relative">
                  {/* Cornice tecnica decorativa */}
                  <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#facc15] rounded-tl-3xl pointer-events-none" />
                  <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#1da1db] rounded-br-3xl pointer-events-none" />
                  <FicoImage
                    src={ascensoristicaImg}
                    alt="Progettazione Ascensoristica FI.CO."
                    variant={1}
                    className="w-full aspect-[4/3] md:h-[460px] rounded-3xl shadow-xl"
                  />
                </div>
              </Reveal>
            </div>

            <div className="w-full lg:w-7/12 text-left">
              <Reveal delay={100}>
                <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                  PERCHÉ FI.CO.
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight pb-2">
                  Una nuova competenza, un'evoluzione naturale
                </h2>
                <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                  L'ampliamento dei servizi Fi.Co. al settore ascensoristico nasce dall'incontro tra
                  competenze tecniche multidisciplinari e un'esperienza specialistica maturata nel
                  settore degli impianti elevatori.
                </p>

                {/* Percorso evolutivo su asse verticale continuo (niente box separati) */}
                <div className="mt-10 relative pl-6 sm:pl-8 border-l-2 border-[#facc15] space-y-8">
                  <div className="relative group">
                    <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#1da1db]" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#1da1db] block mb-1.5">
                      DA COMPETENZA VERTICALE…
                    </span>
                    <p className="text-sm md:text-base text-[#012b3a] leading-relaxed">
                      L'inserimento di una professionalità con esperienza nella progettazione
                      ascensoristica consente a Fi.Co. di sviluppare internamente un servizio
                      specialistico dedicato agli impianti elevatori.
                    </p>
                  </div>

                  <div className="relative group">
                    <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#facc15] ring-4 ring-[#facc15]/30" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0a5c75] block mb-1.5">
                      …A SERVIZIO INTEGRATO
                    </span>
                    <p className="text-sm md:text-base text-[#012b3a] leading-relaxed">
                      L'ascensore viene affrontato come parte dell'edificio: spazi, vano, accessi,
                      strutture, interferenze e finiture vengono coordinati con le esigenze
                      tecniche, architettoniche e di cantiere.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 2: DALL'IDEA ALL'INSTALLAZIONE — "VANO DI CORSA VERTICALE" */}
      <section
        className="py-16 md:py-24 border-b border-[#facc15] relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x max-w-5xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-14 md:mb-20 text-left md:text-center md:mx-auto">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                IL PERCORSO PROGETTUALE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Dall'idea all'installazione
              </h2>
            </div>
          </Reveal>

          {/* Vano di corsa centrale (Shaft Timeline) */}
          <div className="relative">
            {/* Guide laterali del vano + cavo centrale animato (Desktop) */}
            <div
              className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 border-x border-[#facc15]/60 bg-white/60 backdrop-blur-[2px] pointer-events-none"
              aria-hidden="true"
            >
              <div className="shaft-rail w-[2px] h-full mx-auto opacity-80" />
            </div>

            {/* Guida mobile a sinistra */}
            <div
              className="md:hidden shaft-rail absolute top-0 bottom-0 left-6 w-[2px] -translate-x-1/2 pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-10 md:gap-12 relative z-10">
              {processoFasi.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <Reveal key={item.step} delay={idx * 70}>
                    <div className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                      {/* Indicatore di Piano centrale */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#013a52] border-2 border-[#facc15] flex flex-col items-center justify-center text-[#facc15] shadow-md group-hover:scale-110 group-hover:bg-[#1da1db] group-hover:text-white transition-all duration-300">
                          <span className="text-[9px] font-bold uppercase tracking-tighter opacity-75 leading-none">
                            FASE
                          </span>
                          <span className="text-base md:text-lg font-extrabold leading-tight">
                            {item.step}
                          </span>
                        </div>
                      </div>

                      {/* Colonna Sinistra Desktop */}
                      <div
                        className={`hidden md:flex w-1/2 pr-16 ${
                          isLeft ? "justify-end text-right" : "justify-end pointer-events-none"
                        }`}
                      >
                        {isLeft ? (
                          <div className="max-w-md bg-white/95 backdrop-blur-xs border-r-4 border-[#1da1db] pr-6 py-4 rounded-l-2xl shadow-sm">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#1da1db] block mb-1">
                              FASE {item.step}
                            </span>
                            <h3 className="text-2xl font-extrabold text-[#012b3a] mb-2">
                              {item.title}
                            </h3>
                            <p className="text-[#00779b] text-[15px] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        ) : (
                          <span className="text-6xl font-black text-[#012b3a]/[0.05] select-none pr-4">
                            {item.step}
                          </span>
                        )}
                      </div>

                      {/* Colonna Destra Desktop */}
                      <div
                        className={`hidden md:flex w-1/2 pl-16 ${
                          !isLeft ? "justify-start text-left" : "justify-start pointer-events-none"
                        }`}
                      >
                        {!isLeft ? (
                          <div className="max-w-md bg-white/95 backdrop-blur-xs border-l-4 border-[#facc15] pl-6 py-4 rounded-r-2xl shadow-sm">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#1da1db] block mb-1">
                              FASE {item.step}
                            </span>
                            <h3 className="text-2xl font-extrabold text-[#012b3a] mb-2">
                              {item.title}
                            </h3>
                            <p className="text-[#00779b] text-[15px] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        ) : (
                          <span className="text-6xl font-black text-[#012b3a]/[0.05] select-none pl-4">
                            {item.step}
                          </span>
                        )}
                      </div>

                      {/* Versione Mobile */}
                      <div className="md:hidden pl-16 w-full text-left">
                        <div className="bg-white/95 border-l-4 border-[#1da1db] pl-5 py-3 pr-4 rounded-r-2xl shadow-xs">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#1da1db] block mb-1">
                            FASE {item.step}
                          </span>
                          <h3 className="text-xl font-extrabold text-[#012b3a] mb-1.5">
                            {item.title}
                          </h3>
                          <p className="text-[#00779b] text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Fascia di sintesi finale del percorso */}
          <Reveal delay={250}>
            <div className="mt-16 pt-8 border-t-2 border-[#1da1db] flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-white/90 backdrop-blur-xs px-6 py-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#f5d000] text-[#012b3a] flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <p className="text-base md:text-lg font-bold text-[#012b3a] text-left">
                Il risultato:{" "}
                <span className="text-[#00779b] font-medium">
                  un unico interlocutore tecnico capace di dialogare con progettisti, aziende
                  ascensoristiche, imprese e cantiere.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEZIONE 3: COSA FACCIAMO — TAVOLA TECNICA / ABACO CON SIDEBAR STICKY */}
      <section className="py-16 md:py-24 bg-white border-b border-[#facc15]">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-16 md:mb-20 text-left">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                COSA FACCIAMO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Servizi di progettazione ascensoristica
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                Attività modulabili in funzione della fase progettuale, della tipologia di impianto
                e delle esigenze del cliente.
              </p>
            </div>
          </Reveal>

          <div className="divide-y-2 divide-[#facc15]">
            {macroServizi.map((gruppo, groupIdx) => (
              <div key={gruppo.title} className="py-12 first:pt-0 last:pb-0">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Intestazione Macro-Area (Sticky a sinistra su desktop) */}
                  <div className="lg:col-span-5 lg:sticky lg:top-32 text-left">
                    <Reveal>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#013a52] text-[#facc15] flex items-center justify-center shrink-0 shadow-md">
                          <gruppo.icon size={22} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1da1db]">
                          {gruppo.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-[#012b3a] leading-snug">
                        {gruppo.title}
                      </h3>
                      <div className="mt-4 w-16 h-1 bg-[#facc15] rounded-full" />
                    </Reveal>
                  </div>

                  {/* Elenco Tecnico delle Attività (Abaco a righe orizzontali) */}
                  <div className="lg:col-span-7 divide-y divide-[#1da1db]/20 border-t border-b border-[#1da1db]/20">
                    {gruppo.items.map((servizio, itemIdx) => (
                      <Reveal key={servizio.name} delay={itemIdx * 50}>
                        <div className="group py-5 px-3 sm:px-4 flex items-start gap-4 hover:bg-[#f4fafd] transition-colors text-left">
                          <span className="text-xs font-extrabold text-[#1da1db] pt-1 tabular-nums shrink-0">
                            0{groupIdx + 1}.{itemIdx + 1}
                          </span>
                          <div className="flex-1">
                            <h4 className="text-base md:text-lg font-extrabold text-[#012b3a] group-hover:text-[#0a5c75] transition-colors">
                              {servizio.name}
                            </h4>
                            <p className="text-sm md:text-[15px] text-[#00779b] leading-relaxed mt-1">
                              {servizio.desc}
                            </p>
                          </div>
                          <CheckCircle2
                            size={18}
                            className="text-[#1da1db] shrink-0 mt-1 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all"
                          />
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE 4: A CHI CI RIVOLGIAMO — MATRICE ARCHITETTONICA CONTINUA */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-12 md:mb-16 text-left">
              <span className="text-xs md:text-sm font-bold text-[#00779b] uppercase tracking-[0.22em] block mb-2">
                A CHI CI RIVOLGIAMO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] leading-tight">
                Un servizio tecnico per tutta la filiera
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#00779b] leading-relaxed">
                La progettazione ascensoristica Fi.Co. è pensata per affiancare i diversi attori
                coinvolti nella definizione, fornitura e realizzazione dell'impianto.
              </p>
            </div>
          </Reveal>

          {/* Matrice tecnica a bordi condivisi (senza card separate) */}
          <Reveal delay={100}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 bg-white border-2 border-[#facc15] rounded-3xl overflow-hidden shadow-lg divide-y sm:divide-y-0 sm:divide-x divide-[#facc15]/60">
              {destinatari.map((target, idx) => (
                <div
                  key={target.title}
                  className={`relative p-8 lg:p-9 bg-white hover:bg-[#f4fafd]/80 transition-colors flex flex-col justify-between text-left group ${
                    idx >= 3 ? "lg:border-t lg:border-[#facc15]/60" : ""
                  } ${idx >= 2 ? "sm:max-lg:border-t sm:max-lg:border-[#facc15]/60" : ""}`}
                >
                  <span className="absolute top-5 right-6 text-4xl font-black text-[#012b3a]/[0.05] group-hover:text-[#1da1db]/15 transition-colors select-none">
                    0{idx + 1}
                  </span>

                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#f5d000] text-[#012b3a] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                      <target.icon size={22} />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#012b3a] mb-2.5">
                      {target.title}
                    </h3>
                    <p className="text-sm md:text-[15px] text-[#00779b] leading-relaxed">
                      {target.desc}
                    </p>
                  </div>

                  <div className="mt-6 w-8 h-[2px] bg-[#1da1db]/40 group-hover:w-16 group-hover:bg-[#1da1db] transition-all duration-300" />
                </div>
              ))}
            </div>
          </Reveal>

          {/* IL VALORE AGGIUNTO FI.CO. + CTA (Layout Editoriale asimmetrico) */}
          <Reveal delay={250}>
            <div className="mt-20 relative bg-white border-y-2 border-[#facc15] py-12 px-6 sm:px-10 md:px-14 shadow-md">
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-[#1da1db] via-[#facc15] to-[#0a5c75]" />

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="max-w-3xl text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5d000] text-[#012b3a] text-xs font-extrabold uppercase tracking-wider mb-4">
                    <Sparkles size={14} /> IL VALORE AGGIUNTO FI.CO.
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#012b3a] leading-tight mb-4">
                    Non solo il disegno dell'ascensore, ma il coordinamento{" "}
                    dell'intero problema progettuale
                  </h3>
                  <p className="text-[#00779b] text-base md:text-lg leading-relaxed mb-5">
                    Una visione che unisce competenza ascensoristica, esigenze architettoniche,
                    realizzabilità tecnica e supporto operativo, con l'obiettivo di ridurre
                    interferenze, revisioni e criticità tra progetto, produzione e cantiere.
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#0a5c75]">
                    DAL VANO ALL'IMPIANTO. DAL PROGETTO AL CANTIERE.
                  </p>
                </div>

                <div className="shrink-0 w-full lg:w-auto">
                  <Link
                    to="/contatti"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-2xl bg-[#f5d000] text-[#012b3a] hover:bg-[#eab308] hover:scale-105 transition-all shadow-md w-full lg:w-auto text-center"
                  >
                    Valuta il tuo progetto <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}