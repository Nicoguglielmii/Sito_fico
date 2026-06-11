import { useEffect, useRef, useState, type ReactNode } from "react";
import { Rocket, Handshake, TrendingUp, Globe2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal, Counter } from "./Reveal";

/* Light Flow Connectors - Animated diagonal flows between cards */
function LightFlows() {
  return (
    <>
      <style>{`
        @keyframes flowTravel {
          0% { stroke-dashoffset: 0; opacity: 0.4; }
          50% { opacity: 0.8; }
          100% { stroke-dashoffset: -600; opacity: 0.2; }
        }
        
        @keyframes pulseGlowFlow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(0, 153, 242, 0.4)); }
          50% { filter: drop-shadow(0 0 20px rgba(0, 153, 242, 0.8)); }
        }
        
        @keyframes particleFlow {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
      `}</style>
    
    </>
  );
}

const ROADMAP = [
  {
    icon: Rocket,
    title: "Innovazione tecnologica",
    desc: "Adozione di nuove tecnologie per reti più intelligenti e sostenibili.",
    color: "from-primary",
    accentColor: "#0099F2",
  },
  {
    icon: Handshake,
    title: "Partnership strategiche",
    desc: "Alleanze con operatori, enti e fornitori per accelerare la trasformazione.",
    color: "from-accent",
    accentColor: "#FF6B35",
  },
  {
    icon: TrendingUp,
    title: "Scalabilità operativa",
    desc: "Processi e team strutturati per affrontare progetti complessi su scala.",
    color: "from-cyan-accent",
    accentColor: "#20D9A3",
  },
  {
    icon: Globe2,
    title: "Espansione territoriale",
    desc: "Presenza capillare sul territorio nazionale, con visione internazionale.",
    color: "from-primary",
    accentColor: "#0099F2",
  },
];

/* Growth Card Component */
interface GrowthCardProps {
  index: number;
  item: (typeof ROADMAP)[0];
  position: "left" | "right" | "center";
}

function GrowthCard({ index, item: r, position }: GrowthCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const baseDelay = index * 150;

  return (
    <Reveal delay={baseDelay} className={`w-full flex ${
      position === "right" ? "justify-end" : position === "center" ? "justify-center" : "justify-start"
    }`}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="growth-card group relative w-full max-w-md rounded-3xl p-8 transition-all duration-500 overflow-hidden"
        style={{
          "--mouse-x": `${mousePos.x}px`,
          "--mouse-y": `${mousePos.y}px`,
          "--accent-color": r.accentColor,
        } as React.CSSProperties}
      >
        {/* Glassmorphic Background */}
        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-lg border border-white/10 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/30" />

        {/* Glow effect that follows mouse on hover */}
        {isHovered && (
          <div
            className="absolute w-96 h-96 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle, var(--accent-color) 0%, transparent 70%)`,
              left: `calc(var(--mouse-x) - 192px)`,
              top: `calc(var(--mouse-y) - 192px)`,
              filter: "blur(40px)",
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 space-y-4">
          {/* Number + Icon */}
          <div className="flex items-start justify-between">
            <div
              className="text-7xl font-black font-display text-white/20 transition-all duration-500 group-hover:text-white/50 group-hover:scale-125"
              style={{
                transitionProperty: "color, transform",
              }}
            >
              0{index + 1}
            </div>
            <div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:from-white/20 group-hover:to-white/10 group-hover:border-white/40 group-hover:rotate-360"
              style={{
                animation: isHovered ? "spin-smooth 2s ease-in-out" : "none",
              }}
            >
              <r.icon size={32} className="text-white transition-colors duration-500 group-hover:brightness-150" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white transition-colors duration-500 group-hover:brightness-150">
            {r.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 leading-relaxed transition-colors duration-500 group-hover:text-white/80">
            {r.desc}
          </p>

          {/* CTA Link */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 text-white/70 font-semibold pt-2 transition-all duration-300 group-hover:text-white hover:gap-3"
          >
            Scopri <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none border border-transparent group-hover:border-white/30" />
      </div>
    </Reveal>
  );
}

/* Main Growth Section */
export function GrowthSection() {
  return (
    <section className="growth-section relative overflow-hidden py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "var(--gradient-glow)" }} />

      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Floating particles */}
      <div className="absolute top-1/4 right-[8%] w-2 h-2 rounded-full bg-cyan-accent animate-float shadow-[0_0_15px_var(--cyan-accent)]" />
      <div className="absolute bottom-1/3 left-[12%] w-3 h-3 rounded-full bg-primary animate-float shadow-[0_0_20px_var(--primary)]" style={{ animationDelay: "2s" }} />

      {/* SVG Connectors */}
      <LightFlows />

      <div className="container-x relative z-10">
        {/* Header */}
        <Reveal delay={0}>
          <div className="max-w-3xl mb-24">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-accent font-semibold">Futuro e crescita</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black font-display text-white leading-[0.95] mb-6">
              Motori di<br />
              <span className="bg-gradient-to-r from-cyan-accent via-primary to-accent bg-clip-text text-transparent">crescita</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              La nostra visione si fonda sull'innovazione e sulla continua ricerca di nuove opportunità. Collaborare con noi significa affrontare sfide stimolanti e trasformarle in crescita condivisa.
            </p>
          </div>
        </Reveal>

        {/* Cards Grid - Diagonal Timeline */}
        <div className="space-y-12 md:space-y-16 max-w-5xl">
          {ROADMAP.map((item, i) => (
            <GrowthCard
              key={item.title}
              index={i}
              item={item}
              position={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
