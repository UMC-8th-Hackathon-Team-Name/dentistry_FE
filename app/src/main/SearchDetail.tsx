import { useNavigate } from "react-router-dom";
import closeIcon from "/src/assets/close_icon.png";
import LineProgress from "../components/LineProgress";
import FacilityPath from "../components/main/FacilityPath";
import Button from "../components/common/Button";
import Button2 from "../components/common/Button2";

const SearchDetailModal = () => {
  const nav = useNavigate();
  const segments = [
    { lineName: "1", ratio: 3 },
    { lineName: "4", ratio: 2 },
    { lineName: "2", ratio: 1 },
    { lineName: "인천1", ratio: 1 },
  ];
  const facilityList = [
    "수평 보행기",
    "엘리베이터",
    "경사로",
    "음성유도기",
    "에스컬레이터",
    "휠체어 리프트",
  ];
  return (
    <div className="h-[490px] rounded-[19px] bg-[#FFFFFF] flex flex-col">
      <div className="flex gap-3 items-center justify-center mt-[32px] px-[26px]">
        <span className="text-[#4C4C4C] text-[24px] font-[500]">출발호선</span>
        <div className="w-[150px] h-[0.75px] bg-[#D1D1D1]"></div>
        <span className="text-[#4C4C4C] text-[24px] font-[500]">도착호선</span>
      </div>
      <div className="mt-[50px] mx-[26px]">
        <LineProgress segments={segments} />
      </div>
      <div className="mt-[30px] px-[26px] overflow-y-auto max-h-[250px] scrollbar-hide ">
        <FacilityPath />
      </div>
      <div className="mt-[26px] flex gap-[7px] justify-center">
        <Button2 text="삭제 " onClick={() => nav("/main")} disabled={true} />
        <Button2 text="도착" onClick={() => nav("/main")} />
      </div>
    </div>
  );
};
export default SearchDetailModal;
