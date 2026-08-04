import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Home, Building2, Briefcase, Phone } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "L'azienda", path: "/chi-siamo", icon: Building2 },
  ];

  // Le due macro-aree basate sul tuo schema
  const businessUnit = [
    { name: "Fibra e Mobile", path: "/business/unit/fibra-mobile" },
    { name: "Energia", path: "/business/unit/energia" },
    { name: "PA e Privati", path: "/business/unit/pa-privati" },
  ];

  const businessDevelopment = [
    { name: "Commerciale", path: "/business/development/commerciale" },
    { name: "Marketing", path: "/business/development/marketing" },
    { name: "Partnership Strategiche", path: "/business/development/partnership" },
    { name: "Gare e Opportunità", path: "/business/development/gare" },
    { name: "Innovazione e Nuovi Servizi", path: "/business/development/innovazione" },
  ];

  return (
    <>
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>

      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#011C27] border-b border-[#0e7490]/20 h-20 flex items-center px-4 md:px-6 lg:px-10">
        <div className="flex items-center gap-4 md:gap-5 w-auto md:w-1/3 shrink-0 mr-4 md:mr-0">
          <button onClick={() => setIsOpen(true)} className="text-gray-300 hover:text-white transition-colors shrink-0">
            <Menu size={28} />
          </button>
          <Link to="/" className="flex items-center group">
            <img src="/fico-logo.png" alt="FI.CO. SRL" className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-start md:justify-center gap-6 md:gap-8 overflow-x-auto md:overflow-visible no-scrollbar h-full">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} className="text-[14.5px] md:text-[15px] font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 shrink-0" activeProps={{ className: "text-white border-b-2 border-[#38bdf8] pb-1" }} activeOptions={{ exact: item.path === "/" }}>
              <item.icon size={18} /> {item.name}
            </Link>
          ))}

          {/* MEGA MENU BUSINESS */}
          <div className="relative group shrink-0 flex items-center h-full">
            <Link to="/business" className="text-[14.5px] md:text-[15px] font-semibold text-gray-300 hover:text-white flex items-center gap-1.5" activeProps={{ className: "text-white border-b-2 border-[#38bdf8] pb-1" }}>
              <Briefcase size={18} /> Business <ChevronDown size={16} className="text-gray-400 group-hover:text-white ml-0.5 hidden md:block" />
            </Link>

            <div className="hidden md:block absolute top-[70%] left-1/2 -translate-x-1/2 w-[600px] pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-[999]">
              <div className="bg-[#011C27] border border-[#0e7490]/30 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-8">
                <div>
                  <Link to="/business/unit" className="text-[#facc15] font-bold text-sm tracking-wider uppercase block mb-3 hover:text-yellow-300">Business Unit</Link>
                  <div className="flex flex-col gap-2">
                    {businessUnit.map((item) => (
                      <Link key={item.name} to={item.path} className="text-sm text-gray-300 hover:text-white hover:pl-2 transition-all">{item.name}</Link>
                    ))}
                  </div>
                </div>
                <div>
                  <Link to="/business/development" className="text-[#facc15] font-bold text-sm tracking-wider uppercase block mb-3 hover:text-yellow-300">Business Development</Link>
                  <div className="flex flex-col gap-2">
                    {businessDevelopment.map((item) => (
                      <Link key={item.name} to={item.path} className="text-sm text-gray-300 hover:text-white hover:pl-2 transition-all">{item.name}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/contatti" className="text-[14.5px] md:text-[15px] font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 shrink-0" activeProps={{ className: "text-white border-b-2 border-[#38bdf8] pb-1" }}>
            <Phone size={18} /> Contatti
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-end w-1/3 shrink-0"></div>
      </nav>

      {/* SIDEBAR MOBILE */}
      {isOpen && <div className="fixed inset-0 bg-black/60 z-[9999] transition-opacity" onClick={() => setIsOpen(false)} />}
      <div className={`fixed top-0 left-0 bottom-0 w-80 bg-[#011C27] z-[10000] transform transition-transform duration-300 border-r border-[#0e7490]/20 flex flex-col overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center p-6 border-b border-[#0e7490]/20">
          <span className="text-lg font-bold tracking-widest text-[#38bdf8]">MENU</span>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white"><X size={26} /></button>
        </div>
        <div className="flex flex-col p-6 space-y-6">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-300 hover:text-[#38bdf8] flex items-center gap-3">
              <item.icon size={22} /> {item.name}
            </Link>
          ))}
          
          <div className="flex flex-col">
            <Link to="/business" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-300 hover:text-[#38bdf8] flex items-center gap-3 mb-4">
              <Briefcase size={22} /> Business
            </Link>
            
            <span className="text-xs font-bold text-[#facc15] uppercase tracking-wider ml-8 mb-2">Business Unit</span>
            <div className="flex flex-col gap-3 pl-8 border-l border-[#0e7490]/30 ml-3 mb-4">
              {businessUnit.map((item) => (
                <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="text-[15px] text-gray-400 hover:text-white">{item.name}</Link>
              ))}
            </div>

            <span className="text-xs font-bold text-[#facc15] uppercase tracking-wider ml-8 mb-2">Business Dev.</span>
            <div className="flex flex-col gap-3 pl-8 border-l border-[#0e7490]/30 ml-3">
              {businessDevelopment.map((item) => (
                <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="text-[15px] text-gray-400 hover:text-white">{item.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}