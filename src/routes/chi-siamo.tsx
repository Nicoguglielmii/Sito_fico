// Definisce la route e i collegamenti interni eventualmente usati dalla pagina.
import { createFileRoute } from "@tanstack/react-router";

// Icone che rappresentano le quattro competenze operative descritte nella pagina.
import { Linkedin, ClipboardCheck, PencilRuler, KanbanSquare, MapPinned } from "lucide-react";

// Immagini della squadra e degli elementi che compongono l'identità del marchio.
import aboutImg from "@/assets/about-team.jpg";
import logoPittogramma from "@/assets/fico-pittogramma.png";
import logoWordmark from "@/assets/fico-wordmark.png";

// Reveal coordina l'ingresso progressivo dei contenuti durante lo scorrimento.
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";

// Route istituzionale con metadati SEO e Open Graph dedicati alla pagina.
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

// Tappe editoriali usate per costruire la timeline della storia aziendale.
// L'ordine dell'array corrisponde all'ordine visivo degli eventi.
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
];

function ChiSiamo() {
  return (
    <>
      {/*
        Hero istituzionale: introduce identità e percorso di FI.CO. Il contesto
        relativo contiene gli elementi decorativi e l'overflow impedisce loro di
        invadere le sezioni successive.
      */}
      <section className="relative pt-36 pb-20 surface-navy overflow-hidden">
        {/* Bagliore di fondo condiviso, mantenuto dietro al contenuto testuale. */}
        <div
          className="absolute inset-0 opacity-40 z-0"
          style={{ backgroundImage: "var(--gradient-glow)" }}
        />
        {/* Particelle decorative non essenziali alla comprensione del contenuto. */}
        <HeroParticles />

        {/* Contenitore centrato che mantiene leggibilità e allineamento responsive. */}
        <div className="container-x relative z-10">
          <Reveal>
            {/* Etichetta di contesto della pagina istituzionale. */}
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Chi siamo
            </span>
            {/* Titolo principale, elemento dominante della gerarchia semantica e visiva. */}
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl text-gradient">
              Una storia di competenza e visione
            </h1>
            {/* Testo introduttivo che racconta origine, evoluzione e visione dell'azienda. */}
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

      {/* Competenze principali offerte dal team, affiancate all'immagine aziendale. */}
      <section className="container-x py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            {/* Lista di competenze generata da dati locali per mantenere un markup uniforme. */}
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
                // Ogni voce combina icona, titolo e descrizione in un blocco autonomo.
                <div key={b.title} className="flex gap-5">
                  {/* Icona persistente e dimensione fissa per allineare tutte le competenze. */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 grid place-items-center text-primary">
                    <b.icon size={22} />
                  </div>
                  {/* Testo della competenza, mantenuto separato dall'elemento iconografico. */}
                  <div>
                    <h3 className="text-xl font-bold text-white">{b.title}</h3>
                    <p className="mt-1 text-slate-300 leading-relaxed">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Immagine caricata lazy per non competere con gli asset iniziali della hero. */}
          <Reveal delay={150}>
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
        </div>
      </section>

      {/* Timeline aziendale: visualizza in ordine le tappe principali della crescita. */}
      <section className="bg-transparent pt-24 pb-12 md:pb-16">
        <div className="container-x">
          <Reveal>
            {/* Intestazione che introduce il percorso prima degli eventi. */}
            <div className="max-w-2xl mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[#fde047] font-semibold">
                Il nostro percorso
              </span>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent mb-10">
                Timeline
              </h2>
            </div>
          </Reveal>
          {/* Il contenitore relativo offre il riferimento alla linea verticale centrale. */}
          <div className="relative">
            {/* Linea decorativa della timeline, leggibile anche mentre gli eventi scorrono. */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            <div className="space-y-12">
              {TIMELINE.map((t, i) => (
                // Il ritardo crescente accompagna l'ingresso ordinato degli eventi.
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
                      {/* Il titolo usa un colore d'accento per distinguersi dall'anno e dalla descrizione. */}
                      <h3 className="mt-3 text-2xl font-bold text-[#facc15]">{t.title}</h3>
                      <p className="mt-2 text-slate-300">{t.desc}</p>
                    </div>
                    <div className="hidden md:block" />
                    <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-[#0a2e4d]" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sezione dedicata al significato e all'uso del logotipo FI.CO. */}
      <section id="identita" className="container-x pt-12 md:pt-16 pb-12 md:pb-16">
        <Reveal>
          {/* Intestazione dell'identità visiva e titolo del blocco editoriale. */}
          <span className="text-xs uppercase tracking-[0.3em] text-[#fde047] font-semibold">
            Identità visiva
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-gradient">
            Il logo fi.co.
          </h2>
        </Reveal>

        {/* Contenuto disposto in colonna per mantenere logo e spiegazione facilmente leggibili. */}
        <div className="flex flex-col items-start gap-10 mt-16 max-w-3xl">
          <Reveal>
            {/* Wordmark principale del marchio, presentato come asset visivo. */}
            <img
              src={logoWordmark}
              alt="FI.CO. wordmark"
              className="h-24 w-auto"
            />
          </Reveal>

          {/* Descrizione dei significati grafici: tipografia, nodi e connessioni. */}
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

      {/* Sezione separata per il pittogramma e il suo valore simbolico. */}
      <section className="bg-transparent pt-12 md:pt-16 pb-24">
        <div className="container-x">
          <Reveal>
            {/* Intestazione editoriale del simbolo generativo “Fidelino”. */}
            <div className="text-left max-w-2xl mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[#fde047] font-semibold">
                IL PITTOGRAMMA
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">Fidelino</h2>
              <p className="mt-4 text-slate-300 text-lg">
                Il simbolo generativo che rappresenta connessione, fiducia e dinamismo.
              </p>
            </div>
          </Reveal>

          {/* Layout verticale che mantiene il simbolo sopra la relativa spiegazione. */}
          <div className="flex flex-col items-start gap-10 max-w-3xl">
            <Reveal>
              {/* Pittogramma isolato, con testo alternativo esplicativo per l'accessibilità. */}
              <img src={logoPittogramma} alt="Pittogramma Fidelino" className="w-64 h-auto" />
            </Reveal>

            <Reveal delay={150}>
              {/* Testo che spiega origine, flessibilità e messaggio del pittogramma. */}
              <p className="text-lg text-slate-300 leading-relaxed text-left">
                Il pittogramma nasce isolando i tre punti del logotipo e collegandoli con linee curve.
                È un sistema aperto, flessibile, capace di adattarsi a contesti diversi e di
                rappresentare la nostra missione: creare connessioni.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}