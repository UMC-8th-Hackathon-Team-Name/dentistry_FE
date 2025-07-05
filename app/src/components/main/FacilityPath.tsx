/* FacilityPath.tsx */
import { FACILITIES } from "../../constants/facilities";
import { lineStyleMap } from "../../constants/lineStyleMap";
import FacilityBox from "../FacilityBox";

/* ① 역 이름(stationName) 추가 */
const routeData = [
  {
    line: "1",
    stationName: "창동역",
    facilities: [
      "horizontalWalker",
      "elevator",
      "horizontalWalker",
      "elevator",
      "horizontalWalker",
      "elevator",
    ],
  },
  {
    line: "4",
    stationName: "금정역",
    facilities: [
      "slope",
      "horizontalWalker",
      "voiceGuide",
      "horizontalWalker",
      "elevator",
      "wheelchairCharger",
    ],
  },
  {
    line: "인천1",
    stationName: "안산역",
    facilities: ["escalator"],
  },
];

const FacilityPath = () => (
  <div className="max-h-[222px] overflow-y-auto px-4 py-4 scrollbar-hide">
    <div className="flex flex-col gap-6">
      {routeData.map((item) => {
        const style = lineStyleMap[item.line] || {
          color: "#999",
          textSize: "10px",
        };

        return (
          <div key={item.stationName} className="flex">
            {/* ─── 왼쪽: 노선 원 ─── */}
            <div className="w-8 mr-4 flex justify-center">
              <div
                className="w-6 h-6 rounded-full text-white font-bold flex items-center justify-center"
                style={{
                  backgroundColor: style.color,
                  fontSize: style.textSize,
                }}
              >
                {item.line}
              </div>
            </div>

            {/* ─── 오른쪽: 역 이름 + 시설 ─── */}
            <div className="flex-1">
              {/* ② 역 이름 표시 */}
              <div className="mb-2 text-[#4C4C4C] font-semibold">
                {item.stationName}
              </div>

              {/* 시설 4칸 그리드 */}
              <div className="grid grid-cols-4 gap-3">
                {item.facilities.map((fid, idx) => (
                  <FacilityBox
                    key={`${fid}-${idx}`}
                    label={FACILITIES.find((f) => f.id === fid)?.label ?? fid}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default FacilityPath;
