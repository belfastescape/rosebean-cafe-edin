interface Props {
  fill?: string;
  height?: number;
}

export default function WaveDivider({ fill = "#fff", height = 100 }: Props) {
  return (
    <div style={{ position: "relative", lineHeight: 0 }}>
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        width="100%"
        height={height}
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <path
          d="M0,100 L0,52 Q300,12 600,52 T1200,52 L1200,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
