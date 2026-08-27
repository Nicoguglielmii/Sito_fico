import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Home, Building2, Briefcase, Phone } from "lucide-react";

// -----------------------------------------------------------------------------
// Import immagini della navbar e del mega menu
// -----------------------------------------------------------------------------
// Questa componente usa asset statici per rendere le card del Business menu più
// visive e coerenti con il branding del sito. Vite li tratta come moduli e li
// risolve correttamente durante il build, mantenendo un percorso finale stabile
// anche quando il progetto viene distribuito in produzione.
// -----------------------------------------------------------------------------
// Business Unit: immagini dedicate alle aree operative della struttura.
import imgUnit1 from "@/assets/fibraotticaemobile.jpg";
import imgUnit2 from "@/assets/Energia.jpg";
import imgUnit3 from "@/assets/PAeprivati.webp";

// Business Development: immagini usate nelle card di navigazione desktop e per
// rappresentare le attività strategiche e le opportunità di crescita.
import imgDev1 from "@/assets/commercio.jpg";
import imgDev2 from "@/assets/marketing.webp";
import imgDev3 from "@/assets/collab.jpg";
import imgDev4 from "@/assets/opportunita.jpg";
import imgDev5 from "@/assets/innovazione.jpg";

export function Navbar() {
  // ---------------------------------------------------------------------------
  // Stato della navbar
  // ---------------------------------------------------------------------------
  // I tre flag di stato sono il cuore della logica di navigazione: decidono
  // quando mostrare la sidebar mobile, quando espandere il ramo Business nella
  // versione mobile e quando aprire il mega menu desktop. Tenere questi valori
  // separati permette di gestire in modo pulito ogni breakpoint senza conflitti.
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileBusinessOpen, setIsMobileBusinessOpen] = useState(false);
  const [isDesktopBusinessOpen, setIsDesktopBusinessOpen] = useState(false);

  // ---------------------------------------------------------------------------
  // Voci di navigazione principali
  // ---------------------------------------------------------------------------
  // Queste voci sono condivise tra la navbar desktop e la sidebar mobile: il
  // markup viene generato con map(), così gli stessi link restano coerenti in
  // ogni viewport senza duplicare codice HTML a mano.
  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "L'azienda", path: "/chi-siamo", icon: Building2 },
  ];

  // ---------------------------------------------------------------------------
  // Dati del mega menu Business Unit
  // ---------------------------------------------------------------------------
  // Ogni voce rappresenta un percorso dedicato all'interno della business unit.
  // Le immagini sono legate direttamente alla pagina di destinazione e aiutano a
  // far percepire subito la differenza tra le aree operative.
  const businessUnit = [
    { name: "Fibra e Mobile", path: "/business/unit/fibra-mobile", image: imgUnit1 },
    { name: "Energia", path: "/business/unit/energia", image: imgUnit2 },
    { name: "PA e Privati", path: "/business/unit/pa-privati", image: imgUnit3 },
  ];

  // ---------------------------------------------------------------------------
  // Dati del mega menu Business Development
  // ---------------------------------------------------------------------------
  // Anche qui le voci sono strutturate come array per riutilizzare lo stesso
  // schema visivo su desktop. Le immagini non sono usate nella sidebar mobile,
  // ma vengono mantenute nel dataset per assicurare la stessa esperienza nelle
  // card principali del mega menu.
  const businessDevelopment = [
    { name: "Commerciale", path: "/business/development/commerciale", image: imgDev1 },
    { name: "Marketing", path: "/business/development/marketing", image: imgDev2 },
    { name: "Partnership Strategiche", path: "/business/development/partnership", image: imgDev3 },
    { name: "Gare e Opportunità", path: "/business/development/gare", image: imgDev4 },
    { name: "Innovazione e Nuovi Servizi", path: "/business/development/innovazione", image: imgDev5 },
  ];

  // ---------------------------------------------------------------------------
  // Utility di chiusura dei menu
  // ---------------------------------------------------------------------------
  // Questa funzione centralizza la reset dei pannelli aperti. È usata sia alla
  // navigazione tra route sia quando l'utente clicca su un link all'interno del
  // menu, così il componente non resta in uno stato visivo incoerente.
  const closeAllMenus = () => {
    setIsOpen(false);
    setIsMobileBusinessOpen(false);
    setIsDesktopBusinessOpen(false);
  };

  // ---------------------------------------------------------------------------
  // Render della navbar
  // ---------------------------------------------------------------------------
  // La struttura è divisa in due comportamenti principali:
  // 1) desktop: navigazione orizzontale con mega menu Business;
  // 2) mobile: overlay + sidebar laterale con sezioni espandibili.
  // Tutto è costruito per restare leggibile, avere transizioni morbide e non
  // lasciare menu aperti dopo la navigazione.
  return (
    <>
      {/*
        Stile globale dedicato alla barra di scorrimento dei pannelli lunghi.
        Lo scopo è mantenere un aspetto pulito senza eliminare la funzionalità
        di scroll quando il contenuto del mega menu o della sidebar supera
        l'altezza della viewport.
      */}
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>

      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#011C27] border-b border-[#0e7490]/20 h-20 md:h-24 lg:h-[100px] flex items-center justify-between px-4 md:px-6 lg:px-12">
        {/*
          Blocco sinistro: bottone menu mobile e logo home.
          Il pulsante è sempre visibile per dare un access point rapido alla
          navigazione laterale, mentre il logo rimane ancorato alla home.
        */}
        <div className="flex items-center gap-4 md:gap-5 shrink-0">
          <button onClick={() => setIsOpen(true)} className="text-[#fde047] hover:text-yellow-200 transition-colors shrink-0" aria-label="Apri menu di navigazione">
            <Menu size={32} />
          </button>

          <Link to="/" onClick={closeAllMenus} className="flex items-center group">
            <img
              src="/fico-logo.png"
              alt="FI.CO. SRL"
              className="h-10 md:h-12 lg:h-[52px] w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
        </div>

        {/*
          Area centrale della navbar desktop.
          Su schermi da md in su la navigazione orizzontale occupa lo spazio
          restante e permette di mettere in evidenza le voci di primo livello
          oltre al mega menu Business.
        */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-10 h-full">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeAllMenus}
              className="text-[16px] lg:text-[18px] font-semibold text-[#fde047] hover:text-yellow-200 flex items-center gap-2 shrink-0"
              activeProps={{ className: "text-[#fde047] border-b-2 border-[#fde047] pb-1" }}
              activeOptions={{ exact: item.path === "/" }}
            >
              <item.icon size={20} /> {item.name}
            </Link>
          ))}

          {/*
            Mega menu Business su desktop.
            Ha una logica separata dal link principale: il link apre la pagina
            /business, mentre il pulsante con freccia controlla l'apertura del
            pannello. Questa scelta evita che il click sul menu secondario
            navighi accidentalmente fuori dal contesto della struttura aziendale.
          */}
          <div className="relative shrink-0 flex items-center h-full">
            <div
              className={`fixed top-20 md:top-24 lg:top-[100px] inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 -z-10 ${isDesktopBusinessOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              onClick={() => setIsDesktopBusinessOpen(false)}
            />

            <div className="flex items-center gap-0.5">
              <Link
                to="/business"
                onClick={closeAllMenus}
                className="text-[16px] lg:text-[18px] font-semibold text-[#fde047] hover:text-yellow-200 flex items-center gap-2"
                activeProps={{ className: "text-[#fde047] border-b-2 border-[#fde047] pb-1" }}
              >
                <Briefcase size={20} /> Business
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDesktopBusinessOpen(!isDesktopBusinessOpen);
                }}
                className="flex items-center justify-center p-1 text-[#fde047] hover:text-yellow-200 outline-none transition-colors"
                aria-label="Toggle sottomenu Business"
              >
                <ChevronDown size={18} className={`transition-transform duration-300 ${isDesktopBusinessOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            <div
              className={`absolute top-[70%] left-1/2 -translate-x-1/2 w-[1050px] pt-4 transition-all duration-500 z-[999] ${
                isDesktopBusinessOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
              <div className="bg-[#011C27] border border-[#0e7490]/30 rounded-2xl shadow-2xl p-10 flex gap-12 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
                {/*
                  Colonna Business Unit del mega menu.
                  È la parte più operativa della sezione: qui troviamo le unità
                  aziendali con immagini, così la scelta delle aree è immediata e
                  riconoscibile a colpo d'occhio.
                */}
                <div className="w-1/3">
                  {/* MODIFICA: text-lg invece di text-sm */}
                  <Link
                    to="/business/unit"
                    onClick={closeAllMenus}
                    className="text-[#fde047] font-bold text-lg tracking-wider uppercase block mb-4 hover:text-yellow-200 transition-colors"
                  >
                    Business Unit
                  </Link>

                  <div className="flex flex-col gap-4">
                    {businessUnit.map((item, index) => (
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

                        <div className="w-full h-28 rounded-lg overflow-hidden relative border border-white/10 group-hover/card:border-[#38bdf8]/50 transition-colors">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-[#011C27]/40 group-hover/card:bg-transparent transition-colors duration-500" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/*
                  Colonna Business Development del mega menu.
                  La struttura è a griglia per consentire una lettura più rapida e
                  una distribuzione ordinata delle attività di sviluppo e delle
                  opportunità commerciali.
                */}
                <div className="w-2/3 border-l border-[#0e7490]/30 pl-12">
                  {/* MODIFICA: text-lg invece di text-sm */}
                  <Link
                    to="/business/development"
                    onClick={closeAllMenus}
                    className="text-[#fde047] font-bold text-lg tracking-wider uppercase block mb-4 hover:text-yellow-200 transition-colors"
                  >
                    Business Development
                  </Link>

                  <div className="grid grid-cols-2 gap-x-10 gap-y-4 pb-2">
                    {businessDevelopment.map((item, index) => (
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

                        <div className="w-full h-28 rounded-lg overflow-hidden relative border border-white/10 group-hover/card:border-[#38bdf8]/50 transition-colors">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                          />
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
            className="text-[16px] lg:text-[18px] font-semibold text-[#fde047] hover:text-yellow-200 flex items-center gap-2 shrink-0"
            activeProps={{ className: "text-[#fde047] border-b-2 border-[#fde047] pb-1" }}
          >
            <Phone size={20} /> Contatti
          </Link>
        </div>

        {/*
          Spazio vuoto a destra della navbar desktop.
          Serve a mantenere il layout centrato e il rendering compatibile con la
          struttura della top bar, evitando che il gruppo centrale si sposti
          troppo verso sinistra in schermi molto larghi.
        */}
        <div className="hidden md:block w-[120px] shrink-0"></div>
      </nav>

      {/*
        Sidebar mobile.
        Il menu laterale sostituisce la navigazione orizzontale su schermi più
        piccoli e usa un overlay per oscurare il contenuto dietro la finestra.
        Il comportamento è pensato per essere semplice, accessibile e coerente
        con l'interazione del desktop.
      */}
      {isOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] transition-opacity" onClick={closeAllMenus} />}

      <div
        className={`fixed top-0 left-0 bottom-0 w-[260px] bg-[#011C27] z-[10000] transform transition-transform duration-300 border-r border-[#0e7490]/20 flex flex-col overflow-y-auto no-scrollbar ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/*
          Header della sidebar mobile.
          Contiene il titolo del menu e il pulsante per chiudere rapidamente il
          pannello, mantenendo un pattern visivo chiaro e prevedibile.
        */}
        <div className="flex justify-between items-center p-6 border-b border-[#0e7490]/20">
          <span className="text-lg font-bold tracking-widest text-[#38bdf8]">MENU</span>
          <button onClick={closeAllMenus} className="text-[#fde047] hover:text-yellow-200" aria-label="Chiudi menu di navigazione">
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeAllMenus}
              className="text-xl font-medium text-[#fde047] hover:text-yellow-200 flex items-center gap-3"
            >
              <item.icon size={22} /> {item.name}
            </Link>
          ))}

          {/*
            Sezione Business nella sidebar mobile.
            Il link principale porta alla pagina dedicata, mentre il bottone con
            freccia espande le sottovoci. In questo modo l'utente può decidere se
            esplorare subito il ramo oppure saltare direttamente alla sezione madre.
          */}
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
                onClick={() => setIsMobileBusinessOpen(!isMobileBusinessOpen)}
                className="p-2 text-[#fde047] hover:text-yellow-200 rounded-lg bg-white/5 border border-white/10 transition-colors"
                aria-label="Apri sottomenu Business"
              >
                <ChevronDown size={22} className={`transition-transform duration-300 ${isMobileBusinessOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            <div className={`grid transition-all duration-500 ease-in-out ${isMobileBusinessOpen ? "grid-rows-[1fr] mb-4" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden flex flex-col">
                {/**
                 * Business Unit mobile.
                 * La sezione viene animata con transizioni di opacità e slide, così
                 * l'apertura del menu appare naturale senza fare un mount/unmount
                 * improvviso del contenuto.
                 */}
                {/* MODIFICA: text-base invece di text-xs */}
                <Link
                  to="/business/unit"
                  onClick={closeAllMenus}
                  className={`text-base font-bold text-[#fde047] uppercase tracking-wider ml-8 mb-2 mt-3 block transition-all duration-700 ease-out ${isMobileBusinessOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
                  style={{ transitionDelay: isMobileBusinessOpen ? "150ms" : "0ms" }}
                >
                  Business Unit
                </Link>

                <div className="flex flex-col gap-3 pl-8 border-l border-[#0e7490]/30 ml-3 mb-4">
                  {businessUnit.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={closeAllMenus}
                      className={`text-[15px] text-gray-200 hover:text-[#fde047] hover:translate-x-2 block transition-all duration-500 ease-out ${isMobileBusinessOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
                      style={{ transitionDelay: isMobileBusinessOpen ? `${300 + index * 150}ms` : "0ms" }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/**
                 * Business Development mobile.
                 * Anche questa parte usa lo stesso meccanismo di animazione della
                 * sezione precedente, tanto per mantenere la navigazione coerente e
                 * leggibile su schermi piccoli.
                 */}
                {/* MODIFICA: text-base invece di text-xs */}
                <Link
                  to="/business/development"
                  onClick={closeAllMenus}
                  className={`text-base font-bold text-[#fde047] uppercase tracking-wider ml-8 mb-2 block transition-all duration-700 ease-out ${isMobileBusinessOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
                  style={{ transitionDelay: isMobileBusinessOpen ? "150ms" : "0ms" }}
                >
                  Business Dev.
                </Link>

                <div className="flex flex-col gap-3 pl-8 border-l border-[#0e7490]/30 ml-3 pb-2">
                  {businessDevelopment.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={closeAllMenus}
                      className={`text-[15px] text-gray-200 hover:text-[#fde047] hover:translate-x-2 block transition-all duration-500 ease-out ${isMobileBusinessOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
                      style={{ transitionDelay: isMobileBusinessOpen ? `${300 + index * 150}ms` : "0ms" }}
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