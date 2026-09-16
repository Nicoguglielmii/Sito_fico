import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css"; // Assicuriamoci che carichi anche il CSS!

// Recupera le rotte che hai configurato
const router = getRouter();

// Aggancia React al div vuoto nell'HTML e accende il sito
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);