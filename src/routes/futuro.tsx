import { createFileRoute, Link } from "@tanstack/react-router";
import { Rocket, TrendingUp, Handshake, Globe2, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/futuro")({
  head: () => ({
    meta: [
      { title: "Futuro e crescita — FI.CO. SRL" },
      { name: "description", content: "La roadmap di crescita di FI.CO. SRL: innovazione, partnership e nuove sfide." },
      { property: "og:title", content: "Futuro e crescita — FI.CO. SRL" },
      { property: "og:description", content: "I motori di crescita di FI.CO. SRL." },
      { property: "og:url", content: "/futuro" },
    ],
    links: [{ rel: "canonical", href: "/futuro" }],
  }),
  component: Futuro,
});

const ROADMAP = [
  { icon: Rocket, title: "Innovazione tecnologica", desc: "Adozione di nuove tecnologie per reti più intelligenti e sostenibili." },
  { icon: Handshake, title: "Partnership strategiche", desc: "Alleanze con operatori, enti e fornitori per accelerare la trasformazione." },
  { icon: TrendingUp, title: "Scalabilità operativa", desc: "Processi e team strutturati per affrontare progetti complessi su scala." },
  { icon: Globe2, title: "Espansione territoriale", desc: "Presenza capillare sul territorio nazionale, con visione internazionale." },
];

function Futuro() {
  return (
    <>
      <section className="relative pt-36 pb-20 surface-navy overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-glow)" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
        <div className="container-x relative">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Futuro e crescita</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl">
              Motori di <span className="text-gradient">crescita.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl">
              La nostra visione si fonda sull'innovazione e sulla continua ricerca di nuove opportunità. Collaborare con noi significa affrontare sfide stimolanti e trasformarle in crescita condivisa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="relative grid md:grid-cols-2 gap-6">
          {ROADMAP.map((r, i) => (
            <Reveal key={r.title} delay={i * 120}>
              <div className="card-lift relative h-full p-8 rounded-2xl bg-card border border-border overflow-hidden">
                <div className="absolute top-4 right-6 text-6xl font-bold font-[var(--font-display)] text-primary/10">0{i + 1}</div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center"><r.icon size={22} /></div>
                <h3 className="mt-5 text-2xl font-bold">{r.title}</h3>
                <p className="mt-2 text-muted-foreground">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 p-12 rounded-3xl surface-navy text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-glow)" }} />
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold">Costruiamo insieme il prossimo capitolo.</h3>
              <Link to="/contatti" className="btn-hero mt-8">Parla con noi <ArrowRight size={18} /></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}