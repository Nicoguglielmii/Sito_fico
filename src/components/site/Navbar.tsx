import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./Interactive";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/chi-siamo", label: "About Us"},
  { to: "/servizi", label: "Servizi" },
  { to: "/contatti", label: "Contatti" },
] as const;

const linkClass =
  "relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary after:scale-x-0 after:transition-transform data-[status=active]:after:scale-x-100";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-xl ${
        scrolled || open
          ? "border-b border-border shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x relative flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="relative z-10 flex items-center gap-2 group shrink-0" aria-label="FI.CO. SRL home">
          <img
            src="/fico-logo.png"
            alt="FI.CO. SRL"
            width={140}
            height={44}
            className="h-9 md:h-10 w-auto group-hover:scale-[1.03] transition-transform"
          />
        </Link>

        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-0.5">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={linkClass}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="relative z-10 flex items-center gap-2 shrink-0">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 md:top-20 z-40 bg-black/20 backdrop-blur-[2px] lg:hidden"
            aria-label="Chiudi menu"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav"
            className="relative z-50 lg:hidden border-t border-border bg-background/98 backdrop-blur-xl animate-in fade-in-0 slide-in-from-top-2 duration-200"
          >
            <div className="container-x py-4 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="rounded-lg py-3 px-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/60 transition-colors data-[status=active]:text-primary data-[status=active]:bg-primary/10"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-border flex items-center justify-between gap-3">
                <ThemeToggle />
                <Link to="/contatti" onClick={() => setOpen(false)} className="btn-hero flex-1 justify-center text-sm py-2.5">
                  Richiedi consulenza
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
