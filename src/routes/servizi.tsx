import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Cable, FileCheck2, Server, ChevronDown, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi — FI.CO. SRL" },
      { name: "description", content: "Consulenza imprese, gestione enti e permitting, servizi IT: tutti i servizi FI.CO. SRL." },
      { property: "og:title", content: "Servizi — FI.CO. SRL" },
      { property: "og:description", content: "Consulenza, permitting e IT end-to-end." },
      { property: "og:url", content: "/servizi" },
    ],
    links: [{ rel: "canonical", href: "/servizi" }],
  }),
  component: Servizi,
});

const SERVICES = [
  {
    icon: Cable,
    title: "Consulenza Imprese",
    intro: "Supportiamo le imprese in ogni fase del collegamento in fibra ottica: survey, rilievi, progettazione e documentazione del realizzato.",
    items: ["Gestione ordini di collegamento", "Analisi tempi e costi", "Studio e dimensionamento rete", "Progettazione logica dei circuiti", "Progettazione GIS e scelta apparati trasmissivi", "Rilievi planimetrici", "Sopralluoghi", "Walk-In / Walk-Out", "Acquisizioni infrastrutture verso altri operatori", "Aggiornamento banche dati cartografiche e alfanumeriche", "Redazione e Caricamento As-Built su sistema informatico"],
  },
  {
    icon: FileCheck2,
    title: "Rapporti e Gestione Enti",
    intro: "Intermediamo con la PA e gli enti competenti per autorizzazioni, licenze e concessioni necessarie ai progetti.",
    items: ["Gestione PERMIT", "Redazione istanze ed elaborati grafici", "Acquisizione pareri e valutazioni tecniche", "Gestione e valutazione vincoli urbanistici e paesaggistici", "Conferenze di Servizi", "Monitoraggio Tempistiche e Silenzio-assenso", "Gestione pagamenti"],
  },
  {
    icon: Server,
    title: "Servizi IT",
    intro: "Installazione, manutenzione e assistenza hardware e software H24, su misura delle esigenze del cliente.",
    items: ["Reperibilità H24", "Gestione completa ticket su SLA garantiti", "Installazione e manutenzione apparati networking", "Cablaggio strutturato", "Outsourcing e gestione logistica delle scorte", "Manutenzione hardware e software"],
  },
];

function Servizi() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="relative pt-36 pb-20 surface-navy overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-glow)" }} />
        <div className="container-x relative">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Servizi</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl">
              Soluzioni complete per <span className="text-gradient">infrastrutture critiche.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl">
              Dal design alla messa in esercizio, dalla pratica autorizzativa al supporto operativo: una sola filiera.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="space-y-6">
          {SERVICES.map((s, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={s.title} delay={i * 100}>
                <div className={`rounded-2xl border transition-all ${isOpen ? "border-primary/40 shadow-[var(--shadow-card)]" : "border-border"} bg-card overflow-hidden`}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full p-6 md:p-8 flex items-center gap-6 text-left">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent grid place-items-center text-white">
                      <s.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold">{s.title}</h2>
                      <p className="mt-1 text-muted-foreground">{s.intro}</p>
                    </div>
                    <ChevronDown size={24} className={`flex-shrink-0 text-primary transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-8 pl-6 md:pl-28">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                          {s.items.map((it) => (
                            <div key={it} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/5 transition-colors">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              <span className="text-sm font-medium">{it}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-20 p-10 md:p-14 rounded-3xl bg-gradient-to-br from-secondary to-card border border-border text-center">
            <h3 className="text-3xl md:text-4xl font-bold">Hai un progetto in mente?</h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Costruiamo insieme la soluzione tecnica e operativa più adatta.</p>
            <Link to="/contatti" className="btn-hero mt-8">Parliamone <ArrowRight size={18} /></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}