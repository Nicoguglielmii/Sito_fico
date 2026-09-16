import { createFileRoute } from '@tanstack/react-router';
import { Mail, Phone, MapPin, Send, FileText, Loader2, CheckCircle2 } from 'lucide-react';
// import { HeroParticles } from "@/components/site/Interactive"; // Disattivato
import { useState } from 'react';

export const Route = createFileRoute('/contatti')({
  component: ContattiPage,
});

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/5142c30a1135dc653f89a45f77747911", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          Nome: formData.get("nome"),
          Azienda: formData.get("azienda") || "Non specificata",
          Email: formData.get("email"),
          Telefono: formData.get("telefono") || "Non specificato",
          Oggetto: formData.get("oggetto") || "Richiesta da sito web",
          Messaggio: formData.get("messaggio"),
          _subject: `Nuova richiesta da: ${formData.get("nome")}`,
          _template: "table"
        })
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); 
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#01425f]/10 border border-[#0e7490]/30 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden h-fit">
      
      {status === "success" ? (
        <div className="relative z-10 flex flex-col items-center justify-center py-12 text-center animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Messaggio inviato!</h3>
          <p className="text-gray-300 text-lg">Grazie per averci contattato.</p>
          <button onClick={() => setStatus("idle")} className="mt-8 px-6 py-3 border border-white/20 rounded-xl text-white">
            Invia un altro messaggio
          </button>
        </div>
      ) : (
        <form className="flex flex-col gap-6 relative z-10 animate-fade-in" onSubmit={handleSubmit}>
          
          <div className="mb-2">
            {/* SE NON VEDI LA PAROLA "TEST" SUL SITO, STIAMO GUARDANDO IL VECCHIO CODICE */}
            <h3 className="text-3xl font-bold text-white mb-2">Richiedi una consulenza TEST</h3>
            <p className="text-gray-300 text-[15px]">Raccontaci il tuo progetto.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className="text-sm font-semibold text-gray-300 ml-1">Nome e Cognome *</label>
              <input type="text" id="nome" name="nome" disabled={status === "loading"} className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white w-full" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="azienda" className="text-sm font-semibold text-gray-300 ml-1">Azienda</label>
              <input type="text" id="azienda" name="azienda" disabled={status === "loading"} className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white w-full" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-300 ml-1">Email *</label>
              <input type="email" id="email" name="email" disabled={status === "loading"} className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white w-full" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="telefono" className="text-sm font-semibold text-gray-300 ml-1">Telefono</label>
              <input type="tel" id="telefono" name="telefono" disabled={status === "loading"} className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white w-full" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="messaggio" className="text-sm font-semibold text-gray-300 ml-1">Messaggio *</label>
            <textarea id="messaggio" name="messaggio" disabled={status === "loading"} rows={4} className="bg-[#011C27] border border-white/10 rounded-xl px-4 py-3 text-white resize-none w-full" required></textarea>
          </div>

          <button type="submit" disabled={status === "loading"} className="mt-2 w-full flex items-center justify-center gap-2 bg-[#facc15] text-[#001724] font-bold text-lg px-8 py-4 rounded-xl">
            {status === "loading" ? "Invio in corso..." : "Invia Messaggio"}
          </button>
        </form>
      )}
    </div>
  );
}

function ContattiPage() {
  return (
    <div className="bg-[#011C27] w-full min-h-screen overflow-x-hidden pb-12">
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* <HeroParticles /> DISATTIVATO PER TEST */}
        
        <div className="container-x relative z-10 text-left">
          <span className="text-sm uppercase tracking-[0.3em] text-[#facc15] font-bold">Contatti</span>
          <h1 className="mt-4 text-5xl font-bold text-white">Parliamo del tuo progetto.</h1>
        </div>
      </section>

      <section className="py-6 relative z-20">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">FI.CO. SRL</h2>
            </div>
            <div className="flex flex-col gap-6">
              {/* Riferimenti aziendali visibili, mappa disattivata */}
              <p className="text-white">Corso Cavour 9, Andria (BT)</p>
              <p className="text-white">service@ficohub.it</p>
            </div>

            {/* MAPPA DISATTIVATA PER TEST
            <div className="w-full h-72 md:h-80 mt-4 rounded-3xl overflow-hidden shadow-2xl">
              <iframe src="..." ></iframe>
            </div> 
            */}
          </div>

          <ContactForm />

        </div>
      </section>
    </div>
  );
}