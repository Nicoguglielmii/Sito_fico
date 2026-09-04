import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Home, Building2, Briefcase, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#011C27] border-t border-[#0e7490]/30 pt-16 pb-8 relative z-20">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/*
            BRAND E INFORMAZIONI: il primo blocco identifica FI.CO. e riassume
            le principali competenze aziendali. Il collegamento al logo riporta
            alla home, mentre il canale LinkedIn resta disponibile in una posizione
            facilmente riconoscibile e accessibile tramite aria-label.
          */}
          <div className="flex flex-col gap-6">
            <Link to="/">
              <img src="/fico-logo.png" alt="FI.CO. SRL" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
            <p className="text-white/80 text-[15px] leading-relaxed pr-4">
              Telecomunicazioni, reti in fibra ottica, ingegneria, permitting e servizi IT per enti pubblici e privati.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-[#0e7490]/50 flex items-center justify-center text-white/70 hover:bg-[#0e7490]/20 hover:text-[#38bdf8] transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/*
            NAVIGAZIONE: raccoglie i collegamenti principali del sito in un elenco
            verticale. Le icone aiutano a riconoscere rapidamente ogni destinazione,
            mantenendo lo stesso ordine su desktop e mobile.
          */}
          <div className="lg:pl-8">
            <h4 className="text-[#facc15] font-bold text-sm tracking-wider uppercase mb-6">Navigazione</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/" className="text-white/80 hover:text-[#38bdf8] transition-colors flex items-center gap-3 text-[15px]">
                  <Home size={18} className="text-white/40" /> Home
                </Link>
              </li>
              <li>
                <Link to="/chi-siamo" className="text-white/80 hover:text-[#38bdf8] transition-colors flex items-center gap-3 text-[15px]">
                  <Building2 size={18} className="text-white/40" /> L'azienda
                </Link>
              </li>
              <li>
                <Link to="/servizi" className="text-white/80 hover:text-[#38bdf8] transition-colors flex items-center gap-3 text-[15px]">
                  <Briefcase size={18} className="text-white/40" /> Servizi
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="text-white/80 hover:text-[#38bdf8] transition-colors flex items-center gap-3 text-[15px]">
                  <Phone size={18} className="text-white/40" /> Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/*
            SERVIZI: offre accesso diretto alle aree operative gia disponibili.
            La voce Energia e mantenuta visibile come anticipazione, ma non e resa
            cliccabile finche la relativa pagina non sara pubblicata.
          */}
          <div>
            <h4 className="text-[#facc15] font-bold text-sm tracking-wider uppercase mb-6">I Nostri Servizi</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/servizi/fibra-mobile" className="text-white/80 hover:text-[#38bdf8] transition-colors text-[15px] block">
                  Fibra & Mobile
                </Link>
              </li>
              <li>
                <Link to="/servizi/it-software" className="text-white/80 hover:text-[#38bdf8] transition-colors text-[15px] block">
                  IT, Networking & Software
                </Link>
              </li>
              {/* Voce informativa non navigabile: segnala che il servizio e ancora in sviluppo. */}
              <li>
                <span className="text-white/40 cursor-not-allowed text-[15px] flex items-center gap-2">
                  Energia <span className="text-[10px] uppercase tracking-wider border border-white/10 bg-white/5 px-2 py-0.5 rounded-full">In Sviluppo</span>
                </span>
              </li>
            </ul>
          </div>

          {/*
            CONTATTI: espone i riferimenti essenziali per raggiungere l'azienda.
            Indirizzo, telefono ed email usano formati compatibili con i dispositivi
            mobili, cosi le azioni di chiamata e posta possono essere avviate direttamente.
          */}
          <div>
            <h4 className="text-[#facc15] font-bold text-sm tracking-wider uppercase mb-6">Contatti</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-[15px] text-white/80 leading-snug">
                <MapPin size={20} className="text-[#facc15] shrink-0 mt-0.5" />
                <span>Corso Cavour 9<br/>76123 Andria (BT)</span>
              </li>
              <li className="flex items-center gap-3 text-[15px] text-white/80">
                <Phone size={20} className="text-[#facc15] shrink-0" />
                <a href="tel:+393757932669" className="hover:text-[#38bdf8] transition-colors">+39 375 793 2669</a>
              </li>
              <li className="flex items-center gap-3 text-[15px] text-white/80">
                <Mail size={20} className="text-[#facc15] shrink-0" />
                <a href="mailto:amministrazione@ficohub.it" className="hover:text-[#38bdf8] transition-colors break-all md:break-normal">amministrazione@ficohub.it</a>
              </li>
            </ul>
          </div>
          
        </div>

        {/*
          BARRA FINALE: separa le informazioni legali dai contenuti principali
          e mantiene sempre disponibili copyright, Privacy Policy e Cookie Policy.
          Il nuovo anno viene calcolato automaticamente per evitare aggiornamenti manuali.
        */}
        <div className="pt-8 border-t border-[#0e7490]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-[13px] text-center md:text-left">
            © {new Date().getFullYear()} FI.CO. SRL. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-white/40">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}