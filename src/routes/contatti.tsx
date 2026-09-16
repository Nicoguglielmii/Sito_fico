import { createFileRoute } from '@tanstack/react-router';
import { Mail, Phone, MapPin, Send, FileText, ExternalLink } from 'lucide-react';
import { HeroParticles } from "@/components/site/Interactive";

export const Route = createFileRoute('/contatti')({
  component: ContattiPage,
});

// ==========================================
// 1. IL FORM VISUAL (APPANNATO) CON PULSANTE
// ==========================================
function ContactFormVisual() {
  // INSERISCI QUI IL LINK DEL TUO FORM ESTERNO (Tally.so, Google Forms, Typeform, ecc.)
  const formUrl = "https://tally.so/r/RGApB4";

  return (
    <div className="bg-[#01425f]/10 border border-[#0e7490]/30 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden h-fit">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#38bdf8]/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      
      <div className="mb-6 relative z-10">
        <h3 className="text-3xl font-bold text-white mb-2">Richiedi una consulenza</h3>
        <p className="text-gray-300 text-[15px]">
          Raccontaci il tuo progetto: ti ricontatteremo per un confronto tecnico.
        </p>
      </div>

      <div className="relative z-10 mt-4">
        
        {/* OVERLAY CON IL PULSANTE DORATO */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#011C27]/20 rounded-2xl">
          <a 
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#facc15] text-[#001724] font-bold text-lg md:text-xl px-10 py-5 rounded-xl hover:bg-yellow-300 hover:scale-[1.05] transition-all duration-300 shadow-[0_0_40px_rgba(250,204,21,0.3)] cursor-pointer"
          >
            Compila il Form <ExternalLink size={22} />
          </a>
        </div>

        {/* FINTO FORM APPANNATO (Non cliccabile) */}
        <div className="flex flex-col gap-6 pointer-events-none select-none blur-[4px] opacity-50 transition-all duration-500">
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300 ml-1">Nome e Cognome *</label>
              <div className="bg-[#011C27] border border-white/10 rounded-xl h-12 w-full"></div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300 ml-1">Azienda</label>
              <div className="bg-[#011C27] border border-white/10 rounded-xl h-12 w-full"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300 ml-1">Email *</label>
              <div className="bg-[#011C27] border border-white/10 rounded-xl h-12 w-full"></div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300 ml-1">Telefono</label>
              <div className="bg-[#011C27] border border-white/10 rounded-xl h-12 w-full"></div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-300 ml-1">Messaggio *</label>
            <div className="bg-[#011C27] border border-white/10 rounded-xl h-32 w-full"></div>
          </div>

          <div className="flex items-center gap-3 mt-1">
            <div className="w-4 h-4 rounded bg-[#011C27] border border-white/20"></div>
            <div className="text-[14px] text-gray-300">Accetto il trattamento dei dati personali.</div>
          </div>

          <div className="mt-2 w-full h-14 rounded-xl bg-[#facc15]/50"></div>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// 2. PAGINA PRINCIPALE
// ==========================================
function ContattiPage() {
  return (
    <div className="bg-[#011C27] w-full min-h-screen overflow-x-hidden pb-12">
      
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* PARTICELLE RIATTIVATE */}
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

      <section className="py-6 relative z-20">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          
          {/* Colonna Sinistra (Testi e MAPPA RIATTIVATA) */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">FI.CO. SRL</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Siamo pronti ad ascoltare le tue esigenze e a trasformarle in soluzioni concrete. Contattaci senza impegno.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              
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

              <div className="flex items-start gap-5 group w-full">
                <div className="w-12 h-12 rounded-xl bg-[#01425f]/40 border border-[#0e7490]/40 flex items-center justify-center shrink-0 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#011C27] transition-colors duration-300">
                  <Send size={20} />
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-2 min-w-0 flex-1">
                  <span className="text-gray-400 font-semibold text-sm">PEC:</span>
                  <a href="mailto:fi.co.srl@pec.it" className="text-[16px] font-medium text-white hover:text-[#38bdf8] transition-colors break-all md:break-normal">fi.co.srl@pec.it</a>
                </div>
              </div>

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

          {/* Il nuovo Form Visual */}
          <ContactFormVisual />

        </div>
      </section>
    </div>
  );
}