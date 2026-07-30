// Pagina Contatti
// Questo file espone la route `/contatti` per il router e il componente
// `Contatti` che mostra le informazioni aziendali, una mappa incorporata
// e un form di contatto. I commenti sono informativi e non alterano la
// logica del codice: non vengono modificati handlers, nomi o comportamenti.

import { createFileRoute } from "@tanstack/react-router"; // crea route basate su file
import { useState } from "react"; // hook React per stato locale
// Icone utilizzate nella UI per indicare tipo di contatto
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal"; // componente per animazioni/ritardi visivi

// Definizione della route per il router (tanstack/react-router).
// `head` contiene i metadata utili per SEO e Open Graph.
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
  // Stato locale: `sent` indica che il form è stato inviato.
  // Notare: l'invio attualmente è solo UI (setSent(true)), non è presente
  // una chiamata a un backend in questo file.
  const [sent, setSent] = useState(false);
  return (
    <>
      {/* Sezione HERO: titolo e breve descrizione della pagina */}
      <section className="relative pt-36 pb-20 surface-navy overflow-hidden">
        {/* Sfondo decorativo tramite variabile CSS --gradient-glow */}
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-glow)" }} />
        <div className="container-x relative">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Contatti</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl text-gradient">
              Parliamo del tuo prossimo progetto.
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl">
              Compila il form, scrivici via email o chiamaci.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sezione principale: colonne info + form */}
      <section className="container-x py-24">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* COLONNA INFORMAZIONI AZIENDALI */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              {/* Card informativa: colori scuri per il tema */}
              <div className="p-8 rounded-2xl bg-[#0a2e4d] border border-white/10 shadow-lg text-white">
                <h3 className="text-2xl font-bold text-white">FI.CO. SRL</h3>
                <ul className="mt-6 space-y-5 text-sm text-slate-300">
                  {/* Indirizzo: MapPin icona + link a Google Maps */}
                  <li className="flex gap-4">
                    <MapPin className="text-primary flex-shrink-0" size={20} />
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Corso+Cavour+9,+Andria+BT" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors block"
                    >
                      Corso Cavour 9, Piano 2<br />76123 Andria (BT) — Italia
                    </a>
                  </li>
                  {/* Telefono con link click-to-call */}
                  <li className="flex gap-4"><Phone className="text-primary flex-shrink-0" size={20} /><a href="tel:+393757932669" className="hover:text-primary text-white transition-colors">+39 375 793 2669</a></li>
                  {/* Email: due indirizzi distinti per reparto */}
                  <li className="flex gap-4"><Mail className="text-primary flex-shrink-0 mt-0.5" size={20} /><div className="space-y-1"><a href="mailto:amministrazione@ficohub.it" className="block text-white hover:text-primary transition-colors">amministrazione@ficohub.it <span className="text-slate-400">(Amministrazione)</span></a><a href="mailto:service@ficohub.it" className="block text-white hover:text-primary transition-colors">service@ficohub.it <span className="text-slate-400">(Operativa)</span></a></div></li>
                  {/* PEC: posta elettronica certificata mostrata chiaramente */}
                  <li className="flex gap-4"><Send className="text-primary flex-shrink-0" size={20} /><a href="mailto:fi.co.srl@pec.it" className="hover:text-primary text-white transition-colors">PEC: fi.co.srl@pec.it</a></li>
                  {/* Informazioni legali: Partita IVA e Codice SDI */}
                  <li className="flex gap-4"><Building2 className="text-primary flex-shrink-0 mt-0.5" size={20} /><div className="space-y-1 text-slate-400"><span className="block">P.IVA 08964920725</span><span className="block">Cod. SDI: QULXG4S</span></div></li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-square shadow-lg">
                {/* Iframe mappa: caricato in modalità lazy per performance */}
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

          {/* COLONNA FORM: form di richiesta consulenza */}
          <Reveal delay={200} className="lg:col-span-3">
            {/* Card contenente il form: notare che l'invio è gestito in locale */}
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="p-8 md:p-10 rounded-2xl bg-[#0a2e4d] border border-white/10 shadow-lg space-y-5 text-white"
            >
              <div>
                <h2 className="text-3xl font-bold text-white">Richiedi una consulenza</h2>
                <p className="mt-2 text-slate-300">Raccontaci il tuo progetto: ti ricontatteremo per un confronto tecnico.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Campi riutilizzabili tramite componente Field */}
                <Field label="Nome e Cognome" name="name" required />
                <Field label="Azienda" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Telefono" name="phone" type="tel" />
              </div>
              <Field label="Oggetto" name="subject" />
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">Messaggio *</label>
                {/* Textarea con stile scuro per adattarsi al tema */}
                <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-[#031f38] text-white border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition placeholder:text-slate-400" placeholder="Descrivi il tuo progetto o la tua necessità..." />
              </div>
              {/* Checkbox obbligatoria per il consenso al trattamento dati */}
              <label className="flex items-start gap-3 text-sm text-slate-300">
                <input type="checkbox" required className="mt-1 accent-[var(--primary)]" />
                <span>Accetto il trattamento dei dati personali secondo la Privacy Policy.</span>
              </label>
              {/* Bottone di invio: indica stato inviato quando `sent` è true */}
              <button type="submit" className="btn-hero w-full justify-center mt-2">
                {sent ? (<><CheckCircle2 size={18} /> Messaggio inviato</>) : (<>Invia messaggio <Send size={18} /></>)}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

// Aggiornato anche il componente Field per i colori scuri
// Componente `Field` riutilizzabile per campi di input semplici.
// Manteniamo il markup minimo: label associata tramite `htmlFor` e input con gli
// stessi `id`/`name` per garantire accessibilità e integrazione con form tradizionali.
function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold mb-2 text-white">{label}{required && " *"}</label>
      <input id={name} name={name} type={type} required={required} className="w-full px-4 py-3 rounded-xl bg-[#031f38] text-white border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" />
    </div>
  );
}