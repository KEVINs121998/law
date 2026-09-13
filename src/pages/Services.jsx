import React from "react";
import Reveal from "../components/Reveal.jsx";
import AnimatedWords from "../components/AnimatedWords.jsx";
import { PRACTICE_AREAS } from "../data/content.js";

export default function Services() {
  return (
    <div className="slp-page">
      <section className="slp-block" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div className="slp-shell">
          <p className="slp-eyebrow">What we handle</p>
          <h1 className="slp-h1" style={{ maxWidth: "14ch" }}>
            <AnimatedWords text="Practice areas" />
          </h1>
          <p className="slp-lede" style={{ opacity: 0, animation: "slpFade .8s ease .4s forwards" }}>
            Nine areas of focused practice, spanning litigation, regulatory, and advisory work.
          </p>
        </div>
      </section>
      <section className="slp-block" style={{ paddingTop: 0 }}>
        <div className="slp-shell">
          <ul className="slp-num-list">
            {PRACTICE_AREAS.map((p, i) => (
              <Reveal as="li" className="slp-num-item" key={p.title} delay={(i % 5) * 70}>
                <div className="slp-num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="slp-num-title">{p.title}</h3>
                  <p className="slp-num-desc">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
