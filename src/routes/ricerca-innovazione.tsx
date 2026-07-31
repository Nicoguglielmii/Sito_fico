// Pagina: Ricerca e Innovazione
// Questo file definisce la route `/ricerca-innovazione` e il componente
// `RicercaInnovazione`. Contiene sezioni informative suddivise in:
//  - Hero/intro (visione e descrizione)
//  - Elenco di aree di ricerca/sviluppo (card)
//  - Box CTA che rimanda a `/contatti`.
// I commenti presenti spiegano scelte di markup, accessibilità e comportamenti
// senza modificare la logica esistente.

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Lightbulb, Cpu, Network, Rocket } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

// Definizione della route con metadata per SEO
export const Route = createFileRoute("/ricerca-innovazione")({
  head: () => ({
    meta: [
      { title: "Ricerca e Innovazione — FI.CO. SRL" },
      {
        name: "description",
        content:
          "Sviluppiamo soluzioni all'avanguardia per l'infrastruttura di rete, esplorando nuove tecnologie e metodologie.",
      },
    ],
  }),
  component: RicercaInnovazione,
});

function RicercaInnovazione() {
  return (
    <>
      {/* HERO: presentazione della pagina */}
      <section className="relative pt-36 pb-20 surface-navy overflow-hidden">
        {/* Sfondo decorativo tramite variabile CSS (non informativo per screen reader) */}
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: "var(--gradient-glow)" }}
        />
        <div className="container-x relative z-10">
          <Reveal>
            {/* Tagline/etichetta piccola */}
            <span className="text-xs uppercase tracking-[0.3em] text-[#38bdf8] font-semibold">
              Visione e Sviluppo
            </span>
            {/* Titolo principale: uso di gradient-clip per effetto visuale */}
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl bg-gradient-to-r from-[#38bdf8] to-[#facc15] bg-clip-text text-transparent">
              Ricerca e innovazione
            </h1>
            {/* Paragrafo introduttivo: massimo due righe preferibilmente per leggibilità */}
            <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
              Siamo costantemente aperti a nuove visioni e pronti a trasformare idee ambiziose in
              progetti concreti. Anticipiamo le esigenze del mercato integrando tecnologie di ultima
              generazione.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sezione: Aree di sviluppo / feature cards */}
      <section className="py-20 bg-transparent">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Le nostre aree di sviluppo
            </h2>
          </Reveal>

          {/* Grid responsiva: 2 colonne su md, 4 su lg */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Soluzioni Smart City",
                desc: "Integrazione di sensori e reti IoT per ottimizzare la gestione urbana, migliorando l'efficienza energetica e la sicurezza dei cittadini.",
              },
              {
                icon: Network,
                title: "Reti di nuova generazione",
                desc: "Studio e sperimentazione su architetture di rete avanzate per supportare volumi di traffico sempre maggiori con latenze minime.",
              },
              {
                icon: Cpu,
                title: "AI e sviluppo software",
                desc: "Utilizzo di sistemi intelligenti per la creazione di siti web.",
              },
              {
                icon: Rocket,
                title: "Materiali innovativi",
                desc: "Ricerca su nuovi cavi e tecniche di posa eco-sostenibili per ridurre l'impatto ambientale dei cantieri infrastrutturali.",
              },
            ].map((feature, i) => (
              <Reveal key={i} delay={i * 100}>
                {/* Card: attenzione allo stato hover e contrasto per accessibilità */}
                <div className="bg-[#0a2e4d] p-8 rounded-2xl border border-white/5 shadow-lg h-full hover:border-[#38bdf8]/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#002D4A] to-[#001E35] border border-[#38bdf8]/20 flex items-center justify-center mb-6">
                    {/* Icona visuale: `feature.icon` è un componente React (lucide-react) */}
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

      {/* CTA box: riutilizzato dalla pagina servizi, rimanda a contatti */}
      <section className="container-x py-24">
        <Reveal delay={100}>
          <div className="p-10 md:p-14 rounded-3xl bg-[#0a2e4d] border border-white/10 shadow-lg text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Hai un progetto in mente?</h3>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto">
              Costruiamo insieme la progettazione e la parte tecnica migliore.
            </p>
            {/* Link interno a `/contatti`: usa il router per navigazione SPA */}
            <Link to="/contatti" className="btn-hero mt-8">
              Parliamone <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
