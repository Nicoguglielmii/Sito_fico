import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Radio, Landmark, Building2, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

type NodeId = "operatori" | "pa" | "imprese" | "professionisti";

type CollabNode = {
  id: NodeId;
  label: string;
  icon: LucideIcon;
  description: string;
  x: number;
  y: number;
};

const NODES: CollabNode[] = [
  {
    id: "operatori",
    label: "Operatori TLC",
    icon: Radio,
    description:
      "Progettiamo e realizziamo infrastrutture in fibra ottica al fianco dei principali operatori di telecomunicazioni, dalla pianificazione della rete alla posa sul territorio.",
    x: 50,
    y: 10,
  },
  {
    id: "pa",
    label: "Pubblica Amministrazione",
    icon: Landmark,
    description:
      "Curiamo permitting, autorizzazioni e rapporti con gli enti locali, semplificando il dialogo tra amministrazioni pubbliche e operatori per ogni opera infrastrutturale.",
    x: 90,
    y: 50,
  },
  {
    id: "imprese",
    label: "Imprese e Aziende",
    icon: Building2,
    description:
      "Accompagniamo aziende di ogni settore nell'integrazione di connettività e soluzioni IT, trasformando l'infrastruttura di rete in un vantaggio competitivo.",
    x: 50,
    y: 90,
  },
  {
    id: "professionisti",
    label: "Professionisti",
    icon: Users,
    description:
      "Lavoriamo a stretto contatto con tecnici, progettisti e consulenti specializzati, garantendo competenza e continuità in ogni fase del progetto.",
    x: 10,
    y: 50,
  },
];

const CENTER = { x: 50, y: 50 };

/**
 * Calcola un punto di controllo quadratico che curva la linea
 * perpendicolarmente rispetto alla direzione centro→nodo.
 */
function getQuadraticControlPoint(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  curvature = 18
) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  // vettore perpendicolare normalizzato
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  return { cx: mx + nx * curvature, cy: my + ny * curvature };
}

export function CollaborationNetwork() {
  const [activeId, setActiveId] = useState<NodeId>("operatori");
  const active = NODES.find((n) => n.id === activeId) ?? NODES[0];
  const ActiveIcon = active.icon;

  return (
    <section className="py-24 overflow-hidden">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Le nostre collaborazioni
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Connessioni che generano valore</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              FI.CO è il punto in cui operatori, pubblica amministrazione, imprese e professionisti
              si incontrano per costruire, insieme, le infrastrutture di domani.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* DIAGRAM */}
          <Reveal delay={100}>
            <div className="relative aspect-square w-full max-w-[520px] mx-auto">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
                {NODES.map((node, i) => {
                  const isActive = node.id === activeId;
                  const { cx, cy } = getQuadraticControlPoint(
                    CENTER.x,
                    CENTER.y,
                    node.x,
                    node.y,
                    // alterna la direzione della curva per varietà visiva
                    i % 2 === 0 ? 14 : -14
                  );
                  const curvePath = `M${CENTER.x},${CENTER.y} Q${cx},${cy} ${node.x},${node.y}`;

                  return (
                    <g key={node.id}>
                      {/* linea curva */}
                      <path
                        d={curvePath}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={isActive ? 0.7 : 0.35}
                        strokeLinecap="round"
                        className={`transition-all duration-300 ${isActive ? "text-accent" : "text-border"}`}
                      />
                      {/* pallino che viaggia lungo la curva */}
                      <circle
                        r={isActive ? 1.3 : 0.9}
                        fill="currentColor"
                        className={isActive ? "text-accent" : "text-accent/50"}
                      >
                        <animateMotion
                          dur="3.2s"
                          begin={`${i * 0.5}s`}
                          repeatCount="indefinite"
                          calcMode="spline"
                          keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                          keyPoints="0;1;0"
                          keyTimes="0;0.5;1"
                          path={curvePath}
                        />
                      </circle>
                    </g>
                  );
                })}
              </svg>

              {/* center hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="absolute inset-0 -m-5 rounded-full bg-primary/20 blur-xl animate-pulse-glow" />
                <div className="relative flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full surface-navy border border-white/10 shadow-lg">
                  <span className="font-[var(--font-display)] text-base md:text-lg font-bold text-white">
                    FI.CO
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-white/60 mt-0.5">
                    Connettiamo
                  </span>
                </div>
              </div>

              {/* satellite nodes */}
              {NODES.map((node) => {
                const isActive = node.id === activeId;
                const Icon = node.icon;
                return (
                  <button
                    key={node.id}
                    type="button"
                    aria-pressed={isActive}
                    onMouseEnter={() => setActiveId(node.id)}
                    onFocus={() => setActiveId(node.id)}
                    onClick={() => setActiveId(node.id)}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-1 px-2 py-2.5 w-[92px] sm:w-[104px] rounded-2xl border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive
                        ? "bg-card border-primary shadow-lg scale-105"
                        : "bg-card/70 border-border hover:border-primary/50 hover:scale-105"
                    }`}
                  >
                    <Icon className={isActive ? "text-primary" : "text-muted-foreground"} size={20} />
                    <span
                      className={`text-[10px] sm:text-[11px] font-semibold leading-tight text-center ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {node.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* INFO PANEL */}
          <Reveal delay={200}>
            <div className="card-lift bg-card border border-border rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ActiveIcon className="text-primary" size={22} />
                </div>
                <h3 className="text-xl font-bold">{active.label}</h3>
              </div>
              <p className="mt-5 text-muted-foreground leading-relaxed">{active.description}</p>
              <div className="mt-7 flex gap-2">
                {NODES.map((node) => (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActiveId(node.id)}
                    aria-label={`Mostra ${node.label}`}
                    aria-pressed={node.id === activeId}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      node.id === activeId ? "w-8 bg-primary" : "w-4 bg-border hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
