import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import Logo from "./Logo.jsx";
import Reveal from "./Reveal.jsx";
import { NAV_ITEMS, PRACTICE_AREAS, FIRM } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="slp-footer">
      <div className="slp-shell">
    

        <div className="slp-footer-grid">
          <div>
            <div className="slp-footer-brand-row">
              <Logo size={24} />
              <div className="slp-footer-brand-name">{FIRM.name}</div>
            </div>
            <p className="slp-footer-tagline">
              An entrepreneurial legal practice across litigation, taxation, and corporate
              advisory — strategising every matter around the client's preferred outcome.
            </p>
          </div>

          <div>
            <p className="slp-footer-col-title">Explore</p>
            <ul className="slp-footer-list">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="slp-footer-col-title">Practice areas</p>
            <ul className="slp-footer-list">
              {PRACTICE_AREAS.slice(0, 5).map((p) => (
                <li key={p.title}>
                  <Link to="/practice-areas">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="slp-footer-col-title">Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div className="slp-footer-contact-item">
                <MapPin size={16} />
                <span>
                  {FIRM.addressLines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < FIRM.addressLines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </div>
              <div className="slp-footer-contact-item">
                <Phone size={16} />
                <a href={`tel:${FIRM.phone.replace(/\s+/g, "")}`}>{FIRM.phone}</a>
              </div>
              <div className="slp-footer-contact-item">
                <Mail size={16} />
                <a href={`mailto:${FIRM.email}`}>{FIRM.email}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="slp-footer-bottom">
          <span>© {new Date().getFullYear()} {FIRM.name}. All rights reserved.</span>
          <div className="slp-footer-legal">
            <span>Advocates &amp; Legal Consultants</span>
            <span>Mumbai, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
