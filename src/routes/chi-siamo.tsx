import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Lightbulb, 
  TrendingUp, 
  RefreshCw, 
  Users, 
  Share2, 
  Layers, 
  Target, 
  ArrowRight, 
  CheckCircle2,
  Cpu,
  Handshake,
  Scaling,
  MapPin,
  Sparkles
} from "lucide-react";
import logoPittogramma from "@/assets/fico-pittogramma.png";
import logoWordmark from "@/assets/fico-wordmark.png";
import { Reveal } from "@/components/site/Reveal";
import { HeroParticles, ProcessTimeline, ItalyMap } from "@/components/site/Interactive";
import { GrowthSection } from "@/components/site/GrowthSection";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "L'Azienda — FI.CO. SRL" },
      {
        name: "description",
        content: "Siamo costruiti per far crescere le idee. Competenze tecniche, organizzazione e visione per affrontare progetti in continua evoluzione.",
      },
      { property: "og:title", content: "L'Azienda — FI.CO. SRL" },
      {
        property: "og:description",
        content: "Siamo costruiti per far crescere le idee. Competenze tecniche e visione per progetti in continua evoluzione.",
      },
      { property: "og:url", content: "/chi-siamo" },
    ],
    links: [{ rel: "canonical", href: "/chi-siamo" }],
  }),
  component: ChiSiamo,
});

const TIMELINE = [
  {
    phase: "ORIGINE",
    title: "Le fondamenta",
    desc: "Progettazione e supporto tecnico nelle telecomunicazioni",
  },
  {
    phase: "ESPERIENZA",
    title: "Sul campo",
    desc: "Attività di manutenzione, consulenza e consolidamento delle competenze dirette.",
  },
  {
    phase: "ORGANIZZAZIONE",
    title: "Nuovi assetti",
    desc: "Modelli organizzativi che valorizzano autonomia e responsabilità distribuite: ogni competenza si esprime al meglio del proprio potenziale.",
  },
  {
    phase: "EVOLUZIONE",
    title: "Oltre il progetto",
    desc: "Cresciamo insieme ai progetti che accompagniamo.",
  },
];

function ChiSiamo() {
  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden selection:bg-[#facc15] selection:text-[#012b3a]">
      
      {/* HERO */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-20 overflow-hidden border-b border-[#facc15] bg-white">
        <HeroParticles />

        <div className="container-x relative z-10 text-left">
          <Reveal>
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#00779b] font-semibold">
              FI.CO. / AZIENDA
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-[var(--font-display)] font-extrabold leading-[1.05] tracking-tight max-w-5xl text-[#012b3a] pb-2">
             Siamo nati <br className="hidden md:block"/> per nutrire le idee
            </h1>
            <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#00779b] max-w-2xl leading-relaxed">
              Visione, competenze tecniche e organizzazione per sviluppare progetti in continua evoluzione.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHI SIAMO E TIMELINE */}
      <section
        className="py-12 md:py-16 relative z-20 border-b border-[#facc15] overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#facc15 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#00779b] font-semibold">
                IDENTITÀ
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] pb-2 mb-6 md:mb-8">
               <span className="text-[#0a5c75]"> Da una competenza <br/> a una struttura</span>
              </h2>
              <div className="space-y-4 md:space-y-5 text-[#00779b] text-base md:text-lg leading-relaxed">
                <p>
                  Fi.Co. nasce dall'iniziativa di giovani professionisti che mettono al servizio di enti ed imprese competenze specializzate, tecniche e progettuali.
                  Il percorso prende avvio nelle telecomunicazioni, attraverso la progettazione e la gestione di reti in fibra ottica, attività di manutenzione e consulenza.
                 Fi.Co. amplia la propria struttura e sperimenta modelli organizzativi originali per generare nuove attività.
                  <br />
                  Guardiamo oltre il singolo incarico: accompagniamo il processo di crescita dei progetti, dei clienti e delle persone.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="relative pl-2 md:pl-0">
            <div className="absolute left-[23px] md:left-[27px] top-2 bottom-2 w-0.5 bg-[#facc15]" />
            <div className="space-y-10 md:space-y-12">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.phase} delay={i * 100}>
                  <div className="relative pl-14 md:pl-20">
                    <div className="absolute left-0 top-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#013a52] border-2 border-[#facc15] flex items-center justify-center shadow-md z-10">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#facc15]" />
                    </div>
                    <span className="inline-block mb-1.5 md:mb-2 text-[#1da1db] text-xs font-bold uppercase tracking-widest">
                      {t.phase}
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#012b3a] mb-2">{t.title}</h3>
                    <p className="text-[#00779b] text-sm md:text-base leading-relaxed">{t.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* IDENTITÀ DEL BRAND */}
      <section className="py-12 md:py-16 bg-white relative border-b border-[#facc15] overflow-hidden">
        <div className="container-x">
          
          <Reveal>
            <div className="text-left max-w-3xl mb-12 md:mb-20">
              <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#00779b] font-semibold">
                FI.CO. / BRAND IDENTITY
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#012b3a] pb-2 mb-6 md:mb-8">
              Un nome,<br/> molte connessioni
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#00779b] leading-relaxed">
                Fi.Co. è una realtà la cui identità prospera intorno ad un concetto semplice: connettere. Il nome, il pittogramma e il linguaggio visivo nascono da punti, nodi e linee: elementi che testimoniano la relazione nata tra persone, competenze, aziende e opportunità.
                Il brand non rappresenta un singolo servizio. Rappresenta la capacità di creare connessioni tra mondi differenti.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16 md:mb-24">
            <Reveal>
              <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-white rounded-3xl border-2 border-[#facc15] shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#facc15]/25 blur-[80px] group-hover:bg-[#facc15]/40 transition-colors duration-1000" />
                <img src={logoPittogramma} alt="Pittogramma Fi.Co." className="w-40 sm:w-48 md:w-64 h-auto relative z-10 transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>

            <div className="space-y-8 md:space-y-12">
              <Reveal delay={100}>
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#012b3a] mb-3">
                    Tre punti, infinite connessioni
                  </h3>
                  <p className="text-[#00779b] text-sm md:text-base leading-relaxed">
                    Il pittogramma nasce dai tre punti presenti nel logotipo e dalla loro connessione attraverso linee curve. Il risultato è un segno espressivo e aperto, capace di assumere significati differenti a seconda del contesto.
                  </p>
                </div>
              </Reveal>
              
              <Reveal delay={200}>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0a5c75] mb-4 md:mb-6">
                    Connettere è il nostro modo di creare valore
                  </h3>
                  <div className="space-y-5 md:space-y-6">
                    <div className="pl-4 md:pl-6 border-l-2 border-[#facc15]">
                      <h4 className="text-[#012b3a] font-bold mb-1 text-base">Intermediazione</h4>
                      <p className="text-xs md:text-sm text-[#00779b]">Fi.Co. si colloca al centro della relazione tra partner, fornitori e clienti, interpreta le esigenze e coordina gli interlocutori.</p>
                    </div>
                    <div className="pl-4 md:pl-6 border-l-2 border-[#facc15]">
                      <h4 className="text-[#012b3a] font-bold mb-1 text-base">Rete</h4>
                      <p className="text-xs md:text-sm text-[#00779b]">I punti diventano nodi e le linee diventano connessioni: un richiamo alle telecomunicazioni che oggi si estende a persone, competenze, dati e sistemi.</p>
                    </div>
                    <div className="pl-4 md:pl-6 border-l-2 border-[#facc15]">
                      <h4 className="text-[#012b3a] font-bold mb-1 text-base">Aperture</h4>
                      <p className="text-xs md:text-sm text-[#00779b]">Le curve suggeriscono porte e possibilità. Ogni connessione può aprire un nuovo progetto, una nuova competenza o una nuova opportunità.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
            <Reveal delay={100}>
              <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl border border-[#facc15] shadow-md h-full">
                <div className="w-14 h-14 rounded-full bg-[#013a52] flex items-center justify-center text-[#facc15] mb-6">
                  <Layers size={26} />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#012b3a] mb-3 md:mb-4">Non un simbolo. Un sistema.</h3>
                <p className="text-[#00779b] text-sm md:text-base leading-relaxed">
                  Il pittogramma è generativo: i nodi possono cambiare posizione e creare nuove configurazioni senza perdere riconoscibilità. Lo stesso principio guida animazioni, transizioni e rappresentazioni dei processi.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl border border-[#facc15] shadow-md h-full">
                <div className="w-14 h-14 rounded-full bg-[#013a52] flex items-center justify-center text-[#facc15] mb-6">
                  <Sparkles size={26} />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#012b3a] mb-3 md:mb-4">Un linguaggio che si muove</h3>
                <p className="text-[#00779b] text-sm md:text-base leading-relaxed">
                  Il sistema visivo identifica aree e contenuti attraverso variazioni controllate di colore, intensità e pattern. Le differenze aiutano a orientarsi; il DNA cromatico e grafico resta unico.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative py-12 sm:py-16 md:py-24 px-6 md:px-16 rounded-3xl overflow-hidden border-2 border-[#facc15] bg-white text-center shadow-xl">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#facc15]/25 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#1da1db]/15 rounded-full blur-[80px]" />
              
              <h3 className="relative z-10 text-2xl sm:text-3xl md:text-5xl font-[var(--font-display)] font-extrabold text-[#1da1db] mb-6 md:mb-8 tracking-wide">
                INFINITE CONNESSIONI
              </h3>
              <p className="relative z-10 text-base sm:text-lg md:text-2xl text-[#012b3a] max-w-4xl mx-auto leading-relaxed font-medium">
                "Fi.Co. nasce per creare connessioni. Tra chi sviluppa una tecnologia e chi ne ha bisogno. Tra chi progetta e chi realizza. Tra competenze diverse. Tra un'esigenza e una soluzione. Tra il presente e le possibilità che ancora non abbiamo esplorato."
              </p>
              <img src={logoWordmark} alt="FI.CO." className="h-8 md:h-12 w-auto mx-auto mt-8 md:mt-12 relative z-10" />
            </div>
          </Reveal>

        </div>
      </section>

      {/* COSA CI DEFINISCE E ORGANIZZAZIONE */}
      <section className="py-12 md:py-16 relative border-b border-[#facc15] overflow-hidden bg-white">
        <div className="container-x">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#012b3a] pb-2 mb-6">
                <span className="text-[#0a5c75]">  Tecnica nel metodo. <br/> Trasversale nelle competenze.</span>
                </h2>
                <div className="space-y-4 text-[#00779b] text-base md:text-lg leading-relaxed">
                  <p>
                    Fi.Co. nasce da una cultura tecnica e mantiene nella progettazione il proprio punto di forza.
                    A questa base affianchiamo organizzazione, capacità di gestione, conoscenza dei processi e una visione orientata all'evoluzione.
                    Il risultato è una struttura capace di mettere in relazione professionalità differenti e affrontare progetti che richiedono più di una singola competenza.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-[#facc15] shadow-lg">
                <span className="text-xs uppercase tracking-[0.2em] text-[#00779b] font-bold block mb-4">
                  ORGANIZZAZIONE
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#012b3a] mb-4 md:mb-6">
                  Competenze diverse, un'unica organizzazione
                </h3>
                <p className="text-[#00779b] text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                  Fi.Co. è organizzata attraverso funzioni aziendali e competenze specialistiche che collaborano in modo trasversale. Le funzioni di supporto coordinano processi e risorse. Le aree operative mettono a disposizione competenze tecniche e digitali. Non una struttura rigida, ma un'organizzazione costruita attorno a responsabilità chiare.
                </p>
                
                <div className="space-y-5 md:space-y-6">
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-[#1da1db] uppercase tracking-wider mb-3">Funzioni Aziendali</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-[#1da1db]/10 border border-[#1da1db]/40 text-[#012b3a] text-xs md:text-sm font-semibold">Amministrazione</span>
                      <span className="px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-[#1da1db]/10 border border-[#1da1db]/40 text-[#012b3a] text-xs md:text-sm font-semibold">Facility</span>
                      <span className="px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-[#1da1db]/10 border border-[#1da1db]/40 text-[#012b3a] text-xs md:text-sm font-semibold">Business Development</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-[#0a5c75] uppercase tracking-wider mb-3">Aree Operative</h4>
                    <div className="flex flex-wrap gap-2">
                      <Link to="/servizi/fibra-mobile" className="px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-[#f5d000] text-[#012b3a] text-xs md:text-sm font-bold hover:bg-[#eab308] transition-all">Fibra & Mobile</Link>
                      <Link to="/servizi/it-software" className="px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-[#f5d000] text-[#012b3a] text-xs md:text-sm font-bold hover:bg-[#eab308] transition-all">IT, Networking & Software</Link>
                      <span className="px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-100 border border-gray-300 text-[#00779b] text-xs md:text-sm font-medium border-dashed cursor-not-allowed">Energia (in sviluppo)</span>
                    </div>
                  </div>
                  <div className="w-full h-px bg-[#facc15]" />
                  <div className="text-center">
                    <span className="inline-block px-5 py-2 rounded-full bg-[#013a52] text-[#facc15] text-xs md:text-sm font-bold shadow-sm">
                      Ricerca & Innovazione (Trasversale)
                    </span>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* IL NOSTRO METODO */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-white">
        <div className="container-x">
          <Reveal>
            <div className="text-left max-w-3xl mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#012b3a] pb-2 mb-4 md:mb-6">
                Ogni risultato <br/> nasce da un sistema
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#00779b] leading-relaxed">
                Un progetto efficace non dipende soltanto dalla competenza tecnica. Richiede persone, processi, coordinamento, controllo e capacità di adattarsi alle condizioni reali.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4 md:mb-8">
            {[
              { title: "Competenza", icon: Target, desc: "Conoscenze tecniche e specialistiche applicate a problemi reali." },
              { title: "Organizzazione", icon: Layers, desc: "Processi e responsabilità che trasformano le competenze in attività coordinate." },
              { title: "Collaborazione", icon: Share2, desc: "Connessione tra persone, clienti, partner, fornitori ed enti." }
            ].map((col, i) => (
              <Reveal key={col.title} delay={i * 100}>
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#facc15] text-center h-full shadow-md">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-[#013a52] flex items-center justify-center text-[#facc15] mb-5 sm:mb-6">
                    <col.icon size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#012b3a] mb-2 sm:mb-3">{col.title}</h3>
                  <p className="text-[#00779b] text-sm sm:text-base">{col.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <ProcessTimeline />
      </section>

      {/* VISIONE E MOTORI DI CRESCITA */}
      <section className="pt-12 md:pt-16 pb-0 bg-white border-t border-[#facc15] overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#00779b] font-semibold">
                VISION
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] pb-2 mb-6">
                Guardiamo oltre <br/>il progetto di oggi
              </h2>
              <div className="space-y-4 text-[#00779b] text-base md:text-lg leading-relaxed">
                <p>
                  La nostra visione si fonda sull'innovazione e sulla capacità di esplorare nuove opportunità.  
                  Investiamo in competenze, processi, tecnologie e partnership che possano ampliare i contesti nei quali mettere a valore il nostro know-how.
                  Crediamo nella crescita condivisa: ogni sfida affrontata insieme può diventare un risultato, e ogni risultato può aprire una nuova possibilità.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#012b3a] mb-8 md:mb-10 text-center">
              I nostri motori di crescita
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20">
              {[
                { icon: Cpu, title: "Innovazione Tecnologica", desc: "Adottiamo nuove tecnologie per rendere infrastrutture, processi e servizi più intelligenti, efficienti e sostenibili." },
                { icon: Handshake, title: "Partnership Strategiche", desc: "Costruiamo alleanze con operatori, enti e partner qualificati per ampliare competenze e capacità operativa." },
                { icon: Scaling, title: "Scalabilità Operativa", desc: "Processi, competenze e team strutturati per governare progetti complessi e operare su scala." },
                { icon: MapPin, title: "Espansione Territoriale", desc: "Consolidiamo la nostra presenza sul territorio attraverso competenze locali, relazioni e partnership." }
              ].map((m) => (
                <div key={m.title} className="bg-white p-6 rounded-2xl border border-[#facc15] shadow-md group">
                  <div className="w-12 h-12 rounded-full bg-[#013a52] flex items-center justify-center text-[#facc15] mb-4">
                    <m.icon size={24} />
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-[#012b3a] mb-2">{m.title}</h4>
                  <p className="text-xs sm:text-sm text-[#00779b] leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <GrowthSection />
      <ItalyMap />

      {/* VALORI */}
      <section className="py-12 md:py-16 relative border-b border-[#facc15] overflow-hidden bg-white">
        <div className="container-x">
          <Reveal>
            <div className="text-left max-w-3xl mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b3a] pb-2 mb-4">
                Quattro principi <br/>Un modo di lavorare
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "01 — Fiducia & Connessione",
                desc: "Costruiamo relazioni solide attraverso fiducia reciproca, ascolto e collaborazione.",
              },
              {
                icon: Lightbulb,
                title: "02 — Innovazione & Problem solving",
                desc: "Affrontiamo problemi e opportunità con una mentalità proattiva, cercando soluzioni nuove ma concretamente applicabili.",
              },
              {
                icon: TrendingUp,
                title: "03 — Crescita",
                desc: "La crescita dell'azienda passa dalla crescita delle persone. Investiamo nelle competenze e nel potenziale di ciascuno.",
              },
              {
                icon: RefreshCw,
                title: "04 — Adattabilità & Resilienza",
                desc: "Operiamo in mercati in continua evoluzione, sviluppando agilità e continuità anche di fronte a nuove condizioni.",
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-[#facc15] shadow-md h-full flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#013a52] flex items-center justify-center text-[#facc15] mb-5">
                    <p.icon size={26} />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#012b3a] mb-3 sm:mb-4">{p.title}</h3>
                  <p className="text-sm sm:text-base text-[#00779b] leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONE E QUALITÀ */}
      <section className="py-12 md:py-16 relative border-b border-[#facc15] bg-white overflow-hidden">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          <Reveal>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#012b3a] mb-6">
                Le competenze <br/> sono persone
              </h2>
              <p className="text-[#00779b] text-base md:text-lg leading-relaxed mb-8">
                Dietro ogni progetto ci sono esperienza, responsabilità e capacità di collaborare. Fi.Co. mette in relazione professionalità differenti e costruisce un ambiente nel quale le persone possano sviluppare le proprie competenze e contribuire alla crescita dell'organizzazione.
              </p>
              
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {["Technical Design", "Project Management", "Network Engineering", "Digital & Software", "IT & Networking", "Energy", "Administration", "Business Development"].map(skill => (
                  <span key={skill} className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#1da1db]/10 border border-[#1da1db]/40 text-[#012b3a] text-xs sm:text-sm font-semibold shadow-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-[#facc15] shadow-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#012b3a] mb-6">
                Crescere significa <br/> strutturarsi
              </h2>
              <p className="text-[#00779b] text-sm sm:text-base md:text-lg leading-relaxed mb-8">
                La crescita di Fi.Co. passa dalla capacità di rendere i propri processi sempre più solidi, leggibili e verificabili. Organizzazione, controllo, documentazione e miglioramento continuo sostengono una struttura capace di affrontare nuovi progetti senza perdere qualità e responsabilità.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {["Processi standardizzati", "Qualità del risultato", "Controllo sistematico", "Documentazione tracciabile", "Miglioramento continuo"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#1da1db] shrink-0" size={18} />
                    <span className="text-[#012b3a] text-sm sm:text-base font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* CHIUSURA */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white">
        <div className="container-x">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center bg-white p-6 sm:p-10 md:p-20 rounded-[30px] md:rounded-[40px] border-2 border-[#facc15] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#facc15]/20 rounded-full blur-[100px] pointer-events-none" />
              
              <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#012b3a] mb-6 md:mb-8 leading-tight">
                Trasformiamo gli obiettivi in risultati
              </h2>
              <p className="relative z-10 text-base sm:text-lg md:text-xl text-[#00779b] max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
                Esperienza, competenza e dedizione quotidiana guidano ogni nuovo progetto. Per noi il risultato non è soltanto ciò che viene progettato. È ciò che funziona, ciò che può essere verificato e ciò che riusciamo a costruire insieme.
              </p>
              
              <Link 
                to="/servizi" 
                className="relative z-10 inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 font-bold text-base sm:text-lg rounded-2xl bg-[#f5d000] text-[#012b3a] hover:bg-[#eab308] hover:scale-105 transition-all shadow-md w-full sm:w-auto"
              >
                Scopri il nostro business <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}