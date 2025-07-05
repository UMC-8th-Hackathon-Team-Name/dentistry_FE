import logo_icon from "/src/assets/dooroodooroo_icon.png";
import logo_title from "/src/assets/dooroodooroo_title.png";

const LandigPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#465785] h-screen w-full">
      <div className="flex flex-col items-center gap-4">
        <img src={logo_icon} width={60} height={76} />
        <img src={logo_title} width={166} height={49} />
        <span className="text-white">~한 플랫폼 두루두루</span>
      </div>
      <div>
        {/* 추후 버튼 컴포넌트로 교체 */}
        <div className="flex items-center justify-center h-12 bg-white rounded-md w-80">
          로그인 하기
        </div>
        <button role="signup"></button>
      </div>
    </div>
  );
};
export default LandigPage;
