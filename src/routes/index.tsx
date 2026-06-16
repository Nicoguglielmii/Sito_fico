import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Award, Network } from "lucide-react";
import heroImg from "@/assets/hero-fiber.jpg";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles, ProcessTimeline, ItalyMap, Magnetic } from "@/components/site/Interactive";
import { GrowthSection } from "@/components/site/GrowthSection";
import { CollaborationNetwork } from "@/components/CollaborationNetwork";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — FI.CO. SRL" },
      { name: "description", content: "FI.CO. SRL: telecomunicazioni, reti in fibra ottica, permitting e servizi IT. Trasformiamo idee in risultati concreti." },
      { property: "og:title", content: "FI.CO. SRL — Creiamo il futuro, insieme" },
      { property: "og:description", content: "Telecomunicazioni, fibra ottica, permitting e servizi IT." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden surface-navy">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" width={1920} height={1080} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#003B5C]/80 via-[#003B5C]/50 to-[#003B5C]" />
        </div>
        <HeroParticles />
        {/* floating shapes */}
        <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[30%] left-[15%] w-3 h-3 rounded-full bg-accent animate-float shadow-[0_0_20px_var(--accent)]" />
        <div className="absolute bottom-[35%] right-[25%] w-2 h-2 rounded-full bg-primary animate-float shadow-[0_0_15px_var(--primary)]" style={{ animationDelay: "2s" }} />

        <div className="container-x relative z-10 pt-32 pb-24 md:pb-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-end">
            <div>
              <Reveal delay={100}>
                <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                  Creiamo il futuro,<br />
                  <span className="text-gradient">insieme</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed">
                  Connettiamo idee, persone e infrastrutture per costruire il futuro digitale.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Magnetic>
                    <Link to="/servizi" className="btn-hero">
                      Scopri i nostri servizi <ArrowRight size={18} />
                    </Link>
                  </Magnetic>
                </div>
              </Reveal>
            </div>

            <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-12 lg:pt-0 lg:pl-16">
              <Reveal delay={200}>
                <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Il nostro ruolo</span>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                  Siamo il punto di <span className="text-gradient">connessione</span>
                </h2>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-6 space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
                  <p>FI.CO nasce per semplificare ciò che spesso appare complesso. Ogni progetto infrastrutturale coinvolge operatori, imprese, amministrazioni pubbliche e professionisti. Il nostro ruolo è creare dialogo, coordinare attività e trasformare ogni esigenza in una soluzione concreta.</p>
                  <p>Siamo il collegamento tra chi immagina la rete e chi la realizza.</p>
                  <Link to="/chi-siamo" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all pt-2">
                    Scopri la nostra storia <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase animate-pulse">scroll</div>
      </section>

      {/* FUTURO E CRESCITA */}
      <GrowthSection />

      {/* PROCESS TIMELINE */}
      <ProcessTimeline />

      {/* WHY CHOOSE US */}
      <section className="bg-secondary py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Perché sceglierci</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">I valori che ci guidano</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: "Innovazione e problem solving", desc: "La nostra mentalità proattiva è alla costante ricerca di soluzioni innovative" },
              { icon: ShieldCheck, title: "Affidabilità e resilienza", desc: "In un mercato in costante evoluzione, la nostra agilità strategica ci permette di adattarci velocemente alle nuove sfide, la nostra resilienza operativa assicura la stabilità e la continuità del vostro successo" },
              { icon: Zap, title: "Fiducia e connessione", desc: "Crediamo che la fiducia reciproca e la collaborazione siano la chiave per raggiungere i migliori risultati insieme ai nostri clienti, trasformando così ogni progetto in una vera partnership" },
              { icon: Award, title: "Self improvement", desc: "La passione guida il nostro impegno: investiamo nella crescita personale affinché ognuno esprima il proprio potenziale." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="card-lift bg-card p-8 rounded-2xl border border-border h-full">
                  <p.icon className="text-primary" size={32} />
                  <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ITALY MAP */}
      <ItalyMap />

      {/* COLLABORAZIONI */}
      <CollaborationNetwork />

      {/* FINAL CTA */}
      <section className="container-x pt-24 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl surface-navy p-12 md:p-20 text-center">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-glow)" }} />
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
            <div className="relative">
              <Network className="mx-auto text-accent" size={40} />
              <h2 className="mt-6 text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
                Trasformiamo le idee in <span className="text-gradient">risultati concreti</span>
              </h2>
              <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
              Parlaci del tuo progetto. Noi ci occuperemo di creare il collegamento giusto tra idee, persone e opportunità.
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
