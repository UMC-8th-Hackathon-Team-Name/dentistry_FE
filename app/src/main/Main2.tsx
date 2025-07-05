import Button from "../components/common/Button";
import logo_icon from "/src/assets/dooroodooroo_icon.png";
import logo_title from "/src/assets/dooroodooroo_title.png";
import vector from "/src/assets/Vector.svg";
import arrow from "/src/assets/arrow.svg";
import { useNavigate } from "react-router-dom";
import SearchDetailModal from "./SearchDetailModal";
import SearchDetail from "./SearchDetail";

const Main2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      <div className="w-[412px] h-[87px] bg-[#465785] flex gap-[6px] pt-[34px] px-[27px]">
        <img
          src={logo_title}
          role="로고제목"
          alt="로고제목"
          className="w-[78px] h-[23px]"
        />
        <img
          src={logo_icon}
          role="로고이미지"
          alt="로고이미지"
          className="w-[20px] h-[26px]"
        />
      </div>
      <div className="text-[24px] text-[#4C4C4C] mt-[22px] mx-[23px]">
        (아이디)님 안녕하세요!
      </div>
      <div className="text-[16px] text-[#4C4C4C] mt-[11px] mx-[27px]">
        어디로 안내해드릴까요?
      </div>
      <div className="mt-[35px] text-[20px] font-[400] text-[#4C4C4C] mx-[23px]">
        가는길 확인하기
      </div>
      <SearchDetail />
      <div
        className="flex justify-between mx-[16px] items-center w-[380px] h-[55px] rounded-[19px] px-[27px] bg-[#FFFFFF] cursor-pointer"
        onClick={() => {
          navigate("/setting");
        }}
      >
        <span className="text-[20px]">설정</span>
        <img src={arrow} alt="화살표" />
      </div>
      <div className="w-full flex flex-col gap-[18px] h-[116px] bg-[#F2F2F2] pt-[20px] px-[26px]">
        <span className="text-[#BCBCBC] text-[12px] font-[400]">
          개인정보 처리 방침 &nbsp;&nbsp;|&nbsp;&nbsp; 고객문의
        </span>
        <span className="font-[300] text-[9px] text-[#BCBCBC]">
          대표이사: 위티 / 사업자등록번호: 110-81-14794 서울특별시 강서구 하늘길
          260 / 
          <br />
          고객센터: 02-6916-1500 / Fax: 02-6916-1430 <br />
          COPYRIGHT (C) WITHTIME.ALL RIGHT RESERVED
        </span>
      </div>
    </div>
  );
};
export default Main2;
