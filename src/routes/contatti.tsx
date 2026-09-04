import { createFileRoute } from '@tanstack/react-router';
import { Mail, Phone, MapPin, Send, FileText, Loader2, CheckCircle2 } from 'lucide-react';
import { HeroParticles } from "@/components/site/Interactive";
import { useState } from 'react';

export const Route = createFileRoute('/contatti')({
  component: ContattiPage,
});

function ContattiPage() {
  // Stato centralizzato per tutti i campi controllati del form.
  // Includere anche il consenso privacy nello stesso oggetto mantiene allineati
  // i valori visualizzati dagli input e i dati disponibili durante l'invio.
  const [formData, setFormData] = useState({
    nome: "",
    azienda: "",
    email: "",
    telefono: "",
    oggetto: "",
    messaggio: "",
    privacy: false
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // L'invio usa l'endpoint AJAX di FormSubmit per evitare un cambio pagina.
      // Il payload traduce i nomi interni dei campi in etichette leggibili nella
      // richiesta ricevuta, applicando valori di fallback per i campi facoltativi.
      const response = await fetch("https://formsubmit.co/ajax/service@ficohub.it", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          Nome: formData.nome,
          Azienda: formData.azienda || "Non specificata",
          Email: formData.email,
          Telefono: formData.telefono || "Non specificato",
          Oggetto: formData.oggetto || "Richiesta da sito web",
          Messaggio: formData.messaggio,
          _subject: `Nuova richiesta da: ${formData.nome}`,
          // Il template tabellare rende i dati piu facili da consultare nella mail ricevuta.
          _template: "table"
        })
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    /* Sfondo unico e continuo: mantiene coerenti hero, informazioni, mappa e form. */
    <div className="bg-[#011C27] w-full min-h-screen overflow-x-hidden pb-12">
      
      {/*
        HERO: apre la pagina con un invito diretto al contatto e offre subito
        le tre modalita principali: form, email e telefono.
      */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* L'animazione resta decorativa e viene mantenuta dietro al testo del titolo. */}
        <HeroParticles />
        
        <div className="container-x relative z-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">
            Contatti
          </span>
          
          <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight md:leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] pb-2 md:pb-4">
            Parliamo del tuo <br className="hidden md:block" /> prossimo progetto.
          </h1>
          
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
            Compila il form, scrivici via email o chiamaci.
          </p>
        </div>
      </section>

      {/*
        FORM E INFORMAZIONI: divide il contenuto in due colonne desktop.
        La colonna informativa raccoglie i riferimenti aziendali e la mappa, mentre
        la colonna destra gestisce la richiesta di consulenza e i relativi stati.
      */}
      <section className="py-6 relative z-20">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          
          {/* Colonna sinistra: identita aziendale, riferimenti diretti e sede operativa. */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">FI.CO. SRL</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Siamo pronti ad ascoltare le tue esigenze e a trasformarle in soluzioni concrete. Contattaci senza impegno.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              
              {/* Sede: indirizzo fisico mostrato accanto all'icona di localizzazione. */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-[#01425f]/40 border border-[#0e7490]/40 flex items-center justify-center shrink-0 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#011C27] transition-colors duration-300">
                  <MapPin size={22} />
                </div>
                <div className="pt-1">
                  <p className="text-[17px] font-medium text-white leading-snug">
                    Corso Cavour 9, Piano 2<br/>
                    <span className="text-gray-300 text-[15px]">76123 Andria (BT) — Italia</span>
                  </p>
                </div>
              </div>

              {/* Telefono: collegamento tel per consentire la chiamata diretta da dispositivi mobili. */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-[#01425f]/40 border border-[#0e7490]/40 flex items-center justify-center shrink-0 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#011C27] transition-colors duration-300">
                  <Phone size={22} />
                </div>
                <div className="pt-2">
                  <a href="tel:+393757932669" className="text-[17px] font-medium text-white hover:text-[#38bdf8] transition-colors">
                    +39 375 793 2669
                  </a>
                </div>
              </div>

              {/* Email: separa il riferimento amministrativo da quello operativo. */}
              <div className="flex items-start gap-5 group w-full">
                <div className="w-12 h-12 rounded-xl bg-[#01425f]/40 border border-[#0e7490]/40 flex items-center justify-center shrink-0 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#011C27] transition-colors duration-300">
                  <Mail size={22} />
                </div>
                <div className="pt-1 flex flex-col gap-1 min-w-0 flex-1">
                  <p className="text-[16px] font-medium text-white break-words">
                    <a href="mailto:amministrazione@ficohub.it" className="hover:text-[#38bdf8] transition-colors break-all md:break-normal">amministrazione@ficohub.it</a>
                    <span className="text-gray-400 font-normal ml-1 inline-block">(Amministrazione)</span>
                  </p>
                  <p className="text-[16px] font-medium text-white break-words">
                    <a href="mailto:service@ficohub.it" className="hover:text-[#38bdf8] transition-colors break-all md:break-normal">service@ficohub.it</a>
                    <span className="text-gray-400 font-normal ml-1 inline-block">(Operativa)</span>
                  </p>
                </div>
              </div>

              {/* PEC: canale dedicato alle comunicazioni formali dell'azienda. */}
              <div className="flex items-start gap-5 group w-full">
                <div className="w-12 h-12 rounded-xl bg-[#01425f]/40 border border-[#0e7490]/40 flex items-center justify-center shrink-0 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#011C27] transition-colors duration-300">
                  <Send size={20} />
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-2 min-w-0 flex-1">
                  <span className="text-gray-400 font-semibold text-sm">PEC:</span>
                  <a href="mailto:fi.co.srl@pec.it" className="text-[16px] font-medium text-white hover:text-[#38bdf8] transition-colors break-all md:break-normal">fi.co.srl@pec.it</a>
                </div>
              </div>

              {/* Dati fiscali: riunisce partita IVA e codice SDI in un riferimento compatto. */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-[#01425f]/40 border border-[#0e7490]/40 flex items-center justify-center shrink-0 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#011C27] transition-colors duration-300">
                  <FileText size={22} />
                </div>
                <div className="pt-1">
                  <p className="text-[15px] font-medium text-gray-300 leading-snug">
                    P.IVA 08964920725<br/>
                    Cod. SDI: QULXG4S
                  </p>
                </div>
              </div>

            </div>

            {/* Mappa Google Maps: mostra la sede senza richiedere una navigazione esterna. */}
            <div className="w-full h-72 md:h-80 mt-4 rounded-3xl overflow-hidden shadow-2xl border border-[#0e7490]/30">
              <iframe
                src="https://maps.google.com/maps?q=Corso%20Cavour%209%2C%20Andria%20BT%2C%20Italia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa sede operativa FI.CO. SRL"
              ></iframe>
            </div>
          </div>

          {/* Colonna destra: il form alterna modulo e conferma in base allo stato della richiesta. */}
          <div className="bg-[#01425f]/10 border border-[#0e7490]/30 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden h-fit">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#38bdf8]/10 to-transparent blur-3xl rounded-full pointer-events-none" />
            
            {status === "success" ? (
              /* Stato success: conferma l'invio e permette di aprire un nuovo form pulito. */
              <div className="relative z-10 flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-green-400 mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Messaggio inviato!</h3>
                <p className="text-gray-300 text-lg">
                  Grazie per averci contattato. Il nostro team elaborerà la tua richiesta e ti risponderà al più presto.
                </p>
                <button 
                  onClick={() => {
                    setStatus("idle");
                    setFormData({nome: "", azienda: "", email: "", telefono: "", oggetto: "", messaggio: "", privacy: false});
                  }}
                  className="mt-8 px-6 py-3 border border-white/20 rounded-xl text-white hover:bg-white/10 transition-colors"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              /* Stato idle/loading/error: mantiene visibile il modulo durante l'intero flusso. */
              <form className="flex flex-col gap-6 relative z-10 animate-fade-in" onSubmit={handleSubmit}>
                
                <div className="mb-2">
                  <h3 className="text-3xl font-bold text-white mb-2">Richiedi una consulenza</h3>
                  <p className="text-gray-300 text-[15px]">
                    Raccontaci il tuo progetto: ti ricontatteremo per un confronto tecnico.
                  </p>
                </div>

                {/* L'avviso di errore compare solo dopo una risposta non valida o un'eccezione di rete. */}
                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl text-sm">
                    Ops! Si è verificato un errore durante l'invio. Riprova più tardi o scrivici direttamente via email.
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="text-sm font-semibold text-gray-300 ml-1">Nome e Cognome *</label>
                    <input type="text" id="nome" value={formData.nome} onChange={handleChange} disabled={status === "loading"} className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all w-full disabled:opacity-50" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="azienda" className="text-sm font-semibold text-gray-300 ml-1">Azienda</label>
                    <input type="text" id="azienda" value={formData.azienda} onChange={handleChange} disabled={status === "loading"} className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all w-full disabled:opacity-50" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-300 ml-1">Email *</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} disabled={status === "loading"} className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all w-full disabled:opacity-50" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="telefono" className="text-sm font-semibold text-gray-300 ml-1">Telefono</label>
                    <input type="tel" id="telefono" value={formData.telefono} onChange={handleChange} disabled={status === "loading"} className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all w-full disabled:opacity-50" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="oggetto" className="text-sm font-semibold text-gray-300 ml-1">Oggetto</label>
                  <input type="text" id="oggetto" value={formData.oggetto} onChange={handleChange} disabled={status === "loading"} className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all w-full disabled:opacity-50" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="messaggio" className="text-sm font-semibold text-gray-300 ml-1">Messaggio *</label>
                  <textarea id="messaggio" value={formData.messaggio} onChange={handleChange} disabled={status === "loading"} rows={4} className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all resize-none w-full disabled:opacity-50" required></textarea>
                </div>

                <div className="flex items-start gap-3 mt-1">
                  <input type="checkbox" id="privacy" checked={formData.privacy} onChange={handleChange} disabled={status === "loading"} className="mt-1 shrink-0 w-4 h-4 rounded border-white/20 bg-[#011C27] text-[#38bdf8] focus:ring-[#38bdf8] focus:ring-offset-0 disabled:opacity-50" required />
                  <label htmlFor="privacy" className="text-[14px] text-gray-300 leading-snug cursor-pointer">
                    Accetto il trattamento dei dati personali secondo la Privacy Policy.
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="mt-2 w-full flex items-center justify-center gap-2 bg-[#facc15] text-[#001724] font-bold text-lg px-8 py-4 rounded-xl hover:bg-yellow-300 hover:scale-[1.02] transition-all shadow-lg disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>Invio in corso... <Loader2 size={20} className="animate-spin" /></>
                  ) : (
                    <>Invia Messaggio <Send size={20} /></>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}