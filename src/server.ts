// Inizializza il modulo di cattura prima di caricare l'entry server, così gli errori
// prodotti durante il rendering possono essere recuperati anche quando il runtime
// li trasforma internamente in una normale risposta HTTP.
import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

// Contratto minimo richiesto dall'entry TanStack Start: il server esterno deve solo
// inoltrare la Request e ricevere una Response, indipendentemente dal runtime usato.
type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

// L'import dinamico viene memorizzato per inizializzare l'entry una sola volta e
// riutilizzare la stessa Promise nelle richieste successive.
let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  // Il caricamento lazy riduce il lavoro iniziale del modulo e impedisce import
  // ripetuti quando arrivano più richieste allo stesso processo server.
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 puo trasformare un'eccezione del gestore in una risposta 500 JSON con body
// {"unhandled":true,"message":"HTTPError"}; in questo caso il try/catch esterno
// non riceve direttamente l'eccezione. Questa funzione riconosce quel formato e lo
// converte nella pagina HTML di errore usata dal resto dell'applicazione.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  // Le risposte riuscite e gli errori gia formattati non devono essere alterati.
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  // Si legge una copia del body per lasciare intatta la Response originale nel caso
  // in cui il contenuto non corrisponda al formato prodotto da h3.
  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  // Preferisce l'errore originale catturato dal modulo dedicato; usa il body JSON
  // come diagnostica di riserva quando il runtime non ha conservato l'errore iniziale.
  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  // Una pagina HTML leggibile è più utile al browser e coerente con il fallback
  // prodotto dal middleware rispetto al JSON tecnico restituito da h3.
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    // L'adapter espone l'entry server con l'API standard fetch, inoltrando anche
    // ambiente e contesto per mantenere compatibilità con il target di deploy.
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      // Normalizza solo il caso speciale degli errori SSR assorbiti da h3.
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      // Fallback finale per errori che sfuggono sia all'entry sia alla normalizzazione.
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
