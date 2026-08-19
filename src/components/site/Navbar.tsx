import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Home, Building2, Briefcase, Phone } from "lucide-react";

// =========================================================================
// IMPORT NUOVE IMMAGINI PER IL MEGA MENU
// =========================================================================
// Business Unit
import imgUnit1 from "@/assets/fibraotticaemobile.jpg"; 
import imgUnit2 from "@/assets/Energia.jpg";
import imgUnit3 from "@/assets/PAeprivati.webp";

// Business Development
import imgDev1 from "@/assets/commercio.jpg";
import imgDev2 from "@/assets/marketing.webp";
import imgDev3 from "@/assets/collab.jpg";
import imgDev4 from "@/assets/opportunita.jpg";
import imgDev5 from "@/assets/innovazione.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileBusinessOpen, setIsMobileBusinessOpen] = useState(false);
  const [isDesktopBusinessOpen, setIsDesktopBusinessOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "L'azienda", path: "/chi-siamo", icon: Building2 },
  ];

  const businessUnit = [
    { name: "Fibra e Mobile", path: "/business/unit/fibra-mobile", image: imgUnit1 },
    { name: "Energia", path: "/business/unit/energia", image: imgUnit2 },
    { name: "PA e Privati", path: "/business/unit/pa-privati", image: imgUnit3 },
  ];

  const businessDevelopment = [
    { name: "Commerciale", path: "/business/development/commerciale", image: imgDev1 },
    { name: "Marketing", path: "/business/development/marketing", image: imgDev2 },
    { name: "Partnership Strategiche", path: "/business/development/partnership", image: imgDev3 },
    { name: "Gare e Opportunità", path: "/business/development/gare", image: imgDev4 },
    { name: "Innovazione e Nuovi Servizi", path: "/business/development/innovazione", image: imgDev5 },
  ];

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsMobileBusinessOpen(false);
    setIsDesktopBusinessOpen(false);
  };

  return (
    <>
      {/* Stile per nascondere le barre di scorrimento brutte da vedere */}
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>

      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#011C27] border-b border-[#0e7490]/20 h-20 flex items-center justify-between px-4 md:px-6 lg:px-10">
        
        {/* BLOCCO SINISTRO */}
        <div className="flex items-center gap-4 md:gap-5 shrink-0">
          <button onClick={() => setIsOpen(true)} className="text-gray-300 hover:text-white transition-colors shrink-0">
            <Menu size={28} />
          </button>
          <Link to="/" onClick={closeAllMenus} className="flex items-center group">
            <img src="/fico-logo.png" alt="FI.CO. SRL" className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" />
          </Link>
        </div>

        {/* BLOCCO CENTRALE (Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8 h-full">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={closeAllMenus} className="text-[14.5px] lg:text-[15px] font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 shrink-0" activeProps={{ className: "text-white border-b-2 border-[#38bdf8] pb-1" }} activeOptions={{ exact: item.path === "/" }}>
              <item.icon size={18} /> {item.name}
            </Link>
          ))}

          {/* MEGA MENU BUSINESS (Desktop) */}
          <div className="relative group shrink-0 flex items-center h-full">
            
            <div 
              className={`fixed top-20 inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 -z-10 ${isDesktopBusinessOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none group-hover:opacity-100"}`} 
              onClick={() => setIsDesktopBusinessOpen(false)}
            />

            <div className="flex items-center gap-0.5">
              <Link 
                to="/business" 
                onClick={closeAllMenus}
                className="text-[14.5px] lg:text-[15px] font-semibold text-gray-300 hover:text-white flex items-center gap-1.5" 
                activeProps={{ className: "text-white border-b-2 border-[#38bdf8] pb-1" }}
              >
                <Briefcase size={18} /> Business 
              </Link>
              
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDesktopBusinessOpen(!isDesktopBusinessOpen);
                }}
                className="flex items-center justify-center p-1 text-gray-400 group-hover:text-white outline-none"
                aria-label="Toggle sottomenu Business"
              >
                <ChevronDown size={16} className={`transition-transform duration-300 ${isDesktopBusinessOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* CONTENITORE MEGA MENU */}
            <div className={`absolute top-[70%] left-1/2 -translate-x-1/2 w-[1050px] pt-4 transition-all duration-500 z-[999] ${isDesktopBusinessOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"}`}>
              
              {/* MODIFICA EFFETTUATA QUI: Aggiunto "max-h-[calc(100vh-100px)] overflow-y-auto no-scrollbar" per evitare il taglio */}
              <div className="bg-[#011C27] border border-[#0e7490]/30 rounded-2xl shadow-2xl p-10 flex gap-12 max-h-[calc(100vh-100px)] overflow-y-auto no-scrollbar">
                
                {/* Colonna Business Unit (1/3 dello spazio) */}
                <div className="w-1/3">
                  <Link 
                    to="/business/unit" 
                    onClick={closeAllMenus}
                    className="text-[#facc15] font-bold text-sm tracking-wider uppercase block mb-4 hover:text-yellow-300 transition-colors"
                  >
                    Business Unit
                  </Link>
                  <div className="flex flex-col gap-4">
                    {businessUnit.map((item, index) => (
                      <Link 
                        key={item.name} 
                        to={item.path} 
                        onClick={closeAllMenus}
                        className={`group/card block p-3 -ml-3 rounded-xl hover:bg-white/5 transition-all duration-500 ease-out ${isDesktopBusinessOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0"}`}
                        style={{ transitionDelay: `${100 + index * 100}ms` }}
                      >
                        <span className="text-[15px] font-bold text-gray-200 group-hover/card:text-[#38bdf8] transition-colors block mb-2">
                          {item.name}
                        </span>
                        <div className="w-full h-28 rounded-lg overflow-hidden relative border border-white/10 group-hover/card:border-[#38bdf8]/50 transition-colors">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-[#011C27]/40 group-hover/card:bg-transparent transition-colors duration-500" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Colonna Business Development (2/3 dello spazio, divisa in 2) */}
                <div className="w-2/3 border-l border-[#0e7490]/30 pl-12">
                  <Link 
                    to="/business/development" 
                    onClick={closeAllMenus}
                    className="text-[#facc15] font-bold text-sm tracking-wider uppercase block mb-4 hover:text-yellow-300 transition-colors"
                  >
                    Business Development
                  </Link>
                  <div className="grid grid-cols-2 gap-x-10 gap-y-4 pb-2">
                    {businessDevelopment.map((item, index) => (
                      <Link 
                        key={item.name} 
                        to={item.path} 
                        onClick={closeAllMenus}
                        className={`group/card block p-3 -ml-3 rounded-xl hover:bg-white/5 transition-all duration-500 ease-out ${isDesktopBusinessOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0"}`}
                        style={{ transitionDelay: `${200 + index * 100}ms` }}
                      >
                        <span className="text-[15px] font-bold text-gray-200 group-hover/card:text-[#38bdf8] transition-colors block mb-2 truncate">
                          {item.name}
                        </span>
                        <div className="w-full h-28 rounded-lg overflow-hidden relative border border-white/10 group-hover/card:border-[#38bdf8]/50 transition-colors">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-[#011C27]/40 group-hover/card:bg-transparent transition-colors duration-500" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          <Link to="/contatti" onClick={closeAllMenus} className="text-[14.5px] lg:text-[15px] font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 shrink-0" activeProps={{ className: "text-white border-b-2 border-[#38bdf8] pb-1" }}>
            <Phone size={18} /> Contatti
          </Link>
        </div>
        
        <div className="hidden md:block w-[120px] shrink-0"></div>
      </nav>

      {/* SIDEBAR MOBILE */}
      {isOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] transition-opacity" onClick={closeAllMenus} />}
      
      <div className={`fixed top-0 left-0 bottom-0 w-[260px] bg-[#011C27] z-[10000] transform transition-transform duration-300 border-r border-[#0e7490]/20 flex flex-col overflow-y-auto no-scrollbar ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center p-6 border-b border-[#0e7490]/20">
          <span className="text-lg font-bold tracking-widest text-[#38bdf8]">MENU</span>
          <button onClick={closeAllMenus} className="text-gray-400 hover:text-white"><X size={26} /></button>
        </div>
        <div className="flex flex-col p-6 space-y-6">
          
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={closeAllMenus} className="text-xl font-medium text-gray-300 hover:text-[#38bdf8] flex items-center gap-3">
              <item.icon size={22} /> {item.name}
            </Link>
          ))}
          
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <Link 
                to="/business" 
                onClick={closeAllMenus} 
                className="text-xl font-medium text-gray-300 hover:text-[#38bdf8] flex items-center gap-3 py-2 flex-1"
              >
                <Briefcase size={22} /> Business
              </Link>
              <button 
                onClick={() => setIsMobileBusinessOpen(!isMobileBusinessOpen)}
                className="p-2 text-gray-300 hover:text-white rounded-lg bg-white/5 border border-white/10 transition-colors"
                aria-label="Apri sottomenu Business"
              >
                <ChevronDown size={22} className={`transition-transform duration-300 ${isMobileBusinessOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            
            <div className={`grid transition-all duration-500 ease-in-out ${isMobileBusinessOpen ? "grid-rows-[1fr] mb-4" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden flex flex-col">
                
                <span 
                  className={`text-xs font-bold text-[#facc15] uppercase tracking-wider ml-8 mb-2 mt-3 block transition-all duration-700 ease-out ${isMobileBusinessOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
                  style={{ transitionDelay: isMobileBusinessOpen ? '150ms' : '0ms' }}
                >
                  Business Unit
                </span>
                <div className="flex flex-col gap-3 pl-8 border-l border-[#0e7490]/30 ml-3 mb-4">
                  {businessUnit.map((item, index) => (
                    <Link 
                      key={item.name} 
                      to={item.path} 
                      onClick={closeAllMenus} 
                      className={`text-[15px] text-gray-400 hover:text-white block transition-all duration-700 ease-out ${isMobileBusinessOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
                      style={{ transitionDelay: isMobileBusinessOpen ? `${300 + index * 150}ms` : '0ms' }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <span 
                  className={`text-xs font-bold text-[#facc15] uppercase tracking-wider ml-8 mb-2 block transition-all duration-700 ease-out ${isMobileBusinessOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
                  style={{ transitionDelay: isMobileBusinessOpen ? '150ms' : '0ms' }}
                >
                  Business Dev.
                </span>
                <div className="flex flex-col gap-3 pl-8 border-l border-[#0e7490]/30 ml-3 pb-2">
                  {businessDevelopment.map((item, index) => (
                    <Link 
                      key={item.name} 
                      to={item.path} 
                      onClick={closeAllMenus} 
                      className={`text-[15px] text-gray-400 hover:text-white block transition-all duration-700 ease-out ${isMobileBusinessOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
                      style={{ transitionDelay: isMobileBusinessOpen ? `${300 + index * 150}ms` : '0ms' }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </div>

          <Link 
            to="/contatti" 
            onClick={closeAllMenus} 
            className="text-xl font-medium text-gray-300 hover:text-[#38bdf8] flex items-center gap-3"
          >
            <Phone size={22} /> Contatti
          </Link>

        </div>
      </div>
    </>
  );
}