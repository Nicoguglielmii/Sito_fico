import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cable, Router, HardHat, Zap, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/progettazione-fibra")({
  head: () => ({
    meta: [
      { title: "Progettazione e Implementazione Fibra — FI.CO. SRL" },
      { name: "description", content: "Dalla progettazione alla posa in opera: soluzioni complete per infrastrutture in fibra ottica." },
    ],
  }),
  component: ProgettazioneFibra,
});

function ProgettazioneFibra() {
  return (
    <>
      {/* Hero della pagina */}
      <section className="relative pt-36 pb-20 surface-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: "var(--gradient-glow)" }}
        />
        <div className="container-x relative z-10">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-[#38bdf8] font-semibold">
              I nostri servizi
            </span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent">
              Progettazione e <br />
              Implementazione Fibra
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
              Realizziamo le arterie del futuro digitale. Curiamo ogni aspetto del processo: dai sopralluoghi iniziali fino all'accensione della rete, assicurando standard qualitativi eccellenti e tempistiche certe.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Dettagli e Vantaggi */}
      <section className="py-20 bg-transparent">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Le fasi della nostra implementazione
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: HardHat,
                title: "Sopralluoghi e Rilievi",
                desc: "I nostri tecnici verificano sul campo la fattibilità, individuando i percorsi ottimali e le infrastrutture esistenti sfruttabili."
              },
              {
                icon: Cable,
                title: "Ingegneria di Rete",
                desc: "Sviluppiamo progetti esecutivi dettagliati, curando il dimensionamento ottico, la topologia della rete e i percorsi di scavo."
              },
              {
                icon: Router,
                title: "Posa e Giunzione",
                desc: "Gestiamo la posa dei cavi, la soffiatura e le giunzioni ottiche con strumentazione all'avanguardia per garantire attenuazioni minime."
              },
              {
                icon: Zap,
                title: "Collaudo e Attivazione",
                desc: "Effettuiamo test riflettometrici (OTDR) e certificazioni finali prima della messa in esercizio della rete."
              }
            ].map((feature, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-[#0a2e4d] p-8 rounded-2xl border border-white/5 shadow-lg h-full hover:border-[#38bdf8]/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#002D4A] to-[#001E35] border border-[#38bdf8]/20 flex items-center justify-center mb-6">
                    <feature.icon className="text-[#facc15]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sezione di approfondimento tecnico */}
      <section className="py-20 surface-navy border-t border-white/5">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Precisione millimetrica, su vasta scala.
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Sappiamo che un'infrastruttura di successo si basa sull'affidabilità. Per questo motivo adottiamo materiali di primissima scelta e metodologie di lavoro certificate, minimizzando l'impatto ambientale e garantendo reti "future-proof" pronte per le tecnologie di domani.
                </p>
                <ul className="space-y-4">
                  {[
                    "Utilizzo di minitrincee a basso impatto ambientale",
                    "Certificazione e documentazione OTDR completa",
                    "Coordinamento diretto con Enti e amministrazioni"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200">
                      <CheckCircle2 className="text-[#38bdf8] shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Segnaposto immagine, da sostituire con foto reale dei vostri cantieri */}
                <div className="w-full h-[400px] bg-gradient-to-br from-[#002D4A] to-[#011C27] flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[#001E35] opacity-50"></div>
                    <Cable size={80} className="text-[#38bdf8] opacity-50" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Call to action finale */}
      <section className="container-x py-24">
        <Reveal>
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#002D4A] to-[#011C27] border border-[#38bdf8]/20 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#facc15] opacity-5 blur-[100px] rounded-full pointer-events-none" />
            <h3 className="text-3xl md:text-4xl font-bold text-white relative z-10">
              Hai un'infrastruttura da sviluppare?
            </h3>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto relative z-10">
              Siamo pronti a mettere in campo le nostre competenze per connettere il tuo progetto al resto del mondo.
            </p>
            <Link to="/contatti" className="btn-hero mt-8 relative z-10 inline-flex">
              Parla con il nostro team <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}