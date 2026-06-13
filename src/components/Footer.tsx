import { SITE } from "@/content/site";
import MarigoldMark from "./MarigoldMark";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--line)",
        padding: "44px 0 60px",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 24,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <MarigoldMark size={23} />
          <span>{SITE.brand.name}</span>
        </span>

        <div style={{ color: "var(--ink-soft)", fontSize: 14 }}>
          {SITE.footer.line}
        </div>

        <div style={{ color: "var(--ink-soft)", fontSize: 13, opacity: 0.8 }}>
          {SITE.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
