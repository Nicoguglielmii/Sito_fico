import { Link } from "@tanstack/react-router";
import { Linkedin, MapPin, Phone, Mail, Home, Building2, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#011C27] border-t border-[#0e7490]/30 pt-16 pb-8 mt-auto">
      <div className="container-x mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Colonna 1: Logo e Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="inline-block w-36">
              <img src="/fico-logo.png" alt="FI.CO. SRL" className="w-full h-auto" />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed pr-4">
              Telecomunicazioni, reti in fibra ottica, ingegneria, permitting e servizi IT per enti
              pubblici e privati.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#0e7490]/50 flex items-center justify-center text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8] transition-all"
                aria-label="Profilo LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Colonna 2: Navigazione (Ora con le icone!) */}
          <div>
            <h3 className="text-[#facc15] font-bold text-sm tracking-widest uppercase mb-6">
              Navigazione
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-[#38bdf8] transition-colors text-sm flex items-center gap-2"
                >
                  <Home size={16} /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/chi-siamo"
                  className="text-slate-300 hover:text-[#38bdf8] transition-colors text-sm flex items-center gap-2"
                >
                  <Building2 size={16} /> L'azienda
                </Link>
              </li>
              <li>
                <Link
                  to="/servizi"
                  className="text-slate-300 hover:text-[#38bdf8] transition-colors text-sm flex items-center gap-2"
                >
                  <FileText size={16} /> Servizi
                </Link>
              </li>
              <li>
                <Link
                  to="/contatti"
                  className="text-slate-300 hover:text-[#38bdf8] transition-colors text-sm flex items-center gap-2"
                >
                  <Phone size={16} /> Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonna 3: Servizi */}
          <div>
            <h3 className="text-[#facc15] font-bold text-sm tracking-widest uppercase mb-6">
              Servizi
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/consulenza-imprese"
                  className="text-slate-300 hover:text-[#38bdf8] transition-colors text-sm"
                >
                  Consulenza Imprese
                </Link>
              </li>
              <li>
                <Link
                  to="/servizi"
                  className="text-slate-300 hover:text-[#38bdf8] transition-colors text-sm"
                >
                  Rapporti e Gestione Enti
                </Link>
              </li>
              <li>
                <Link
                  to="/servizi"
                  className="text-slate-300 hover:text-[#38bdf8] transition-colors text-sm"
                >
                  Servizi IT
                </Link>
              </li>
              <li>
                <Link
                  to="/servizi"
                  className="text-slate-300 hover:text-[#38bdf8] transition-colors text-sm"
                >
                  Networking & Cablaggio
                </Link>
              </li>
              <li>
                <Link
                  to="/ricerca-innovazione"
                  className="text-slate-300 hover:text-[#38bdf8] transition-colors text-sm"
                >
                  Ricerca e innovazione
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonna 4: Contatti */}
          <div>
            <h3 className="text-[#facc15] font-bold text-sm tracking-widest uppercase mb-6">
              Contatti
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <MapPin size={18} className="text-[#facc15] shrink-0 mt-0.5" />
                <span>
                  Corso Cavour 9<br />
                  76123 Andria (BT)
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Phone size={18} className="text-[#facc15] shrink-0" />
                <a href="tel:+393757932669" className="hover:text-[#38bdf8] transition-colors">
                  +39 375 793 2669
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Mail size={18} className="text-[#facc15] shrink-0" />
                <a
                  href="mailto:amministrazione@ficohub.it"
                  className="hover:text-[#38bdf8] transition-colors"
                >
                  amministrazione@ficohub.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom: Copyright e Partita IVA */}
        <div className="border-t border-[#0e7490]/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 FI.CO. SRL — Tutti i diritti riservati.</p>
          <p className="text-center md:text-right">
            P.IVA 08964920725 — PEC: fi.co.srl@pec.it — SDI: QULXG4S
          </p>
        </div>
      </div>
    </footer>
  );
}
