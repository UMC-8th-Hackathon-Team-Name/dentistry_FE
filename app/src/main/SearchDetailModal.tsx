import { useNavigate } from "react-router-dom";
import closeIcon from "/src/assets/close_icon.png";
import LineProgress from "../components/LineProgress";
import FacilityPath from "../components/main/FacilityPath";
import Button from "../components/common/Button";

interface SearchDetailModalProps {
  showDetailButton?: boolean;
}

const SearchDetailModal = ({
  showDetailButton = true,
}: SearchDetailModalProps) => {
  const nav = useNavigate();
  const segments = [
    { lineName: "9", ratio: 3 },
    { lineName: "4", ratio: 3 },
    { lineName: "우이신설", ratio: 4 },
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
    <div className="h-[579px] rounded-[19px] bg-[#FFFFFF] flex flex-col w-[380px]">
      <div className="flex h-[84px] justify-between items-center border-b border-[#F2F2F2]">
        <span className="text-[24px] text-[#4C4C4C] mx-[30px]">검색 결과</span>
        <img
          onClick={() => nav("/main2")}
          src={closeIcon}
          alt="닫기 버튼"
          className="h-[20px] w-[20px] mr-[30px]"
        />
      </div>
      <div className="flex gap-3 items-center justify-center mt-[32px] px-[26px]">
        <span className="text-[#4C4C4C] text-[20px] font-[500]">9호선</span>
        <div className="w-[150px] h-[0.75px] bg-[#D1D1D1]"></div>
        <span className="text-[#4C4C4C] text-[20px] font-[500]">우이신설</span>
      </div>
      <div className="mt-[50px] mx-[26px]">
        <LineProgress segments={segments} />
      </div>
      <div className="mt-[30px] px-[26px] overflow-y-auto max-h-[250px] scrollbar-hide ">
        <FacilityPath />
      </div>
      {showDetailButton && (
        <div className="mt-[26px] flex justify-center">
          <Button text="자세히 보기" onClick={() => nav("/map")} />
        </div>
      )}
    </div>
  );
};
export default SearchDetailModal;
