import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./Interactive";


const NAV = [
  { to: "/", label: "Home" },
  { to: "/chi-siamo", label: "Chi siamo" },
  { to: "/servizi", label: "Servizi" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/futuro", label: "Futuro" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-xl ${
        scrolled
          ? "border-b border-border shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group" aria-label="FI.CO. SRL home">
          <img src="/fico-logo.png" alt="FI.CO. SRL" width={140} height={44} className="h-9 md:h-10 w-auto group-hover:scale-[1.03] transition-transform" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative data-[status=active]:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link to="/contatti" className="hidden lg:inline-flex btn-hero text-sm py-2.5 px-5">
          Richiedi consulenza
        </Link>
        <div className="hidden lg:block ml-1"><ThemeToggle /></div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            X ? (
              <X size={24} />
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                aria-hidden
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            )
          ) : (
            Menu ? (
              <Menu size={24} />
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                aria-hidden
              >
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </svg>
            )
          )}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-base font-medium text-foreground/80 hover:text-primary border-b border-border/50"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contatti" onClick={() => setOpen(false)} className="btn-hero mt-3 justify-center">
              Richiedi consulenza
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}