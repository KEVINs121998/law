import React from "react";
import Reveal from "../components/Reveal.jsx";
import AnimatedWords from "../components/AnimatedWords.jsx";
import { PARTNERS, ASSOCIATE_PARTNERS } from "../data/content.js";

export default function Team() {
  return (
    <div className="slp-page">
      <section className="slp-block" style={{ paddingTop: 64, paddingBottom: 30 }}>
        <div className="slp-shell">
          <p className="slp-eyebrow">The people</p>
          <h1 className="slp-h1" style={{ maxWidth: "14ch" }}>
            <AnimatedWords text="Our team" />
          </h1>
          <p className="slp-lede" style={{ opacity: 0, animation: "slpFade .8s ease .4s forwards" }}>
            Partners and associate partners bringing decades of combined experience across law,
            chartered accountancy, and company secretarial practice.
          </p>
        </div>
      </section>
      <section className="slp-block" style={{ paddingTop: 0 }}>
        <div className="slp-shell">
          <p className="slp-team-group-label">Partners</p>
          {PARTNERS.map((m, i) => (
            <Reveal as="div" className="slp-team-item" key={m.name} delay={i * 90}>
              <h3 className="slp-team-name">{m.name}</h3>
              <div className="slp-team-role">{m.role}</div>
              <p className="slp-team-bio">{m.bio}</p>
            </Reveal>
          ))}

          <p className="slp-team-group-label">Associate Partners</p>
          {ASSOCIATE_PARTNERS.map((m, i) => (
            <Reveal as="div" className="slp-team-item" key={m.name} delay={i * 90}>
              <h3 className="slp-team-name">{m.name}</h3>
              <div className="slp-team-role">{m.role}</div>
              <p className="slp-team-bio">{m.bio}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
