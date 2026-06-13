"use client";

import { motion } from "framer-motion";
import { SITE } from "@/content/site";
import QuoteMark from "./QuoteMark";
import Divider from "./dividers";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--cream-card)",
        position: "relative",
        paddingTop: 40,
      }}
    >
      <div
        className="container section-pad"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 56,
        }}
      >
        <motion.div {...fadeUp(0)}>
          <QuoteMark size={52} color="var(--accent)" style={{ opacity: 0.9 }} />
        </motion.div>

        <motion.blockquote
          {...fadeUp(0.08)}
          style={{
            margin: 0,
            maxWidth: "30ch",
            fontFamily: "var(--font-script)",
            fontSize: "clamp(36px, 5vw, 68px)",
            lineHeight: 1.22,
            fontWeight: 600,
            color: "var(--ink)",
            textWrap: "balance" as React.CSSProperties["textWrap"],
          }}
        >
          &ldquo;{SITE.about.quote}&rdquo;
        </motion.blockquote>

        <motion.div
          {...fadeUp(0.16)}
          style={{ display: "flex", alignItems: "center", gap: 16 }}
        >
          <span style={{ width: 28, height: 1, background: "var(--ink)", opacity: 0.35, display: "inline-block" }} />
          <span
            style={{
              fontSize: 14,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--ink-soft)",
            }}
          >
            {SITE.about.attribution}
          </span>
          <span style={{ width: 28, height: 1, background: "var(--ink)", opacity: 0.35, display: "inline-block" }} />
        </motion.div>

        <motion.div {...fadeUp(0.24)} style={{ transform: "rotate(180deg)" }}>
          <QuoteMark size={52} color="var(--accent)" style={{ opacity: 0.9 }} />
        </motion.div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Divider kind="wave" fill="var(--bg)" />
      </div>
    </section>
  );
}
