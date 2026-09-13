import React from "react";

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
      <line className="slp-post" x1="32" y1="16" x2="32" y2="54" />
      <line className="slp-post" x1="22" y1="54" x2="42" y2="54" />
      <line className="slp-beam" x1="10" y1="16" x2="54" y2="16" />
      <g className="slp-pan-left">
        <line className="slp-chain" x1="14" y1="16" x2="8" y2="26" />
        <line className="slp-chain" x1="14" y1="16" x2="20" y2="26" />
        <path className="slp-pan" d="M7 26 Q14 33 21 26" />
      </g>
      <g className="slp-pan-right">
        <line className="slp-chain" x1="50" y1="16" x2="44" y2="26" />
        <line className="slp-chain" x1="50" y1="16" x2="56" y2="26" />
        <path className="slp-pan" d="M43 26 Q50 33 57 26" />
      </g>
      <circle cx="32" cy="16" r="2.2" fill="#dcb75d" />
    </svg>
  );
}
