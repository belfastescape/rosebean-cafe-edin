"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/content/site";
import MarigoldMark from "./MarigoldMark";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "background .35s ease, border-color .35s ease, backdrop-filter .35s ease",
        background: scrolled
          ? "color-mix(in oklab, var(--bg) 88%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--line)"
          : "1px solid transparent",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 84,
        }}
      >
        <a href="#top" style={{ display: "inline-flex", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 28,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <MarigoldMark size={26} />
            <span>{SITE.brand.name}</span>
          </span>
        </a>

        {/* desktop links */}
        <ul className="nav-links" style={{ listStyle: "none", display: "flex", gap: 36, margin: 0, padding: 0 }}>
          {SITE.nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                style={{
                  fontSize: 14,
                  letterSpacing: ".04em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  opacity: 0.82,
                  fontWeight: 500,
                  transition: "opacity .2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.82"; }}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#visit"
          className="nav-cta"
          style={{
            padding: "10px 18px",
            borderRadius: 999,
            border: "1px solid var(--ink)",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: ".02em",
            color: "var(--ink)",
          }}
        >
          Book a table
        </a>

        {/* hamburger (mobile) */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="nav-burger"
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            padding: 8,
            cursor: "pointer",
          }}
        >
          <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
            <path
              d={open ? "M3 3 L23 17 M23 3 L3 17" : "M2 4 H24 M2 10 H24 M2 16 H24"}
              stroke="var(--ink)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* mobile menu sheet */}
      {open && (
        <div
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--line)",
            padding: "16px 28px 24px",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {SITE.nav.map((n) => (
              <li key={n.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={n.href}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .nav-links { display: none !important; }
          .nav-cta   { display: none !important; }
          .nav-burger { display: inline-flex !important; }
        }
      `}</style>
    </nav>
  );
}
