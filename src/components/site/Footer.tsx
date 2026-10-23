import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Home, Building2, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#facc15] pt-16 pb-8 relative z-20">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="flex flex-col gap-6">
            <Link to="/">
              <img src="/fico-logo.png" alt="FI.CO. SRL" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
            <p className="text-[#00779b] text-[15px] leading-relaxed pr-4">
              Telecomunicazioni, reti in fibra ottica, ingegneria, permitting e servizi IT per enti pubblici e privati.
            </p>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-[#012b3a] font-extrabold text-sm tracking-wider uppercase mb-6">Navigazione</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/" className="text-[#00779b] hover:text-[#1da1db] transition-colors flex items-center gap-3 text-[15px] font-medium">
                  <Home size={18} className="text-[#1da1db]" /> Home
                </Link>
              </li>
              <li>
                <Link to="/chi-siamo" className="text-[#00779b] hover:text-[#1da1db] transition-colors flex items-center gap-3 text-[15px] font-medium">
                  <Building2 size={18} className="text-[#1da1db]" /> L'azienda
                </Link>
              </li>
              <li>
                <Link to="/servizi" className="text-[#00779b] hover:text-[#1da1db] transition-colors flex items-center gap-3 text-[15px] font-medium">
                  <Briefcase size={18} className="text-[#1da1db]" /> Servizi
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="text-[#00779b] hover:text-[#1da1db] transition-colors flex items-center gap-3 text-[15px] font-medium">
                  <Phone size={18} className="text-[#1da1db]" /> Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#012b3a] font-extrabold text-sm tracking-wider uppercase mb-6">I Nostri Servizi</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/servizi/fibra-mobile" className="text-[#00779b] hover:text-[#1da1db] transition-colors text-[15px] font-medium block">
                  Fibra & Mobile
                </Link>
              </li>
              <li>
                <Link to="/servizi/it-software" className="text-[#00779b] hover:text-[#1da1db] transition-colors text-[15px] font-medium block">
                  IT & Software
                </Link>
              </li>
              <li>
                <Link to="/servizi/ascensoristica" className="text-[#00779b] hover:text-[#1da1db] transition-colors text-[15px] font-medium block">
                  Ascensoristica
                </Link>
              </li>
              <li>
                <Link to="/servizi/energia" className="text-[#00779b] hover:text-[#1da1db] transition-colors text-[15px] font-medium block">
                  Energia
                </Link>
              </li>
              <li>
                <span className="text-[#00779b]/60 cursor-not-allowed text-[15px] font-medium flex items-center gap-2">
                  Networking{" "}
                  <span className="text-[10px] uppercase tracking-wider bg-[#f5d000] text-[#012b3a] font-bold px-2.5 py-0.5 rounded-full">
                    In Sviluppo
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#012b3a] font-extrabold text-sm tracking-wider uppercase mb-6">Contatti</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-[15px] text-[#00779b] leading-snug">
                <MapPin size={20} className="text-[#1da1db] shrink-0 mt-0.5" />
                <span>Corso Cavour 9<br/>76123 Andria (BT)</span>
              </li>
              <li className="flex items-center gap-3 text-[15px] text-[#00779b]">
                <Phone size={20} className="text-[#1da1db] shrink-0" />
                <a href="tel:+393757932669" className="hover:text-[#1da1db] transition-colors">+39 375 793 2669</a>
              </li>
              <li className="flex items-center gap-3 text-[15px] text-[#00779b]">
                <Mail size={20} className="text-[#1da1db] shrink-0" />
                <a href="mailto:amministrazione@ficohub.it" className="hover:text-[#1da1db] transition-colors break-all md:break-normal">amministrazione@ficohub.it</a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-[#facc15] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#00779b] text-[13px] text-center md:text-left">
            © {new Date().getFullYear()} FI.CO. SRL. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-[#00779b]">
            <Link to="/privacy-policy" className="hover:text-[#012b3a] transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-[#012b3a] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}