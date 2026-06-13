"use client";

import { motion } from "framer-motion";
import { SITE } from "@/content/site";
import Divider from "./dividers";

const FALLBACK_COLORS = ["#d9a14a", "#7d986b", "#c2452d", "#3d4a2a", "#e89c2b", "#a37146"];

export default function Menu() {
  return (
    <section
      id="menu"
      style={{ background: "var(--cream-card)", position: "relative", paddingTop: 40 }}
    >
      <div className="container section-pad">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            {SITE.menu.eyebrow}
          </span>
          <h2
            className="h-section"
            style={{ marginTop: 18, position: "relative", display: "inline-block" }}
          >
            <span
              style={{
                fontFamily: "var(--font-script)",
                fontSize: ".72em",
                color: "var(--accent-deep)",
                position: "absolute",
                top: "-0.4em",
                left: "-1.6em",
                transform: "rotate(-10deg)",
                fontWeight: 600,
              }}
            >
              just
            </span>
            {SITE.menu.title}
          </h2>
          <p
            style={{
              color: "var(--ink-soft)",
              fontSize: 18,
              maxWidth: "40ch",
              margin: "20px auto 0",
            }}
          >
            {SITE.menu.sub}
          </p>
        </motion.div>

        {/* grid */}
        <div className="menu-grid">
          {SITE.menu.items.map((item, i) => {
            const delay = [0, 0.08, 0.16, 0.24][i % 4];
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease: "easeOut" as const, delay }}
                className="menu-card"
              >
                <div
                  className="menu-img"
                  style={{ "--fallback-bg": FALLBACK_COLORS[i] } as React.CSSProperties}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.style.display = "none";
                      if (el.parentElement) {
                        el.parentElement.style.background = FALLBACK_COLORS[i];
                        el.parentElement.dataset.fallback = `menu-${i + 1}.jpg`;
                      }
                    }}
                  />
                </div>
                <div className="menu-body">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: 12,
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                        fontSize: 26,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 22,
                        color: "var(--accent-deep)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      £{item.price}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: "8px 0 0",
                      color: "var(--ink-soft)",
                      fontSize: 15,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Divider kind="wave" fill="var(--bg-deep)" />
      </div>

      <style>{`
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px 30px;
        }
        .menu-card { display: flex; flex-direction: column; }
        .menu-img {
          position: relative;
          aspect-ratio: 16 / 9;
          border-radius: 6px;
          overflow: hidden;
          background: var(--bg-soft);
          margin-bottom: 18px;
        }
        .menu-img::before {
          content: attr(data-fallback);
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,.9); font-weight: 500;
        }
        .menu-img img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform .8s cubic-bezier(.2,.7,.3,1);
        }
        .menu-card:hover .menu-img img { transform: scale(1.04); }
        @media (max-width: 980px) {
          .menu-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 620px) {
          .menu-grid { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>
    </section>
  );
}
