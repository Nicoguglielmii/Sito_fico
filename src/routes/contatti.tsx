import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — FI.CO. SRL" },
      { name: "description", content: "Contatta FI.CO. SRL ad Andria (BT) per una consulenza personalizzata." },
      { property: "og:title", content: "Contatti — FI.CO. SRL" },
      { property: "og:description", content: "Scrivici, chiamaci o vieni a trovarci ad Andria." },
      { property: "og:url", content: "/contatti" },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
  component: Contatti,
});

function Contatti() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative pt-36 pb-20 surface-navy overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-glow)" }} />
        <div className="container-x relative">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Contatti</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl">
              Parliamo del tuo <span className="text-gradient">prossimo progetto.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl">
              Compila il form, scrivici via email o chiamaci.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* INFO */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-2xl font-bold">FI.CO. SRL</h3>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex gap-4"><MapPin className="text-primary flex-shrink-0" size={20} /><span>Corso Cavour 9, Piano 2<br />76123 Andria (BT) — Italia</span></li>
                  <li className="flex gap-4"><Phone className="text-primary flex-shrink-0" size={20} /><a href="tel:+393757932669" className="hover:text-primary">+39 375 793 2669</a></li>
                  <li className="flex gap-4"><Mail className="text-primary flex-shrink-0 mt-0.5" size={20} /><div className="space-y-1"><a href="mailto:amministrazione@ficohub.it" className="block hover:text-primary">amministrazione@ficohub.it <span className="text-muted-foreground">(Amministrazione)</span></a><a href="mailto:service@ficohub.it" className="block hover:text-primary">service@ficohub.it <span className="text-muted-foreground">(Operativa)</span></a></div></li>
                  <li className="flex gap-4"><Send className="text-primary flex-shrink-0" size={20} /><a href="mailto:fi.co.srl@pec.it" className="hover:text-primary">PEC: fi.co.srl@pec.it</a></li>
                  <li className="flex gap-4"><Building2 className="text-primary flex-shrink-0 mt-0.5" size={20} /><div className="space-y-1 text-muted-foreground"><span className="block">P.IVA 08964920725</span><span className="block">Cod. SDI: QULXG4S</span></div></li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-2xl overflow-hidden border border-border aspect-square">
                <iframe
                  title="Mappa FI.CO. SRL"
                  src="https://www.google.com/maps?q=Corso+Cavour+9,+Andria+BT,+Italy&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* FORM */}
          <Reveal delay={200} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="p-8 md:p-10 rounded-2xl bg-card border border-border space-y-5"
            >
              <div>
                <h2 className="text-3xl font-bold">Richiedi una consulenza</h2>
                <p className="mt-2 text-muted-foreground">Raccontaci il tuo progetto: ti ricontatteremo per un confronto tecnico.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nome e Cognome" name="name" required />
                <Field label="Azienda" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Telefono" name="phone" type="tel" />
              </div>
              <Field label="Oggetto" name="subject" />
              <div>
                <label className="block text-sm font-semibold mb-2">Messaggio *</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" placeholder="Descrivi il tuo progetto o la tua necessità..." />
              </div>
              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input type="checkbox" required className="mt-1 accent-[var(--primary)]" />
                <span>Accetto il trattamento dei dati personali secondo la Privacy Policy.</span>
              </label>
              <button type="submit" className="btn-hero w-full justify-center">
                {sent ? (<><CheckCircle2 size={18} /> Messaggio inviato</>) : (<>Invia messaggio <Send size={18} /></>)}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold mb-2">{label}{required && " *"}</label>
      <input id={name} name={name} type={type} required={required} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" />
    </div>
  );
}