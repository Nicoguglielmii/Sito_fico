import { useState, type CSSProperties } from "react";
import { Rocket, Handshake, TrendingUp, Globe2 } from "lucide-react";
import { Reveal } from "./Reveal";

const ROADMAP = [
  {
    icon: Rocket,
    title: "Innovazione tecnologica",
    desc: "Adozione di nuove tecnologie per reti più intelligenti e sostenibili.",
    accentColor: "#1da1db",
  },
  {
    icon: Handshake,
    title: "Partnership strategiche",
    desc: "Alleanze con operatori, enti e fornitori per accelerare la trasformazione.",
    accentColor: "#facc15",
  },
  {
    icon: TrendingUp,
    title: "Scalabilità operativa",
    desc: "Processi e team strutturati per affrontare progetti complessi su scala.",
    accentColor: "#00779b",
  },
  {
    icon: Globe2,
    title: "Espansione territoriale",
    desc: "Presenza capillare sul territorio nazionale, con visione internazionale.",
    accentColor: "#1da1db",
  },
];

export function GrowthSection() {
  const [activeStep, setActiveStep] = useState(0);
  const current = ROADMAP[activeStep];

  const advance = () => {
    setActiveStep((prev) => (prev + 1) % ROADMAP.length);
  };

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32 bg-white border-y border-[#facc15]"
      style={{
        backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#1da1db]/10 blur-3xl animate-pulse-glow pointer-events-none" />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#facc15]/20 blur-3xl animate-pulse-glow pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="absolute top-1/4 right-[8%] w-2.5 h-2.5 rounded-full bg-[#1da1db] animate-float shadow-[0_0_12px_#1da1db]" />
      <div
        className="absolute bottom-1/3 left-[12%] w-3 h-3 rounded-full bg-[#facc15] animate-float shadow-[0_0_15px_#facc15]"
        style={{ animationDelay: "2s" }}
      />

      <div className="container-x relative z-10">
        <Reveal delay={0}>
          <div className="max-w-3xl mb-16 md:mb-20 text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#00779b] font-bold">
                FUTURO E CRESCITA
              </span>
            </div>
            
            <h2 className="font-[var(--font-display)] text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 text-[#012b3a] pb-2">
              Motori di
              <br />
              <span className="text-[#1da1db]">crescita</span>
            </h2>

            <p className="text-lg md:text-xl text-[#00779b] leading-relaxed max-w-2xl">
              La nostra visione si fonda sull'innovazione e sulla continua ricerca di nuove
              opportunità. Collaborare con noi significa affrontare sfide stimolanti e trasformarle
              in crescita condivisa.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex flex-col items-center gap-8">
            <button
              type="button"
              onClick={advance}
              aria-label={`Motore ${activeStep + 1}: ${current.title}. Clicca per il prossimo.`}
              className="group relative w-full max-w-xl aspect-square rounded-full p-8 md:p-12 transition-all duration-500 overflow-hidden cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1da1db]"
              style={{ "--accent-color": current.accentColor } as CSSProperties}
            >
              <div className="absolute inset-0 bg-white/95 backdrop-blur-lg border-2 border-[#facc15] rounded-full transition-all duration-500 group-hover:border-[#1da1db] shadow-xl" />

              <div
                className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-35 pointer-events-none rounded-full"
                style={{
                  background: `radial-gradient(circle at 30% 30%, var(--accent-color) 0%, transparent 65%)`,
                }}
              />

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-6 px-4">
                <div className="flex items-center justify-center gap-6">
                  <span
                    key={activeStep}
                    className="text-[clamp(4.5rem,16vw,8rem)] font-black font-[var(--font-display)] text-[#1da1db]/20 leading-none animate-in fade-in-0 duration-300"
                  >
                    {activeStep + 1}
                  </span>
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#013a52] border-2 border-[#facc15] flex items-center justify-center transition-all duration-500 group-hover:scale-105 shadow-md">
                    <current.icon size={34} className="text-[#facc15] transition-colors" />
                  </div>
                </div>

                <div
                  key={`content-${activeStep}`}
                  className="space-y-4 animate-in fade-in-0 duration-300"
                >
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#012b3a]">{current.title}</h3>
                  <p className="text-[#00779b] md:text-lg leading-relaxed">{current.desc}</p>
                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-[#1da1db] font-bold group-hover:text-[#012b3a] transition-colors">
                  Clicca per continuare
                </p>
              </div>
            </button>

            <div className="flex items-center gap-3">
              {ROADMAP.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  aria-label={`Vai al motore ${i + 1}`}
                  className={`w-10 h-10 rounded-xl border font-bold text-sm transition-all duration-300 ${
                    i === activeStep
                      ? "bg-[#f5d000] border-[#facc15] text-[#012b3a] scale-110 shadow-md"
                      : "bg-white border-[#00779b]/30 text-[#00779b] hover:border-[#1da1db] hover:text-[#012b3a]"
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