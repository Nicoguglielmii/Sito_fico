import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Award, Network } from "lucide-react";
import heroImg from "@/assets/hero-fiber.jpg";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles, ProcessTimeline, ItalyMap, Magnetic } from "@/components/site/Interactive";
import { GrowthSection } from "@/components/site/GrowthSection";
import { CollaborationNetwork } from "@/components/CollaborationNetwork";

// Pagina Home
// Questo file definisce la route principale `/` e il componente `Index`.
// Contiene la struttura della home: hero con immagine e particelle,
// sezioni riutilizzate (GrowthSection, ProcessTimeline, ItalyMap, CollaborationNetwork)
// e una call-to-action finale. I commenti riportati descrivono la funzione
// di ciascuna sezione e note sull'accessibilità e le performance.

// Route della home page con metadati SEO e Open Graph dedicati
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
        Sezione HERO (intestazione principale):
        - Immagine di sfondo (`heroImg`) con overlay semitrasparente per migliorare
          leggibilità del testo.
        - `HeroParticles` aggiunge elementi grafici animati in background per
          dare dinamicità. Usare con attenzione perché può avere impatto sulle performance
          su dispositivi meno potenti.
        - CTA principale (pulsante) è resa tramite `Link` verso la pagina servizi.
        - Tutti gli elementi visivi sono decorativi: l'attributo `alt` dell'immagine
          è vuoto intenzionalmente per evitare che i lettori di schermo leggano testo
          ridondante; il contenuto testuale viene fornito da markup accessibile (h1, p).
      */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden surface-navy">
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
        <HeroParticles />
        {/* floating shapes */}
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

        {/* MODIFICATO: Struttura a singola colonna con maggiore spazio sotto */}
        <div className="container-x relative z-10 pt-40 pb-40 flex flex-col items-start gap-20 lg:gap-24 w-full">
          
          {/* PRIMO BLOCCO: Titolo principale */}
          <div className="max-w-4xl">
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
              <div className="mt-10 flex flex-wrap gap-4"></div>
            </Reveal>
          </div>

          {/* SECONDO BLOCCO: Il nostro ruolo (Incolonnato a sinistra) */}
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
              {/* Blocco descrittivo: testo con gerarchia chiara e link semantico */}
              <div className="mt-6 space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
                <p>
                  fi.co. nasce per semplificare ciò che spesso appare complesso. Ogni progetto
                  infrastrutturale coinvolge operatori, imprese, amministrazioni pubbliche e
                  professionisti. Il nostro ruolo è creare dialogo, coordinare attività e
                  trasformare ogni esigenza in una soluzione concreta.
                </p>
                {/* Link interno: usa `Link` del router per evitare reload completo della pagina */}
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase animate-pulse">
          scroll
        </div>
      </section>

      {/* Sezione: FUTURO E CRESCITA
          - `GrowthSection` è un componente riutilizzabile che raggruppa
            contenuti relativi a crescita aziendale e progetti.
          - Separare in componenti aiuta a mantenere il file della route
            leggibile e testabile. */}
      <GrowthSection />

      {/* Sezione: PROCESS TIMELINE
          - `ProcessTimeline` mostra la roadmap/processo operativo.
          - Tenere animazioni e timeline in componenti isolati riduce il
            carico sul DOM principale e migliora la manutenibilità. */}
      <ProcessTimeline />

      {/* Sezione valori aziendali: quattro card che spiegano i punti di forza */}
      <section className="bg-transparent py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                Perché sceglierci
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent">
                I valori che ci guidano
              </h2>
            </div>
          </Reveal>
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
              <Reveal key={p.title} delay={i * 100}>
                <div className="card-lift bg-[#0a2e4d] p-8 rounded-2xl border border-white/10 shadow-lg h-full">
                  <p.icon className="text-primary" size={32} />
                  <h3 className="mt-5 text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sezione mappa interattiva con presenza nazionale
          - `ItalyMap` è un componente interattivo; verifica che i dati
        caricati siano ottimizzati (lazy, paginati) se la sorgente è grande. */}
      <ItalyMap />

      {/* Sezione dedicata alle collaborazioni e partner
          - `CollaborationNetwork` visualizza partner e relazioni; mantenerlo
        separato permette di riutilizzarlo altrove (es. pagina partner). */}
      <CollaborationNetwork />

      {/* Sezione finale: call-to-action (CTA)
          - Conclude la pagina con invito all'azione verso `/contatti`.
          - L'uso di `Link` del router previene reload completi e mantiene lo stato SPA. */}
      <section className="container-x pt-24 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl surface-navy p-12 md:p-20 text-center">
            <div
              className="absolute inset-0 opacity-40"
              style={{ backgroundImage: "var(--gradient-glow)" }}
            />
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
            <div className="relative">
              <Network className="mx-auto text-accent" size={40} />
              <h2 className="mt-6 text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight text-gradient">
                Trasformiamo le idee in risultati concreti
              </h2>
              <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
                Parlaci del tuo progetto. Noi ci occuperemo di creare il collegamento giusto tra
                idee, persone e opportunità.
              </p>
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