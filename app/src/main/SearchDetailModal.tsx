import { useNavigate } from "react-router-dom";
import closeIcon from "/src/assets/close_icon.png";
import LineProgress from "../components/LineProgress";

const SearchDetailModal = () => {
  const nav = useNavigate();
  const segments = [
    { lineName: "1", ratio: 3 },
    { lineName: "4", ratio: 2 },
    { lineName: "2", ratio: 1 },
    { lineName: "인천1", ratio: 1 },
  ];
  return (
    <div className="w-full h-[579px] rounded-[19px] bg-[#FFFFFF] border border-black flex flex-col">
      <div className="flex h-[84px] justify-between items-center border-b border-[#F2F2F2]">
        <span className="text-[24px] text-[#4C4C4C] mx-[30px]">검색 결과</span>
        <img
          onClick={() => {
            nav("/");
          }}
          src={closeIcon}
          alt="닫기 버튼"
          className="h-[20px] w-[20px] mr-[30px]"
        />
      </div>
      <div className="flex gap-3 items-center justify-center mt-[32px] px-[26px]">
        <span className="text-[#4C4C4C] text-[24px] font-[500]">출발호선</span>
        <div className="w-[150px] h-[0.75px] bg-[#D1D1D1]"></div>
        <span className="text-[#4C4C4C] text-[24px] font-[500]">도착호선</span>
      </div>
      <div className="mt-[50px] mx-[26px]">
        <LineProgress segments={segments} />
      </div>
    </div>
  );
};
export default SearchDetailModal;
