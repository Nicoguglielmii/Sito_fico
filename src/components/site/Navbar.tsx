import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Home, Building2, Briefcase, Phone } from "lucide-react";

import fibraMobileImg from "@/assets/fibraotticaemobile.jpg";
import networkingImg from "@/assets/networking.jpg";
import energiaImg from "@/assets/Energia.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServiziOpen, setIsMobileServiziOpen] = useState(false);
  const [isDesktopServiziOpen, setIsDesktopServiziOpen] = useState(false);

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsMobileServiziOpen(false);
    setIsDesktopServiziOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (window.location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeAllMenus();
  };

  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "L'azienda", path: "/chi-siamo", icon: Building2 },
  ];

  const serviziMenu = [
    { name: "Fibra & Mobile", path: "/servizi/fibra-mobile", image: fibraMobileImg, active: true },
    { name: "IT & Software", path: "/servizi/it-software", image: networkingImg, active: true },
    { name: "Energia", path: "#", image: energiaImg, active: false },
  ];

  return (
    <>
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>

      {/* Top Navbar Bianca con linea gialla */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-[#facc15] h-20 md:h-24 flex items-center justify-between px-4 md:px-6 lg:px-12">
        <div className="flex items-center gap-4 md:gap-5 shrink-0">
          <button
            onClick={() => setIsOpen(true)}
            className="text-[#facc15] hover:text-[#eab308] transition-colors shrink-0"
            aria-label="Apri menu"
          >
            <Menu size={32} />
          </button>
          <Link to="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center group">
            <img
              src="/fico-logo.png"
              alt="FI.CO. SRL"
              className="h-10 md:h-12 lg:h-[52px] w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Navigazione desktop */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-10 h-full">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className="text-[16px] lg:text-[18px] font-semibold text-[#1da1db] hover:text-[#012b3a] transition-colors flex items-center gap-2"
            >
              <item.icon size={20} /> {item.name}
            </Link>
          ))}

          {/* Menu Servizi Desktop */}
          <div className="relative shrink-0 flex items-center h-full">
            <div
              className={`fixed top-20 md:top-24 inset-x-0 bottom-0 bg-black/20 backdrop-blur-xs transition-opacity duration-500 -z-10 ${
                isDesktopServiziOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setIsDesktopServiziOpen(false)}
            />

            <div className="flex items-center gap-1.5">
              <Link
                to="/servizi"
                onClick={(e) => handleNavClick(e, "/servizi")}
                className="text-[16px] lg:text-[18px] font-semibold text-[#1da1db] hover:text-[#012b3a] transition-colors flex items-center gap-2"
              >
                <Briefcase size={20} /> Servizi
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDesktopServiziOpen(!isDesktopServiziOpen);
                }}
                className="p-1.5 rounded-lg bg-[#012b3a] border border-[#facc15] text-[#facc15] hover:bg-[#013a52] outline-none transition-colors"
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isDesktopServiziOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {/* Tendina Desktop */}
            <div
              className={`absolute top-[85%] left-1/2 -translate-x-1/2 w-[760px] pt-4 transition-all duration-500 z-[999] ${
                isDesktopServiziOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
              <div className="bg-white border border-[#facc15] rounded-2xl shadow-2xl p-5 grid grid-cols-3 gap-4">
                {serviziMenu.map((item) =>
                  item.active ? (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={(e) => handleNavClick(e, item.path)}
                      className="flex flex-col gap-3 p-3 rounded-xl hover:bg-[#1da1db]/5 text-[#012b3a] group transition-all"
                    >
                      <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#facc15]/40 shadow-sm">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <span className="font-bold text-base text-[#1da1db] group-hover:text-[#012b3a] transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  ) : (
                    <div key={item.name} className="flex flex-col gap-3 p-3 rounded-xl cursor-not-allowed">
                      <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-sm relative">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-base text-[#00779b]">{item.name}</span>
                        <span className="bg-[#1da1db] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          In Sviluppo
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <Link
            to="/contatti"
            onClick={(e) => handleNavClick(e, "/contatti")}
            className="text-[16px] lg:text-[18px] font-semibold text-[#1da1db] hover:text-[#012b3a] transition-colors flex items-center gap-2"
          >
            <Phone size={20} /> Contatti
          </Link>
        </div>
        <div className="hidden md:block w-[120px] shrink-0"></div>
      </nav>

      {/* Sidebar Mobile / Drawer Laterale (FICO_WEBSITE_2) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/25 backdrop-blur-xs z-[9999] transition-opacity"
          onClick={closeAllMenus}
        />
      )}

      <div
        className={`fixed top-0 left-0 bottom-0 w-[300px] bg-white z-[10000] transform transition-transform duration-300 border-r border-[#facc15] flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Intestazione della sidebar */}
        <div className="flex justify-between items-start p-6 border-b border-[#facc15] shrink-0">
          <div className="flex flex-col gap-7">
            <img src="/fico-logo.png" alt="FI.CO. SRL" className="h-12 w-auto object-contain" />
            <span className="text-sm font-bold tracking-[0.25em] text-[#1da1db] uppercase">MENU</span>
          </div>
          <button onClick={closeAllMenus} className="text-[#1da1db] hover:text-[#012b3a] pt-1 transition-colors">
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-6 overflow-y-auto flex-1 no-scrollbar">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className="text-xl font-semibold text-[#1da1db] hover:text-[#012b3a] transition-colors flex items-center gap-3"
            >
              <item.icon size={22} /> {item.name}
            </Link>
          ))}

          {/* Dropdown Servizi nella Sidebar */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <Link
                to="/servizi"
                onClick={(e) => handleNavClick(e, "/servizi")}
                className="text-xl font-semibold text-[#1da1db] hover:text-[#012b3a] transition-colors flex items-center gap-3 py-2 flex-1"
              >
                <Briefcase size={22} /> Servizi
              </Link>
              <button
                onClick={() => setIsMobileServiziOpen(!isMobileServiziOpen)}
                className="w-10 h-10 flex items-center justify-center text-[#facc15] bg-[#012b3a] border border-[#facc15] rounded-xl shadow-sm"
              >
                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${isMobileServiziOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isMobileServiziOpen ? "max-h-[900px]" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-6 pl-4 border-l border-[#facc15] ml-3 py-3">
                {serviziMenu.map((item) =>
                  item.active ? (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={(e) => handleNavClick(e, item.path)}
                      className="flex flex-col gap-2 text-base text-[#012b3a] group"
                    >
                      <div className="w-full aspect-video shrink-0 rounded-2xl overflow-hidden shadow-sm">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                  ) : (
                    <div key={item.name} className="flex flex-col gap-2 text-base cursor-not-allowed">
                      <div className="w-full aspect-video shrink-0 rounded-2xl overflow-hidden shadow-sm">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex items-center justify-end mt-1">
                        <span className="bg-[#1da1db] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          In Sviluppo
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <Link
            to="/contatti"
            onClick={(e) => handleNavClick(e, "/contatti")}
            className="text-xl font-semibold text-[#1da1db] hover:text-[#012b3a] transition-colors flex items-center gap-3"
          >
            <Phone size={22} /> Contatti
          </Link>

          {/* Footer della sidebar */}
          <div className="mt-auto pt-10 flex flex-col items-start">
            <p className="text-[12px] text-[#00779b] leading-relaxed mb-5">
              Telecomunicazioni, reti in fibra ottica, ingegneria, permitting e servizi IT per enti pubblici e privati.
            </p>
            <div className="w-full h-px bg-[#facc15] mb-4"></div>
            <p className="text-[11px] text-[#012b3a]/60">
              © {new Date().getFullYear()} FI.CO. SRL. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}