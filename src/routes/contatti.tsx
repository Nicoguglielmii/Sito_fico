import { createFileRoute } from '@tanstack/react-router';
import { Mail, Phone, MapPin, Send, FileText, ExternalLink } from 'lucide-react';
import { HeroParticles } from "@/components/site/Interactive";

export const Route = createFileRoute('/contatti')({
  component: ContattiPage,
});

function ContactFormVisual() {
  const formUrl = "https://tally.so/r/RGApB4";

  return (
    <div className="bg-white border-2 border-[#facc15] p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden h-fit">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#facc15]/20 to-transparent blur-3xl rounded-full pointer-events-none" />
      
      <div className="mb-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#012b3a] mb-4">Richiedi una consulenza</h2>
        <p className="text-[#00779b] text-[15px]">
          Raccontaci il tuo progetto: ti ricontatteremo per un confronto tecnico.
        </p>
      </div>

      <div className="relative z-10 mt-4">
        
        {/* OVERLAY CON IL PULSANTE GIALLO FI.CO. */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/30 rounded-2xl">
          <a 
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#f5d000] text-[#012b3a] font-bold text-lg md:text-xl px-10 py-5 rounded-2xl hover:bg-[#eab308] hover:scale-[1.03] transition-all duration-300 shadow-lg cursor-pointer"
          >
            Compila il Form <ExternalLink size={22} />
          </a>
        </div>

        {/* FINTO FORM APPANNATO (Ispirato al nuovo stile azzurro/giallo di Tally) */}
        <div className="flex flex-col gap-5 pointer-events-none select-none blur-[3px] opacity-60 transition-all duration-500">
          
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#1da1db] ml-1">Nome e cognome</label>
              <div className="bg-[#00b4d8] border border-[#facc15] rounded-xl h-11 w-full"></div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#1da1db] ml-1">Azienda</label>
              <div className="bg-[#00b4d8] border border-[#facc15] rounded-xl h-11 w-full"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#1da1db] ml-1">Email</label>
              <div className="bg-[#00b4d8] border border-[#facc15] rounded-xl h-11 w-full"></div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#1da1db] ml-1">Telefono</label>
              <div className="bg-[#00b4d8] border border-[#facc15] rounded-xl h-11 w-full"></div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#1da1db] ml-1">Messaggio</label>
            <div className="bg-[#00b4d8] border border-[#facc15] rounded-xl h-32 w-full"></div>
          </div>

          <div className="mt-2 w-48 h-12 rounded-xl bg-[#00b4d8] border border-[#facc15]"></div>
        </div>

      </div>
    </div>
  );
}

function ContattiPage() {
  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden pb-12">
      
      {/* HERO SECTION CON LINEA DIVISORIA GIALLA */}
      <section className="relative pt-28 sm:pt-32 pb-12 overflow-hidden border-b border-[#facc15]">
        <HeroParticles />
        
        <div className="container-x relative z-10 text-left animate-fade-in">
          <span className="text-sm uppercase tracking-[0.25em] text-[#00779b] font-semibold">
            Contatti
          </span>
          
          <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight md:leading-[1.1] text-[#012b3a] pb-2">
            Parliamo del tuo <br className="hidden md:block" />
            prossimo progetto
          </h1>
          
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-[#00779b] leading-relaxed max-w-3xl">
            Compila il form, scrivici via email o chiamaci.
          </p>
        </div>
      </section>

      {/* SEZIONE CENTRALE CON PATTERN PUNTINI GIALLI */}
      <section 
        className="py-12 relative z-20"
        style={{
          backgroundImage: 'radial-gradient(#facc15 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px'
        }}
      >
        <div className="container-x grid lg:grid-cols-2 gap-12">
          
          {/* Colonna Sinistra: Info Aziendali e Mappa */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#012b3a] mb-4">
                FI.CO. SRL
              </h2>
              <p className="text-[#00779b] text-lg leading-relaxed">
                Siamo pronti ad ascoltare le tue esigenze e a trasformarle in soluzioni concrete. Contattaci senza impegno.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              
              {/* Sede */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#013a52] flex items-center justify-center shrink-0 text-[#facc15] shadow-md transition-transform duration-300 group-hover:scale-105">
                  <MapPin size={22} />
                </div>
                <div className="pt-1">
                  <p className="text-[17px] font-bold text-[#012b3a] leading-snug">
                    Corso Cavour 9, Piano 2<br/>
                    <span className="text-[#00779b] font-normal text-[15px]">76123 Andria (BT) — Italia</span>
                  </p>
                </div>
              </div>

              {/* Telefono */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#013a52] flex items-center justify-center shrink-0 text-[#facc15] shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Phone size={22} />
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-x-2">
                  <span className="text-[16px] font-bold text-[#012b3a]">Telefono:</span>
                  <a href="tel:+393757932669" className="text-[16px] text-[#00779b] hover:text-[#1da1db] transition-colors">
                    +39 375 793 2669
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5 group w-full">
                <div className="w-12 h-12 rounded-full bg-[#013a52] flex items-center justify-center shrink-0 text-[#facc15] shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Mail size={22} />
                </div>
                <div className="pt-1 flex flex-col gap-1 min-w-0 flex-1">
                  <p className="text-[16px] font-bold text-[#012b3a] break-words">
                    <a href="mailto:amministrazione@ficohub.it" className="hover:text-[#1da1db] transition-colors break-all md:break-normal">amministrazione@ficohub.it</a>
                    <span className="text-[#00779b] font-normal ml-1 inline-block">(Amministrazione)</span>
                  </p>
                  <p className="text-[16px] font-bold text-[#012b3a] break-words">
                    <a href="mailto:service@ficohub.it" className="hover:text-[#1da1db] transition-colors break-all md:break-normal">service@ficohub.it</a>
                    <span className="text-[#00779b] font-normal ml-1 inline-block">(Operativa)</span>
                  </p>
                </div>
              </div>

              {/* PEC */}
              <div className="flex items-start gap-5 group w-full">
                <div className="w-12 h-12 rounded-full bg-[#013a52] flex items-center justify-center shrink-0 text-[#facc15] shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Send size={20} />
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-2 min-w-0 flex-1">
                  <span className="text-[16px] font-bold text-[#012b3a]">PEC:</span>
                  <a href="mailto:fi.co.srl@pec.it" className="text-[16px] font-bold text-[#012b3a] hover:text-[#1da1db] transition-colors break-all md:break-normal">fi.co.srl@pec.it</a>
                </div>
              </div>

              {/* Dati Fiscali */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#013a52] flex items-center justify-center shrink-0 text-[#facc15] shadow-md transition-transform duration-300 group-hover:scale-105">
                  <FileText size={22} />
                </div>
                <div className="pt-1">
                  <p className="text-[15px] font-semibold leading-snug">
                    <span className="text-[#012b3a]">P.IVA 08964920725</span><br/>
                    <span className="text-[#00779b] font-normal">Cod. SDI: QULXG4S</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Mappa Google Maps */}
            <div className="w-full h-72 md:h-80 mt-2 rounded-3xl overflow-hidden shadow-lg border border-[#facc15]">
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

          {/* Colonna Destra: Form Visual */}
          <ContactFormVisual />

        </div>
      </section>
    </div>
  );
}