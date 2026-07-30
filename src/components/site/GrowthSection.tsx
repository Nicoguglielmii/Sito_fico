import { useState, type CSSProperties } from "react";
import { Rocket, Handshake, TrendingUp, Globe2 } from "lucide-react";
import { Reveal } from "./Reveal";

const ROADMAP = [
  {
    icon: Rocket,
    title: "Innovazione tecnologica",
    desc: "Adozione di nuove tecnologie per reti più intelligenti e sostenibili.",
    accentColor: "#0099F2",
  },
  {
    icon: Handshake,
    title: "Partnership strategiche",
    desc: "Alleanze con operatori, enti e fornitori per accelerare la trasformazione.",
    accentColor: "#FF6B35",
  },
  {
    icon: TrendingUp,
    title: "Scalabilità operativa",
    desc: "Processi e team strutturati per affrontare progetti complessi su scala.",
    accentColor: "#20D9A3",
  },
  {
    icon: Globe2,
    title: "Espansione territoriale",
    desc: "Presenza capillare sul territorio nazionale, con visione internazionale.",
    accentColor: "#0099F2",
  },
];

export function GrowthSection() {
  const [activeStep, setActiveStep] = useState(0);
  const current = ROADMAP[activeStep];

  const advance = () => {
    setActiveStep((prev) => (prev + 1) % ROADMAP.length);
  };

  return (
    /* Modificato: rimosso bg-gradient per ereditare lo sfondo globale scuro */
    <section className="growth-section relative overflow-hidden py-32 md:py-40 bg-transparent">
      {/* Rimosso il div con from-navy-deep per evitare stacchi di colore */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "var(--gradient-glow)" }} />

      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="absolute top-1/4 right-[8%] w-2 h-2 rounded-full bg-cyan-accent animate-float shadow-[0_0_15px_var(--cyan-accent)]" />
      <div className="absolute bottom-1/3 left-[12%] w-3 h-3 rounded-full bg-primary animate-float shadow-[0_0_20px_var(--primary)]" style={{ animationDelay: "2s" }} />

      <div className="container-x relative z-10">
        <Reveal delay={0}>
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-accent font-semibold">Futuro e crescita</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black font-display leading-[0.95] mb-6 bg-gradient-to-r from-cyan-accent via-primary to-accent bg-clip-text text-transparent">
              Motori di<br />crescita
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              La nostra visione si fonda sull'innovazione e sulla continua ricerca di nuove opportunità. Collaborare con noi significa affrontare sfide stimolanti e trasformarle in crescita condivisa.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex flex-col items-center gap-8">
            <button
              type="button"
              onClick={advance}
              aria-label={`Motore ${activeStep + 1}: ${current.title}. Clicca per il prossimo.`}
              className="growth-card group relative w-full max-w-xl aspect-square rounded-full p-8 md:p-12 transition-all duration-500 overflow-hidden cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              style={{ "--accent-color": current.accentColor } as CSSProperties}
            >
              {/* BACKGROUND LAYER */}
              <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-lg border border-white/10 rounded-full transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/30" />

              {/* RADIAL GLOW */}
              <div
                className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30 pointer-events-none rounded-full"
                style={{
                  background: `radial-gradient(circle at 30% 30%, var(--accent-color) 0%, transparent 60%)`,
                }}
              />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-6 px-4">
                <div className="flex items-start justify-between">
                  <span
                    key={activeStep}
                    className="text-[clamp(5rem,18vw,9rem)] font-black font-display text-white/25 leading-none animate-in fade-in-0 duration-300"
                  >
                    {activeStep + 1}
                  </span>
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:from-white/20 group-hover:to-white/10 group-hover:border-white/40">
                    <current.icon size={36} className="text-white" />
                  </div>
                </div>

                <div key={`content-${activeStep}`} className="space-y-4 animate-in fade-in-0 duration-300">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{current.title}</h3>
                  <p className="text-white/65 md:text-lg leading-relaxed">{current.desc}</p>
                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-white/40 group-hover:text-white/60 transition-colors">
                  Clicca per continuare
                </p>
              </div>
            </button>

            {/* STEP BUTTONS */}
            <div className="flex items-center gap-3">
              {ROADMAP.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  aria-label={`Vai al motore ${i + 1}`}
                  className={`w-10 h-10 rounded-xl border font-bold text-sm transition-all duration-300 ${
                    i === activeStep
                      ? "bg-white/15 border-white/40 text-white scale-110"
                      : "bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white/70"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}