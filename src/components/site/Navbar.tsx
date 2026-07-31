import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Home, Building2, FileText, Phone } from "lucide-react";

export function Navbar() {
  // Stato booleano che controlla l'apertura della sidebar mobile/desktop
  const [isOpen, setIsOpen] = useState(false);

  // Voci del menu standard
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
      {/* Stili per nascondere la barra di scorrimento su mobile pur mantenendo lo scroll */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ─── BARRA DI NAVIGAZIONE PRINCIPALE ───────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#011C27] border-b border-[#0e7490]/20 h-20 flex items-center px-4 md:px-6 lg:px-10">
        
        {/* BLOCCO SINISTRO: Pulsante menu e Logo */}
        <div className="flex items-center gap-4 md:gap-5 w-auto md:w-1/3 shrink-0 mr-4 md:mr-0">
          <button 
            onClick={() => setIsOpen(true)}
            className="text-gray-300 hover:text-white transition-colors focus:outline-none shrink-0"
            aria-label="Apri menu"
          >
            <Menu size={28} />
          </button>

          <Link to="/" className="flex items-center group">
            <img 
              src="/fico-logo.png" 
              alt="FI.CO. SRL" 
              className="h-9 md:h-10 w-auto object-contain transform transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>
        </div>

        {/* BLOCCO CENTRALE: Menu Orizzontale (Visibile e scorrevole col dito su mobile) */}
        <div className="flex flex-1 items-center justify-start md:justify-center gap-6 md:gap-8 overflow-x-auto md:overflow-visible no-scrollbar h-full">
          
          {/* Loop sulle voci base (Home, L'azienda) */}
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className="text-[14.5px] md:text-[15px] font-semibold text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5 whitespace-nowrap shrink-0"
                activeProps={{ className: "text-white border-b-2 border-[#38bdf8] pb-1" }}
                activeOptions={{ exact: item.path === '/' }}
              >
                <Icon size={18} className="shrink-0" />
                {item.name}
              </Link>
            );
          })}

          {/* VOCE CON MENU A TENDINA (Servizi) */}
          <div className="relative group shrink-0 flex items-center h-full">
            {/* Il bottone principale Servizi */}
            <Link
              to="/servizi"
              className="text-[14.5px] md:text-[15px] font-semibold text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5 whitespace-nowrap"
              activeProps={{ className: "text-white border-b-2 border-[#38bdf8] pb-1" }}
            >
              <FileText size={18} className="shrink-0" /> Servizi <ChevronDown size={16} className="text-gray-400 group-hover:text-white transition-colors ml-0.5 hidden md:block" />
            </Link>

            {/* Il pannello a tendina (Dropdown) - Nascosto su mobile, visibile al passaggio del mouse su PC */}
            <div className="hidden md:block absolute top-[70%] left-1/2 -translate-x-1/2 w-64 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-[999]">
              <div className="bg-[#011C27] border border-[#0e7490]/30 rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col py-2">
                {serviceItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.path}
                    className="px-5 py-2.5 text-[14px] text-gray-300 hover:text-white hover:bg-white/5 hover:pl-6 transition-all duration-200 whitespace-nowrap"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Voce Contatti */}
          <Link
            to="/contatti"
            className="text-[14.5px] md:text-[15px] font-semibold text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5 whitespace-nowrap shrink-0 pr-4 md:pr-0"
            activeProps={{ className: "text-white border-b-2 border-[#38bdf8] pb-1" }}
          >
            <Phone size={18} className="shrink-0" /> Contatti
          </Link>

        </div>

        {/* BLOCCO DESTRO: area vuota per mantenere il layout bilanciato perfettamente su PC */}
        <div className="hidden md:flex items-center justify-end w-1/3 shrink-0">
        </div>
      </nav>

      {/* ─── SIDEBAR LATERALE ─────────────────────────────────────────── */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[9999] transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR MOBILE/DESKTOP: scorre da sinistra e mostra i link di navigazione */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-80 bg-[#011C27] z-[10000] transform transition-transform duration-300 ease-in-out border-r border-[#0e7490]/20 shadow-2xl flex flex-col overflow-y-auto ${
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