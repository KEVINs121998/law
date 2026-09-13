import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo.jsx";
import { NAV_ITEMS } from "../data/content.js";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="slp-nav">
      <div className="slp-shell slp-nav-row">
        <Link to="/" className="slp-brand" onClick={() => setOpen(false)}>
          <Logo />
          <span>
            <div className="slp-brand-name">Shashwat Law Partners</div>
            <div className="slp-brand-sub">ADVOCATES &amp; LEGAL CONSULTANTS</div>
          </span>
        </Link>

        <nav className="slp-links">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) => `slp-link ${isActive ? "active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="slp-nav-cta">
          Book a consultation <ArrowUpRight size={14} />
        </Link>

        <button className="slp-burger" aria-label="Open menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`slp-mobile-menu ${open ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.id} to={item.path} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
