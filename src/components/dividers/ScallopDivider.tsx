interface Props {
  fill?: string;
  height?: number;
}

export default function ScallopDivider({ fill = "#fff", height = 64 }: Props) {
  const bumps = 12;
  const w = 1200, h = 64;
  const baseY = 36;
  const peakY = 8;
  const step = w / bumps;
  let d = `M0,${h} L0,${baseY} `;
  for (let i = 0; i < bumps; i++) {
    const x1 = i * step + step / 2;
    const x2 = (i + 1) * step;
    d += `Q${x1},${peakY} ${x2},${baseY} `;
  }
  d += `L${w},${h} Z`;

  return (
    <div style={{ position: "relative", lineHeight: 0 }}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        width="100%"
        height={height}
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <path d={d} fill={fill} />
      </svg>
    </div>
  );
}
