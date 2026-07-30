import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Home, Building2, FileText, Phone } from "lucide-react";

export function Navbar() {
  // Stato booleano che controlla l'apertura della sidebar mobile
  const [isOpen, setIsOpen] = useState(false);

  // Voci del menu standard utilizzando le icone di Lucide per renderle perfettamente bianche/stilizzate
  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "L'azienda", path: "/chi-siamo", icon: Building2 },
  ];

  // Sottomenù dei servizi
  const serviceItems = [
    { name: "Consulenza Imprese", path: "/consulenza-imprese" },
    { name: "Rapporti e Gestione Enti", path: "/servizi" }, // Temporaneo
    { name: "Servizi IT", path: "/servizi" }, // Temporaneo
    { name: "Networking & Cablaggio", path: "/servizi" }, // Temporaneo
    { name: "Ricerca e innovazione", path: "/ricerca-innovazione" },
    { name: "Realizzazioni siti web", path: "/servizi" }, // Temporaneo
  ];

  return (
    <>
      {/* ─── BARRA DI NAVIGAZIONE PRINCIPALE ───────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#011C27] border-b border-[#0e7490]/20 h-20 flex items-center px-6 lg:px-10">
        
        {/* BLOCCO SINISTRO: Pulsante menu mobile e logo cliccabile */}
        <div className="flex items-center gap-5 w-1/3">
          <button 
            onClick={() => setIsOpen(true)}
            className="text-gray-300 hover:text-white transition-colors focus:outline-none"
            aria-label="Apri menu laterale"
          >
            <Menu size={28} />
          </button>

          <Link to="/" className="flex items-center group">
            <img 
              src="/fico-logo.png" 
              alt="FI.CO. SRL" 
              className="h-10 w-auto object-contain transform transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>
        </div>

        {/* BLOCCO CENTRALE: Menu Orizzontale */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8 relative">
          
          {/* Loop sulle voci base (Home, L'azienda) */}
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className="text-[15px] font-semibold text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                activeProps={{ className: "text-white border-b-2 border-[#38bdf8] pb-1" }}
                activeOptions={{ exact: item.path === '/' }}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}

          {/* VOCE CON MENU A TENDINA (Servizi) */}
          <div className="relative group">
            {/* Il bottone principale Servizi */}
            <Link
              to="/servizi"
              className="text-[15px] font-semibold text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5 py-4"
              activeProps={{ className: "text-white" }}
            >
              <FileText size={18} /> Servizi <ChevronDown size={16} className="text-gray-400 group-hover:text-white transition-colors ml-0.5" />
            </Link>

            {/* Il pannello a tendina (Dropdown) */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
              <div className="bg-[#011C27] border border-[#0e7490]/30 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col py-2">
                {serviceItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.path}
                    className="px-5 py-2.5 text-[14px] text-gray-300 hover:text-white hover:bg-white/5 hover:pl-6 transition-all duration-200"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Voce Contatti (Separata per stare dopo i Servizi) */}
          <Link
            to="/contatti"
            className="text-[15px] font-semibold text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
            activeProps={{ className: "text-white border-b-2 border-[#38bdf8] pb-1" }}
          >
            <Phone size={18} /> Contatti
          </Link>

        </div>

        {/* BLOCCO DESTRO: area vuota per mantenere il layout bilanciato */}
        <div className="flex items-center justify-end w-1/3">
          {/* Spazio vuoto per mantenere la perfetta centratura del menu */}
        </div>
      </nav>

      {/* ─── SIDEBAR LATERALE ─────────────────────────────────────────── */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR MOBILE: scorre da sinistra e mostra i link di navigazione */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-80 bg-[#011C27] z-50 transform transition-transform duration-300 ease-in-out border-r border-[#0e7490]/20 shadow-2xl flex flex-col overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-[#0e7490]/20 shrink-0">
          <span className="text-lg font-bold tracking-widest text-[#38bdf8]">MENU</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors focus:outline-none"
          >
            <X size={26} />
          </button>
        </div>
        
        <div className="flex flex-col p-6 space-y-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-gray-300 hover:text-[#38bdf8] transition-colors duration-150 pl-2 border-l-2 border-transparent hover:border-[#38bdf8] flex items-center gap-3"
              >
                <Icon size={22} />
                {item.name}
              </Link>
            );
          })}

          {/* Voci Servizi fisse nella sidebar */}
          <Link
            to="/servizi"
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium text-gray-300 hover:text-[#38bdf8] transition-colors duration-150 pl-2 border-l-2 border-transparent hover:border-[#38bdf8] flex items-center gap-3"
          >
            <FileText size={22} /> Servizi
          </Link>

          <Link
            to="/contatti"
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium text-gray-300 hover:text-[#38bdf8] transition-colors duration-150 pl-2 border-l-2 border-transparent hover:border-[#38bdf8] flex items-center gap-3"
          >
            <Phone size={22} /> Contatti
          </Link>
        </div>
      </div>
    </>
  );
}