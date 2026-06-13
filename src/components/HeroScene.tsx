"use client";

export default function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      {/* warm radial glow */}
      <div className="hero-sun" />

      {/* drifting petals */}
      <div className="petals">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className={`petal p${i % 7}`}
            style={{ "--i": i } as React.CSSProperties}
          >
            <svg width="22" height="34" viewBox="0 0 22 34">
              <path
                d="M11 1 C 20 10, 21 24, 11 33 C 1 24, 2 10, 11 1 Z"
                fill="var(--accent)"
                opacity=".9"
              />
            </svg>
          </span>
        ))}
      </div>

      {/* swaying marigold flower, bottom-left */}
      <div className="hero-flower">
        <svg width="220" height="320" viewBox="0 0 220 320">
          <g className="stem">
            <path
              d="M120 320 C 100 240, 140 180, 110 80"
              stroke="var(--bg-deep)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M115 200 C 80 190, 70 170, 60 150 C 80 158, 100 170, 115 200 Z"
              fill="var(--bg-deep)"
              opacity=".9"
            />
            <path
              d="M118 160 C 150 150, 158 130, 168 110 C 152 122, 132 134, 118 160 Z"
              fill="var(--bg-deep)"
              opacity=".9"
            />
          </g>
          <g className="flower" transform="translate(110 78)">
            {Array.from({ length: 12 }).map((_, i) => (
              <ellipse
                key={i}
                cx="0"
                cy="-32"
                rx="13"
                ry="28"
                fill="var(--accent)"
                transform={`rotate(${i * 30})`}
              />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <ellipse
                key={i}
                cx="0"
                cy="-20"
                rx="9"
                ry="18"
                fill="var(--accent-deep)"
                transform={`rotate(${i * 30 + 15})`}
                opacity=".95"
              />
            ))}
            <circle r="9" fill="var(--ink)" />
          </g>
        </svg>
      </div>

      {/* coffee cup with steam, top-right */}
      <div className="hero-coffee">
        <svg width="220" height="260" viewBox="0 0 220 260">
          <g className="steam">
            <path
              className="s1"
              d="M85 20 C 75 40, 105 60, 90 90"
              stroke="var(--ink-soft)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity=".55"
            />
            <path
              className="s2"
              d="M115 10 C 130 35, 100 60, 120 95"
              stroke="var(--ink-soft)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity=".5"
            />
            <path
              className="s3"
              d="M145 22 C 135 45, 160 65, 145 95"
              stroke="var(--ink-soft)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity=".45"
            />
          </g>
          <ellipse cx="115" cy="220" rx="92" ry="14" fill="var(--bg-deep)" opacity=".95" />
          <ellipse cx="115" cy="216" rx="92" ry="12" fill="var(--cream-card)" />
          <path
            d="M50 120 L180 120 L168 210 C 165 222, 152 228, 140 228 L90 228 C 78 228, 65 222, 62 210 Z"
            fill="var(--bg-deep)"
          />
          <path
            d="M62 130 L168 130 L158 200 C 156 208, 148 213, 140 213 L90 213 C 82 213, 74 208, 72 200 Z"
            fill="var(--cream-card)"
          />
          <ellipse cx="115" cy="132" rx="52" ry="9" fill="#4a2a18" />
          <path
            d="M180 140 C 210 145, 210 195, 175 195"
            stroke="var(--bg-deep)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <style>{`
        .hero-scene { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
        .hero-sun {
          position: absolute;
          left: 50%; top: 24%;
          width: 1200px; height: 1200px;
          transform: translate(-50%, -50%);
          background: radial-gradient(closest-side, color-mix(in oklab, var(--accent) 38%, transparent), transparent 70%);
          opacity: .55;
        }
        .hero-flower {
          position: absolute; left: -10px; bottom: -20px;
          transform-origin: bottom center;
          animation: sway 7s ease-in-out infinite;
        }
        .hero-flower .flower {
          transform: translate(110px, 78px);
          transform-origin: center;
          animation: spin 28s linear infinite;
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-3deg); }
          50%       { transform: rotate(3deg); }
        }
        @keyframes spin {
          to { transform: translate(110px, 78px) rotate(360deg); }
        }
        .hero-coffee {
          position: absolute; right: 4%; top: 12%;
        }
        .hero-coffee .steam path { transform-origin: bottom center; }
        .hero-coffee .s1 { animation: steam 4.2s ease-in-out infinite; }
        .hero-coffee .s2 { animation: steam 3.4s ease-in-out infinite .4s; }
        .hero-coffee .s3 { animation: steam 4.8s ease-in-out infinite .8s; }
        @keyframes steam {
          0%   { transform: translateY(20px) scaleY(.8); opacity: 0; }
          30%  { opacity: .55; }
          70%  { opacity: .25; }
          100% { transform: translateY(-30px) scaleY(1.1); opacity: 0; }
        }
        .petals { position: absolute; inset: 0; }
        .petal {
          position: absolute;
          top: -40px;
          animation: drift 14s linear infinite;
          animation-delay: calc(var(--i) * -1.1s);
          opacity: .8;
        }
        .petal.p0 { left: 4%; }
        .petal.p1 { left: 18%; animation-duration: 16s; }
        .petal.p2 { left: 32%; animation-duration: 12s; }
        .petal.p3 { left: 46%; animation-duration: 18s; }
        .petal.p4 { left: 60%; animation-duration: 14s; }
        .petal.p5 { left: 74%; animation-duration: 11s; }
        .petal.p6 { left: 88%; animation-duration: 17s; }
        @keyframes drift {
          0%   { transform: translateY(-40px) rotate(0deg); opacity: 0; }
          10%  { opacity: .85; }
          90%  { opacity: .7; }
          100% { transform: translateY(110vh) rotate(540deg); opacity: 0; }
        }
        @media (max-width: 880px) {
          .hero-flower { transform: scale(.7); left: -40px; bottom: -50px; }
          .hero-coffee { transform: scale(.65); right: -20px; top: 6%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-flower, .hero-flower .flower,
          .hero-coffee .steam path, .petal { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
