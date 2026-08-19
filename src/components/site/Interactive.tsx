// src/components/site/Interactive.tsx
// Questo file raggruppa componenti UI usati globalmente nel sito.
// Ho aggiunto commenti esplicativi e di contesto senza modificare la logica.

import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import {
  MessageCircle,
  X,
  Sun,
  Moon,
  Send,
  ChevronLeft,
  ChevronRight,
  Quote,
  Search,
  Compass,
  FileCheck2,
  HardHat,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

// =========================================================================
// IMPORT IMMAGINI REGIONI (Scheda mappa)
// Basato sui file reali presenti nella cartella assets
// =========================================================================
import imgPiemonte from "@/assets/piemonte.webp";
import imgLombardia from "@/assets/lombardia.avif";
import imgVeneto from "@/assets/veneto.jpg";
import imgToscana from "@/assets/toscana.jpeg";
import imgLazio from "@/assets/lazio.webp";
import imgCampania from "@/assets/campania.jpg";
import imgBasilicata from "@/assets/basilicata.jpg";
import imgPuglia from "@/assets/puglia.webp";
import imgCalabria from "@/assets/calabria.webp";
import imgSicilia from "@/assets/sicilia.jpg";

/* ------------------------- Hero particles canvas ------------------------- */
export function HeroParticles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;

    const ctx = c.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0,
      h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];

    const resize = () => {
      w = c.clientWidth;
      h = c.clientHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

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

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

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

  return (
    <canvas ref={ref} aria-hidden className="absolute inset-0 w-full h-full pointer-events-none" />
  );
}

/* ------------------------- Magnetic button wrapper ------------------------ */
export function Magnetic({
  children,
  className = "",
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;

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
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle size={26} className="relative" />
    </a>
  );
}

/* ------------------------------- Dark mode ------------------------------- */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("fico-theme");
    const isDark =
      saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
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
    <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-[99999] w-[calc(100vw-2rem)] md:w-[700px] p-5 md:p-6 rounded-2xl bg-[#011C27] border border-[#0e7490]/50 shadow-2xl flex flex-col md:flex-row md:items-center gap-4 md:gap-6 animate-fade-in">
      
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2 md:mb-1">
          <h4 className="font-bold text-white text-base md:text-lg">Utilizziamo i cookie</h4>
          <button 
            onClick={() => setShow(false)} 
            aria-label="Chiudi" 
            className="md:hidden text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">
          Utilizziamo cookie tecnici essenziali e analitici anonimi per migliorare l'esperienza di navigazione.
        </p>
      </div>

      <div className="flex items-center gap-3 justify-end shrink-0 mt-2 md:mt-0">
        <button 
          onClick={reject} 
          className="px-4 py-2.5 text-[14px] font-semibold rounded-xl bg-transparent text-gray-300 hover:text-white hover:bg-white/10 border border-gray-500 transition-colors"
        >
          Rifiuta
        </button>
        <button 
          onClick={accept} 
          className="px-5 py-2.5 text-[14px] font-bold rounded-xl bg-[#38bdf8] text-[#011C27] hover:bg-[#0284c7] hover:text-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.4)]"
        >
          Accetta tutti
        </button>
        <button 
          onClick={() => setShow(false)} 
          aria-label="Chiudi" 
          className="hidden md:flex items-center justify-center p-2 text-gray-400 hover:text-white transition-colors ml-1"
        >
          <X size={22} />
        </button>
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
      <style>{`
        @keyframes lineTravel {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -700; }
        }
      `}</style>
      <div className="max-w-3xl mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
          Il nostro processo
        </span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-gradient">
          Dalla prima idea al go-live
        </h2>
      </div>
      <div className="relative">
        <div
          aria-hidden
          className="hidden lg:block absolute inset-x-0 top-[24%] h-32 pointer-events-none overflow-visible"
        >
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
              style={{
                animation: "lineTravel 5.5s linear infinite",
                animationTimingFunction: "linear",
              }}
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
              style={{
                animation: "lineTravel 5s linear infinite",
                animationTimingFunction: "linear",
              }}
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
              style={{
                animation: "lineTravel 6s linear infinite",
                animationTimingFunction: "linear",
              }}
            />
          </svg>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 pt-8">
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative group">
              <div className="relative w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent text-white grid place-items-center shadow-lg group-hover:scale-110 transition-transform">
                <s.icon size={28} />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary text-primary text-xs font-bold grid place-items-center">
                  {i + 1}
                </span>
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
  { id: "Piemonte", x: 22, y: 25, image: imgPiemonte, desc: "Sviluppiamo reti ultra-veloci nei distretti industriali piemontesi e nelle aree metropolitane, supportando la transizione digitale del Nord-Ovest." },
  { id: "Lombardia", x: 33, y: 23, image: imgLombardia, desc: "Cuore pulsante dell'economia italiana. Progettiamo infrastrutture di rete scalabili per le grandi imprese e soluzioni di connettività avanzata per l'industria 4.0." },
  { id: "Veneto", x: 46, y: 22, image: imgVeneto, desc: "Connettiamo il tessuto produttivo del Nord-Est, offrendo servizi di permitting e realizzazione di dorsali in fibra per superare il digital divide locale." },
  { id: "Toscana", x: 36, y: 38, image: imgToscana, desc: "Portiamo innovazione tecnologica tra arte e industria, gestendo complessi progetti di telecomunicazione nel rigoroso rispetto del patrimonio paesaggistico." },
  { id: "Lazio", x: 48, y: 49, image: imgLazio, desc: "Interveniamo strategicamente nel Centro Italia e nella Capitale, fornendo supporto ingegneristico e reti di nuova generazione per le pubbliche amministrazioni." },
  { id: "Campania", x: 63, y: 58, image: imgCampania, desc: "Accompagniamo la crescita digitale del Mezzogiorno con cantieri operativi e soluzioni IT mirate per enti locali e poli tecnologici emergenti." },
  { id: "Basilicata", x: 76, y: 63, image: imgBasilicata, desc: "Superiamo le complesse sfide orografiche lucane progettando reti resilienti che garantiscono connessioni stabili e veloci su tutto il territorio." },
  { id: "Puglia", x: 85, y: 61, image: imgPuglia, desc: "Consolidiamo la nostra presenza nel Sud Italia realizzando dorsali strategiche e collegamenti ad altissima capacità per il settore turistico e industriale." },
  { id: "Calabria", x: 75, y: 75, image: imgCalabria, desc: "Lavoriamo attivamente sul territorio calabrese per abilitare nuovi servizi digitali, gestendo in toto le fasi di permitting e la posa di infrastrutture TLC." },
  { id: "Sicilia", x: 55, y: 85, image: imgSicilia, desc: "Colleghiamo l'isola al futuro attraverso complessi progetti di ingegneria delle telecomunicazioni e reti in fibra ottica che supportano lo sviluppo economico locale." },
];

export function ItalyMap() {
  // Inizializza con `null` in modo che all'apertura non ci sia nulla selezionato
  const [sel, setSel] = useState<typeof REGIONS[0] | null>(null);

  return (
    <section className="surface-navy py-24 relative overflow-hidden">
      
      {/* Stili per le animazioni */}
      <style>{`
        @keyframes slideDownCard {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-card { 
          animation: slideDownCard 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
      `}</style>

      {/* Bagliore diffuso di sfondo */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "var(--gradient-glow)" }}
      />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Presenza
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
            Presenza consolidata in tutta Italia
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          
          {/* MAPPA (Colonna sinistra) */}
          <div className="lg:col-span-3 relative">
            <div className="relative max-w-lg mx-auto">
              
              {/* FRECCIA DINAMICA ANIMATA DALLA MAPPA ALLA SCHEDA (Mostrata solo se sel non è null) */}
              {sel && (
                <div 
                  className="hidden lg:flex absolute z-0 items-center transition-all duration-[600ms] ease-in-out pointer-events-none"
                  style={{
                    left: `${sel.x}%`,
                    top: `${sel.y}%`,
                    width: `calc(120% - ${sel.x}%)`, 
                    transform: 'translateY(-50%)'
                  }}
                >
                  <div className="h-[2px] w-full bg-white opacity-80"></div>
                  <ArrowRight size={28} strokeWidth={2} className="text-white shrink-0 -ml-[14px] opacity-80" />
                </div>
              )}

              <img
                src="/cartina-italia.png"
                alt="Mappa Italia"
                className="w-full h-auto select-none mix-blend-lighten relative z-10"
                draggable={false}
              />

              {REGIONS.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  // L'evento click è ora l'unico modo per visualizzare la scheda, rimuovendo onMouseEnter
                  onClick={(e) => {
                    e.preventDefault();
                    setSel(r);
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 z-30 touch-manipulation group"
                  style={{
                    left: `${r.x}%`,
                    top: `${r.y}%`,
                  }}
                >
                  <span
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-300 ${
                      sel?.id === r.id ? "bg-[#FABD18]/25 animate-ping" : "bg-transparent group-hover:bg-[#FABD18]/20"
                    }`}
                    style={{
                      width: "42px",
                      height: "42px",
                    }}
                  />
                  <span
                    className={`relative z-10 rounded-full bg-[#FABD18] transition-all duration-300 ${
                      sel?.id === r.id ? "w-5 h-5 shadow-[0_0_25px_rgba(250,189,24,0.9)]" : "w-3 h-3 group-hover:w-4 group-hover:h-4 group-hover:shadow-[0_0_15px_rgba(250,189,24,0.6)]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* SCHEDA REGIONE ANIMATA O PLACEHOLDER (Colonna destra) */}
          <div className="lg:col-span-2 relative flex items-center justify-center min-h-[400px]">
            
            {sel ? (
              // SCHEDA REGIONE (Appare solo se una regione è selezionata)
              <div key={sel.id} className="w-full bg-[#01425f]/40 backdrop-blur-xl border border-[#0e7490]/50 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-card relative z-20">
                
                <h3 className="text-4xl font-bold text-[#facc15] mb-6 tracking-wide drop-shadow-md">
                  {sel.id}
                </h3>
                
                <div className="w-full h-56 bg-[#011C27] rounded-2xl overflow-hidden relative border border-white/10 group shadow-inner">
                  <img 
                    src={sel.image} 
                    alt={`Sede operativa FI.CO. in ${sel.id}`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011C27] via-[#011C27]/20 to-transparent opacity-90" />
                  
                  
                </div>
                
                <p className="mt-6 text-[17px] text-gray-200 leading-relaxed">
                  {sel.desc}
                </p>

              </div>
            ) : (
              // PLACEHOLDER (Appare all'inizio, quando nulla è selezionato)
              <div className="w-full h-[400px] flex flex-col items-center justify-center p-8 border-2 border-dashed border-[#0e7490]/50 rounded-3xl text-center bg-[#01425f]/10 animate-fade-in relative z-20">
                <div className="w-16 h-16 rounded-full bg-[#011C27] flex items-center justify-center border border-[#0e7490]/30 mb-6 shadow-lg">
                  <span className="w-4 h-4 rounded-full bg-[#facc15] animate-pulse shadow-[0_0_15px_rgba(250,189,24,0.8)]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Scopri il territorio</h3>
                <p className="text-gray-400 text-[16px] max-w-[250px]">
                  Clicca su un indicatore sulla mappa per scoprire i dettagli della nostra presenza e i progetti attivi.
                </p>
              </div>
            )}
            
          </div>

        </div>
      </div>
    </section>
  );
}