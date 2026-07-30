import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Map, TrendingDown, FileCheck, Target, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/consulenza-imprese")({
  head: () => ({
    meta: [
      { title: "Consulenza Imprese — FI.CO. SRL" },
      { name: "description", content: "Consulenza strategica, progettazione GIS e studio di dimensionamento reti in fibra ottica per le imprese." },
    ],
  }),
  component: ConsulenzaImprese,
});

function ConsulenzaImprese() {
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
              Consulenza Imprese
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
              Affianchiamo la tua azienda nello sviluppo di infrastrutture di telecomunicazione avanzate. Dallo studio di fattibilità alla progettazione esecutiva, ti garantiamo un supporto tecnico end-to-end per reti veloci, sicure e scalabili.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Dettagli e Vantaggi */}
      <section className="py-20 bg-transparent">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Come trasformiamo la tua infrastruttura
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Analisi di fattibilità",
                desc: "Valutiamo le condizioni preliminari sul campo, studiando il dimensionamento della rete ideale per le tue esigenze aziendali."
              },
              {
                icon: Map,
                title: "Progettazione GIS",
                desc: "Creiamo mappature precise e progettazioni logico-fisiche avanzate per ottimizzare i percorsi della fibra ottica."
              },
              {
                icon: TrendingDown,
                title: "Ottimizzazione Costi",
                desc: "Analizziamo tempi e risorse per garantirti la migliore scelta degli apparati trasmissivi, abbattendo gli sprechi."
              },
              {
                icon: FileCheck,
                title: "As-Built e Documentazione",
                desc: "Ci occupiamo dei rilievi planimetrici finali e del caricamento a sistema della documentazione (As-Built)."
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
                  Il nostro metodo operativo
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Non ci limitiamo alla teoria. Il nostro team scende in campo con sopralluoghi mirati e gestisce l'acquisizione di infrastrutture verso altri operatori, garantendo un'integrazione fluida e senza imprevisti.
                </p>
                <ul className="space-y-4">
                  {[
                    "Gestione completa ordini di collegamento",
                    "Rilievi planimetrici ad alta precisione",
                    "Aggiornamento continuo banche dati cartografiche"
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
                {/* Immagine segnaposto: puoi sostituirla con una tua immagine reale */}
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
                  alt="Ingegneri al lavoro su fibra ottica" 
                  className="w-full h-[400px] object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Call to action finale */}
      <section className="container-x py-24">
        <Reveal>
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#002D4A] to-[#011C27] border border-[#38bdf8]/20 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#facc15] opacity-5 blur-[100px] rounded-full pointer-events-none" />
            <h3 className="text-3xl md:text-4xl font-bold text-white relative z-10">
              Pronto a potenziare la tua rete?
            </h3>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto relative z-10">
              Contatta i nostri esperti per una consulenza preliminare e scopri come possiamo ottimizzare la tua infrastruttura aziendale.
            </p>
            <Link to="/contatti" className="btn-hero mt-8 relative z-10 inline-flex">
              Richiedi una consulenza <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}