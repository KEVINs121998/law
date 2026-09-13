import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Watermark from "../components/Watermark.jsx";
import Reveal from "../components/Reveal.jsx";
import AnimatedWords from "../components/AnimatedWords.jsx";
import CountUp from "../components/CountUp.jsx";
import { PRACTICE_AREAS } from "../data/content.js";

export default function Home() {
  return (
    <div className="slp-page">
      <section className="slp-hero">
        <Watermark />
        <div className="slp-shell">
          <p className="slp-eyebrow">Advocates &amp; Legal Consultants, Mumbai</p>
          <h1 className="slp-h1">
            <AnimatedWords text="Outcomes, not just representation." />
          </h1>
          <p className="slp-lede">
            We are a group of vibrant, dedicated attorneys with hands-on legal expertise across
            litigation, taxation, and corporate advisory. Every representation is built around
            one question: what result does our client actually need.
          </p>
          <div className="slp-hero-actions">
            <Link to="/contact" className="slp-btn-primary">
              Book a consultation <ArrowUpRight size={15} />
            </Link>
            <Link to="/practice-areas" className="slp-btn-ghost">
              View practice areas
            </Link>
          </div>

          <div className="slp-hero-figures">
            <div>
              <div className="slp-fig-num"><CountUp to={9} /></div>
              <div className="slp-fig-label">Practice areas covered</div>
            </div>
            <div>
              <div className="slp-fig-num"><CountUp to={6} /></div>
              <div className="slp-fig-label">Partners &amp; associate partners</div>
            </div>
            <div>
              <div className="slp-fig-num"><CountUp to={35} suffix="+" /></div>
              <div className="slp-fig-label">Years, senior partner experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="slp-block">
        <div className="slp-shell slp-two-col">
          <Reveal as="div" sig>
            <p className="slp-eyebrow">Our philosophy</p>
            <h2 className="slp-h2">Fee models built around your risk, not our hours.</h2>
          </Reveal>
          <Reveal as="div" delay={120}>
            <p className="slp-lede">
              We believe in an entrepreneurial legal services model, unrestrained by the
              billable hour. Shifting fee risk to the firm aligns our incentives with our
              clients' and reduces their exposure — giving clients who lack the resources for
              important litigation the opportunity to pursue it, with predictable cash flow and
              budgeting on both sides.
            </p>
            <Link to="/about" className="slp-btn-ghost">
              More about our approach
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="slp-block slp-block-alt">
        <div className="slp-shell">
          <Reveal as="div" sig>
            <p className="slp-eyebrow">What we handle</p>
            <h2 className="slp-h2">Practice areas</h2>
          </Reveal>
          <ul className="slp-num-list" style={{ marginTop: 32 }}>
            {PRACTICE_AREAS.slice(0, 5).map((p, i) => (
              <Reveal as="li" className="slp-num-item" key={p.title} delay={i * 70}>
                <div className="slp-num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="slp-num-title">{p.title}</h3>
                </div>
              </Reveal>
            ))}
          </ul>
          <div style={{ marginTop: 28 }}>
            <Link to="/practice-areas" className="slp-btn-ghost">
              See all 9 practice areas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
