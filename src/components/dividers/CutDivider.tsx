interface Props {
  fill?: string;
  height?: number;
}

export default function CutDivider({ fill = "#fff", height = 90 }: Props) {
  return (
    <div style={{ position: "relative", lineHeight: 0 }}>
      <svg
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        width="100%"
        height={height}
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <path d="M0,90 L0,18 L1200,72 L1200,90 Z" fill={fill} />
      </svg>
    </div>
  );
}
