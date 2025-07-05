import React from "react";
import { lineStyleMap } from "../constants/lineStyleMap";

interface Segment {
  lineName: string;
  ratio: number;
  textSize?: string; // ← (선택) 이 세그먼트만 글자 크기 덮어쓰기
}
interface LineProgressProps {
  segments: Segment[];
}

const CIRCLE = 24;
const BAR_H = 8;

const LineProgress: React.FC<LineProgressProps> = ({ segments }) => {
  if (!segments.length) return null;

  const fallback = { color: "#999", textSize: "12px" };

  // Circle 공통
  const Circle = ({
    color,
    textSize,
    label,
  }: {
    color: string;
    textSize: string;
    label: string;
  }) => (
    <div
      className="relative z-10 flex-shrink-0 flex items-center justify-center rounded-full text-white"
      style={{
        width: CIRCLE,
        height: CIRCLE,
        backgroundColor: color,
        fontSize: textSize,
      }}
    >
      {label}
    </div>
  );

  return (
    <div className="w-full max-w-[640px] mx-auto flex items-center">
      {/* ● 출발역 */}
      {(() => {
        const seg = segments[0];
        const base = lineStyleMap[seg.lineName] ?? fallback;
        const color = base.color;
        const textSize = seg.textSize ?? base.textSize;
        return (
          <Circle color={color} textSize={textSize} label={seg.lineName} />
        );
      })()}

      {/* ─ Bar 묶음 */}
      <div
        className="flex flex-grow items-center"
        style={{ marginLeft: -CIRCLE / 2, marginRight: -CIRCLE / 2 }}
      >
        {segments.map((seg, idx) => {
          const base = lineStyleMap[seg.lineName] ?? fallback;
          const color = base.color;
          const rounded =
            idx === 0
              ? "rounded-l-full"
              : idx === segments.length - 1
                ? "rounded-r-full"
                : "";
          return (
            <div
              key={idx}
              className={rounded}
              style={{
                height: BAR_H,
                flexGrow: seg.ratio,
                backgroundColor: color,
              }}
            />
          );
        })}
      </div>

      {/* ● 도착역 */}
      {(() => {
        const seg = segments[segments.length - 1];
        const base = lineStyleMap[seg.lineName] ?? fallback;
        const color = base.color;
        const textSize = seg.textSize ?? base.textSize;
        return (
          <Circle color={color} textSize={textSize} label={seg.lineName} />
        );
      })()}
    </div>
  );
};

export default LineProgress;
