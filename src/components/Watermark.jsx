import React from "react";

export default function Watermark() {
  return (
    <svg
      className="slp-hero-watermark"
      width="420"
      height="420"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line stroke="#dcb75d" strokeWidth="1" x1="32" y1="8" x2="32" y2="56" />
      <line stroke="#dcb75d" strokeWidth="1" x1="12" y1="56" x2="52" y2="56" />
      <line stroke="#dcb75d" strokeWidth="1" x1="8" y1="18" x2="56" y2="18" />
      <path stroke="#dcb75d" strokeWidth="1" fill="none" d="M4 18 Q14 30 24 18" />
      <path stroke="#dcb75d" strokeWidth="1" fill="none" d="M40 18 Q50 30 60 18" />
    </svg>
  );
}
