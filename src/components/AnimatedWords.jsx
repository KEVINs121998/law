import React from "react";

export default function AnimatedWords({ text, className = "" }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span
          key={i}
          className={`slp-word ${className}`}
          style={{ animationDelay: `${0.15 + i * 0.06}s`, marginRight: "0.28em" }}
        >
          {w}
        </span>
      ))}
    </>
  );
}
