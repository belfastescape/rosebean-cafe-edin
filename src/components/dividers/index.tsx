import WaveDivider from "./WaveDivider";
import ScallopDivider from "./ScallopDivider";
import CutDivider from "./CutDivider";

interface Props {
  kind?: "wave" | "scallop" | "cut";
  fill: string;
  height?: number;
}

export default function Divider({ kind = "wave", fill, height }: Props) {
  if (kind === "cut") return <CutDivider fill={fill} height={height ?? 90} />;
  if (kind === "scallop") return <ScallopDivider fill={fill} height={height ?? 64} />;
  return <WaveDivider fill={fill} height={height ?? 100} />;
}
