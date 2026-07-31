import { useEffect, useRef, useState } from "react";

/**
 * LogoAnimation — FI.CO. SRL pittogramma animato
 * viewBox 0 0 960 620  |  nodo origine: (290, 490)
 */

export const DOT_POSITIONS = [
  { cx: 120, cy: 120 },
  { cx: 60, cy: 305 },
  { cx: 90, cy: 500 },
  { cx: 530, cy: 100 },
  { cx: 820, cy: 415 },
  { cx: 860, cy: 180 },
] as const;

export const VIEWBOX = { w: 960, h: 620 } as const;

interface Props {
  className?: string;
  onDotClick?: (dotIndex: number) => void;
  dotLabels?: readonly string[];
}

export function LogoAnimation({ className = "", onDotClick, dotLabels }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [labelsVisible, setLabelsVisible] = useState(false);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const easeInOutCubic = (t: number): number =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const easeOutBack = (t: number): number => {
      const c1 = 1.70158,
        c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    };

    const paths = Array.from(svg.querySelectorAll<SVGPathElement>("[data-arc]")).sort(
      (a, b) => +a.dataset.arc! - +b.dataset.arc!,
    );
    const dots = Array.from(svg.querySelectorAll<SVGCircleElement>("[data-dot]")).sort(
      (a, b) => +a.dataset.dot! - +b.dataset.dot!,
    );

    const lengths = paths.map((p) => p.getTotalLength());

    function resetAll() {
      paths.forEach((p, i) => {
        p.style.strokeDasharray = `${lengths[i]}`;
        p.style.strokeDashoffset = `${lengths[i]}`;
      });
      dots.forEach((d) => {
        const cx = parseFloat(d.getAttribute("cx") ?? "0");
        const cy = parseFloat(d.getAttribute("cy") ?? "0");
        d.style.opacity = "0";
        d.setAttribute("transform", `translate(${cx} ${cy}) scale(0) translate(${-cx} ${-cy})`);
      });
    }
    resetAll();

    // timing: [startFraction, durationFraction]
    // Ogni arco occupa una finestra di ~0.45, dot pop appena finisce l'arco
    // dot5 (Permitting): start 0.40, dur 0.42 → appare a 0.82 — ben prima della fine
    const TOTAL_DRAW = 2800;
    const POP_DUR = 0.1;

    const timing: [number, number][] = [
      [0.0, 0.42], // arc0 → dot0
      [0.07, 0.42], // arc1 → dot1
      [0.14, 0.42], // arc2 → dot2
      [0.21, 0.46], // arc3 → dot3
      [0.29, 0.46], // arc4 → dot4
      [0.4, 0.42], // arc5 → dot5 (Permitting) — appare a t=0.82
    ];

    let startTime: number | null = null;
    let rafId: number;

    function animate(ts: number) {
      if (startTime === null) startTime = ts;
      const elapsed = ts - startTime;
      const drawT = Math.min(elapsed / TOTAL_DRAW, 1);

      paths.forEach((p, i) => {
        const [s, d] = timing[i];
        const local = Math.max(0, Math.min(1, (drawT - s) / d));
        p.style.strokeDashoffset = `${lengths[i] * (1 - easeInOutCubic(local))}`;
      });

      dots.forEach((dot, i) => {
        const [s, d] = timing[i];
        const appearStart = s + d;
        const appear = Math.max(0, Math.min(1, (drawT - appearStart) / POP_DUR));
        const eased = easeOutBack(appear); // overshoot per effetto "pop"
        const cx = parseFloat(dot.getAttribute("cx") ?? "0");
        const cy = parseFloat(dot.getAttribute("cy") ?? "0");
        dot.style.opacity = appear > 0 ? "1" : "0";
        dot.setAttribute(
          "transform",
          `translate(${cx} ${cy}) scale(${Math.max(0, eased)}) translate(${-cx} ${-cy})`,
        );
      });

      if (elapsed < TOTAL_DRAW) {
        rafId = requestAnimationFrame(animate);
      } else {
        // assicura tutti i dot a scale(1) finale
        dots.forEach((dot) => {
          const cx = parseFloat(dot.getAttribute("cx") ?? "0");
          const cy = parseFloat(dot.getAttribute("cy") ?? "0");
          dot.style.opacity = "1";
          dot.setAttribute("transform", `translate(${cx} ${cy}) scale(1) translate(${-cx} ${-cy})`);
        });
        setLabelsVisible(true);
      }
    }

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      {/* CSS per hover ring e fade-in label */}
      <style>{`
        .fco-dot-btn {
          position: absolute;
          border-radius: 50%;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 20;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fco-dot-btn::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid rgba(240,182,24,0);
          transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          transform: scale(0.85);
        }
        .fco-dot-btn:hover::before,
        .fco-dot-btn.hovered::before {
          border-color: rgba(240,182,24,0.75);
          transform: scale(1);
          box-shadow: 0 0 14px 3px rgba(240,182,24,0.25);
        }
        .fco-dot-btn::after {
          content: '';
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 1.5px solid rgba(240,182,24,0);
          transition: border-color 0.25s ease 0.05s, transform 0.25s ease 0.05s;
          transform: scale(0.7);
        }
        .fco-dot-btn:hover::after,
        .fco-dot-btn.hovered::after {
          border-color: rgba(240,182,24,0.30);
          transform: scale(1);
        }
        @keyframes fco-label-in {
          from { opacity: 0; transform: translate(-50%, -160%); }
          to   { opacity: 1; transform: translate(-50%, -180%); }
        }
        .fco-label {
          animation: fco-label-in 0.4s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes fco-modal-in {
          from { opacity: 0; transform: scale(0.94) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fco-backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      <div className={`relative w-full ${className}`}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VIEWBOX.w} ${VIEWBOX.h}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%", height: "auto", background: "transparent" }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="lg1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0B5A87" />
              <stop offset="100%" stopColor="#1675A7" />
            </linearGradient>
            <linearGradient id="lg2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#18A9C0" />
              <stop offset="100%" stopColor="#2585BC" />
            </linearGradient>
            <linearGradient id="lg3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B5A87" />
              <stop offset="100%" stopColor="#1675A7" />
            </linearGradient>
            <linearGradient id="lg4" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1675A7" />
              <stop offset="100%" stopColor="#2585BC" />
            </linearGradient>
            <linearGradient id="lg6" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2585BC" />
              <stop offset="100%" stopColor="#1675A7" />
            </linearGradient>
          </defs>

          {/* arc4 – destra-ampio (dietro) */}
          <path
            data-arc="4"
            d="M 290 490 C 330 545, 680 530, 820 415"
            stroke="url(#lg6)"
            strokeWidth="32"
            strokeLinecap="round"
            fill="none"
          />
          {/* arc5 – destra-alto */}
          <path
            data-arc="5"
            d="M 290 490 C 430 420, 720 250, 860 180"
            stroke="url(#lg6)"
            strokeWidth="32"
            strokeLinecap="round"
            fill="none"
          />
          {/* arc2 – sinistra-basso */}
          <path
            data-arc="2"
            d="M 290 490 C 250 530, 160 535, 90 500"
            stroke="url(#lg3)"
            strokeWidth="32"
            strokeLinecap="round"
            fill="none"
          />
          {/* arc1 – sinistra-medio */}
          <path
            data-arc="1"
            d="M 290 490 C 200 490, 100 420, 60 305"
            stroke="url(#lg2)"
            strokeWidth="32"
            strokeLinecap="round"
            fill="none"
          />
          {/* arc3 – centro-alto */}
          <path
            data-arc="3"
            d="M 290 490 C 350 380, 480 210, 530 100"
            stroke="url(#lg4)"
            strokeWidth="32"
            strokeLinecap="round"
            fill="none"
          />
          {/* arc0 – sinistra-alto (primo piano) */}
          <path
            data-arc="0"
            d="M 290 490 C 240 390, 170 250, 120 120"
            stroke="url(#lg1)"
            strokeWidth="32"
            strokeLinecap="round"
            fill="none"
          />

          {/* Nodo origine – sempre visibile */}
          <circle cx="290" cy="490" r="22" fill="#F0B618" />

          {/* Endpoint dots – animati via JS */}
          <circle data-dot="0" cx="120" cy="120" r="22" fill="#F0B618" />
          <circle data-dot="1" cx="60" cy="305" r="22" fill="#F0B618" />
          <circle data-dot="2" cx="90" cy="500" r="22" fill="#F0B618" />
          <circle data-dot="3" cx="530" cy="100" r="22" fill="#F0B618" />
          <circle data-dot="4" cx="820" cy="415" r="22" fill="#F0B618" />
          <circle data-dot="5" cx="860" cy="180" r="22" fill="#F0B618" />
        </svg>

        {/* Overlay cliccabile con hover ring */}
        {onDotClick &&
          DOT_POSITIONS.map((pos, i) => (
            <button
              key={i}
              aria-label={dotLabels?.[i] ?? `Nodo ${i}`}
              className={`fco-dot-btn${hoveredDot === i ? " hovered" : ""}`}
              onClick={() => onDotClick(i)}
              onMouseEnter={() => setHoveredDot(i)}
              onMouseLeave={() => setHoveredDot(null)}
              style={{
                left: `${(pos.cx / VIEWBOX.w) * 100}%`,
                top: `${(pos.cy / VIEWBOX.h) * 100}%`,
                width: 44,
                height: 44,
              }}
            />
          ))}

        {/* Label con fade-in a fine animazione e stagger */}
        {labelsVisible &&
          dotLabels?.map((label, i) => (
            <div
              key={`label-${i}`}
              className="fco-label"
              style={{
                animationDelay: `${i * 60}ms`,
                position: "absolute",
                left: `${(DOT_POSITIONS[i].cx / VIEWBOX.w) * 100}%`,
                top: `${(DOT_POSITIONS[i].cy / VIEWBOX.h) * 100}%`,
                transform: "translate(-50%, -180%)",
                background: "rgba(0,45,75,0.88)",
                border: "1px solid rgba(0,153,242,0.4)",
                borderRadius: 999,
                padding: "5px 13px",
                color: "#E8F4FB",
                fontSize: 11.5,
                fontWeight: 600,
                letterSpacing: "0.03em",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,153,242,0.1) inset",
                zIndex: 10,
              }}
            >
              {label}
            </div>
          ))}
      </div>
    </>
  );
}
