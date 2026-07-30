import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { MessageCircle, X, Sun, Moon, Send, ChevronLeft, ChevronRight, Quote, Search, Compass, FileCheck2, HardHat, ShieldCheck, ChevronDown } from "lucide-react";

/* ------------------------- Hero particles canvas ------------------------- */
export function HeroParticles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;

    // Contesto 2D per disegnare particelle animate
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];

    const resize = () => {
      // Manteniamo il canvas in dimensione reale per una resa nitida su display ad alta densità
      w = c.clientWidth; h = c.clientHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Numero di particelle in base all'area del canvas, con un massimo fisso per preservare le prestazioni
      const count = Math.min(70, Math.floor((w * h) / 18000));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      // Aggiorna posizione delle particelle e rimbalza ai bordi
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      // Disegna i collegamenti tra particelle vicine
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 140 * 140) {
            const o = 1 - Math.sqrt(d2) / 140;
            ctx.strokeStyle = `rgba(64, 224, 255, ${o * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Disegna i punti delle particelle
      ctx.fillStyle = "rgba(250, 189, 24, 0.8)";
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 w-full h-full pointer-events-none" />;
}

/* ------------------------- Magnetic button wrapper ------------------------ */
export function Magnetic({ children, className = "", strength = 0.35 }: { children: ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;

    // Calcola uno spostamento relativo al centro dell'elemento per l'effetto magnetico
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </span>
  );
}

/* --------------------------- WhatsApp floating --------------------------- */
export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/393757932669?text=Salve%2C%20vorrei%20informazioni%20sui%20vostri%20servizi."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="fixed bottom-6 left-6 z-40 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform"
    >
      {/* Pulsante WhatsApp con effetto di ping per attirare l'attenzione */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle size={26} className="relative" />
    </a>
  );
}

/* ------------------------------- Dark mode ------------------------------- */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Legge la preferenza salvata oppure usa quella del sistema se non esiste
    const saved = localStorage.getItem("fico-theme");
    const isDark = saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("fico-theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Cambia tema"
      className="grid place-items-center w-10 h-10 rounded-full hover:bg-secondary transition-colors text-foreground"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

/* ------------------------------ Cookie banner ----------------------------- */
export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Mostra il banner solo se l'utente non ha già confermato una preferenza
    if (!localStorage.getItem("fico-cookies")) setShow(true);
  }, []);

  if (!show) return null;

  const accept = () => {
    localStorage.setItem("fico-cookies", "accepted");
    setShow(false);
  };

  const reject = () => {
    localStorage.setItem("fico-cookies", "rejected");
    setShow(false);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[min(640px,calc(100vw-2rem))] p-5 rounded-2xl bg-card border border-border shadow-2xl backdrop-blur-xl animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <h4 className="font-bold text-sm">Utilizziamo i cookie</h4>
          <p className="mt-1 text-xs text-muted-foreground">Cookie tecnici essenziali e analitici anonimi per migliorare l'esperienza di navigazione.</p>
        </div>
        <button onClick={() => setShow(false)} aria-label="Chiudi" className="text-muted-foreground hover:text-foreground"><X size={16} /></button>
      </div>
      <div className="mt-4 flex gap-2 justify-end">
        <button onClick={reject} className="px-4 py-2 text-xs font-semibold rounded-full bg-secondary hover:bg-secondary/70 transition">Rifiuta</button>
        <button onClick={accept} className="px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition">Accetta tutti</button>
      </div>
    </div>
  );
}

/* ----------------------------- Process timeline --------------------------- */
const STEPS = [
  { icon: Search, title: "Sondaggi e rilievi", desc: "" },
  { icon: Compass, title: "Progettazione", desc: "" },
  { icon: FileCheck2, title: "Permitting", desc: "" },
  { icon: HardHat, title: "Realizzazione", desc: "" },
  { icon: ShieldCheck, title: "Delivery & supporto", desc: "" },
];

export function ProcessTimeline() {
  return (
    <section className="container-x py-24 md:py-32">
      {/* Stili inline per l'animazione del tratto SVG del percorso */}
      <style>{`
        @keyframes lineTravel {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -700; }
        }
      `}</style>
      <div className="max-w-3xl mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Il nostro processo</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-gradient">
          Dalla prima idea al go-live
        </h2>
      </div>
      <div className="relative">
        <div aria-hidden className="hidden lg:block absolute inset-x-0 top-[24%] h-32 pointer-events-none overflow-visible">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <filter id="timelineGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="timelineGlowA" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
                <stop offset="20%" stopColor="rgba(56, 189, 248, 0.85)" />
                <stop offset="70%" stopColor="rgba(248, 146, 6, 0.95)" />
                <stop offset="100%" stopColor="rgba(248, 146, 6, 0)" />
              </linearGradient>
              <linearGradient id="timelineGlowB" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
                <stop offset="15%" stopColor="rgba(56, 189, 248, 0.7)" />
                <stop offset="60%" stopColor="rgba(248, 146, 6, 0.8)" />
                <stop offset="100%" stopColor="rgba(248, 146, 6, 0)" />
              </linearGradient>
            </defs>

            <path
              d="M0,25 C20,0 35,65 50,30 C65,0 80,55 100,30"
              fill="none"
              stroke="url(#timelineGlowA)"
              strokeWidth="3.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="60 220"
              filter="url(#timelineGlowFilter)"
              style={{ animation: "lineTravel 5.5s linear infinite", animationTimingFunction: "linear" }}
            />
            <path
              d="M0,45 C22,25 38,80 52,42 C66,20 82,75 100,48"
              fill="none"
              stroke="rgba(56,189,248,0.55)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="60 220"
              filter="url(#timelineGlowFilter)"
              style={{ animation: "lineTravel 5s linear infinite", animationTimingFunction: "linear" }}
            />
            <path
              d="M0,18 C18,55 32,18 50,34 C68,50 82,20 100,28"
              fill="none"
              stroke="url(#timelineGlowB)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="80 220"
              filter="url(#timelineGlowFilter)"
              style={{ animation: "lineTravel 6s linear infinite", animationTimingFunction: "linear" }}
            />
          </svg>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 pt-8">
        {STEPS.map((s, i) => (
          <div key={s.title} className="relative group">
            <div className="relative w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent text-white grid place-items-center shadow-lg group-hover:scale-110 transition-transform">
              <s.icon size={28} />
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary text-primary text-xs font-bold grid place-items-center">{i + 1}</span>
            </div>
            <div className="mt-5 text-center">
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

/* -------------------------- Italy interactive map ------------------------- */
const REGIONS = [
  { id: "Piemonte", x: 22, y: 25 },
  { id: "Lombardia", x: 33, y: 23 },
  { id: "Veneto", x: 46, y: 22 },
  { id: "Toscana", x: 36, y: 38 },
  { id: "Lazio", x: 48, y: 49 },
  { id: "Campania", x: 63, y: 58 },
  { id: "Basilicata", x: 76, y: 63 },
  { id: "Puglia", x: 85, y: 61 },
  { id: "Calabria", x: 75, y: 75 },
  { id: "Sicilia", x: 55, y: 85 },
];

export function ItalyMap() {
  const [sel, setSel] = useState(REGIONS[2]); // Puglia selezionata di default

  return (
    <section className="surface-navy py-24 relative overflow-hidden">
      {/* Bagliore diffuso di sfondo per migliorare la resa grafica della sezione */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "var(--gradient-glow)" }}
      />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Presenza
          </span>

          {/* MODIFICATO: Applicato text-gradient all'intero h2 e rimosso span */}
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
            Presenza consolidata in tutta Italia
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* MAPPA */}
          <div className="lg:col-span-3">
            <div className="relative max-w-lg mx-auto">
            <img
              src="/cartina-italia.png"
              alt="Mappa Italia"
              className="w-full h-auto select-none mix-blend-lighten"
              draggable={false}
            />

              {REGIONS.map((r) => (
                <button
                  key={r.id}
                  onMouseEnter={() => setSel(r)}
                  onClick={() => setSel(r)}
                  /* MODIFICATO: aggiunto flex items-center justify-center e w-12 h-12 per centrare perfettamente i cerchi */
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12"
                  style={{
                    left: `${r.x}%`,
                    top: `${r.y}%`,
                  }}
                >
                  <span
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FABD18]/25 ${
                      sel.id === r.id ? "animate-ping" : ""
                    }`}
                    style={{
                      width: "42px",
                      height: "42px",
                    }}
                  />
                  <span
                    className={`relative z-10 rounded-full bg-[#FABD18] transition-all duration-300 ${
                      sel.id === r.id
                        ? "w-5 h-5 shadow-[0_0_25px_rgba(250,189,24,0.9)]"
                        : "w-3 h-3"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* LISTA REGIONI */}
          <div className="lg:col-span-2 space-y-3">
            {REGIONS.map((r) => (
              <button
                key={r.id}
                onMouseEnter={() => setSel(r)}
                onClick={() => setSel(r)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  sel.id === r.id
                    ? "bg-white/10 border-accent"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">{r.id}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}