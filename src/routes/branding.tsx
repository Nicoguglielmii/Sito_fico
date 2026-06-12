import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Tilt } from "@/components/site/Reveal";
import { HeroParticles } from "@/components/site/Interactive";
import { ArrowRight, Shapes } from "lucide-react";
import brandHero from "@/assets/hero-fiber.jpg";
import logoMain from "@/assets/logo-scritto.jpg";
import logoPittogramma from "@/assets/PITTOGRAMMA.jpg";
import logoVariations from "@/assets/PITTOGRAMMA.jpg";

export const Route = createFileRoute("/branding")({
  head: () => ({
    meta: [
      { title: "Branding & Logo — FI.CO. SRL" },
      { name: "description", content: "Identità visiva, logo, filosofia e sistema grafico di FI.CO. SRL." },
    ],
  }),
  component: BrandingPage,
});

function BrandingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80svh] flex items-center overflow-hidden surface-navy">
        <div className="absolute inset-0">
          <img src={brandHero} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#003B5C]/80 via-[#003B5C]/50 to-[#003B5C]" />
        </div>

        <HeroParticles />

        <div className="container-x relative z-10 pt-32 pb-20">
          <Reveal>
            <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight max-w-5xl">
              La nostra identità,<br />
              <span className="text-gradient">il nostro segno.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              Il logo FI.CO. nasce da un sistema di connessioni, nodi e relazioni.  
              È il simbolo del nostro ruolo: unire, coordinare, creare valore.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEZIONE: IL LOGO */}
      <section className="container-x py-24 md:py-32">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Identità Visiva</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Il logo <span className="text-gradient">FI.CO.</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-center">
          <Reveal>
            <img src={logoMain} alt="Logo FI.CO." className="w-full rounded-xl shadow-lg" />
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Il logotipo nasce dalla fusione tra tipografia, nodi e connessioni.  
                Ogni elemento è stato progettato per comunicare affidabilità, dinamismo e relazione.
              </p>
              <p>
                Le curve richiamano la fibra ottica, mentre i punti rappresentano gli attori della rete:  
                fornitori, FI.CO., clienti.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEZIONE: IL PITTOGRAMMA */}
      <section className="bg-secondary py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Pittogramma</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Fidelino</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Il simbolo generativo che rappresenta connessione, fiducia e dinamismo.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <img src={logoPittogramma} alt="Pittogramma FI.CO." className="mx-auto w-full max-w-3xl rounded-xl shadow-xl" />
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-10 max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed">
              Il pittogramma nasce isolando i tre punti del logotipo e collegandoli con linee curve.  
              È un sistema aperto, flessibile, capace di adattarsi a contesti diversi e di rappresentare  
              la nostra missione: creare connessioni.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEZIONE: SISTEMA GENERATIVO */}
      <section className="container-x py-24 md:py-32">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Sistema Grafico</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Un’identità <span className="text-gradient">generativa</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-center">
          <Reveal>
            <img src={logoVariations} alt="Variazioni Logo FI.CO." className="w-full rounded-xl shadow-lg" />
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Il sistema visivo permette di spostare i nodi, creare nuove connessioni e generare  
                varianti coerenti per ogni area aziendale: Informatica, Commerciale, Consulting.
              </p>
              <p>
                Una palette colori dedicata permette di distinguere i settori mantenendo  
                un’identità unitaria e riconoscibile.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

    {/* CTA FINALE */}
<section className="container-x pt-24 pb-24">
  <Reveal>
    <div className="relative overflow-hidden rounded-3xl surface-navy p-12 md:p-20 text-center">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-glow)" }} />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />

      <div className="relative">
        <Shapes className="mx-auto text-accent" size={40} />
        <h2 className="mt-6 text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
          Un’identità che parla di <span className="text-gradient">connessioni.</span>
        </h2>
        <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
          Vuoi approfondire il nostro processo creativo o sviluppare un’identità per il tuo progetto?
        </p>
        <a href="/contatti" className="btn-hero mt-10 inline-flex items-center gap-2">
          Contattaci <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </Reveal>
</section>
    </>
  );
}