import { useEffect, useRef, type ReactNode, type MouseEvent } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  // Il riferimento identifica l'elemento osservato e permette di aggiungere la classe
  // di ingresso solo quando il contenuto raggiunge la soglia visibile nella viewport.
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // L'osservatore viene disattivato dopo la prima entrata: ogni blocco anima una sola
    // volta e non ripete l'effetto durante gli scroll successivi.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      // Una piccola porzione visibile basta per avviare la comparsa del contenuto.
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // Il ritardo viene passato allo stile per consentire sequenze sfalsate tra fratelli.
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Counter({
  to,
  suffix = "",
  duration = 1800,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  // Il testo viene aggiornato direttamente nello span durante l'animazione per evitare
  // un render React a ogni fotogramma del conteggio.
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Impedisce di riavviare il conteggio se l'elemento resta visibile per più frame.
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            // L'easing cubico rallenta il conteggio verso il valore finale, rendendo
            // la progressione più naturale rispetto a un incremento lineare.
            const step = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              el.textContent = Math.floor(eased * to).toString() + suffix;
              if (t < 1) requestAnimationFrame(step);
              else el.textContent = to + suffix;
            };
            requestAnimationFrame(step);
          }
        });
      },
      // Il contatore parte quando una porzione significativa del valore e visibile.
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, suffix, duration]);
  return <span ref={ref}>0{suffix}</span>;
}

export function ScrollProgress() {
  // La barra comunica la posizione relativa nella pagina senza occupare spazio nel flusso.
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const doc = document.documentElement;
      // La distanza massima esclude l'altezza della viewport, così il valore arriva a 1
      // esattamente quando il fondo del documento raggiunge il fondo della finestra.
      const max = doc.scrollHeight - doc.clientHeight;
      el.style.transform = `scaleX(${max > 0 ? doc.scrollTop / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left"
      style={{ transform: "scaleX(0)", background: "var(--gradient-brand)" }}
    />
  );
}

export function Tilt({
  children,
  className = "",
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  // L'effetto è limitato al contenitore corrente e usa max come ampiezza massima
  // della rotazione, così ogni chiamante può scegliere un'intensità diversa.
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    // La posizione del puntatore viene normalizzata rispetto al centro dell'elemento:
    // il lato sinistro/destra controlla la rotazione Y e alto/basso la rotazione X.
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg)`;
  };
  // Al termine dell'interazione la trasformazione viene rimossa per riportare il
  // contenuto alla posizione neutra definita dal layout.
  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`h-full transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

export function BackToTop() {
  // Il pulsante resta invisibile e non interattivo finché l'utente non ha superato
  // una distanza sufficiente per rendere utile il ritorno all'inizio.
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      // Opacità e pointer-events vengono aggiornati insieme per evitare click su un
      // controllo invisibile quando la pagina si trova ancora nella parte alta.
      el.style.opacity = window.scrollY > 600 ? "1" : "0";
      el.style.pointerEvents = window.scrollY > 600 ? "auto" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      ref={ref}
      // Lo scroll morbido riporta alla hero senza interrompere bruscamente la lettura.
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Torna su"
      className="fixed bottom-6 right-6 z-40 grid place-items-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg opacity-0 transition-opacity hover:scale-110 duration-300"
      style={{ transitionProperty: "opacity, transform" }}
    >
      ↑
    </button>
  );
}
