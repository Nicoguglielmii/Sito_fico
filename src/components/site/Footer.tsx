import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin} from "lucide-react";


export function Footer() {
  return (
    <footer className="surface-navy mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block">
            <img src="/fico-logo.png" alt="FI.CO. SRL" width={160} height={50} className="h-10 w-auto" />
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            Telecomunicazioni, reti in fibra ottica, ingegneria, permitting e servizi IT per enti pubblici e privati.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://it.linkedin.com/company/fi-co-srl" aria-label="LinkedIn" className="w-9 h-9 grid place-items-center rounded-full border border-white/15 hover:border-accent hover:text-accent transition-colors"><Linkedin size={16} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">Navigazione</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/chi-siamo" className="hover:text-accent">Chi siamo</Link></li>
            <li><Link to="/servizi" className="hover:text-accent">Servizi</Link></li>
            <li><Link to="/portfolio" className="hover:text-accent">Portfolio</Link></li>
            <li><Link to="/futuro" className="hover:text-accent">Futuro e crescita</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">Servizi</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Consulenza Imprese</li>
            <li>Rapporti e Gestione Enti</li>
            <li>Servizi IT</li>
            <li>Networking & Cablaggio</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">Contatti</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" /><span>Corso Cavour 9<br />76123 Andria (BT)</span></li>
            <li className="flex gap-3"><Phone size={16} className="text-accent flex-shrink-0 mt-0.5" /><a href="tel:+393757932669" className="hover:text-accent">+39 375 793 2669</a></li>
            <li className="flex gap-3"><Mail size={16} className="text-accent flex-shrink-0 mt-0.5" /><a href="mailto:amministrazione@ficohub.it" className="hover:text-accent break-all">amministrazione@ficohub.it</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/60">
          <p>© {new Date().getFullYear()} FI.CO. SRL — Tutti i diritti riservati.</p>
          <p>P.IVA 08964920725 — PEC: fi.co.srl@pec.it — SDI: QULXG4S</p>
        </div>
      </div>
    </footer>
  );
}