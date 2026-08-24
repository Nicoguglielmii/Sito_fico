// La route e il componente Link gestiscono rispettivamente la configurazione
// della homepage e la navigazione interna senza ricaricare il documento.
import { createFileRoute, Link } from "@tanstack/react-router";

// Icone usate per rappresentare visivamente i valori e la call-to-action finale.
import { ArrowRight, Sparkles, ShieldCheck, Zap, Award, Network } from "lucide-react";

// Asset principale della hero, caricato tramite il bundler dell'applicazione.
import heroImg from "@/assets/hero-fiber.jpg";

// Componenti condivisi che compongono le varie sezioni della homepage.
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles, ProcessTimeline, ItalyMap, Magnetic } from "@/components/site/Interactive";
import { GrowthSection } from "@/components/site/GrowthSection";
import { CollaborationNetwork } from "@/components/CollaborationNetwork";

// Configurazione della homepage, inclusi i metadati usati dai motori di ricerca
// e dalle anteprime quando l'URL viene condiviso sui social network.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — FI.CO. SRL" },
      {
        name: "description",
        content:
          "FI.CO. SRL: telecomunicazioni, reti in fibra ottica, permitting e servizi IT. Trasformiamo idee in risultati concreti.",
      },
      { property: "og:title", content: "FI.CO. SRL — Creiamo il futuro, insieme" },
      {
        property: "og:description",
        content: "Telecomunicazioni, fibra ottica, permitting e servizi IT.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/*
        Hero principale della homepage. L'immagine e le particelle costruiscono
        lo sfondo visivo, mentre il contenuto testuale in primo piano comunica
        il messaggio senza dipendere dagli elementi decorativi. L'immagine ha
        `alt` vuoto perché è usata come sfondo e non aggiunge informazioni rispetto
        al titolo e al testo disponibili nel markup semantico.
      */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden surface-navy">
        {/* Livello visivo di fondo: fotografia, overlay cromatico e contrasto per il testo. */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#003B5C]/80 via-[#003B5C]/50 to-[#003B5C]" />
        </div>

        {/* Particelle decorative indipendenti dal contenuto e non interattive al puntatore. */}
        <HeroParticles />

        {/* Bagliori e punti mobili che aggiungono profondità alla hero senza contenuto semantico. */}
        <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-[30%] left-[15%] w-3 h-3 rounded-full bg-accent animate-float shadow-[0_0_20px_var(--accent)]" />
        <div
          className="absolute bottom-[35%] right-[25%] w-2 h-2 rounded-full bg-primary animate-float shadow-[0_0_15px_var(--primary)]"
          style={{ animationDelay: "2s" }}
        />

        {/*
          Contenitore del testo hero. La colonna singola mantiene una gerarchia
          lineare; padding e gap ampi distribuiscono i contenuti nella viewport.
        */}
        <div className="container-x relative z-10 pt-40 pb-40 flex flex-col items-start gap-20 lg:gap-24 w-full">
          
          {/* Primo blocco: promessa principale e descrizione sintetica dell'azienda. */}
          <div className="max-w-4xl">
            {/* Reveal sfalsati: il titolo entra prima del testo introduttivo. */}
            <Reveal delay={100}>
              <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-gradient">
                Creiamo il futuro,
                <br />
                insieme
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed">
                Connettiamo idee, persone e infrastrutture per costruire un futuro digitale.
              </p>
            </Reveal>
            <Reveal delay={300}>
              {/* Spazio predisposto per eventuali azioni della hero; al momento resta vuoto. */}
              <div className="mt-10 flex flex-wrap gap-4"></div>
            </Reveal>
          </div>

          {/* Secondo blocco: chiarisce il ruolo di FI.CO. come punto di connessione. */}
          <div className="max-w-3xl">
            <Reveal delay={400}>
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                Il nostro ruolo
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gradient">
                Siamo il punto di connessione
              </h2>
            </Reveal>
            <Reveal delay={500}>
              {/* Testo descrittivo e collegamento interno alla pagina istituzionale. */}
              <div className="mt-6 space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
                <p>
                  fi.co. nasce per semplificare ciò che spesso appare complesso. Ogni progetto
                  infrastrutturale coinvolge operatori, imprese, amministrazioni pubbliche e
                  professionisti. Il nostro ruolo è creare dialogo, coordinare attività e
                  trasformare ogni esigenza in una soluzione concreta.
                </p>
                {/* Link gestito dal router: cambia pagina senza un reload completo del documento. */}
                <Link
                  to="/chi-siamo"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all pt-2"
                >
                  Scopri la nostra storia <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>

        </div>

        {/* Indicatore visivo discreto che suggerisce la presenza di contenuti sotto la hero. */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase animate-pulse">
          scroll
        </div>
      </section>

      {/* Sezione interattiva dedicata alle direttrici di futuro e crescita. */}
      <GrowthSection />

      {/* Timeline che descrive il processo operativo dalla prima idea alla consegna. */}
      <ProcessTimeline />

      {/*
        Sezione dei valori. Il margine negativo avvicina visivamente questo blocco
        alla timeline precedente, mentre il padding inferiore separa la mappa successiva.
      */}
      <section className="bg-transparent pt-0 pb-24 -mt-16 md:-mt-24">
        <div className="container-x">
          {/* Intestazione della griglia che introduce i principi dell'azienda. */}
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[#fde047] font-semibold">
                Perché sceglierci
              </span>
              <h2 className="mt-4 pb-2 leading-[1.2] text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent">
                I valori che ci guidano
              </h2>
            </div>
          </Reveal>
          {/*
            Dati locali dei quattro valori. La mappa viene trasformata in card
            per mantenere uniforme struttura, animazione e spaziatura.
          */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Innovazione e problem solving",
                desc: "La nostra mentalità proattiva è alla costante ricerca di soluzioni innovative e alla capacità di risolvere problemi",
              },
              {
                icon: ShieldCheck,
                title: "Agilità e resilienza",
                desc: "In un mercato in costante evoluzione, la nostra agilità strategica ci permette di adattarci velocemente alle nuove sfide, la nostra resilienza operativa assicura la stabilità e la continuità del vostro successo",
              },
              {
                icon: Zap,
                title: "Fiducia e connessione",
                desc: "Crediamo che la fiducia reciproca e la collaborazione siano la chiave per raggiungere i migliori risultati insieme ai nostri clienti, trasformando così ogni progetto in una vera partnership",
              },
              {
                icon: Award,
                title: "Auto-miglioramento",
                desc: "La passione guida il nostro impegno: investiamo nella crescita personale affinché ognuno esprima il proprio potenziale.",
              },
            ].map((p, i) => (
              // Il ritardo progressivo accompagna l'ingresso delle card da sinistra a destra.
              <Reveal key={p.title} delay={i * 100}>
                <div className="card-lift bg-[#0a2e4d] p-8 rounded-2xl border border-white/10 shadow-lg h-full">
                  {/* Icona, titolo e descrizione formano il contenuto autosufficiente del valore. */}
                  <p.icon className="text-primary" size={32} />
                  <h3 className="mt-5 text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mappa interattiva che visualizza la presenza operativa sul territorio nazionale. */}
      <ItalyMap />

      {/* Sezione dedicata alla rete di collaborazioni e partner. */}
      <CollaborationNetwork />

      {/*
        CTA conclusiva: riassume la proposta della homepage e conduce alla pagina
        contatti attraverso la navigazione interna del router.
      */}
      <section className="container-x pt-24 pb-24">
        <Reveal>
          {/* Superficie contenitiva della CTA con bagliore e decorazione laterale. */}
          <div className="relative overflow-hidden rounded-3xl surface-navy p-12 md:p-20 text-center">
            <div
              className="absolute inset-0 opacity-40"
              style={{ backgroundImage: "var(--gradient-glow)" }}
            />
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
            <div className="relative">
              {/* Icona di rete coerente con il messaggio di connessione della pagina. */}
              <Network className="mx-auto text-accent" size={40} />
              <h2 className="mt-6 text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight text-gradient">
                Trasformiamo le idee in risultati concreti
              </h2>
              <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
                Parlaci del tuo progetto. Noi ci occuperemo di creare il collegamento giusto tra
                idee, persone e opportunità.
              </p>
              {/* Azione primaria verso il modulo o le informazioni di contatto. */}
              <Link to="/contatti" className="btn-hero mt-10">
                Contattaci <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}