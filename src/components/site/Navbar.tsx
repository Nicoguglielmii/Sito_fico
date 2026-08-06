import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Home, Building2, Briefcase, Phone } from "lucide-react";

// Componente principale della navbar: gestisce sia la versione desktop sia quella mobile
// e organizza i collegamenti principali del sito in modo strutturato e accessibile.
export function Navbar() {
  // Stato che controlla se il menu laterale mobile è attualmente aperto o chiuso.
  const [isOpen, setIsOpen] = useState(false);

  // Stato dedicato al sottomenù Business nella versione mobile, così è possibile aprirlo o chiuderlo in modo indipendente.
  const [isMobileBusinessOpen, setIsMobileBusinessOpen] = useState(false);

  // Voci di navigazione principali visualizzate nella barra superiore.
  // Ogni elemento contiene il nome visualizzato, il percorso di routing e l'icona associata.
  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "L'azienda", path: "/chi-siamo", icon: Building2 },
  ];

  // Elenco dei collegamenti che compongono la sezione Business Unit.
  // Questa struttura consente di mantenere il menu ordinato e facilmente estendibile.
  const businessUnit = [
    { name: "Fibra e Mobile", path: "/business/unit/fibra-mobile" },
    { name: "Energia", path: "/business/unit/energia" },
    { name: "PA e Privati", path: "/business/unit/pa-privati" },
  ];

  // Elenco dei collegamenti dedicati alla sezione Business Development.
  // Viene usato sia nel mega menu desktop sia nel pannello mobile per mantenere coerente la navigazione.
  const businessDevelopment = [
    { name: "Commerciale", path: "/business/development/commerciale" },
    { name: "Marketing", path: "/business/development/marketing" },
    { name: "Partnership Strategiche", path: "/business/development/partnership" },
    { name: "Gare e Opportunità", path: "/business/development/gare" },
    { name: "Innovazione e Nuovi Servizi", path: "/business/development/innovazione" },
  ];

  // Funzione centralizzata per chiudere tutti i menu aperti quando si seleziona una voce o si esce dalla navigazione.
  // Questo evita che il menu mobile resti visibile dopo una navigazione interna.
  const closeAllMenus = () => {
    setIsOpen(false);
    setIsMobileBusinessOpen(false);
  };

  return (
    <>
      {/* Stile locale per nascondere la barra di scorrimento orizzontale quando il menu supera la larghezza disponibile. */}
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>

      {/* Barra principale di navigazione fissata in alto, con sfondo scuro e separatore sottile. */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#011C27] border-b border-[#0e7490]/20 h-20 flex items-center px-4 md:px-6 lg:px-10">
        {/* Sezione sinistra della navbar: pulsante menu mobile e logo dell'azienda. */}
        <div className="flex items-center gap-4 md:gap-5 w-auto md:w-1/3 shrink-0 mr-4 md:mr-0">
          {/* Bottone che apre il menu laterale mobile solo su dispositivi piccoli e medi. */}
          <button onClick={() => setIsOpen(true)} className="text-gray-300 hover:text-white transition-colors shrink-0">
            <Menu size={28} />
          </button>

          {/* Link al punto iniziale del sito, con effetto hover leggero sul logo. */}
          <Link to="/" className="flex items-center group">
            <img src="/fico-logo.png" alt="FI.CO. SRL" className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" />
          </Link>
        </div>

        {/* Area centrale della navbar: contiene i link principali e il mega menu Business per desktop. */}
        <div className="flex flex-1 items-center justify-start md:justify-center gap-6 md:gap-8 overflow-x-auto md:overflow-visible no-scrollbar h-full">
          {/* Renderizzazione dei link principali della navigazione superiore. */}
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} className="text-[14.5px] md:text-[15px] font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 shrink-0" activeProps={{ className: "text-white border-b-2 border-[#38bdf8] pb-1" }} activeOptions={{ exact: item.path === "/" }}>
              <item.icon size={18} /> {item.name}
            </Link>
          ))}

          {/* Mega menu Business visibile solo su desktop, con animazione di entrata dall'alto. */}
          <div className="relative group shrink-0 flex items-center h-full">
            <Link to="/business" className="text-[14.5px] md:text-[15px] font-semibold text-gray-300 hover:text-white flex items-center gap-1.5" activeProps={{ className: "text-white border-b-2 border-[#38bdf8] pb-1" }}>
              <Briefcase size={18} /> Business <ChevronDown size={16} className="text-gray-400 group-hover:text-white ml-0.5 hidden md:block" />
            </Link>

            {/* Contenitore del mega menu desktop: appare con transizione elegante al passaggio del mouse. */}
            <div className="hidden md:block absolute top-[70%] left-1/2 -translate-x-1/2 w-[600px] pt-4 opacity-0 -translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 z-[999]">
              <div className="bg-[#011C27] border border-[#0e7490]/30 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-8">
                {/* Colonna dedicata a Business Unit con i relativi collegamenti. */}
                <div>
                  <Link 
                    to="/business/unit" 
                    className="text-[#facc15] font-bold text-sm tracking-wider uppercase block mb-3 hover:text-yellow-300 opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"
                    style={{ transitionDelay: '150ms' }}
                  >
                    Business Unit
                  </Link>
                  <div className="flex flex-col gap-2">
                    {businessUnit.map((item, index) => (
                      <Link 
                        key={item.name} 
                        to={item.path} 
                        className="text-sm text-gray-300 hover:text-white hover:pl-2 block opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"
                        style={{ transitionDelay: `${300 + index * 150}ms` }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Colonna dedicata a Business Development con i relativi collegamenti. */}
                <div>
                  <Link 
                    to="/business/development" 
                    className="text-[#facc15] font-bold text-sm tracking-wider uppercase block mb-3 hover:text-yellow-300 opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"
                    style={{ transitionDelay: '150ms' }}
                  >
                    Business Development
                  </Link>
                  <div className="flex flex-col gap-2">
                    {businessDevelopment.map((item, index) => (
                      <Link 
                        key={item.name} 
                        to={item.path} 
                        className="text-sm text-gray-300 hover:text-white hover:pl-2 block opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"
                        style={{ transitionDelay: `${300 + index * 150}ms` }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Link finale della navbar per la sezione contatti. */}
          <Link to="/contatti" className="text-[14.5px] md:text-[15px] font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 shrink-0" activeProps={{ className: "text-white border-b-2 border-[#38bdf8] pb-1" }}>
            <Phone size={18} /> Contatti
          </Link>
        </div>

        {/* Spazio vuoto a destra per mantenere il layout bilanciato nella versione desktop. */}
        <div className="hidden md:flex items-center justify-end w-1/3 shrink-0"></div>
      </nav>

      {/* Overlay scuro che copre la pagina quando il menu mobile è aperto. */}
      {isOpen && <div className="fixed inset-0 bg-black/60 z-[9999] transition-opacity" onClick={closeAllMenus} />}

      {/* Pannello laterale mobile che contiene la navigazione completa in formato verticale. */}
      <div className={`fixed top-0 left-0 bottom-0 w-80 bg-[#011C27] z-[10000] transform transition-transform duration-300 border-r border-[#0e7490]/20 flex flex-col overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Header del menu mobile con titolo e pulsante di chiusura. */}
        <div className="flex justify-between items-center p-6 border-b border-[#0e7490]/20">
          <span className="text-lg font-bold tracking-widest text-[#38bdf8]">MENU</span>
          <button onClick={closeAllMenus} className="text-gray-400 hover:text-white"><X size={26} /></button>
        </div>

        {/* Contenuto del menu mobile con le sezioni principali e il sottomenù Business. */}
        <div className="flex flex-col p-6 space-y-6">
          {/* Link principali del menu mobile. */}
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={closeAllMenus} className="text-xl font-medium text-gray-300 hover:text-[#38bdf8] flex items-center gap-3">
              <item.icon size={22} /> {item.name}
            </Link>
          ))}

          {/* Contenitore dedicato alla sezione Business nel menu mobile. */}
          <div className="flex flex-col">
            {/* Riga con il link principale a Business e il pulsante per aprire il sottomenù. */}
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

            {/* Accordion mobile per mostrare i contenuti Business con animazione a cascata. */}
            <div className={`grid transition-all duration-500 ease-in-out ${isMobileBusinessOpen ? "grid-rows-[1fr] mb-4" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden flex flex-col">
                {/* Sezione Business Unit nel menu mobile. */}
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

                {/* Sezione Business Development nel menu mobile. */}
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
        </div>
      </div>
    </>
  );
}