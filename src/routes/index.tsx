import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cable, FileCheck2, Server, Sparkles, ShieldCheck, Zap, Award, Network, Building2 } from "lucide-react";
import { Rocket, TrendingUp, Handshake, Globe2} from "lucide-react"
import heroImg from "@/assets/hero-fiber.jpg";
import projFiber from "@/assets/project-fiber.jpg";
import projPermit from "@/assets/project-permit.jpg";
import projIt from "@/assets/project-it.jpg";
import { Reveal, Counter, Tilt } from "@/components/site/Reveal";
import { HeroParticles, ProcessTimeline, ItalyMap, Magnetic } from "@/components/site/Interactive";
import { GrowthSection } from "@/components/site/GrowthSection";

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

        <div className="container-x relative z-10 pt-32 pb-20">
          <Reveal delay={100}>
            <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight max-w-5xl">
              Creiamo il futuro,<br />
              <span className="text-gradient">insieme.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase animate-pulse">scroll</div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-x py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Il nostro ruolo</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Siamo il punto di <br /><span className="text-gradient">connessione.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>FI.CO nasce per semplificare ciò che spesso appare complesso. Ogni progetto infrastrutturale coinvolge operatori, imprese, amministrazioni pubbliche e professionisti. Il nostro ruolo è creare dialogo, coordinare attività e trasformare ogni esigenza in una soluzione concreta.</p>
              <p>Siamo il collegamento tra chi immagina la rete e chi la realizza</p>
              <Link to="/chi-siamo" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all pt-2">
                Scopri la nostra storia <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FUTURO E CRESCITA */}
      <GrowthSection />

      {/* PROCESS TIMELINE */}
      <ProcessTimeline />

      {/* ITALY MAP */}
      <ItalyMap />

      {/* PORTFOLIO PREVIEW */}
      <section className="container-x py-24 md:py-32">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Portfolio</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Progetti e Collaborazioni</h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Vedi tutti <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: projFiber, sector: "Fibra Ottica", title: "Fiber Network Development", desc: "Progettazione e deployment di infrastruttura di rete." },
            { img: projPermit, sector: "Permitting", title: "Permitting Management", desc: "Coordinamento con pubbliche amministrazioni." },
            { img: projIt, sector: "Servizi IT", title: "Enterprise IT Services", desc: "Supporto e attività di manutenzione." },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="card-lift group overflow-hidden rounded-2xl bg-card border border-border h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1280} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081A33]/90 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/90 text-[#003B5C] text-xs font-semibold uppercase tracking-wider">{p.sector}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

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

      {/* FINAL CTA */}
      <section className="container-x pt-24 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl surface-navy p-12 md:p-20 text-center">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-glow)" }} />
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
            <div className="relative">
              <Network className="mx-auto text-accent" size={40} />
              <h2 className="mt-6 text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
                Trasformiamo le idee in <span className="text-gradient">risultati concreti.</span>
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
