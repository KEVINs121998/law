import React from "react";

/**
 * Scales-of-justice emblem. Fully self-contained: colors and the
 * continuous balancing-sway animation both live in the <style> below,
 * so this component animates correctly wherever it's rendered — it
 * doesn't rely on index.css being loaded.
 */
export default function Logo({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Shashwat Law Partners emblem"
    >
      <style>{`
        .slp-logo-post { stroke: #dcb75d; stroke-width: 2.4; }
        .slp-logo-beam {
          stroke: #dcb75d; stroke-width: 2.4; stroke-linecap: round;
          transform-origin: 32px 16px;
          animation: slpLogoBeam 3.4s ease-in-out infinite;
        }
        .slp-logo-chain { stroke: #dcb75d; stroke-width: 1.4; }
        .slp-logo-pan { stroke: #dcb75d; stroke-width: 1.6; fill: none; }
        .slp-logo-pan-left {
          transform-origin: 14px 16px;
          animation: slpLogoPanL 3.4s ease-in-out infinite;
        }
        .slp-logo-pan-right {
          transform-origin: 50px 16px;
          animation: slpLogoPanR 3.4s ease-in-out infinite;
        }
        @keyframes slpLogoBeam {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }
        @keyframes slpLogoPanL {
          0%, 100% { transform: translateY(-2px); }
          50% { transform: translateY(2px); }
        }
        @keyframes slpLogoPanR {
          0%, 100% { transform: translateY(2px); }
          50% { transform: translateY(-2px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .slp-logo-beam, .slp-logo-pan-left, .slp-logo-pan-right { animation: none; }
        }
      `}</style>
      <line className="slp-logo-post" x1="32" y1="16" x2="32" y2="54" />
      <line className="slp-logo-post" x1="22" y1="54" x2="42" y2="54" />
      <line className="slp-logo-beam" x1="10" y1="16" x2="54" y2="16" />
      <g className="slp-logo-pan-left">
        <line className="slp-logo-chain" x1="14" y1="16" x2="8" y2="26" />
        <line className="slp-logo-chain" x1="14" y1="16" x2="20" y2="26" />
        <path className="slp-logo-pan" d="M7 26 Q14 33 21 26" />
      </g>
      <g className="slp-logo-pan-right">
        <line className="slp-logo-chain" x1="50" y1="16" x2="44" y2="26" />
        <line className="slp-logo-chain" x1="50" y1="16" x2="56" y2="26" />
        <path className="slp-logo-pan" d="M43 26 Q50 33 57 26" />
      </g>
      <circle cx="32" cy="16" r="2.2" fill="#dcb75d" />
    </svg>
  );
}