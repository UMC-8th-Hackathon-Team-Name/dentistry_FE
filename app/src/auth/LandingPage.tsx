import { Link } from "react-router-dom";
import logo_icon from "/src/assets/dooroodooroo_icon.png";
import logo_title from "/src/assets/dooroodooroo_title.png";
import LoginButton from "../components/LoginButton";

const LandigPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#465785] h-screen w-full relative">
      <div className="flex flex-col items-center gap-4">
        <img
          src={logo_icon}
          width={60}
          height={76}
          role="로고이미지"
          alt="로고이미지"
        />
        <img
          src={logo_title}
          width={166}
          height={49}
          role="로고제목"
          alt="로고제목"
        />
        <span className="text-white" role="">
          ~한 플랫폼 두루두루
        </span>
      </div>
      <div className="absolute flex flex-col gap-5 w-fit bottom-20">
        {/* 추후 버튼 컴포넌트로 교체 */}
        <LoginButton />
        <Link
          to="/terms"
          role="약관 동의 페이지로 이동"
          className="w-full text-base font-normal text-center text-white"
          onClick={() => {}}
        >
          회원가입
        </Link>
      </div>
    </div>
  );
};
export default LandigPage;
