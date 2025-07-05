import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo_icon from "/src/assets/dooroodooroo_icon.png";
import logo_title from "/src/assets/dooroodooroo_title.png";
import LoginButton from "../components/LoginButton";

const LandigPage = () => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col pt-64 justify-between items-center bg-[#465785] h-screen w-full relative">
      <div className="flex flex-col items-center gap-6">
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
        <span className="-mt-3 text-white" role="">
          ~한 플랫폼 두루두루
        </span>
      </div>
      <div className="absolute flex flex-col gap-5 w-fit bottom-24">
        <LoginButton onClick={() => nav("/delete-account")} />
        <Link
          to="/signup/terms"
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
