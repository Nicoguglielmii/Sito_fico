import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import projFiber from "@/assets/project-fiber.jpg";
import projPermit from "@/assets/project-permit.jpg";
import projIt from "@/assets/project-it.jpg";
import projTelco from "@/assets/project-telco.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — FI.CO. SRL" },
      { name: "description", content: "Case studies di reti in fibra ottica, telecomunicazioni, servizi IT e coordinamento PA." },
      { property: "og:title", content: "Portfolio — FI.CO. SRL" },
      { property: "og:description", content: "Progetti realizzati e collaborazioni." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const FILTERS = ["Tutti", "Telecomunicazioni", "Fibra Ottica", "Servizi IT", "Permitting"] as const;

const PROJECTS = [
  { img: projFiber, sector: "Fibra Ottica", title: "Rete FTTH Metropolitana", desc: "Progettazione e deployment di oltre 120km di fibra in area urbana.", services: ["Network design", "GIS", "Project management"], result: "Copertura 95% in 8 mesi" },
  { img: projTelco, sector: "Telecomunicazioni", title: "Backbone Regionale", desc: "Dorsale ad alta capacità per operatore wholesale.", services: ["Rilievi", "As-Built", "Sopralluoghi"], result: "Latency < 2ms inter-nodo" },
  { img: projPermit, sector: "Permitting", title: "Permitting Multi-Comune", desc: "Coordinamento di oltre 80 pratiche autorizzative.", services: ["Conferenze servizi", "Pareri tecnici", "Monitoraggio"], result: "Iter ridotto del 35%" },
  { img: projIt, sector: "Servizi IT", title: "Datacenter Enterprise", desc: "Cablaggio strutturato e gestione H24 per primario gruppo industriale.", services: ["Cablaggio", "Networking", "SLA H24"], result: "Uptime 99.99%" },
  { img: projFiber, sector: "Fibra Ottica", title: "FTTC Distretto Industriale", desc: "Connettività ad alte prestazioni per cluster di imprese.", services: ["Studio rete", "Progettazione", "Walk-in"], result: "+300 imprese connesse" },
  { img: projIt, sector: "Servizi IT", title: "Migrazione Hybrid Cloud", desc: "Riprogettazione del networking on-prem e cloud.", services: ["Networking", "Outsourcing"], result: "TCO -22%" },
];

function Portfolio() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tutti");
  const items = filter === "Tutti" ? PROJECTS : PROJECTS.filter((p) => p.sector === filter);

  return (
    <>
      <section className="relative pt-36 pb-20 surface-navy overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-glow)" }} />
        <div className="container-x relative">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Portfolio</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl">
              Progetti che <span className="text-gradient">parlano da soli.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl">
              Una selezione di case study dai nostri ambiti core: infrastrutture, telecomunicazioni e IT.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="flex flex-wrap gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                filter === f
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
                  : "bg-secondary text-foreground/70 hover:text-foreground hover:bg-secondary/70"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((p, i) => (
            <Reveal key={p.title + i} delay={(i % 2) * 100}>
              <article className="card-lift group overflow-hidden rounded-2xl bg-card border border-border h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1280} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C]/95 via-[#003B5C]/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/90 text-[#003B5C] text-xs font-bold uppercase tracking-wider">{p.sector}</span>
                  <ArrowUpRight className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.services.map((s) => (
                      <span key={s} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{s}</span>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-border flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Risultato</span>
                    <span className="text-sm font-semibold text-gradient">{p.result}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}