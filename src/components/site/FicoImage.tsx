import { useId } from "react";

interface FicoImageProps {
  src: string;
  alt: string;
  variant?: 1 | 2 | 3;
  className?: string;
}

/**
 * FicoImage: trasforma automaticamente qualsiasi foto applicando:
 * 1. Sfondo in bianco e nero (grayscale)
 * 2. Maschera SVG che rivela la foto a colori reali lungo il percorso
 * 3. Archi ciano/turchese e nodo giallo del pittogramma FI.CO.
 */
export function FicoImage({
  src,
  alt,
  variant = 1,
  className = "",
}: FicoImageProps) {
  const rawId = useId();
  const clipId = `fico-clip-${rawId.replace(/:/g, "")}`;

  return (
    <div className={`relative overflow-hidden select-none group ${className}`}>
      {/* 1. IMMAGINE BASE IN BIANCO E NERO */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover grayscale contrast-110 transition-transform duration-700 group-hover:scale-105"
      />

      {/* 2. IMMAGINE A COLORI (Rivelata solo dentro la maschera geometrica/curva) */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        style={{ clipPath: `url(#${clipId})` }}
        className="absolute inset-0 w-full h-full object-cover saturate-150 contrast-105 pointer-events-none transition-transform duration-700 group-hover:scale-105"
      />

      {/* 3. OVERLAY SVG CON MASCHERA + ARCHI E NODO GIALLO FI.CO. */}
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            {variant === 1 && (
              /* Variante 1: Fascia diagonale con taglio centrale (stile Fibra/Albero) */
              <path d="M 0,0.68 L 0.36,0 L 0.92,0 C 0.90,0.18 0.95,0.28 1,0.12 L 1,0.88 L 0.85,1 L 0.52,1 L 0.59,0.44 L 0.29,1 L 0,1 Z" />
            )}
            {variant === 2 && (
              /* Variante 2: Fascia ad onda morbida da sinistra a destra (stile Server IT) */
              <path d="M 0,0.72 C 0.22,0.32 0.52,0.28 0.78,0.36 L 0.92,0 L 1,0 L 1,1 L 0.84,1 C 0.65,0.62 0.38,0.62 0.21,1 L 0,1 Z" />
            )}
            {variant === 3 && (
              /* Variante 3: Fascia superiore ad arco (stile Energia / Tralicci) */
              <path d="M 0,0.38 C 0.25,0.05 0.52,-0.02 0.65,0 L 0.62,0.25 C 0.78,0.08 0.92,0.05 1,0.08 L 1,0.45 C 0.75,0.28 0.45,0.28 0,0.62 Z" />
            )}
          </clipPath>
        </defs>

        {variant === 1 && (
          <g>
            {/* Arco Turchese alto che scende sul nodo */}
            <path
              d="M 275,215 C 495,-45 660,-20 630,180 L 580,410"
              fill="none"
              stroke="#00b4d8"
              strokeWidth="22"
              strokeLinecap="butt"
              strokeLinejoin="round"
            />
            {/* Linea Azzurra che parte dal nodo verso destra */}
            <path
              d="M 580,410 L 820,275"
              fill="none"
              stroke="#0096c7"
              strokeWidth="22"
              strokeLinecap="round"
            />
            {/* Nodo Giallo */}
            <circle cx="580" cy="410" r="14" fill="#facc15" />
          </g>
        )}

        {variant === 2 && (
          <g>
            {/* Arco Azzurro che attraversa dal basso a sinistra fino al nodo a destra */}
            <path
              d="M 25,495 C 180,240 480,235 735,395"
              fill="none"
              stroke="#0096c7"
              strokeWidth="34"
              strokeLinecap="round"
            />
            {/* Arco Turchese verticale a destra che converge nel nodo */}
            <path
              d="M 815,125 C 730,135 715,260 735,395"
              fill="none"
              stroke="#22b8cf"
              strokeWidth="34"
              strokeLinecap="round"
            />
            {/* Nodo Giallo */}
            <circle cx="735" cy="395" r="24" fill="#f5b800" />
          </g>
        )}

        {variant === 3 && (
          <g>
            {/* Doppio arco alto stile Energia */}
            <path
              d="M -10,195 C 240,95 495,55 425,165"
              fill="none"
              stroke="#0088a9"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M 425,165 C 580,115 710,95 815,125"
              fill="none"
              stroke="#0096c7"
              strokeWidth="12"
              strokeLinecap="round"
            />
            {/* Nodo Giallo */}
            <circle cx="425" cy="165" r="9" fill="#facc15" />
          </g>
        )}
      </svg>
    </div>
  );
}