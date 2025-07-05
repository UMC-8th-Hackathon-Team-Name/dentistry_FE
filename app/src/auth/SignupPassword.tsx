import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import closeIcon from "/src/assets/close_icon.png";

import Button from "../components/common/Button";
import ProgressBar from "../components/common/ProgressBar";

const mockData = [
  {
    pass: "!12345678",
  },
];

const SignupPassword = () => {
  const nav = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onClickNext = () => {
    setIsSubmitted(true);

    const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/;
    const isPasswordValid = passwordRegex.test(password);
    const isMatch = password === passwordCheck;
    const isAuthorized = mockData.some((item) => item.pass === password);

    if (isPasswordValid && isMatch && isAuthorized) {
      nav("/signup/complete"); // 다음 단계로 이동
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-end w-full h-screen gap-4">
      {/* 닫기 버튼 */}
      <div>
        <img
          src={closeIcon}
          alt="closeButton"
          className="absolute w-6 h-6 cursor-pointer top-6 left-6"
          onClick={() => {
            nav("/signup/complete");
          }}
        />
      </div>

      <ProgressBar currentStep={2} totalSteps={3} />

      <div className="flex flex-col w-full gap-4 px-10">
        <div className="text-2xl font-semibold text-[#4C4C4C]">회원 가입</div>
        <div className="text-base font-normal text-[#4C4C4C] mb-3">
          사용할 비밀번호를 입력해 주세요
        </div>
      </div>

      {/* Container */}
      <div className="w-96 h-[630px] bg-white rounded-2xl flex flex-col justify-between items-center pt-12 pb-20 px-7 shadow-[0_-2px_15px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-8">
          {/* 비밀번호 입력 */}
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="비밀번호를 입력해주세요"
            className="w-[325px] h-14 bg-[#FBFBFB] rounded-2xl px-5"
          />
          {/* 비밀번호 확인 입력 */}
          <input
            type="password"
            value={passwordCheck}
            onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
            placeholder="비밀번호를 확인하세요"
            className="w-[325px] h-14 bg-[#FBFBFB] rounded-2xl px-5"
          />
          <Button
            // disabled={!isValid}
            text={"다음"}
            type={"button"}
            onClick={() => {
              onClickNext();
            }}
          />
          {isSubmitted && (
            <>
              {password !== passwordCheck ? (
                <div className="px-2 -mt-4 text-sm font-bold text-red-600">
                  비밀번호가 일치하지 않습니다!
                </div>
              ) : !mockData.some((item) => item.pass === password) ? (
                <div className="px-2 -mt-4 text-sm font-bold text-red-600">
                  등록된 비밀번호가 아닙니다.
                </div>
              ) : password.length > 0 && !isValid ? (
                <div className="px-2 -mt-4 text-sm font-bold text-red-600">
                  유효하지 않은 이메일이거나 이미 사용 중입니다.
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPassword;
