import { useState } from "react";
import { useNavigate } from "react-router-dom";

import checkIcon from "/src/assets/check_icon.png";
import pleaseImg from "../../public/please.png";

import Button from "../components/common/Button";

const mockData = [{ email: "test@test.com" }];

const DeleteAccount = () => {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const onClickNext = () => {
    setIsSubmitted(true);

    const isValid = mockData.some((item) => item.email === email);

    if (!isValid) {
      setErrorMessage("존재하지 않는 계정입니다.");
      return;
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-end w-full h-screen gap-4 overflow-hidden">
      <div className="flex flex-col w-full gap-4 px-10">
        <div className="text-2xl font-semibold text-[#4C4C4C]">회원 탈퇴</div>
        <div className="text-base font-normal text-[#4C4C4C] mb-3">
          회원 탈퇴 전 아래 유의사항을 확인해주세요
        </div>
      </div>
      {/* 애니메이션 이미지 */}
      <div className="absolute w-32 h-32 transform translate-x-[210px] pointer-events-none top-1/3 left-1/2">
        <img
          src={pleaseImg}
          alt="please"
          className={`
      transition-transform duration-700 ease-in-out
      ${isChecked1 && !isChecked2 ? "-translate-x-[300px]" : ""}
      ${isChecked2 ? "translate-x-[210px]" : ""}
    `}
        />
      </div>

      {/* Container */}
      <div className="w-96 h-[630px] bg-white rounded-2xl flex flex-col justify-between items-center pt-12 pb-20 px-7 shadow-[0_-2px_15px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-4">
          {/* 탈퇴 확인 - 이메일 입력 */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={20}
            placeholder="아이디를 입력해주세요"
            className="w-[325px] h-14 bg-[#FBFBFB] rounded-2xl px-5"
          />
          {/* 탈퇴 시 유의 사항 */}
          <div>
            <ul className="marker:text-gray-200 marker:text-xs list-inside list-disc font-light text-[13px] text-[#4C4C4C] leading flex flex-col gap-2">
              <li>탈퇴 시 해당 계정으로 모든 서비스를 이용할 수 없습니다.</li>
              <li>계정이 삭제 된 이후에는 복구할 수 없습니다.</li>
              <li className="leading-6">
                탈퇴 즉시 같은 계정으로 7일 동안 다시 가입할 수 없습니다.
                <br />
                <span className="pl-4">
                  만약 이용 약관에 따라 회원 자격을 제한 또는 정지 당한
                </span>
                <br />
                <span className="pl-4">
                  회원이 그 조치기간에 탈퇴하는 경우에는 해당 조치 기간
                </span>
                <br />
                <span className="pl-4">동안 다시 가입할 수 없습니다.</span>
              </li>
              <li className="leading-6">
                가는 길 찾아보기 결과 등의 활동한 내역이 모두 삭제 되며 <br />
                <span className="pl-4">복구 할 수 없습니다.</span>
              </li>
            </ul>
          </div>
          {/* 구분선 */}
          <div className="border-[1px] border-[#BCBCBC] h-[1px] w-full"></div>

          <div className="flex flex-col gap-2">
            {/* 체크박스 1 */}
            <div className="flex items-center w-full">
              <div className="flex justify-between w-full px-1">
                <span className="text-xs font-normal text-black">
                  유의사항을 모두 확인하였으며, <br />
                  회원 탈퇴 시 보유한 정보가 모두 소멸되는 것에 동의합니다.
                </span>
                <label className="relative">
                  <input
                    type="checkbox"
                    checked={isChecked1}
                    onChange={(e) => setIsChecked1(e.target.checked)}
                    className={`w-[30px] h-[30px] rounded-full appearance-none cursor-pointer
                  ${isChecked1 ? "bg-[#465785]" : "bg-[#F5F5F5]"}`}
                  />
                  {isChecked1 && (
                    <img
                      src={checkIcon}
                      alt="체크됨"
                      className="absolute w-4 h-4 top-[20%] left-1/4"
                    />
                  )}
                </label>
              </div>
            </div>
            {/* 체크박스 2 */}
            <div className="flex w-full ">
              <div className="flex items-center justify-between w-full px-1">
                <span className="text-xs font-normal text-black">
                  계정은 탈퇴 후 복구 할 수 없으며, 이에 동의 합니다.
                </span>
                <label className="relative">
                  <input
                    type="checkbox"
                    checked={isChecked2}
                    onChange={(e) => setIsChecked2(e.target.checked)}
                    className={`w-[30px] h-[30px] rounded-full appearance-none cursor-pointer
                  ${isChecked2 ? "bg-[#465785]" : "bg-[#F5F5F5]"}`}
                  />
                  {isChecked2 && (
                    <img
                      src={checkIcon}
                      alt="체크됨"
                      className="absolute w-4 h-4 top-[20%] left-1/4"
                    />
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Button
              disabled={email === "" || !isChecked1 || !isChecked2}
              text={"탈퇴하기"}
              type={"button"}
              onClick={onClickNext}
            />
            <Button
              text={"취소하기"}
              type={"button"}
              className="bg-[#D1D1D1]"
              onClick={() => {
                nav("/setting");
              }}
            />
          </div>
          {isSubmitted && errorMessage && (
            <div className="px-2 text-sm font-bold text-red-600">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
