import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, ClipboardCheck, PencilRuler, KanbanSquare, MapPinned, Rocket, TrendingUp, Handshake, Globe2, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi siamo — FI.CO. SRL" },
      { name: "description", content: "La storia, la mission e l'approccio professionale di FI.CO. SRL." },
      { property: "og:title", content: "Chi siamo — FI.CO. SRL" },
      { property: "og:description", content: "Giovani professionisti delle telecomunicazioni con eccellenza tecnica." },
      { property: "og:url", content: "/chi-siamo" },
    ],
    links: [{ rel: "canonical", href: "/chi-siamo" }],
  }),
  component: ChiSiamo,
});

const TIMELINE = [
  { year: "Fondazione", title: "L'inizio del progetto", desc: "Un team di giovani professionisti delle telecomunicazioni dà vita a FI.CO. con una visione chiara." },
  { year: "Primi progetti", title: "Sul campo", desc: "I primi cantieri di fibra ottica e le prime collaborazioni con enti pubblici e operatori." },
  { year: "Nuove opportunità", title: "Verso il futuro", desc: "Innovazione continua, partnership strategiche e nuove sfide su scala nazionale." },
];

const TEAM = [
  { name: "Stefano Confalone", photo: "https://media.licdn.com/dms/image/v2/D4E03AQE7roow2jx2MA/profile-displayphoto-scale_400_400/B4EZtKz4AdJQAk-/0/1766486672300?e=1782345600&v=beta&t=rx71OC-n_2gM5o-qielzdEEcSSxAj-_JmeWRUc3MaA0", linkedin: "https://www.linkedin.com/in/stefano-confalone/" },
  { name: "Domenico Lotito", photo: "https://media.licdn.com/dms/image/v2/D4E03AQEJbvMki0M64g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1666698320194?e=1782345600&v=beta&t=-3p8JocevLO8uuT936jaXuD2fxLaY8D8f3m7wU7M92g", linkedin: "https://www.linkedin.com/in/domenico-lotito-329860254/" },
  { name: "Antonella Lamorte", photo: "https://i.pravatar.cc/400?img=15", linkedin: "https://www.linkedin.com/in/antonella-lamorte-011b733a4/" },
  { name: "Emanuele Santomauro", photo: "https://media.licdn.com/dms/image/v2/D4D03AQEi6K_s7_juXQ/profile-displayphoto-scale_400_400/B4DZxWsC8bJcAg-/0/1770980915881?e=1782345600&v=beta&t=fmJnTAFnrFhJwCsegEwofJDSo7e-UwwAOoOPUvZjH80", linkedin: "https://www.linkedin.com/in/emanuele-santomauro-239b1439b/" },
  { name: "Francesco Porro", photo: "https://i.pravatar.cc/400?img=33", linkedin: "https://www.linkedin.com/in/francesco-porro-6872b7355/" },
  { name: "Riccardo Cannone", photo: "https://i.pravatar.cc/400?img=20", linkedin: "https://www.linkedin.com/" },
  { name: "Giorgio Leo", photo: "https://media.licdn.com/dms/image/v2/D5603AQFuxcoIJ3KriA/profile-displayphoto-shrink_400_400/B56ZTcsc8gHEAg-/0/1738869429021?e=1782345600&v=beta&t=dKc7iZvGtSNwrrzQeWlwuoOgU9fkJTYktun3LIWtbBo", linkedin: "https://www.linkedin.com/in/giorgio-leo-2a6215340/" },
  { name: "Paolo Pomarico", photo: "https://i.pravatar.cc/400?img=16", linkedin: "https://www.linkedin.com/" },
];

function ChiSiamo() {
  return (
    <>
      <section className="relative pt-36 pb-20 surface-navy overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-glow)" }} />
        <div className="container-x relative">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Chi siamo</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl">
              Una storia di <span className="text-gradient">competenza e visione.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl">
              FI.CO. SRL nasce dall'iniziativa di giovani professionisti specializzati nel settore delle telecomunicazioni, uniti dalla volontà di offrire le proprie competenze nel settore delle telecomunicazioni a servizio di enti pubblici e operatori privati.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img src={aboutImg} alt="Il team FI.CO." loading="lazy" width={1600} height={1000} className="rounded-2xl shadow-xl w-full" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent -z-10 blur-2xl opacity-60" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-10">
              {[
                { icon: ClipboardCheck, title: "Fattibilità", text: "Analisi tecnica ed economica preliminare per valutare vincoli, costi, tempi di realizzazione e sostenibilità dell'intervento." },
                { icon: PencilRuler, title: "Design", text: "Progettazione esecutiva di reti e infrastrutture con attenzione a affidabilità, scalabilità e conformità alle normative vigenti." },
                { icon: KanbanSquare, title: "Management", text: "Coordinamento completo delle attività, monitoraggio avanzamento lavori, gestione documentale e interfaccia costante con clienti ed enti." },
                { icon: MapPinned, title: "Survey", text: "Rilievi sul campo, raccolta dati e verifiche tecniche a supporto della progettazione di reti in fibra ottica e infrastrutture TLC." },
              ].map((b) => (
                <div key={b.title} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 grid place-items-center text-primary"><b.icon size={22} /></div>
                  <div>
                    <h3 className="text-xl font-bold">{b.title}</h3>
                    <p className="mt-1 text-muted-foreground leading-relaxed">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-secondary py-24">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Il nostro percorso</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Timeline</h2>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            <div className="space-y-12">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 120}>
                  <div className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">{t.year}</span>
                      <h3 className="mt-3 text-2xl font-bold">{t.title}</h3>
                      <p className="mt-2 text-muted-foreground">{t.desc}</p>
                    </div>
                    <div className="hidden md:block" />
                    <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-secondary" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="container-x py-24">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Le persone</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">I membri del team</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((person, i) => (
            <Reveal key={person.name} delay={i * 80}>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Profilo LinkedIn di ${person.name}`}
                className="team-card group relative block overflow-hidden rounded-2xl border border-border bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={person.photo}
                    alt={person.name}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100" />
                  <span className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-primary opacity-0 shadow-md transition-opacity duration-200 ease-out group-hover:opacity-100">
                    <Linkedin size={16} />
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold leading-tight transition-colors duration-200 group-hover:text-primary">{person.name}</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100">
                    <Linkedin size={14} /> Vedi profilo
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}