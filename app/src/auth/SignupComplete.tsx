import { useNavigate } from "react-router-dom";

import closeIcon from "/src/assets/close_icon.png";

import Button from "../components/common/Button";
import ProgressBar from "../components/common/ProgressBar";

const SignupComplete = () => {
  const nav = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-end w-full h-screen gap-4">
      {/* 닫기 버튼 */}
      <div>
        <img
          src={closeIcon}
          alt="closeButton"
          className="absolute w-6 h-6 cursor-pointer top-6 left-6"
          onClick={() => {
            nav("/");
          }}
        />
      </div>

      <ProgressBar currentStep={3} totalSteps={3} />

      <div className="flex flex-col w-full gap-4 px-10">
        <div className="text-2xl font-semibold text-[#4C4C4C]">
          회원 가입이 완료되었습니다!
        </div>
        <div className="text-base font-normal text-[#4C4C4C] mb-3">
          이제 세부정보를 입력하러 가볼까요?
        </div>
      </div>

      {/* Container */}
      <div className="w-96 h-[630px] flex flex-col justify-end items-center pt-12 pb-20 px-7">
        <Button
          text={"세부정보 입력하러 가기"}
          type={"button"}
          onClick={() => {
            nav("/");
          }}
        />
      </div>
    </div>
  );
};

export default SignupComplete;
