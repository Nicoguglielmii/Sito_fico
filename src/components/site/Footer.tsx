import { Link } from '@tanstack/react-router';
import { MapPin, Phone, Mail, Linkedin, Home, Building2, Briefcase } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#001724] border-t border-[#0e7490]/20 pt-16 pb-8 text-gray-300">
      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Colonna 1: Brand e Info */}
          <div className="flex flex-col items-start">
            <Link to="/" className="mb-6">
              <img src="/fico-logo.png" alt="FI.CO. SRL" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-[15px] leading-relaxed mb-8">
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
            <h3 className="text-[#facc15] font-bold tracking-widest uppercase mb-6 text-sm">Navigazione</h3>
            <div className="flex flex-col gap-4">
              <Link to="/" className="flex items-center gap-3 text-[15px] hover:text-white transition-colors group">
                <Home size={18} className="text-gray-400 group-hover:text-white transition-colors" /> Home
              </Link>
              <Link to="/chi-siamo" className="flex items-center gap-3 text-[15px] hover:text-white transition-colors group">
                <Building2 size={18} className="text-gray-400 group-hover:text-white transition-colors" /> L'azienda
              </Link>
              <Link to="/business" className="flex items-center gap-3 text-[15px] hover:text-white transition-colors group">
                <Briefcase size={18} className="text-gray-400 group-hover:text-white transition-colors" /> Business
              </Link>
              <Link to="/contatti" className="flex items-center gap-3 text-[15px] hover:text-white transition-colors group">
                <Phone size={18} className="text-gray-400 group-hover:text-white transition-colors" /> Contatti
              </Link>
            </div>
          </div>

          {/* Colonna 3: Business (Semplificata) */}
          <div>
            <h3 className="text-[#facc15] font-bold tracking-widest uppercase mb-6 text-sm">Business</h3>
            <div className="flex flex-col gap-4">
              <Link to="/business/unit" className="text-[15px] text-gray-300 hover:text-white transition-colors">
                Business Unit
              </Link>
              <Link to="/business/development" className="text-[15px] text-gray-300 hover:text-white transition-colors">
                Business Development
              </Link>
            </div>
          </div>

          {/* Colonna 4: Contatti */}
          <div>
            <h3 className="text-[#facc15] font-bold tracking-widest uppercase mb-6 text-sm">Contatti</h3>
            <div className="flex flex-col gap-6">
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
        <div className="border-t border-[#0e7490]/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FI.CO. SRL. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-gray-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}