"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE } from "@/content/site";

export default function Visit() {
  return (
    <section
      id="visit"
      style={{ background: "var(--bg)", position: "relative", paddingTop: 40 }}
    >
      <div className="container section-pad">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            {SITE.visit.eyebrow}
          </span>
          <h2 className="h-section" style={{ marginTop: 18, textWrap: "balance" as React.CSSProperties["textWrap"] }}>
            Open from{" "}
            <span className="underline-script" style={{ color: "var(--ink)", whiteSpace: "nowrap" }}>
              7.30
            </span>
            , every day.
          </h2>
        </motion.div>

        {/* two-column */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.08 }}
          className="visit-grid"
        >
          {/* hours + address card */}
          <div className="visit-card">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                margin: 0,
                fontSize: 28,
                letterSpacing: "-0.01em",
              }}
            >
              Hours
            </h3>
            <dl
              style={{
                margin: "20px 0 0",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px 24px",
              }}
            >
              {SITE.visit.hours.map((h, i) => (
                <React.Fragment key={i}>
                  <dt style={{ color: "var(--ink-soft)", fontWeight: 500, whiteSpace: "nowrap" }}>
                    {h.day}
                  </dt>
                  <dd style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 18 }}>
                    {h.time}
                  </dd>
                </React.Fragment>
              ))}
            </dl>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: "32px 0" }} />

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                margin: 0,
                fontSize: 28,
                letterSpacing: "-0.01em",
              }}
            >
              Find us
            </h3>
            <address style={{ fontStyle: "normal", marginTop: 16, lineHeight: 1.7 }}>
              {SITE.visit.address.map((line, i) => (
                <div key={i} style={{ color: "var(--ink-soft)" }}>
                  {line}
                </div>
              ))}
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 4 }}>
                <a
                  href={`tel:${SITE.visit.phone.replace(/\D/g, "")}`}
                  style={{
                    color: "var(--ink)",
                    textDecoration: "underline",
                    textDecorationColor: "var(--accent)",
                    textUnderlineOffset: 4,
                  }}
                >
                  {SITE.visit.phone}
                </a>
                <a
                  href={`mailto:${SITE.visit.email}`}
                  style={{
                    color: "var(--ink)",
                    textDecoration: "underline",
                    textDecorationColor: "var(--accent)",
                    textUnderlineOffset: 4,
                  }}
                >
                  {SITE.visit.email}
                </a>
              </div>
            </address>
          </div>

          {/* map */}
          <div className="visit-map">
            {SITE.visit.map ? (
              <iframe
                title="Map"
                src={SITE.visit.map}
                loading="lazy"
                style={{ width: "100%", height: "100%", border: 0, borderRadius: 8 }}
              />
            ) : (
              <div className="map-placeholder" aria-label="Map placeholder">
                <svg
                  viewBox="0 0 400 400"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <rect width="400" height="400" fill="var(--bg-soft)" />
                  <g stroke="var(--bg-deep)" strokeOpacity=".25" strokeWidth="2" fill="none">
                    <path d="M-20 80 L 420 130" />
                    <path d="M-20 180 L 420 220" />
                    <path d="M-20 280 L 420 320" />
                    <path d="M80 -20 L 130 420" />
                    <path d="M220 -20 L 240 420" />
                    <path d="M320 -20 L 310 420" />
                  </g>
                  <rect x="240" y="140" width="120" height="120" fill="var(--accent)" opacity=".25" />
                  <text
                    x="300"
                    y="208"
                    textAnchor="middle"
                    fill="var(--bg-deep)"
                    opacity=".6"
                    style={{ font: "italic 14px var(--font-display)" }}
                  >
                    Park
                  </text>
                  <g transform="translate(160 190)">
                    <circle r="36" fill="var(--accent)" opacity=".22" />
                    <circle r="14" fill="var(--accent)" />
                    <circle r="5" fill="var(--bg-deep)" />
                  </g>
                  <text
                    x="180"
                    y="218"
                    fill="var(--ink)"
                    style={{ font: "600 13px var(--font-body)" }}
                  >
                    You&apos;ll find us here
                  </text>
                </svg>
                <div className="map-note">
                  Map placeholder · paste a Google embed in{" "}
                  <code>content/site.ts</code>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <style>{`
        .visit-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 40px;
          align-items: stretch;
        }
        .visit-card {
          background: var(--cream-card);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 44px 40px;
        }
        .visit-map {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--line);
          min-height: 360px;
        }
        .map-placeholder { position: relative; height: 100%; }
        .map-note {
          position: absolute; left: 16px; bottom: 16px;
          background: rgba(255,255,255,.92);
          border: 1px solid var(--line);
          padding: 8px 12px;
          font-size: 12px;
          color: var(--ink-soft);
          border-radius: 6px;
        }
        .map-note code {
          background: var(--bg);
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 11.5px;
        }
        @media (max-width: 980px) {
          .visit-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
