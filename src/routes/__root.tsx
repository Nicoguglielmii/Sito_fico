import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Preloader } from "../components/site/Preloader";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { CookieBanner } from "../components/site/Interactive";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center text-[#012b3a]">
        <h1 className="text-7xl font-extrabold text-[#1da1db]">404</h1>
        <h2 className="mt-4 text-xl font-bold">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-[#00779b]">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl bg-[#f5d000] text-[#012b3a] px-6 py-3 font-bold transition-all hover:bg-[#eab308] hover:scale-105 shadow-sm"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center text-[#012b3a]">
        <h1 className="text-xl font-bold tracking-tight">
          Impossibile caricare la pagina
        </h1>
        <p className="mt-2 text-sm text-[#00779b]">
          Si è verificato un errore inaspettato. Puoi riprovare a caricare la pagina o tornare alla Home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-2xl bg-[#f5d000] text-[#012b3a] px-6 py-3 font-bold transition-all hover:bg-[#eab308]"
          >
            Riprova
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-[#1da1db] bg-transparent text-[#012b3a] px-6 py-3 font-bold transition-all hover:bg-[#1da1db]/10"
          >
            Torna alla Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" },
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

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body className="overflow-x-hidden bg-white text-[#012b3a] antialiased w-full h-full m-0 p-0">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    router.navigate({ to: "/", replace: true });
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />

      <div className="relative flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-white">
        <Navbar />

        <main className="flex-1 w-full relative">
          <Outlet />
        </main>

        <Footer />

        <CookieBanner />
      </div>
    </QueryClientProvider>
  );
}