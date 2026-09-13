import React, { useState } from "react";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import AnimatedWords from "../components/AnimatedWords.jsx";
import { FIRM } from "../data/content.js";

/**
 * This form works out of the box with no backend: submitting it opens
 * the visitor's email client with a pre-filled message addressed to
 * FIRM.email (see src/data/content.js). That's the most reliable
 * zero-setup option for a static site.
 *
 * If you'd rather receive submissions silently (no email client popup),
 * swap handleSubmit for a POST to a form backend such as Formspree,
 * Getform, or your own API route — a few lines' change, commented below.
 */
export default function Contact() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent(`Consultation request from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${FIRM.email}?subject=${subject}&body=${body}`;

    setStatus("sent");
    form.reset();

    /* ---- Example: swap to a silent POST-based backend instead ----
    fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    }).then(() => setStatus("sent"));
    ------------------------------------------------------------------ */
  }

  return (
    <div className="slp-page">
      <section className="slp-block" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div className="slp-shell">
          <p className="slp-eyebrow">Get in touch</p>
          <h1 className="slp-h1" style={{ maxWidth: "13ch" }}>
            <AnimatedWords text="Let's discuss your matter." />
          </h1>
          <p className="slp-lede" style={{ opacity: 0, animation: "slpFade .8s ease .5s forwards" }}>
            Tell us briefly what you need, and the right partner from our team will get back to
            you.
          </p>
        </div>
      </section>

      <section className="slp-block" style={{ paddingTop: 0 }}>
        <div className="slp-shell slp-contact-grid">
          <Reveal as="div">
            <div className="slp-info-row">
              <MapPin size={18} className="slp-info-icon" />
              <div>
                <div className="slp-info-label">Office</div>
                <div className="slp-info-value">
                  {FIRM.addressLines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < FIRM.addressLines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="slp-info-row">
              <Phone size={18} className="slp-info-icon" />
              <div>
                <div className="slp-info-label">Phone</div>
                <div className="slp-info-value">
                  <a href={`tel:${FIRM.phone.replace(/\s+/g, "")}`}>{FIRM.phone}</a>
                </div>
              </div>
            </div>
            <div className="slp-info-row">
              <Mail size={18} className="slp-info-icon" />
              <div>
                <div className="slp-info-label">Email</div>
                <div className="slp-info-value">
                  <a href={`mailto:${FIRM.email}`}>{FIRM.email}</a>
                </div>
              </div>
            </div>
            <p className="slp-submit-note" style={{ marginTop: 16 }}>
              Contact details are placeholders from <code>src/data/content.js</code> — replace
              them with the firm's real address, phone, and email before deploying.
            </p>
          </Reveal>

          <Reveal as="form" delay={120} onSubmit={handleSubmit}>
            <div className="slp-field">
              <label htmlFor="slp-name">Full name</label>
              <input id="slp-name" name="name" type="text" required placeholder="Your name" />
            </div>
            <div className="slp-field">
              <label htmlFor="slp-email">Email</label>
              <input id="slp-email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="slp-field">
              <label htmlFor="slp-matter">How can we help?</label>
              <textarea id="slp-matter" name="message" required placeholder="Briefly describe your legal matter" />
            </div>
            <button type="submit" className="slp-btn-primary" style={{ border: "none" }}>
              {status === "sent" ? "Opened your email app" : "Send message"} <ArrowUpRight size={15} />
            </button>
            {status === "sent" && (
              <p className="slp-submit-note">
                Your email app should have opened with this message pre-filled — just hit send
                there. Want submissions to arrive silently instead? See the comment in
                src/pages/Contact.jsx for wiring up Formspree or your own backend.
              </p>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
