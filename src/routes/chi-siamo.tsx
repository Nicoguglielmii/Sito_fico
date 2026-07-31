import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, ClipboardCheck, PencilRuler, KanbanSquare, MapPinned } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import logoPittogramma from "@/assets/fico-pittogramma.png";
import logoWordmark from "@/assets/fico-wordmark.png";
import { Reveal } from "@/components/site/Reveal";

// Pagina "Chi siamo" — commenti estesi:
// Questo file espone la route `/chi-siamo` e renderizza contenuti informativi
// sulla storia, i servizi, la timeline e l'identità visiva dell'azienda.
// I commenti inseriti spiegano le scelte markup/visuali e le considerazioni
// di accessibilità senza modificare la logica del codice.

// Route della pagina "Chi siamo" con metadati SEO e dati Open Graph
export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi siamo — FI.CO. SRL" },
      {
        name: "description",
        content:
          "La storia, la mission, l'identità visiva e l'approccio professionale di FI.CO. SRL.",
      },
      { property: "og:title", content: "Chi siamo — FI.CO. SRL" },
      {
        property: "og:description",
        content: "Giovani professionisti delle telecomunicazioni con eccellenza tecnica.",
      },
      { property: "og:url", content: "/chi-siamo" },
    ],
    links: [{ rel: "canonical", href: "/chi-siamo" }],
  }),
  component: ChiSiamo,
});

// Dati della timeline storica della società usati nella sezione "Il nostro percorso".
// Nota: `year` qui è un'etichetta testuale (es: 'Fondazione') anziché un numero,
// per fornire flessibilità di copy. Se si preferisse un ordinamento cronologico,
// usare date normalizzate nel dataset e ordinarle in modo esplicito.
const TIMELINE = [
  {
    year: "Fondazione",
    title: "L'inizio del progetto",
    desc: "Un team di giovani professionisti delle telecomunicazioni dà vita a fi.co. con una visione chiara.",
  },
  {
    year: "Primi progetti",
    title: "Sul campo",
    desc: "I primi cantieri di fibra ottica e le prime collaborazioni con enti pubblici e operatori.",
  },
  {
    year: "Nuove opportunità",
    title: "Verso il futuro",
    desc: "Innovazione continua, partnership strategiche e nuove sfide su scala nazionale.",
  },
  // Esempio di nuovo step: mantenuto come testo descrittivo
];

function ChiSiamo() {
  return (
    <>
      {/*
        HERO introduttivo:
        - Sezione visiva con titolo e paragrafo descrittivo.
        - L'overlay di sfondo è decorativo (variabile CSS) e non contiene testo,
          quindi non è letto dai lettori di schermo.
        - `Reveal` è un wrapper che gestisce animazioni/entrate in pagina.
      */}
      <section className="relative pt-36 pb-20 surface-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: "var(--gradient-glow)" }}
        />
        <div className="container-x relative">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Chi siamo
            </span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl text-gradient">
              Una storia di competenza e visione
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl">
              fi.co. SRL nasce dall’iniziativa di giovani professionisti specializzati nelle
              telecomunicazioni, uniti dalla volontà di offrire competenze tecniche solide e un
              approccio moderno alla progettazione e gestione delle infrastrutture. Nel tempo
              l’azienda ha ampliato la propria visione: oggi fi.co. non opera più soltanto nel
              settore TLC, ma evolve costantemente per offrire un ventaglio sempre più ampio di
              servizi tecnici, digitali e operativi. La nostra crescita è guidata da innovazione,
              affidabilità e capacità di adattarci alle nuove esigenze del mercato, con l’obiettivo
              di diventare un partner versatile e orientato al futuro.
            </p>
          </Reveal>
        </div>
      </section>

      {/*
        Sezione servizi principali:
        - Layout a due colonne: immagine del team + lista di punti di forza.
        - L'immagine usa `loading="lazy"` per migliorare la performance
          e `alt` descrittivo per accessibilità.
      */}
      <section className="container-x py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img
                src={aboutImg}
                alt="Il team fi.co."
                loading="lazy"
                width={1600}
                height={1000}
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent -z-10 blur-2xl opacity-60" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-10">
              {[
                {
                  icon: ClipboardCheck,
                  title: "Fattibilità",
                  text: "Analisi tecnica ed economica preliminare per valutare vincoli, costi, tempi di realizzazione e sostenibilità dell'intervento.",
                },
                {
                  icon: PencilRuler,
                  title: "Progettazione",
                  text: "Progettazione esecutiva di reti e infrastrutture con attenzione a affidabilità, scalabilità e conformità alle normative vigenti.",
                },
                {
                  icon: KanbanSquare,
                  title: "Gestione",
                  text: "Coordinamento completo delle attività, monitoraggio avanzamento lavori, gestione documentale e interfaccia costante con clienti ed enti.",
                },
                {
                  icon: MapPinned,
                  title: "Sondaggi",
                  text: "Rilievi sul campo, raccolta dati e verifiche tecniche a supporto della progettazione di reti in fibra ottica e infrastrutture TLC.",
                },
              ].map((b) => (
                <div key={b.title} className="flex gap-5">
                  {/* Icona: decorativa ma utile per riconoscimento visivo */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 grid place-items-center text-primary">
                    <b.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{b.title}</h3>
                    <p className="mt-1 text-slate-300 leading-relaxed">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/*
        Timeline aziendale:
        MODIFICA: Cambiato da `py-24` a `pt-24 pb-12 md:pb-16` per avvicinarlo alla sezione successiva
      */}
      <section className="bg-transparent pt-24 pb-12 md:pb-16">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                Il nostro percorso
              </span>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent mb-10">
                Timeline
              </h2>
            </div>
          </Reveal>
          <div className="relative">
            {/* Linea verticale decorativa */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            <div className="space-y-12">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 120}>
                  <div
                    className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                  >
                    <div
                      className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                        {t.year}
                      </span>
                      <h3 className="mt-3 text-2xl font-bold text-white">{t.title}</h3>
                      <p className="mt-2 text-slate-300">{t.desc}</p>
                    </div>
                    <div className="hidden md:block" />
                    {/* Indicatore circolare sulla linea (punto della timeline) */}
                    <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-[#0a2e4d]" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*
        Sezione identità visiva:
        MODIFICA: Ridotto ulteriormente il padding inferiore (pb-12) per avvicinare il pittogramma
      */}
      <section id="identita" className="container-x pt-12 md:pt-16 pb-12 md:pb-16">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Identità visiva
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-gradient">
            Il logo fi.co.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-center">
          <Reveal>
            <img
              src={logoWordmark}
              alt="FI.CO. wordmark"
              className="mx-auto h-24 w-auto brightness-0 invert"
            />
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
              <p>
                Il logotipo nasce dalla fusione tra tipografia, nodi e connessioni. Ogni elemento è
                stato progettato per comunicare affidabilità, dinamismo e relazione.
              </p>
              <p>
                Le curve richiamano la fibra ottica, mentre i punti rappresentano gli attori della
                rete: fornitori, fi.co., clienti.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/*
        Pittogramma:
        MODIFICA: Sostituito `py-24` con `pt-12 pb-24` per riavvicinare il titolo "Pittogramma" alla sezione precedente
      */}
      <section className="bg-transparent pt-12 md:pt-16 pb-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                Pittogramma
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">Fidelino</h2>
              <p className="mt-4 text-slate-300 text-lg">
                Il simbolo generativo che rappresenta connessione, fiducia e dinamismo.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex justify-center">
              <img src={logoPittogramma} alt="Pittogramma Fidelino" className="w-64 h-auto" />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-10 max-w-3xl mx-auto text-center text-lg text-slate-300 leading-relaxed">
              Il pittogramma nasce isolando i tre punti del logotipo e collegandoli con linee curve.
              È un sistema aperto, flessibile, capace di adattarsi a contesti diversi e di
              rappresentare la nostra missione: creare connessioni.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
