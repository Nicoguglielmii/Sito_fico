import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Cable, FileCheck2, Server, X, ArrowRight, ClipboardCheck, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ServiziStory } from "@/components/site/ServiziStory";

// Route della pagina servizi con metadati SEO e Open Graph per condivisione social
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
// Definizione dei servizi offerti e dei rispettivi dettagli usati nella pagina
const SERVICES = [
  {
    Icon: Cable,
    title: "Consulenza Imprese",
    intro:
      "Supportiamo le imprese in ogni fase del collegamento in fibra ottica: sondaggi, rilievi, progettazione e documentazione del realizzato.",
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

/* ─── Modal ──────────────────────────────────────────────────────── */
// Modal dinamica che mostra i dettagli del servizio selezionato
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
          {/* Header della modale con icona, titolo e descrizione */}
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
// Componente principale della pagina "Servizi" con hero, storia, modale e call to action
function Servizi() {
  const [openService, setOpenService] = useState<ServiceIndex | null>(null);
  const service = openService !== null ? SERVICES[openService] : null;

  return (
    <>
      {/* Hero introduttiva con titolo, descrizione e sfondo animato */}
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
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl text-gradient">
              Soluzioni complete per infrastrutture critiche
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl">
              Dal design alla messa in esercizio, dalla pratica autorizzativa al
              supporto operativo: una sola filiera.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEZIONE: Focus Consulenza Imprese */}
      <section className="container-x py-16 w-full border-b border-white/5">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Colonna Testo */}
            <div>
              <span className="text-sm uppercase tracking-widest text-[#38bdf8] font-bold mb-3 block">
                Focus
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent mb-6">
                Consulenza <br/>
                Imprese
              </h2>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Affianchiamo la tua azienda in ogni fase dello sviluppo delle infrastrutture di telecomunicazione. Dalla fattibilità tecnica alla progettazione esecutiva, offriamo un supporto su misura per ottimizzare tempi, costi e performance.
              </p>
              <ul className="space-y-5">
                {[
                  "Analisi di fattibilità e studio di dimensionamento rete.",
                  "Progettazione logica e fisica (GIS) avanzata.",
                  "Redazione documentazione As-Built e caricamento a sistema.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-300">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#facc15] shrink-0 shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonna Visual/Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#002D4A] to-[#001E35] border border-[#0099f2]/20 p-8 md:p-12 shadow-2xl overflow-hidden group">
              {/* Effetto luce di sfondo */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#38bdf8] opacity-10 blur-[80px] rounded-full transition-opacity duration-500 group-hover:opacity-20" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#0a2e4d] border border-[#38bdf8]/30 flex items-center justify-center mb-8 shadow-lg">
                  <Cable size={32} className="text-[#facc15]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Esperienza sul campo
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Il nostro team di ingegneri e tecnici specializzati garantisce una visione end-to-end. Dai sopralluoghi sul territorio, alla scelta degli apparati trasmissivi, curiamo ogni dettaglio per assicurare un'integrazione perfetta.
                </p>
                
                {/* Link diretto alla nuova pagina Consulenza Imprese */}
                <Link 
                  to="/consulenza-imprese"
                  className="text-sm font-semibold text-[#38bdf8] flex items-center gap-2 hover:text-white transition-colors mt-2"
                >
                  Scopri tutti i dettagli <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
          </div>
        </Reveal>
      </section>

      {/* Sezione animazione dedicata con story grafica dei servizi */}
      <section className="container-x py-16 w-full flex flex-col items-center">
        
        {/* Titolo e Didascalia per la Timeline */}
        <div className="w-full">
          <Reveal>
            <div className="mb-14 flex flex-col gap-3">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent">
                Il nostro processo operativo
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl">
                Un approccio step-by-step per garantire efficienza, sicurezza e precisione in ogni fase della realizzazione dell'infrastruttura in fibra ottica.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Timeline Animata */}
        <div className="w-full">
          <ServiziStory />
        </div>

        <Reveal delay={200}>
          <Link 
            to="/progettazione-fibra"
            className="mt-12 text-lg font-semibold text-[#38bdf8] flex items-center gap-2 hover:text-white transition-all hover:gap-3"
          >
            Scopri di più sulla progettazione fibra <ArrowRight size={20} />
          </Link>
        </Reveal>

      </section>

      {/* Modale di dettaglio servizio, visibile solo quando un servizio è selezionato */}
      {openService !== null && service && (
        <ServiceModal service={service} onClose={() => setOpenService(null)} />
      )}

      {/* Sezione Ricerca e innovazione e Siti Web */}
      <section className="container-x pb-24">
        
        {/* Ricerca e innovazione */}
        <Reveal>
          <div className="mb-10 text-left">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent">
              Ricerca e innovazione
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl">
              Siamo costantemente aperti a nuove visioni e pronti a trasformare idee ambiziose in progetti concreti e all'avanguardia.
            </p>
            {/* Link alla pagina Ricerca e Innovazione */}
            <Link 
              to="/ricerca-innovazione"
              className="mt-6 text-lg font-semibold text-[#38bdf8] flex items-center gap-2 hover:text-white transition-all hover:gap-3 inline-flex"
            >
              Scopri di più <ArrowRight size={20} />
            </Link>
          </div>
        </Reveal>

        {/* NUOVA SEZIONE: Realizzazioni siti web (Vibe Coding) */}
        <Reveal delay={100}>
          <div className="mt-16 text-left border-t border-white/5 pt-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent">
              Realizzazioni siti web
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl leading-relaxed">
              Sviluppiamo interfacce web moderne, performanti e scalabili abbracciando la filosofia del <strong className="text-white">vibe coding</strong>: combiniamo l'intelligenza artificiale, le migliori tecnologie front-end e la sensibilità creativa per generare codice fluido, reattivo e perfettamente in sintonia con l'identità del tuo brand.
            </p>
          </div>
        </Reveal>

      </section>
    </>
  );
}