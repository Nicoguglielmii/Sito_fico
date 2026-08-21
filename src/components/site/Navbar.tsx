import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Home, Building2, Briefcase, Phone } from "lucide-react";

// Le immagini vengono importate come moduli così Vite può gestirle, ottimizzarle
// e risolvere correttamente il percorso finale durante il build.
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
  // La navbar resta montata durante la navigazione: questi stati descrivono
  // quali pannelli devono essere visibili in ciascun momento.

  // Controlla l'apertura della sidebar usata sui dispositivi mobili.
  const [isOpen, setIsOpen] = useState(false);

  // Controlla l'espansione della sezione Business all'interno della sidebar mobile.
  const [isMobileBusinessOpen, setIsMobileBusinessOpen] = useState(false);

  // Controlla l'apertura esplicita del mega-menu Business su desktop.
  const [isDesktopBusinessOpen, setIsDesktopBusinessOpen] = useState(false);

  // Le voci comuni non hanno bisogno di un sottomenu: vengono riutilizzate
  // sia nella barra desktop sia nella sidebar mobile.
  // Voci principali mostrate direttamente nella barra desktop e nella sidebar mobile.
  // L'icona viene mantenuta nei dati così il markup può essere generato con map().
  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "L'azienda", path: "/chi-siamo", icon: Building2 },
  ];

  // Link della colonna Business Unit del mega-menu.
  // Ogni voce porta a una pagina dedicata e contiene l'immagine della relativa area.
  const businessUnit = [
    { name: "Fibra e Mobile", path: "/business/unit/fibra-mobile", image: imgUnit1 },
    { name: "Energia", path: "/business/unit/energia", image: imgUnit2 },
    { name: "PA e Privati", path: "/business/unit/pa-privati", image: imgUnit3 },
  ];

  // Le immagini delle card desktop appartengono alle singole pagine, non al
  // contenitore Business: per questo ogni record conserva il proprio path.
  // Link della colonna Business Development del mega-menu.
  // Le immagini vengono usate nelle card desktop e non sono mostrate nella sidebar mobile.
  const businessDevelopment = [
    { name: "Commerciale", path: "/business/development/commerciale", image: imgDev1 },
    { name: "Marketing", path: "/business/development/marketing", image: imgDev2 },
    { name: "Partnership Strategiche", path: "/business/development/partnership", image: imgDev3 },
    { name: "Gare e Opportunità", path: "/business/development/gare", image: imgDev4 },
    { name: "Innovazione e Nuovi Servizi", path: "/business/development/innovazione", image: imgDev5 },
  ];

  // Chiude ogni pannello aperto quando l'utente cambia pagina o clicca su un link.
  // Centralizzare questa operazione evita che una vista rimanga visibile sopra la successiva.
  const closeAllMenus = () => {
    // Chiudiamo tutti i livelli insieme per evitare stati incoerenti, ad esempio
    // una sidebar mobile ancora aperta dopo aver seguito un link.
    setIsOpen(false);
    setIsMobileBusinessOpen(false);
    setIsDesktopBusinessOpen(false);
  };

  // La navbar contiene due esperienze responsive:
  // - navigazione orizzontale e mega-menu su desktop;
  // - sidebar laterale con sottomenu espandibile su mobile.
  return (
    <>
      {/* Stile per nascondere le barre di scorrimento brutte da vedere */}
      {/* Nasconde la scrollbar mantenendo comunque lo scorrimento nei pannelli lunghi. */}
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>

      {/* MODIFICA EFFETTUATA QUI: Altezza (h) ingrandita su md e lg */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#011C27] border-b border-[#0e7490]/20 h-20 md:h-24 lg:h-[100px] flex items-center justify-between px-4 md:px-6 lg:px-12">
        
        {/* Area sinistra: pulsante per la sidebar e logo con link alla home. */}
        <div className="flex items-center gap-4 md:gap-5 shrink-0">
          {/* Il pulsante è disponibile a tutte le larghezze; su desktop offre
              un accesso compatto alla stessa navigazione della sidebar. */}
          {/* Su mobile apre la navigazione laterale; su desktop resta disponibile come comando compatto. */}
          <button onClick={() => setIsOpen(true)} className="text-[#fde047] hover:text-yellow-200 transition-colors shrink-0">
            {/* MODIFICA EFFETTUATA QUI: Icona Menu più grande */}
            <Menu size={32} />
          </button>
          <Link to="/" onClick={closeAllMenus} className="flex items-center group">
            {/* MODIFICA EFFETTUATA QUI: Logo ingrandito */}
            <img src="/fico-logo.png" alt="FI.CO. SRL" className="h-10 md:h-12 lg:h-[52px] w-auto object-contain transition-transform group-hover:scale-105" />
          </Link>
        </div>

        {/* Area centrale visibile da breakpoint md in poi. */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-10 h-full">
          {/* Il contenitore centrale viene nascosto sotto md per lasciare spazio
              alla versione laterale pensata per gli schermi stretti. */}
          {/* Le prime voci vengono generate dall'array menuItems per evitare markup duplicato. */}
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={closeAllMenus} 
              // MODIFICA EFFETTUATA QUI: Testo e icone ingranditi
              className="text-[16px] lg:text-[18px] font-semibold text-[#fde047] hover:text-yellow-200 flex items-center gap-2 shrink-0" 
              activeProps={{ className: "text-[#fde047] border-b-2 border-[#fde047] pb-1" }} 
              activeOptions={{ exact: item.path === "/" }}
            >
              <item.icon size={20} /> {item.name}
            </Link>
          ))}

          {/* Mega-menu Business: il contenitore group abilita anche l'apertura al passaggio del mouse. */}
          <div className="relative group shrink-0 flex items-center h-full">
            {/* group-hover permette l'apertura rapida con il mouse, mentre lo
              stato React serve a mantenere il pannello aperto dopo un click. */}
            
            {/* Overlay dietro il pannello: oscura la pagina e consente di chiudere il menu con un click. */}
            {/* MODIFICA EFFETTUATA QUI: Adattato il "top" del backdrop alla nuova altezza della navbar */}
            <div 
              className={`fixed top-20 md:top-24 lg:top-[100px] inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 -z-10 ${isDesktopBusinessOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none group-hover:opacity-100"}`} 
              onClick={() => setIsDesktopBusinessOpen(false)}
            />

            {/* Il link Business e il pulsante freccia sono separati per permettere due azioni distinte. */}
            <div className="flex items-center gap-0.5">
              <Link 
                to="/business" 
                onClick={closeAllMenus}
                // MODIFICA EFFETTUATA QUI: Testo e icone ingranditi
                className="text-[16px] lg:text-[18px] font-semibold text-[#fde047] hover:text-yellow-200 flex items-center gap-2" 
                activeProps={{ className: "text-[#fde047] border-b-2 border-[#fde047] pb-1" }}
              >
                <Briefcase size={20} /> Business 
              </Link>
              
              {/* Il pulsante apre o chiude esplicitamente il mega-menu senza seguire il link principale. */}
              <button 
                onClick={(e) => {
                  // Il controllo freccia non deve attivare anche il Link Business
                  // né propagare il click al contenitore del menu.
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDesktopBusinessOpen(!isDesktopBusinessOpen);
                }}
                className="flex items-center justify-center p-1 text-[#fde047] group-hover:text-yellow-200 outline-none"
                aria-label="Toggle sottomenu Business"
              >
                <ChevronDown size={18} className={`transition-transform duration-300 ${isDesktopBusinessOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Pannello desktop con altezza limitata e scorrimento interno quando necessario. */}
            <div className={`absolute top-[70%] left-1/2 -translate-x-1/2 w-[1050px] pt-4 transition-all duration-500 z-[999] ${isDesktopBusinessOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"}`}>
              
              <div className="bg-[#011C27] border border-[#0e7490]/30 rounded-2xl shadow-2xl p-10 flex gap-12 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
                {/* Il pannello usa due colonne indipendenti: la prima contiene
                  le unit operative, la seconda le attività di sviluppo. */}
                
                {/* Colonna Business Unit: intestazione dorata seguita da tre card con immagini. */}
                <div className="w-1/3">
                  <Link 
                    to="/business/unit" 
                    onClick={closeAllMenus}
                    className="text-[#fde047] font-bold text-sm tracking-wider uppercase block mb-4 hover:text-yellow-200 transition-colors"
                  >
                    Business Unit
                  </Link>
                  {/* Le card sono sempre presenti quando il pannello è aperto, così tutte le sottovoci restano visibili. */}
                  <div className="flex flex-col gap-4">
                    {businessUnit.map((item, index) => (
                      // Il ritardo crescente crea una comparsa sequenziale delle card.
                      <Link 
                        key={item.name} 
                        to={item.path} 
                        onClick={closeAllMenus}
                        className="group/card block p-3 -ml-3 rounded-xl hover:bg-white/5 transition-all duration-500 ease-out"
                        style={{ transitionDelay: `${100 + index * 100}ms` }}
                      >
                          <span className="text-[15px] font-bold text-white group-hover/card:text-gray-200 transition-colors block mb-2">
                          {item.name}
                        </span>
                        {/* Immagine della sottovoce con zoom leggero al passaggio del mouse. */}
                        <div className="w-full h-28 rounded-lg overflow-hidden relative border border-white/10 group-hover/card:border-[#38bdf8]/50 transition-colors">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-[#011C27]/40 group-hover/card:bg-transparent transition-colors duration-500" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Colonna Business Development: griglia a due colonne con cinque card. */}
                <div className="w-2/3 border-l border-[#0e7490]/30 pl-12">
                  <Link 
                    to="/business/development" 
                    onClick={closeAllMenus}
                    className="text-[#fde047] font-bold text-sm tracking-wider uppercase block mb-4 hover:text-yellow-200 transition-colors"
                  >
                    Business Development
                  </Link>
                  {/* La griglia consente di distribuire le sottovoci su due colonne come nel layout desktop. */}
                  <div className="grid grid-cols-2 gap-x-10 gap-y-4 pb-2">
                    {businessDevelopment.map((item, index) => (
                      // Anche qui il delay lega l'ordine dell'animazione all'ordine
                      // naturale delle voci nell'array.
                      <Link 
                        key={item.name} 
                        to={item.path} 
                        onClick={closeAllMenus}
                        className="group/card block p-3 -ml-3 rounded-xl hover:bg-white/5 transition-all duration-500 ease-out"
                        style={{ transitionDelay: `${200 + index * 100}ms` }}
                      >
                        <span className="text-[15px] font-bold text-white group-hover/card:text-gray-200 transition-colors block mb-2 truncate">
                          {item.name}
                        </span>
                        {/* Ogni card collega direttamente alla pagina dell'area selezionata. */}
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

          <Link 
            to="/contatti" 
            onClick={closeAllMenus} 
            // MODIFICA EFFETTUATA QUI: Testo e icone ingranditi
            className="text-[16px] lg:text-[18px] font-semibold text-[#fde047] hover:text-yellow-200 flex items-center gap-2 shrink-0" 
            activeProps={{ className: "text-[#fde047] border-b-2 border-[#fde047] pb-1" }}
          >
            <Phone size={20} /> Contatti
          </Link>
        </div>
        
        <div className="hidden md:block w-[120px] shrink-0"></div>
      </nav>

      {/* Sidebar mobile: overlay, pannello laterale e sottomenu Business espandibile. */}
        {/* L'overlay intercetta i click esterni e usa lo stesso reset dei pulsanti
          interni, così l'utente ha un modo prevedibile per uscire dal menu. */}
      {isOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] transition-opacity" onClick={closeAllMenus} />}
      
        {/* Il pannello viene spostato fuori dallo schermo invece di essere smontato:
          questo consente alla transizione CSS di animare apertura e chiusura. */}
      <div className={`fixed top-0 left-0 bottom-0 w-[260px] bg-[#011C27] z-[10000] transform transition-transform duration-300 border-r border-[#0e7490]/20 flex flex-col overflow-y-auto no-scrollbar ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Intestazione della sidebar con titolo e pulsante di chiusura. */}
        <div className="flex justify-between items-center p-6 border-b border-[#0e7490]/20">
          <span className="text-lg font-bold tracking-widest text-[#38bdf8]">MENU</span>
          <button onClick={closeAllMenus} className="text-[#fde047] hover:text-yellow-200"><X size={26} /></button>
        </div>
        {/* Corpo della navigazione mobile, disposto verticalmente per facilitare l'uso su schermi stretti. */}
        <div className="flex flex-col p-6 space-y-6">
          
          {/* Voci principali mobile, corrispondenti a quelle della barra desktop. */}
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={closeAllMenus} className="text-xl font-medium text-[#fde047] hover:text-yellow-200 flex items-center gap-3">
              <item.icon size={22} /> {item.name}
            </Link>
          ))}
          
          {/* Sezione Business mobile: il link apre la pagina generale, la freccia apre le sottovoci. */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <Link 
                to="/business" 
                onClick={closeAllMenus} 
                className="text-xl font-medium text-[#fde047] hover:text-yellow-200 flex items-center gap-3 py-2 flex-1"
              >
                <Briefcase size={22} /> Business
              </Link>
              <button 
                // Il link e il pulsante hanno responsabilità separate: il primo
                // naviga alla pagina Business, il secondo espande le sottovoci.
                onClick={() => setIsMobileBusinessOpen(!isMobileBusinessOpen)}
                className="p-2 text-[#fde047] hover:text-yellow-200 rounded-lg bg-white/5 border border-white/10 transition-colors"
                aria-label="Apri sottomenu Business"
              >
                <ChevronDown size={22} className={`transition-transform duration-300 ${isMobileBusinessOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            
            {/* La griglia anima l'altezza del sottomenu senza rimuoverlo dal DOM. */}
            <div className={`grid transition-all duration-500 ease-in-out ${isMobileBusinessOpen ? "grid-rows-[1fr] mb-4" : "grid-rows-[0fr]"}`}>
              {/* grid-rows-[0fr] comprime il contenitore chiuso; overflow-hidden
                  impedisce al contenuto di fuoriuscire durante la transizione. */}
              <div className="overflow-hidden flex flex-col">
                
                {/* Prima sezione del sottomenu mobile: Business Unit. */}
                <span 
                  className={`text-xs font-bold text-[#fde047] uppercase tracking-wider ml-8 mb-2 mt-3 block transition-all duration-700 ease-out ${isMobileBusinessOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
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
                      className={`text-[15px] text-white hover:text-gray-200 block transition-all duration-700 ease-out ${isMobileBusinessOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
                      style={{ transitionDelay: isMobileBusinessOpen ? `${300 + index * 150}ms` : '0ms' }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Seconda sezione del sottomenu mobile: Business Development. */}
                <span 
                  className={`text-xs font-bold text-[#fde047] uppercase tracking-wider ml-8 mb-2 block transition-all duration-700 ease-out ${isMobileBusinessOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
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
                      className={`text-[15px] text-white hover:text-gray-200 block transition-all duration-700 ease-out ${isMobileBusinessOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
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
            className="text-xl font-medium text-[#fde047] hover:text-yellow-200 flex items-center gap-3"
          >
            <Phone size={22} /> Contatti
          </Link>

        </div>
      </div>
    </>
  );
}