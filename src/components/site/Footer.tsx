import { Link } from '@tanstack/react-router';
import { MapPin, Phone, Mail, Linkedin, Home, Building2, Briefcase } from 'lucide-react';

export function Footer() {

  // MODIFICA: Scroll fluido verso l'alto senza preloader
  const handleFooterClick = (e: React.MouseEvent, path: string) => {
    if (window.location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#001724] border-t border-[#0e7490]/20 pt-8 pb-4 text-gray-300">
      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          
          {/* Colonna 1: Brand e Info */}
          <div className="flex flex-col items-start">
            <Link to="/" onClick={(e) => handleFooterClick(e, "/")} className="mb-3">
              <img src="/fico-logo.png" alt="FI.CO. SRL" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-[15px] leading-relaxed mb-4">
              Telecomunicazioni, reti in fibra ottica, ingegneria, permitting e servizi IT per enti pubblici e privati.
            </p>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full border border-[#0e7490]/50 flex items-center justify-center text-gray-400 hover:text-[#38bdf8] hover:border-[#38bdf8] transition-all"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Colonna 2: Navigazione */}
          <div>
            <h3 className="text-[#facc15] font-bold tracking-widest uppercase mb-3 text-sm">Navigazione</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" onClick={(e) => handleFooterClick(e, "/")} className="flex items-center gap-3 text-[15px] hover:text-white transition-colors group">
                <Home size={18} className="text-gray-400 group-hover:text-white transition-colors" /> Home
              </Link>
              <Link to="/chi-siamo" onClick={(e) => handleFooterClick(e, "/chi-siamo")} className="flex items-center gap-3 text-[15px] hover:text-white transition-colors group">
                <Building2 size={18} className="text-gray-400 group-hover:text-white transition-colors" /> L'azienda
              </Link>
              <Link to="/servizi" onClick={(e) => handleFooterClick(e, "/servizi")} className="flex items-center gap-3 text-[15px] hover:text-white transition-colors group">
                <Briefcase size={18} className="text-gray-400 group-hover:text-white transition-colors" /> Servizi
              </Link>
              <Link to="/contatti" onClick={(e) => handleFooterClick(e, "/contatti")} className="flex items-center gap-3 text-[15px] hover:text-white transition-colors group">
                <Phone size={18} className="text-gray-400 group-hover:text-white transition-colors" /> Contatti
              </Link>
            </div>
          </div>

          {/* Colonna 3: Servizi */}
          <div>
            <h3 className="text-[#facc15] font-bold tracking-widest uppercase mb-3 text-sm">I Nostri Servizi</h3>
            <div className="flex flex-col gap-2">
              <Link to="/servizi/fibra-mobile" onClick={(e) => handleFooterClick(e, "/servizi/fibra-mobile")} className="text-[15px] text-gray-300 hover:text-white transition-colors">
                Fibra & Mobile
              </Link>
              <Link to="/servizi/it-software" onClick={(e) => handleFooterClick(e, "/servizi/it-software")} className="text-[15px] text-gray-300 hover:text-white transition-colors">
                IT, Networking & Software
              </Link>
            </div>
          </div>

          {/* Colonna 4: Contatti */}
          <div>
            <h3 className="text-[#facc15] font-bold tracking-widest uppercase mb-3 text-sm">Contatti</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[#facc15] shrink-0 mt-0.5" />
                <span className="text-[15px] leading-relaxed text-gray-300">Corso Cavour 9<br />76123 Andria (BT)</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-[#facc15] shrink-0" />
                <a href="tel:+393757932669" className="text-[15px] text-gray-300 hover:text-white transition-colors">+39 375 793 2669</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-[#facc15] shrink-0" />
                <a href="mailto:amministrazione@ficohub.it" className="text-[15px] text-gray-300 hover:text-white transition-colors">amministrazione@ficohub.it</a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Policy */}
        <div className="border-t border-[#0e7490]/20 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FI.CO. SRL. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" onClick={(e) => handleFooterClick(e, "/privacy-policy")} className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" onClick={(e) => handleFooterClick(e, "/cookie-policy")} className="hover:text-gray-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}