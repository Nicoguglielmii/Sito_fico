// QueryClient e relativo provider rendono disponibile la cache delle query a
// tutte le route, mentre Preloader gestisce l'ingresso iniziale dell'applicazione.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Preloader } from "../components/site/Preloader";

// Primitive TanStack Router per contenuto, head, script e navigazione interna.
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

// ReactNode tipizza i figli dello shell; useEffect registra gli errori una sola
// volta per ogni errore ricevuto dall'error boundary.
import { useEffect, type ReactNode } from "react";

// Foglio di stile globale inserito nell'head attraverso il metadato della route.
import appCss from "../styles.css?url";

// Servizi e componenti condivisi presenti in tutte le pagine dell'applicazione.
import { reportError } from "../lib/error-reporting";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { BackToTop } from "../components/site/Reveal";
import { CookieBanner } from "../components/site/Interactive";

// Fallback mostrato quando nessuna route corrisponde all'URL richiesto.
function NotFoundComponent() {
  return (
    // Layout centrato e minimale per comunicare l'errore senza dipendere dal
    // contenuto della pagina che non è stato possibile trovare.
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        {/* Collegamento interno che riporta alla homepage usando il router. */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

// Error boundary globale della root route. Mostra un fallback comprensibile e
// invia l'errore al sistema di reporting senza interrompere il render dell'app.
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  // Mantiene la traccia diagnostica nella console durante lo sviluppo.
  console.error(error);
  const router = useRouter();

  // Registra l'errore quando cambia, identificando il boundary che lo ha gestito.
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    // Presentazione di recupero con due percorsi: nuovo tentativo o ritorno alla home.
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        {/* I comandi restano affiancati quando possibile e vanno a capo su spazi stretti. */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              // Invalida i dati caricati e azzera lo stato dell'errore per ritentare il render.
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

// Route radice dell'applicazione. Il contesto espone il QueryClient alle route
// figlie e `head` centralizza SEO, Open Graph, favicon e foglio di stile globale.
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FI.CO. SRL — Telecomunicazioni, Fibra Ottica e Servizi IT" },
      {
        name: "description",
        content:
          "FI.CO. SRL: progettazione, gestione e sviluppo di reti in fibra ottica, permitting, ingegneria e servizi IT per imprese pubbliche e private.",
      },
      { name: "author", content: "FI.CO. SRL" },
      {
        property: "og:title",
        content: "FI.CO. SRL — Telecomunicazioni, Fibra Ottica e Servizi IT",
      },
      {
        property: "og:description",
        content:
          "FI.CO. SRL: progettazione, gestione e sviluppo di reti in fibra ottica, permitting, ingegneria e servizi IT per imprese pubbliche e private.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "" },
      {
        name: "twitter:title",
        content: "FI.CO. SRL — Telecomunicazioni, Fibra Ottica e Servizi IT",
      },
      {
        name: "twitter:description",
        content:
          "FI.CO. SRL: progettazione, gestione e sviluppo di reti in fibra ottica, permitting, ingegneria e servizi IT per imprese pubbliche e private.",
      },
      { property: "og:image", content: "/fico-logo.png" },
      { name: "twitter:image", content: "/fico-logo.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

// Shell HTML completo che avvolge l'albero React. HeadContent trasferisce i
// metadati della route nel document head, mentre Scripts inserisce gli script
// necessari al corretto avvio e alla navigazione dell'applicazione.
function RootShell({ children }: { children: ReactNode }) {
  return (
    // La lingua del documento viene dichiarata sul nodo html per accessibilità e SEO.
    <html lang="en">
      <head>
        {/* Renderizza nel documento i meta tag e i link restituiti da `head`. */}
        <HeadContent />
      </head>
      <body>
        {children}
        {/* Script del router collocati dopo il contenuto principale del documento. */}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  // Recupera dal contesto il client condiviso configurato all'avvio dell'app.
  const { queryClient } = Route.useRouteContext();

  return (
    // Il provider avvolge tutto l'albero per consentire a ogni pagina di usare
    // query e cache senza creare client separati durante la navigazione.
    <QueryClientProvider client={queryClient}>
      {/* Preloader globale mostrato durante il caricamento iniziale dell'app. */}
      <Preloader />

      {/* Elementi di navigazione e struttura che restano presenti tra le route. */}
      <Navbar />
      {/*
        Outlet viene sostituito dal contenuto della route corrente; min-h-screen
        mantiene il corpo esteso anche quando una pagina ha poco contenuto.
      */}
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* Footer e strumenti persistenti completano l'esperienza globale. */}
      <Footer />
      <BackToTop />
      
      {/* Banner che registra la scelta cookie dell'utente a livello applicativo. */}
      <CookieBanner />
    </QueryClientProvider>
  );
}