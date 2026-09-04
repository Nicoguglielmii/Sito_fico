# FI.CO. SRL

Documentazione tecnica del sito istituzionale FI.CO. SRL, dedicato a telecomunicazioni,
reti in fibra ottica, servizi IT, networking e sviluppo software.

Sito pubblicato: <https://sito-fico.vercel.app>

## Indice

- [Panoramica](#panoramica)
- [Tecnologie](#tecnologie)
- [Requisiti](#requisiti)
- [Installazione e avvio](#installazione-e-avvio)
- [Script disponibili](#script-disponibili)
- [Struttura del progetto](#struttura-del-progetto)
- [Route](#route)
- [Componenti](#componenti)
- [Stili e asset](#stili-e-asset)
- [Server, errori e deploy](#server-errori-e-deploy)
- [Note di manutenzione](#note-di-manutenzione)

## Panoramica

Il progetto è una single-page application React con rendering gestito da TanStack Start.
La navigazione è basata su TanStack Router e usa route definite come file nella directory
`src/routes`. Il layout comune comprende:

- barra di navigazione responsive;
- preloader animato con GSAP;
- contenuto della route corrente tramite `Outlet`;
- footer condiviso;
- animazioni di comparsa durante lo scroll;
- banner cookie e componenti interattivi;
- gestione degli errori lato client e lato server.

L'interfaccia è pensata per presentare l'identità FI.CO., i servizi di telecomunicazione
e IT, il metodo di lavoro, gli ambiti di applicazione e i canali di contatto.

## Tecnologie

- React 19 e React DOM: componenti e rendering dell'interfaccia.
- TypeScript: tipizzazione del codice applicativo.
- TanStack Start: integrazione tra React, routing e rendering server-side.
- TanStack Router: routing file-based, link interni e gestione del document head.
- TanStack Query: provider globale per la gestione dei dati asincroni.
- Vite: sviluppo locale e build client/server.
- Nitro: output server e preset di deploy Vercel.
- Tailwind CSS: classi utility per layout, responsive design e stile.
- GSAP e `@gsap/react`: animazioni del preloader, del logo e delle sezioni legate allo scroll.
- Lucide React: icone della navigazione e dei contenuti.
- Radix UI: componenti UI accessibili riutilizzabili.
- ESLint e Prettier: controllo qualità e formattazione.
- Vercel: piattaforma di pubblicazione configurata tramite Nitro.

## Requisiti

- Node.js compatibile con la versione usata dal progetto, attualmente Node 24 nella build.
- npm oppure Bun.
- Connessione internet per installare le dipendenze e, durante l'uso del form contatti,
  inviare le richieste a FormSubmit.

## Installazione e avvio

Dalla directory principale del progetto:

```bash
npm install
npm run dev
```

Il server Vite usa la porta `3000` ed è configurato per essere raggiungibile anche
da altri dispositivi della rete locale tramite `host: true`.

Per visualizzare una build già creata:

```bash
npm run build
npm run preview
```

## Script disponibili

| Script | Funzione |
| --- | --- |
| `npm run dev` | Avvia il server di sviluppo Vite. |
| `npm run build` | Crea la build client e server tramite Vite/Nitro. |
| `npm run build:dev` | Crea una build usando la modalità development. |
| `npm run preview` | Serve localmente la build di produzione. |
| `npm run lint` | Esegue ESLint sul progetto. |
| `npm run format` | Applica Prettier ai file del progetto. |

## Struttura del progetto

```text
Sito_fico/
├── public/                  File statici copiati senza trasformazioni
├── src/
│   ├── assets/              Immagini importate dai componenti
│   ├── components/          Componenti applicativi e componenti UI
│   ├── hooks/               Hook React riutilizzabili
│   ├── lib/                 Utility, gestione errori e API
│   ├── routes/              Pagine e route TanStack Router
│   ├── router.tsx           Creazione del router e QueryClient
│   ├── routeTree.gen.ts     Albero route generato automaticamente
│   ├── server.ts             Entry server e normalizzazione degli errori SSR
│   ├── start.ts              Middleware e configurazione TanStack Start
│   └── styles.css            Stili globali e variabili visuali
├── circular-std/            File del font CircularStd e demo locale
├── package.json              Metadati, dipendenze e script npm
├── package-lock.json         Lockfile generato da npm
├── bun.lock                  Lockfile generato da Bun
├── vite.config.ts            Configurazione Vite e plugin
├── nitro.config.ts           Preset server Vercel
├── vercel.json               Impostazioni Vercel
├── tsconfig.json             Configurazione TypeScript
├── eslint.config.js          Regole ESLint
├── components.json           Configurazione dei componenti UI
├── bunfig.toml               Configurazione Bun
├── .prettierrc               Configurazione Prettier
├── .prettierignore           File esclusi da Prettier
├── .npmrc                    Impostazioni npm locali
└── .gitignore                File esclusi dal controllo versione
```

## Route

Le route sono componenti React che vengono registrati dal router tramite il nome del file.
`src/routeTree.gen.ts` viene aggiornato dal tooling e non dovrebbe essere modificato a mano.

| File | URL e contenuto |
| --- | --- |
| `src/routes/__root.tsx` | Layout globale, head HTML, Navbar, Footer, provider e fallback errori. |
| `src/routes/index.tsx` | Home: hero, logo interattivo, aree di attività, metodo, identità e CTA. |
| `src/routes/chi-siamo.tsx` | Presentazione aziendale, timeline, brand identity, organizzazione, valori e visione. |
| `src/routes/servizi/index.tsx` | Indice dei servizi e degli ambiti di applicazione. |
| `src/routes/servizi/fibra-mobile.tsx` | Fasi di sviluppo delle infrastrutture fibra e mobile. |
| `src/routes/servizi/it-software.tsx` | Networking, servizi IT e sviluppo software. |
| `src/routes/contatti.tsx` | Riferimenti aziendali, mappa e form di contatto. |
| `src/routes/privacy-policy.tsx` | Pagina della privacy policy. |
| `src/routes/cookie-policy.tsx` | Pagina della cookie policy. |
| `src/routes/sitemap.xml.ts` | Generazione della sitemap XML. |
| `src/routes/README.md` | Note specifiche sul sistema di route. |

### Comportamenti delle pagine

- Le route usano `createFileRoute` o `createRootRouteWithContext`.
- I metadati SEO vengono dichiarati nella funzione `head` delle route interessate.
- I link interni usano il componente `Link` di TanStack Router.
- La pagina contatti invia il form all'endpoint AJAX di FormSubmit e gestisce gli stati
  `idle`, `loading`, `success` ed `error`.
- I servizi non ancora pubblicati, come Energia, vengono mostrati come voci disabilitate.

## Componenti

### Componenti del sito

I componenti nella directory `src/components/site` definiscono gli elementi condivisi:

| File | Contenuto |
| --- | --- |
| `Navbar.tsx` | Navigazione fissa, menu desktop, sidebar mobile e dropdown dei servizi. |
| `Footer.tsx` | Brand, navigazione, servizi, contatti, social e link legali. |
| `Preloader.tsx` | Schermata iniziale con logo SVG e animazione GSAP. |
| `Reveal.tsx` | `Reveal`, `Counter`, `ScrollProgress`, `Tilt` e `BackToTop`. |
| `Interactive.tsx` | Particelle canvas, widget interattivi, timeline, cookie banner e mappa. |
| `GrowthSection.tsx` | Roadmap interattiva dei motori di crescita. |
| `ServiziStory.tsx` | Timeline verticale con linea SVG animata da ScrollTrigger. |
| `TimelinePittogramma.tsx` | Visualizzazione animata collegata al pittogramma del brand. |
| `LogoAnimation.tsx` | Animazioni dedicate alla presentazione del logo. |
| `CollaborationNetwork.tsx` | Rappresentazione della rete di collaborazioni. |
| `components/Interactive.tsx` | Varianti o componenti interattivi condivisi a livello `src/components`. |

`src/components/ui` contiene componenti riutilizzabili basati principalmente su Radix UI:

`accordion`, `alert`, `alert-dialog`, `aspect-ratio`, `avatar`, `badge`, `breadcrumb`,
`button`, `calendar`, `carousel`, `chart`, `checkbox`, `collapsible`, `command`,
`context-menu`, `dialog`, `drawer`, `dropdown-menu`, `form`, `hover-card`, `input`,
`input-otp`, `label`, `menubar`, `navigation-menu`, `pagination`, `popover`, `progress`,
`radio-group`, `resizable`, `scroll-area`, `select`, `separator`, `sheet`, `sidebar`,
`skeleton`, `slider`, `sonner`, `switch`, `table`, `tabs`, `textarea`, `toggle`,
`toggle-group` e `tooltip`.

Questi componenti costituiscono una libreria locale pronta per essere usata dalle route.
Non tutti sono necessariamente montati nella pagina corrente, ma fanno parte della base UI.

### Hook e utility

- `src/hooks/use-mobile.tsx`: hook per riconoscere il breakpoint mobile.
- `src/lib/utils.ts`: utility comuni, tra cui la composizione delle classi CSS.
- `src/lib/api/example.functions.ts`: esempio di funzione API lato server.
- `src/lib/config.server.ts`: configurazione disponibile lato server.
- `src/lib/error-capture.ts`: cattura dell'ultimo errore server per la risposta SSR.
- `src/lib/error-page.ts`: genera la pagina HTML di errore lato server.
- `src/lib/error-reporting.ts`: invia o registra gli errori catturati dai boundary.

## Stili e asset

### Stili

- `src/styles.css` contiene reset, font, variabili CSS, classi globali, animazioni e
  regole Tailwind usate dall'applicazione.
- `circular-std/stylesheet.css` e i file `.woff` definiscono il font CircularStd locale
  e la demo indipendente contenuta in `circular-std/demo.html`.
- Le classi `container-x`, `reveal`, `card-lift` e le variabili come
  `--gradient-brand` sono condivise da più pagine.

### Immagini in `src/assets`

Gli asset importati dai componenti vengono processati da Vite e ricevono un riferimento
gestito dal bundler:

- `fico-pittogramma.png`, `fico-wordmark.png`, `logo-scritto.jpg`: elementi del brand.
- `hero-fiber.jpg`, `fibraotticaemobile.jpg`, `networking.jpg`, `netw.jpg`: hero e servizi.
- `infrastrutture.jpg`, `itservices.jpg`, `digitaldevelopment.webp`: infrastrutture e IT.
- `survey.webp`, `netdesign.png`, `enti.jpg`, `project.png`, `data.webp`, `manutenzione.webp`:
  fasi del servizio Fibra & Mobile.
- `provider.avif`, `pubblicaamministrazione.jpg`, `privati.jpg`, `enti.jpg`: contesti e clienti.
- `Energia.jpg`, `innovazione.jpg`, `connessioni.png`, `collab.jpg`, `commercio.jpg`:
  contenuti di supporto per aree, crescita e identità.
- Le varianti territoriali come `lazio.webp`, `campania.jpg`, `calabria.webp`, `puglia.webp`,
  `sicilia.jpg`, `toscana.jpeg`, `basilicata.jpg`, `piemonte.webp`, `veneto.jpg` e
  `lombardia.avif` sono usate per contenuti geografici e mappe.
- `copilot-logo.jpg` e `copilot-pittogramma.jpg` sono asset aggiuntivi presenti nel progetto.

### File statici in `public`

- `fico-logo.png` e `fico-logo-in-alto.png`: loghi usati tramite URL pubblico.
- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`,
  `favicon-192x192.png`, `favicon-512x512.png`: icone del sito e progressive web metadata.
- `apple-touch-icon.png`: icona per dispositivi Apple.
- `cartina-italia.png`: immagine statica della mappa italiana.
- `video-pittogramma.mp4`: video del pittogramma.
- `robots.txt`: regole per i crawler dei motori di ricerca.

## Server, errori e deploy

`src/start.ts` registra un middleware TanStack Start che lascia passare gli errori HTTP
con status già definito e converte gli altri errori in una risposta HTML 500.

`src/server.ts` carica l'entry server di TanStack Start. Inoltre controlla le risposte JSON
500 prodotte da h3 quando un errore SSR viene assorbito come risposta normale e le converte
in una pagina HTML di errore leggibile.

`src/routes/__root.tsx` gestisce gli errori lato interfaccia con `ErrorComponent`, registra
l'errore tramite `reportError` e offre i pulsanti per riprovare o tornare alla home.

La configurazione di deploy è composta da:

- `nitro.config.ts`: usa il preset `vercel`.
- `vercel.json`: impostazioni aggiuntive della piattaforma.
- `vite.config.ts`: plugin React, Tailwind, TanStack Start, Nitro e alias `@` verso `src`.

Il deploy può essere collegato a GitHub su Vercel. Prima della pubblicazione è consigliato
eseguire `npm run lint` e `npm run build`.

## Note di manutenzione

- Non modificare manualmente `src/routeTree.gen.ts`: viene generato dal router.
- Non aggiungere commenti a `package.json`, `package-lock.json` o `bun.lock`: sono JSON/TOML
  consumati dagli strumenti e devono restare validi. La descrizione del progetto è nel campo
  `description` di `package.json`.
- Per aggiungere una pagina, creare un file nella directory corretta sotto `src/routes`;
  il route tree verrà rigenerato dagli strumenti TanStack.
- Per aggiungere asset usati dal codice, preferire import da `src/assets`; usare `public`
  per file che devono essere raggiungibili direttamente con un URL stabile.
- Il form di contatto dipende dal servizio esterno FormSubmit e dall'indirizzo
  `service@ficohub.it`: verificare entrambi prima di modificare il flusso di invio.
- Il build segnala attualmente un warning sul riferimento al font
  `circular-std/CircularStd-BookItalic.woff`; il warning è legato alla risoluzione dell'asset
  e non blocca la compilazione.

## Contatti

FI.CO. SRL

Corso Cavour 9, Piano 2
76123 Andria (BT), Italia

- Telefono: +39 375 793 2669
- Email amministrativa: amministrazione@ficohub.it
- Email operativa: service@ficohub.it
- LinkedIn: <https://www.linkedin.com/company/fi-co-srl/>

© FI.CO. SRL. Tutti i diritti riservati.
