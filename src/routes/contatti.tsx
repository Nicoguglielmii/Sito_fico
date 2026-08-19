import { createFileRoute } from '@tanstack/react-router';
import { Mail, Phone, MapPin, Send, FileText } from 'lucide-react';

export const Route = createFileRoute('/contatti')({
  component: ContattiPage,
});

function ContattiPage() {
  return (
    <div className="min-h-screen bg-[#011C27] text-white">
      
      {/* Hero Section */}
      <div className="w-full bg-[#01425f] pt-40 pb-28">
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">
            Contatti
          </span>
          
          <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight md:leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#facc15] pb-2 md:pb-4">
            Parliamo del tuo <br className="hidden md:block" /> prossimo progetto.
          </h1>
          
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
            Compila il form, scrivici via email o chiamaci.
          </p>
        </section>
      </div>

      {/* Form & Info Section */}
      <div className="pt-16 pb-32">
        <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          
          {/* Colonna Sinistra: Info & Mappa */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">FI.CO. SRL</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Siamo pronti ad ascoltare le tue esigenze e a trasformarle in soluzioni concrete. Contattaci senza impegno.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              
              {/* Sede */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-[#01425f] border border-[#0e7490]/30 flex items-center justify-center shrink-0 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#011C27] transition-colors duration-300">
                  <MapPin size={22} />
                </div>
                <div className="pt-1">
                  <p className="text-[17px] font-medium text-white leading-snug">
                    Corso Cavour 9, Piano 2<br/>
                    <span className="text-gray-300 text-[15px]">76123 Andria (BT) — Italia</span>
                  </p>
                </div>
              </div>

              {/* Telefono (Corretto il colore qui) */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-[#01425f] border border-[#0e7490]/30 flex items-center justify-center shrink-0 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#011C27] transition-colors duration-300">
                  <Phone size={22} />
                </div>
                <div className="pt-2">
                  <a href="tel:+393757932669" className="text-[17px] font-medium text-white hover:text-[#38bdf8] transition-colors">
                    +39 375 793 2669
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-[#01425f] border border-[#0e7490]/30 flex items-center justify-center shrink-0 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#011C27] transition-colors duration-300">
                  <Mail size={22} />
                </div>
                <div className="pt-1 flex flex-col gap-1">
                  <p className="text-[16px] font-medium text-white">
                    <a href="mailto:amministrazione@ficohub.it" className="hover:text-[#38bdf8] transition-colors">amministrazione@ficohub.it</a>
                    <span className="text-gray-400 font-normal ml-1">(Amministrazione)</span>
                  </p>
                  <p className="text-[16px] font-medium text-white">
                    <a href="mailto:service@ficohub.it" className="hover:text-[#38bdf8] transition-colors">service@ficohub.it</a>
                    <span className="text-gray-400 font-normal ml-1">(Operativa)</span>
                  </p>
                </div>
              </div>

              {/* PEC */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-[#01425f] border border-[#0e7490]/30 flex items-center justify-center shrink-0 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#011C27] transition-colors duration-300">
                  <Send size={20} />
                </div>
                <div className="pt-2 flex items-center gap-2">
                  <span className="text-gray-400 font-semibold text-sm">PEC:</span>
                  <a href="mailto:fi.co.srl@pec.it" className="text-[16px] font-medium text-white hover:text-[#38bdf8] transition-colors">fi.co.srl@pec.it</a>
                </div>
              </div>

              {/* Dati Fiscali (P.IVA e SDI) */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-[#01425f] border border-[#0e7490]/30 flex items-center justify-center shrink-0 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#011C27] transition-colors duration-300">
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

            {/* Mappa Google Maps */}
            <div className="w-full h-72 md:h-80 mt-4 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
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

          {/* Colonna Destra: Form */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden h-fit">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#38bdf8]/10 to-transparent blur-3xl rounded-full pointer-events-none" />
            
            <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              
              <div className="mb-2">
                <h3 className="text-3xl font-bold text-white mb-2">Richiedi una consulenza</h3>
                <p className="text-gray-300 text-[15px]">
                  Raccontaci il tuo progetto: ti ricontatteremo per un confronto tecnico.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nome" className="text-sm font-semibold text-gray-300 ml-1">Nome e Cognome *</label>
                  <input type="text" id="nome" className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="azienda" className="text-sm font-semibold text-gray-300 ml-1">Azienda</label>
                  <input type="text" id="azienda" className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-300 ml-1">Email *</label>
                  <input type="email" id="email" className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="telefono" className="text-sm font-semibold text-gray-300 ml-1">Telefono</label>
                  <input type="tel" id="telefono" className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="oggetto" className="text-sm font-semibold text-gray-300 ml-1">Oggetto</label>
                <input type="text" id="oggetto" className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="messaggio" className="text-sm font-semibold text-gray-300 ml-1">Messaggio *</label>
                <textarea id="messaggio" rows={4} className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all resize-none" required></textarea>
              </div>

              <div className="flex items-start gap-3 mt-1">
                <input type="checkbox" id="privacy" className="mt-1 w-4 h-4 rounded border-white/20 bg-[#011C27] text-[#38bdf8] focus:ring-[#38bdf8] focus:ring-offset-0" required />
                <label htmlFor="privacy" className="text-[14px] text-gray-300 leading-snug cursor-pointer">
                  Accetto il trattamento dei dati personali secondo la Privacy Policy.
                </label>
              </div>

              <button type="submit" className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-[#38bdf8] to-[#facc15] text-[#011C27] font-bold text-lg px-8 py-4 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg">
                Invia Messaggio <Send size={20} />
              </button>
            </form>
          </div>

        </section>
      </div>

    </div>
  );
}