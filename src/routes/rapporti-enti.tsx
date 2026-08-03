import { createFileRoute, Link } from '@tanstack/react-router';
import { Landmark, FileText, Map, HardHat, ArrowRight } from "lucide-react";

export const Route = createFileRoute('/rapporti-enti')({
  component: RapportiEnti,
});

function RapportiEnti() {
  const serviziList = [
    {
      categoria: "Gestione Pratiche",
      titolo: "Permitting e Autorizzazioni",
      descrizione: "Gestiamo integralmente l'iter burocratico per l'ottenimento di permessi, concessioni e autorizzazioni necessarie per la realizzazione di opere civili e infrastrutture di telecomunicazione. Compiliamo e presentiamo SCIA, CILA e istanze per scavi, sollevandoti da ogni onere amministrativo.",
      icona: FileText,
    },
    {
      categoria: "Pubblica Amministrazione",
      titolo: "Interfaccia con gli Enti",
      descrizione: "Facciamo da tramite diretto e qualificato tra la tua azienda e gli Enti Pubblici (Comuni, Province, Anas, Soprintendenze, ecc.). Grazie alla nostra esperienza, velocizziamo il dialogo e risolviamo tempestivamente eventuali richieste di integrazione documentale.",
      icona: Landmark,
    },
    {
      categoria: "Analisi Preliminari",
      titolo: "Studi di Fattibilità e Vincoli",
      descrizione: "Prima di avviare qualsiasi progetto, eseguiamo analisi approfondite sui vincoli urbanistici, paesaggistici e ambientali presenti sul territorio. Elaboriamo studi di fattibilità tecnico-economica per garantirti la certezza dell'approvazione del progetto senza imprevisti.",
      icona: Map,
    },
    {
      categoria: "Gestione Operativa",
      titolo: "Direzione Lavori e Sicurezza",
      descrizione: "Oltre alla parte documentale, offriamo il coordinamento della sicurezza in fase di progettazione ed esecuzione (CSP/CSE) e la Direzione Lavori. Ci assicuriamo che il cantiere rispetti rigorosamente le normative vigenti e le prescrizioni imposte dagli enti autorizzativi.",
      icona: HardHat,
    },
  ];

  return (
    <div className="min-h-screen bg-[#001724] text-white pt-32 pb-24">
      
      {/* Hero Section */}
      <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 mb-32 text-left animate-fade-in">
        <span className="text-sm uppercase tracking-[0.3em] text-[#38bdf8] font-bold">
          Burocrazia Zero
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
          Gestione Enti e <span className="text-[#38bdf8]">Permitting</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
          Semplifichiamo l'iter burocratico dei tuoi progetti. Un team di professionisti dedicato alla gestione delle pratiche e ai rapporti con la Pubblica Amministrazione.
        </p>
      </section>

      {/* Lista Servizi */}
      <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col gap-28">
        {serviziList.map((servizio, index) => (
          <div key={index} className="flex flex-col items-start text-left">
            
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[3px] w-12 bg-gradient-to-r from-[#38bdf8] to-[#facc15] rounded-full"></div>
              <div className="text-sm md:text-sm uppercase tracking-[0.2em] text-gray-300 font-bold flex items-center gap-2.5">
                <servizio.icona size={18} className="text-[#38bdf8]" />
                {servizio.categoria}
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#38bdf8] mb-6 leading-tight">
              {servizio.titolo}
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">
              {servizio.descrizione}
            </p>
            
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-screen-xl mx-auto px-6 lg:px-10 mt-32">
        <div className="bg-gradient-to-br from-[#0e7490]/40 to-[#001724] border border-[#0e7490]/60 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden flex flex-col items-start text-left">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#38bdf8]/20 via-transparent to-transparent opacity-50 pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative z-10 text-white leading-tight">
            Devi avviare un <span className="text-[#38bdf8]">nuovo cantiere</span>?
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl relative z-10 text-lg md:text-xl">
            Affida a noi la gestione burocratica. Acceleriamo i tempi di approvazione per permetterti di concentrarti sull'esecuzione dei lavori.
          </p>
          
          <Link 
            to="/contatti"
            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl bg-[#facc15] text-[#001724] hover:bg-yellow-300 hover:scale-105 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)]"
          >
            Richiedi consulenza
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}