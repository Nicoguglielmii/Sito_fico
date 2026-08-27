// Root route shell: qui si costruisce il layout globale del sito, il document head
// condiviso e i provider applicativi che devono essere disponibili a tutte le route.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Preloader } from "../components/site/Preloader";

// TanStack Router: tutti gli elementi fondamentali per il rendering delle route,
// la gestione del document head e l'inserimento degli script necessari all'app.
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

// React utilities: ReactNode serve al shell HTML, mentre useEffect ci permette di
// registrare gli errori una sola volta per ogni boundary che li cattura.
import { useEffect, type ReactNode } from "react";

// CSS globale applicato all'intera applicazione: lo importiamo come asset URL per
// farlo passare correttamente nel document head della route root.
import appCss from "../styles.css?url";

// Servizi e componenti globali che devono essere presenti in tutte le pagine del sito.
import { reportError } from "../lib/error-reporting";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { BackToTop } from "../components/site/Reveal";
import { CookieBanner } from "../components/site/Interactive";

// Fallback visivo per le URL che non corrispondono a nessuna route. Serve a dare
// un'esperienza coerente anche quando l'utente arriva su una pagina non trovata.
function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>

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

// Error boundary della root route: cattura i problemi all'interno del rendering
// e mostra un fallback più umano, senza bloccare l'intera applicazione.
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  // Log diagnostico per lo sviluppo: aiuta a localizzare rapidamente il punto in cui
  // si è verificato il problema durante il debug in locale.
  console.error(error);
  const router = useRouter();

  // Ogni nuovo errore viene riportato al sistema di monitoraggio, così da poterlo
  // identificare correttamente nel contesto del boundary che lo ha intercettato.
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              // L'operazione di retry invalida lo stato cache e ripristina il render,
              // in modo da provare nuovamente a preparare la vista danneggiata.
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

// Route radice dell'applicazione: qui si definisce il contesto globale condiviso,
// la configurazione del document head e i componenti di fallback per i casi limite.
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

// Shell HTML della root route: crea il documento base con html/head/body e rende
// disponibili i metadati della route e gli script necessari alla navigazione.
function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// Componente radice dell'applicazione: qui si incapsula il provider del QueryClient
// e si costruisce il layout persistente con navbar, contenuto delle route, footer e
// componenti globali come il banner cookie o il pulsante per tornare in cima.
function RootComponent() {
  // Il QueryClient viene recuperato dal contesto della route e condiviso tra tutte
  // le pagine, così da evitare duplicazioni di cache e mantenerlo coerente durante
  // la navigazione interna dell'app.
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />

      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
      <CookieBanner />
    </QueryClientProvider>
  );
}