"use client";

import { useState } from "react";
import { SITE } from "@/content/site";
import Divider from "./dividers";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M1 7 H 12 M 7 2 L 12 7 L 7 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  const [hasVideo, setHasVideo] = useState(true);
  const heroImage = SITE.hero.image;
  const hasMedia = Boolean(heroImage) || hasVideo;

  return (
    <header
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: 84,
        background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-soft) 100%)",
        overflow: "hidden",
      }}
    >
      {heroImage ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImage}
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "color-mix(in oklab, var(--bg) 30%, transparent)" }} />
        </>
      ) : hasVideo ? (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-poster.jpg"
            onError={() => setHasVideo(false)}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          >
            {/* No `type` attr — lets the browser play whatever the user supplies
                (.mov / .mp4 / .webm). The default asset is a .mov in /public. */}
            <source src={SITE.hero.video} />
          </video>
          <div style={{ position: "absolute", inset: 0, background: "color-mix(in oklab, var(--bg) 30%, transparent)" }} />
        </>
      ) : null}

      <div
        className="container"
        style={{
          position: "relative",
          minHeight: "calc(100vh - 84px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 60,
          paddingBottom: 140,
        }}
      >
        <div style={{ marginBottom: 28 }}>
          <span className="eyebrow">Open daily · 7.30 — late</span>
        </div>

        <h1 className="h-display" style={{ maxWidth: "20ch", textWrap: "balance" as React.CSSProperties["textWrap"] }}>
          {SITE.hero.line1}
          <br />
          <span
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(48px, 7vw, 118px)",
              lineHeight: 0.95,
              color: "var(--accent-deep)",
              WebkitTextStroke: "2px #000",
              paintOrder: "stroke fill",
              display: "inline-block",
              transform: "translateY(0.04em) rotate(-2deg)",
              paddingBottom: "0.15em",
            }}
          >
            {SITE.hero.line2}
          </span>
        </h1>

        <p
          style={{
            maxWidth: 560,
            marginTop: 32,
            fontSize: 18,
            color: hasMedia ? "#fff" : "var(--ink-soft)",
            ...(hasMedia && {
              padding: "16px 20px",
              borderRadius: 12,
              background: "color-mix(in oklab, var(--ink) 38%, transparent)",
              backdropFilter: "blur(12px) saturate(140%)",
              WebkitBackdropFilter: "blur(12px) saturate(140%)",
              border: "1px solid color-mix(in oklab, #fff 20%, transparent)",
              boxShadow: "0 8px 32px color-mix(in oklab, var(--ink) 15%, transparent)",
            }),
          }}
        >
          {SITE.hero.sub}
        </p>

        <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#menu" className="btn">
            See the menu
            <span className="arr"><ArrowIcon /></span>
          </a>
          <a href="#visit" className="btn accent">
            Find us today
            <span className="arr"><ArrowIcon /></span>
          </a>
        </div>

        {/* scroll cue */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 28,
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "var(--ink-soft)",
            fontSize: 13,
            letterSpacing: ".16em",
            textTransform: "uppercase",
          }}
        >
          <span>Scroll</span>
          <span
            style={{
              width: 1,
              height: 56,
              background: "var(--ink-soft)",
              opacity: 0.45,
              display: "inline-block",
              animation: "scrollPulse 2.4s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Divider kind="wave" fill="var(--cream-card)" />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(.4); transform-origin: top; opacity: .25; }
          50%       { transform: scaleY(1);  transform-origin: top; opacity: .75; }
        }
      `}</style>
    </header>
  );
}
