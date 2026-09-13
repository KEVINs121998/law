import React from "react";
import Reveal from "../components/Reveal.jsx";
import AnimatedWords from "../components/AnimatedWords.jsx";

export default function About() {
  return (
    <div className="slp-page">
      <section className="slp-block" style={{ paddingTop: 64 }}>
        <div className="slp-shell">
          <p className="slp-eyebrow">About the firm</p>
          <h1 className="slp-h1" style={{ maxWidth: "16ch" }}>
            <AnimatedWords text="A firm shaped by the society it serves." />
          </h1>
          <p className="slp-lede" style={{ opacity: 0, animation: "slpFade .8s ease .5s forwards" }}>
            We are a group of vibrant and dedicated attorneys with hands-on legal expertise,
            handling a wide array of legal and dispute-resolution matters.
          </p>
        </div>
      </section>

      <hr className="slp-rule" />

      <section className="slp-block">
        <div className="slp-shell slp-two-col">
          <Reveal as="p" className="slp-eyebrow" sig>Culture</Reveal>
          <Reveal as="div" delay={120}>
            <p className="slp-lede">
              Our firm is a reflection of the culture our society represents — including the
              promotion of individuals to leadership positions regardless of caste, creed, sex,
              race, religion, or orientation.
            </p>
            <p className="slp-lede">
              Maintaining the diversification of our team is a prime tenet of the firm. We
              actively recruit team members of diverse backgrounds, and ensure every member
              receives challenging assignments and client-coordination exposure consistent with
              their demonstrated skill and ability.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="slp-block slp-block-alt">
        <div className="slp-shell">
          <Reveal as="blockquote" className="slp-quote" sig style={{ margin: "0 0 46px" }}>
            "Shifting fee risk to a firm often aligns the firm's incentives with the clients, and reduces client risk."
          </Reveal>
          <div className="slp-two-col">
            <Reveal as="p" className="slp-eyebrow" sig>Our philosophy</Reveal>
            <Reveal as="div" delay={120}>
              <p className="slp-lede">
                We believe in an entrepreneurial legal services business model, unrestrained by
                the billable-hour model. Clients place real value on shifting legal fee risk to
                their law firm — doing so aligns the firm's incentives with the client's and
                reduces client risk.
              </p>
              <p className="slp-lede">
                Clients who otherwise lack the financial resources to pursue important litigation
                are given the opportunity to pursue it. These arrangements bring predictable cash
                flow and budgeting to both firm and client.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="slp-block">
        <div className="slp-shell slp-two-col">
          <Reveal as="p" className="slp-eyebrow" sig>Our mission</Reveal>
          <Reveal as="div" delay={120}>
            <p className="slp-lede">
              Our firm is driven by our clients' demands for a legal service model that
              value-adds to their market standing — adequate processes for compliance and
              audit-trailing, analytical approaches to reducing legal risk, enhanced cost
              definiteness, and outcomes.
            </p>
            <p className="slp-lede">
              With each representation, our team stays centred on the desired outcome,
              strategising every stage of litigation against the end result. Focusing on the
              client's preferred result is an integrated part of our process for every case we
              take on.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
