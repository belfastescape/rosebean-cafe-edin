interface Props {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export default function QuoteMark({
  size = 64,
  color = "currentColor",
  style,
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      style={style}
    >
      <path
        d="M14 38c0-12 7-22 18-26l2 5c-7 3-12 9-13 16h6a7 7 0 0 1 7 7v7a7 7 0 0 1-7 7h-6a7 7 0 0 1-7-7v-9zm26 0c0-12 7-22 18-26l2 5c-7 3-12 9-13 16h6a7 7 0 0 1 7 7v7a7 7 0 0 1-7 7h-6a7 7 0 0 1-7-7v-9z"
        fill={color}
      />
    </svg>
  );
}
