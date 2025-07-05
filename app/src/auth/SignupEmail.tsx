import { useState } from "react";
import { useNavigate } from "react-router-dom";

import closeIcon from "/src/assets/close_icon.png";

import Button from "../components/common/Button";
import ProgressBar from "../components/common/ProgressBar";

const mockData = [{ email: "test@test.com" }];

const SignupEmail = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onClickNext = () => {
    setIsSubmitted(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormatValid = emailRegex.test(email);
    const isDuplicate = mockData.some((item) => item.email === email);

    if (!isFormatValid || !isDuplicate) {
      setErrorMessage("유효하지 않은 이메일이거나 이미 사용 중입니다.");
      return;
    }

    // 유효할 경우
    setErrorMessage("");
    nav("/signup/password");
  };

  return (
    <div className="relative flex flex-col items-center justify-end w-full h-screen gap-4">
      {/* 닫기 버튼 */}
      <div>
        <img
          src={closeIcon}
          alt="closeButton"
          className="absolute w-6 h-6 cursor-pointer top-6 left-6"
          onClick={() => nav("/")}
        />
      </div>

      <ProgressBar currentStep={1} totalSteps={3} />

      <div className="flex flex-col w-full gap-4 px-8">
        <div className="text-2xl font-semibold text-[#4C4C4C]">회원 가입</div>
        <div className="text-base font-normal text-[#4C4C4C] mb-3">
          로그인에 사용할 아이디를 입력해 주세요
        </div>
      </div>

      {/* Container */}
      <div className="w-96 h-[630px] bg-white rounded-2xl flex flex-col justify-between items-center pt-12 pb-20 px-7 shadow-[0_-2px_15px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-8">
          {/* 이메일 입력 */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요"
            className="w-[325px] h-14 bg-[#FBFBFB] rounded-2xl px-5"
          />

          <Button
            disabled={email === ""}
            text="다음"
            type="button"
            onClick={onClickNext}
          />

          {/* 에러 메시지 */}
          {isSubmitted && errorMessage && (
            <div className="px-2 -mt-4 text-sm font-bold text-red-600">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupEmail;
