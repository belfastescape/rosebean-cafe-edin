"use client";

import { motion } from "framer-motion";
import { SITE } from "@/content/site";
import Divider from "./dividers";

const TILES = [
  { off: 0,  rest: -9,  enter: -26, x: -8 },
  { off: 48, rest:  7,  enter:  22, x:  7 },
  { off: 16, rest: -5,  enter: -20, x: -6 },
  { off: 64, rest: 10,  enter:  26, x:  8 },
] as const;

const FALLBACK_COLORS = ["#d9a14a", "#7d986b", "#c2452d", "#3d4a2a"];

export default function Area() {
  return (
    <section
      id="area"
      style={{ background: "var(--bg)", position: "relative", paddingTop: 40 }}
    >
      <div className="container section-pad">
        {/* heading row */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="area-head"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "end",
            marginBottom: 80,
          }}
        >
          <div>
            <span className="eyebrow">{SITE.area.eyebrow}</span>
            <h2 className="h-section" style={{ marginTop: 18, maxWidth: "14ch" }}>
              {SITE.area.title.replace(/\.$/, "")}
              <span style={{ color: "var(--accent-deep)" }}>.</span>
            </h2>
          </div>
          <p
            style={{
              color: "var(--ink-soft)",
              fontSize: 18,
              maxWidth: "38ch",
              margin: 0,
              justifySelf: "end",
            }}
          >
            {SITE.area.sub}
          </p>
        </motion.div>

        {/* gallery grid */}
        <div className="area-grid">
          {SITE.area.images.map((img, i) => {
            const tile = TILES[i];
            return (
              <motion.figure
                key={i}
                initial={{
                  x: `${tile.x}%`,
                  y: tile.off + 28,
                  rotate: tile.enter,
                  scale: 0.88,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  y: tile.off,
                  rotate: tile.rest,
                  scale: 1,
                  opacity: 1,
                }}
                whileHover={{
                  y: tile.off - 10,
                  rotate: 0,
                  scale: 1.04,
                  zIndex: 5,
                }}
                viewport={{ once: true, margin: "-12%" }}
                transition={{
                  duration: 1.05,
                  ease: [0.2, 0.75, 0.25, 1],
                  opacity: { duration: 0.7, ease: "easeOut" as const },
                }}
                style={{ margin: 0, position: "relative" }}
              >
                {/* polaroid frame */}
                <div
                  className="area-img-wrap"
                  style={{ "--fallback-bg": FALLBACK_COLORS[i] } as React.CSSProperties}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.style.display = "none";
                      if (el.parentElement) {
                        el.parentElement.style.background = FALLBACK_COLORS[i];
                        el.parentElement.dataset.fallback = `area-${i + 1}.jpg`;
                      }
                    }}
                  />
                </div>
                <figcaption
                  style={{
                    fontFamily: "var(--font-script)",
                    fontSize: 22,
                    color: "var(--ink-soft)",
                    marginTop: 14,
                    transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                    textAlign: i % 2 === 0 ? "left" : "right",
                  }}
                >
                  {img.caption}
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Divider kind="wave" fill="var(--cream-card)" />
      </div>

      <style>{`
        .area-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px 22px;
          align-items: start;
          padding: 30px 8px 50px;
          margin: -30px -8px -50px;
        }
        .area-img-wrap {
          position: relative;
          aspect-ratio: 1 / 1;
          background: var(--ink);
          border: 14px solid var(--ink);
          border-bottom-width: 26px;
          border-radius: 3px;
          overflow: hidden;
          box-shadow:
            0 1px 0 rgba(255,255,255,.06) inset,
            0 12px 28px -10px rgba(0,0,0,.35);
        }
        .area-img-wrap::before {
          content: attr(data-fallback);
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,.9);
          font-weight: 500;
        }
        .area-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        @media (max-width: 980px) {
          .area-grid { grid-template-columns: repeat(2, 1fr); gap: 32px 24px; }
          .area-head  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .area-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
