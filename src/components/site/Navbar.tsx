import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Home, Building2, Briefcase, Phone, Linkedin } from "lucide-react";

// Importazione delle immagini per i servizi nel menu
import fibraMobileImg from "@/assets/fibraotticaemobile.jpg";
import networkingImg from "@/assets/networking.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServiziOpen, setIsMobileServiziOpen] = useState(false);
  const [isDesktopServiziOpen, setIsDesktopServiziOpen] = useState(false);

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsMobileServiziOpen(false);
    setIsDesktopServiziOpen(false);
  };

  // Scroll in cima dolcemente se clicchiamo sulla pagina in cui siamo già
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
    { name: "Fibra & Mobile", path: "/servizi/fibra-mobile", image: fibraMobileImg },
    { name: "IT & Software", path: "/servizi/it-software", image: networkingImg },
  ];

  return (
    <>
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>

      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#011C27] border-b border-[#0e7490]/20 h-20 md:h-24 lg:h-[100px] flex items-center justify-between px-4 md:px-6 lg:px-12">
        <div className="flex items-center gap-4 md:gap-5 shrink-0">
          <button onClick={() => setIsOpen(true)} className="text-[#fde047] hover:text-yellow-200 transition-colors shrink-0">
            <Menu size={32} />
          </button>
          <Link to="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center group">
            <img src="/fico-logo.png" alt="FI.CO. SRL" className="h-10 md:h-12 lg:h-[52px] w-auto object-contain transition-transform group-hover:scale-105" />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-10 h-full">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={(e) => handleNavClick(e, item.path)} className="text-[16px] lg:text-[18px] font-semibold text-[#fde047] hover:text-yellow-200 flex items-center gap-2">
              <item.icon size={20} /> {item.name}
            </Link>
          ))}

          {/* MENU SERVIZI DESKTOP */}
          <div className="relative shrink-0 flex items-center h-full">
            <div className={`fixed top-20 md:top-24 lg:top-[100px] inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 -z-10 ${isDesktopServiziOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setIsDesktopServiziOpen(false)} />
            
            <div className="flex items-center gap-0.5">
              <Link to="/servizi" onClick={(e) => handleNavClick(e, "/servizi")} className="text-[16px] lg:text-[18px] font-semibold text-[#fde047] hover:text-yellow-200 flex items-center gap-2">
                <Briefcase size={20} /> Servizi
              </Link>
              <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsDesktopServiziOpen(!isDesktopServiziOpen); }} className="p-1 text-[#fde047] hover:text-yellow-200 outline-none transition-colors">
                <ChevronDown size={18} className={`transition-transform duration-300 ${isDesktopServiziOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Tendina Desktop - Layout a Griglia per immagini grandi */}
            <div className={`absolute top-[80%] left-1/2 -translate-x-1/2 w-[540px] pt-4 transition-all duration-500 z-[999] ${isDesktopServiziOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
              <div className="bg-[#011C27] border border-[#0e7490]/30 rounded-2xl shadow-2xl p-5 grid grid-cols-2 gap-4">
                {serviziMenu.map((item) => (
                  <Link key={item.name} to={item.path} onClick={(e) => handleNavClick(e, item.path)} className="flex flex-col gap-3 p-3 rounded-xl hover:bg-[#0e7490]/20 text-white group transition-all">
                    {/* Immagine larga a tutto riquadro */}
                    <div className="w-full aspect-video rounded-lg overflow-hidden border border-[#0e7490]/30 shadow-md">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    {/* Testo sotto l'immagine */}
                    <span className="font-semibold text-base group-hover:text-[#fde047] transition-colors">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/contatti" onClick={(e) => handleNavClick(e, "/contatti")} className="text-[16px] lg:text-[18px] font-semibold text-[#fde047] hover:text-yellow-200 flex items-center gap-2">
            <Phone size={20} /> Contatti
          </Link>
        </div>
        <div className="hidden md:block w-[120px] shrink-0"></div>
      </nav>

      {/* MOBILE SIDEBAR */}
      {isOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] transition-opacity" onClick={closeAllMenus} />}
      
      <div className={`fixed top-0 left-0 bottom-0 w-[280px] bg-[#011C27] z-[10000] transform transition-transform duration-300 border-r border-[#0e7490]/20 flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
        <div className="flex justify-between items-center p-6 border-b border-[#0e7490]/20 shrink-0">
          <span className="text-lg font-bold tracking-widest text-[#38bdf8]">MENU</span>
          <button onClick={closeAllMenus} className="text-[#fde047]">
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-6 overflow-y-auto flex-1 no-scrollbar">
          {/* LINK PRINCIPALI */}
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={(e) => handleNavClick(e, item.path)} className="text-xl font-medium text-[#fde047] flex items-center gap-3">
              <item.icon size={22} /> {item.name}
            </Link>
          ))}
          
          {/* MENU A TENDINA SERVIZI (Mobile) */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <Link to="/servizi" onClick={(e) => handleNavClick(e, "/servizi")} className="text-xl font-medium text-[#fde047] flex items-center gap-3 py-2 flex-1">
                <Briefcase size={22} /> Servizi
              </Link>
              <button onClick={() => setIsMobileServiziOpen(!isMobileServiziOpen)} className="p-2 text-[#fde047] bg-white/5 rounded-lg">
                <ChevronDown size={22} className={`transition-transform duration-300 ${isMobileServiziOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            {/* Altezza max aumentata notevolmente (max-h-[500px]) per le immagini impilate */}
            <div className={`overflow-hidden transition-all duration-300 ${isMobileServiziOpen ? "max-h-[500px]" : "max-h-0"}`}>
              <div className="flex flex-col gap-6 pl-4 border-l border-[#0e7490]/30 ml-3 py-3">
                {serviziMenu.map((item) => (
                  <Link key={item.name} to={item.path} onClick={(e) => handleNavClick(e, item.path)} className="flex flex-col gap-2 text-base text-gray-200 group">
                    {/* Immagine a larghezza intera anche su mobile */}
                    <div className="w-full aspect-video shrink-0 rounded-lg overflow-hidden border border-[#0e7490]/30 shadow-sm">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    {/* Testo sotto l'immagine */}
                    <span className="font-medium group-hover:text-[#fde047] transition-colors">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Link to="/contatti" onClick={(e) => handleNavClick(e, "/contatti")} className="text-xl font-medium text-[#fde047] flex items-center gap-3">
            <Phone size={22} /> Contatti
          </Link>

          {/* FOOTER DELLA SIDEBAR */}
          <div className="mt-auto pt-10 flex flex-col items-start">
            <img src="/fico-logo.png" alt="FI.CO. SRL" className="h-6 w-auto object-contain mb-4" />
            <p className="text-[12px] text-gray-400 leading-relaxed mb-5">
              Telecomunicazioni, reti in fibra ottica, ingegneria, permitting e servizi IT per enti pubblici e privati.
            </p>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full border border-[#0e7490]/50 flex items-center justify-center text-gray-400 hover:text-[#38bdf8] hover:border-[#38bdf8] transition-all mb-5"
            >
              <Linkedin size={15} />
            </a>
            <div className="w-full h-px bg-[#0e7490]/20 mb-4"></div>
            <p className="text-[11px] text-gray-500">
              © {new Date().getFullYear()} FI.CO. SRL. Tutti i diritti riservati.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}