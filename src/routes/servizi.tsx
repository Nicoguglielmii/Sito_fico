import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Cable, FileCheck2, Server, X, ArrowRight, ClipboardCheck, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { LogoAnimation } from "@/routes/LogoAnimation";

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

/* ─── Dati ──────────────────────────────────────────────────────── */

const SERVICES = [
  {
    Icon: Cable,
    title: "Consulenza Imprese",
    intro:
      "Supportiamo le imprese in ogni fase del collegamento in fibra ottica: survey, rilievi, progettazione e documentazione del realizzato.",
    items: [
      "Gestione ordini di collegamento",
      "Analisi tempi e costi",
      "Studio e dimensionamento rete",
      "Progettazione logica dei circuiti",
      "Progettazione GIS e scelta apparati trasmissivi",
      "Rilievi planimetrici",
      "Sopralluoghi",
      "Walk-In / Walk-Out",
      "Acquisizioni infrastrutture verso altri operatori",
      "Aggiornamento banche dati cartografiche e alfanumeriche",
      "Redazione e Caricamento As-Built su sistema informatico",
    ],
  },
  {
    Icon: FileCheck2,
    title: "Rapporti e Gestione Enti",
    intro:
      "Intermediamo con la PA e gli enti competenti per autorizzazioni, licenze e concessioni necessarie ai progetti.",
    items: [
      "Gestione PERMIT",
      "Redazione istanze ed elaborati grafici",
      "Acquisizione pareri e valutazioni tecniche",
      "Gestione e valutazione vincoli urbanistici e paesaggistici",
      "Conferenze di Servizi",
      "Monitoraggio Tempistiche e Silenzio-assenso",
      "Gestione pagamenti",
    ],
  },
  {
    Icon: Server,
    title: "Servizi IT",
    intro:
      "Installazione, manutenzione e assistenza hardware e software H24, su misura delle esigenze del cliente.",
    items: [
      "Reperibilità H24",
      "Gestione completa ticket su SLA garantiti",
      "Installazione e manutenzione apparati networking",
      "Cablaggio strutturato",
      "Outsourcing e gestione logistica delle scorte",
      "Manutenzione hardware e software",
    ],
  },
  {
    Icon: ClipboardCheck,
    title: "Permitting",
    intro:
      "Gestione completa dell'iter autorizzativo per infrastrutture di telecomunicazione, dalla predisposizione delle pratiche al monitoraggio delle approvazioni.",
    items: [
      "Predisposizione documentazione tecnica",
      "Presentazione istanze",
      "Coordinamento con enti locali",
      "Monitoraggio iter autorizzativi",
      "Gestione integrazioni documentali",
      "Verifica conformità normativa",
      "Supporto fino al rilascio autorizzazioni",
    ],
  },
] as const;

type ServiceIndex = 0 | 1 | 2 | 3;

const DOT_TO_SERVICE: Record<number, ServiceIndex> = {
  0: 0,
  1: 0,
  2: 1,
  3: 2,
  4: 2,
  5: 3,
};

const DOT_LABELS = [
  "Progettazione",
  "Sopralluoghi",
  "Gestione Enti",
  "Servizi IT",
  "Networking",
  "Permitting",
] as const;

/* ─── Modal ──────────────────────────────────────────────────────── */

function ServiceModal({
  service,
  onClose,
}: {
  service: (typeof SERVICES)[number];
  onClose: () => void;
}) {
  return (
    <>
      <style>{`
        @keyframes fco-backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fco-modal-in {
          from { opacity: 0; transform: scale(0.95) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fco-tag-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fco-modal-backdrop {
          animation: fco-backdrop-in 0.2s ease both;
        }
        .fco-modal-card {
          animation: fco-modal-in 0.3s cubic-bezier(0.16,1,0.3,1) both;
        }
        .fco-tag {
          animation: fco-tag-in 0.3s cubic-bezier(0.16,1,0.3,1) both;
        }
        .fco-close-btn {
          transition: background 0.15s ease, color 0.15s ease;
        }
        .fco-close-btn:hover {
          background: rgba(255,255,255,0.12) !important;
          color: #F4FAFD !important;
        }
      `}</style>

      <div
        className="fco-modal-backdrop fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
        style={{ background: "rgba(0,15,30,0.75)", backdropFilter: "blur(4px)" }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <div
          className="fco-modal-card relative w-full overflow-hidden"
          style={{
            maxWidth: 780,
            maxHeight: "90vh",
            borderRadius: 24,
            background: "linear-gradient(160deg, #002D4A 0%, #001E35 100%)",
            border: "1px solid rgba(0,153,242,0.25)",
            boxShadow: "0 32px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div style={{ padding: "2.25rem 2.25rem 1.5rem", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              {/* Icona */}
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                flexShrink: 0,
                background: "rgba(0,153,242,0.12)",
                border: "1px solid rgba(0,153,242,0.28)",
                display: "grid",
                placeItems: "center",
                boxShadow: "0 0 20px rgba(0,153,242,0.12)",
              }}>
                <service.Icon size={24} color="#38B6F0" />
              </div>

              {/* Titolo + intro */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#F0F8FD",
                  letterSpacing: "-0.025em",
                  margin: "0 0 6px",
                  lineHeight: 1.2,
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: 15,
                  color: "rgba(180,215,235,0.75)",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {service.intro}
                </p>
              </div>

              {/* Chiudi */}
              <button
                aria-label="Chiudi"
                className="fco-close-btn"
                onClick={onClose}
                style={{
                  flexShrink: 0,
                  marginTop: -2,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  cursor: "pointer",
                  color: "rgba(180,215,235,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={14} />
              </button>
            </div>

            {/* Divisore sottile */}
            <div style={{
              marginTop: "1.25rem",
              height: 1,
              background: "linear-gradient(90deg, rgba(0,153,242,0.3) 0%, rgba(0,153,242,0.05) 100%)",
            }} />
          </div>

          {/* Body scrollabile */}
          <div style={{
            overflowY: "auto",
            padding: "0 2.25rem 2.25rem",
            flex: 1,
          }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {service.items.map((it, idx) => (
                <div
                  key={it}
                  className="fco-tag"
                  style={{
                    animationDelay: `${80 + idx * 35}ms`,
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    background: "rgba(0,90,150,0.20)",
                    border: "1px solid rgba(0,153,242,0.18)",
                    borderRadius: 10,
                    padding: "7px 13px",
                    fontSize: 13.5,
                    color: "#C2DFF0",
                    letterSpacing: "0.01em",
                  }}
                >
                  <span style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#F0B618",
                    flexShrink: 0,
                  }} />
                  {it}
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div style={{
            padding: "1.25rem 2.25rem 1.75rem",
            flexShrink: 0,
            borderTop: "1px solid rgba(0,153,242,0.10)",
            display: "flex",
            justifyContent: "flex-end",
          }}>
            <Link
              to="/contatti"
              onClick={onClose}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(0,153,242,0.15)",
                border: "1px solid rgba(0,153,242,0.35)",
                borderRadius: 10,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 600,
                color: "#7DD3F8",
                textDecoration: "none",
                transition: "background 0.15s ease, border-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,153,242,0.25)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,153,242,0.55)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,153,242,0.15)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,153,242,0.35)";
              }}
            >
              Contattaci <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Pagina ─────────────────────────────────────────────────────── */

function Servizi() {
  const [openService, setOpenService] = useState<ServiceIndex | null>(null);
  const service = openService !== null ? SERVICES[openService] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 surface-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: "var(--gradient-glow)" }}
        />
        <div className="container-x relative">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Servizi
            </span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl">
              Soluzioni complete per{" "}
              <span className="text-gradient">infrastrutture critiche.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl">
              Dal design alla messa in esercizio, dalla pratica autorizzativa al
              supporto operativo: una sola filiera.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pittogramma animato */}
      <section className="container-x py-16">
        <Reveal>
          <p className="text-center text-sm text-muted-foreground mb-8 tracking-wide uppercase">
            Clicca un nodo per scoprire il servizio
          </p>
        </Reveal>
        <LogoAnimation
          className="max-w-6xl mx-auto"
          onDotClick={(dotIndex) => setOpenService(DOT_TO_SERVICE[dotIndex])}
          dotLabels={DOT_LABELS}
        />
      </section>

      {/* Modal servizio */}
      {openService !== null && service && (
        <ServiceModal service={service} onClose={() => setOpenService(null)} />
      )}

      {/* CTA */}
      <section className="container-x pb-24">
        <Reveal>
          <div className="mt-4 p-10 md:p-14 rounded-3xl bg-gradient-to-br from-secondary to-card border border-border text-center">
            <h3 className="text-3xl md:text-4xl font-bold">
              Hai un progetto in mente?
            </h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Costruiamo insieme la soluzione tecnica e operativa più adatta.
            </p>
            <Link to="/contatti" className="btn-hero mt-8">
              Parliamone <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
