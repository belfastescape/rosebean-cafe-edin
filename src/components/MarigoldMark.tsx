interface Props {
  size?: number;
  color?: string;
  accent?: string;
}

export default function MarigoldMark({
  size = 28,
  color,
  accent,
}: Props) {
  const c = color ?? "var(--accent)";
  const k = accent ?? "var(--ink)";
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <g transform="translate(20 20)">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-10"
            rx="4.4"
            ry="9"
            fill={c}
            transform={`rotate(${i * 45})`}
            opacity="0.95"
          />
        ))}
        <circle r="4.2" fill={k} />
      </g>
    </svg>
  );
}
