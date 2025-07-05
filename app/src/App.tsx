import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// auth
import LandingPage from "./auth/LandingPage";
import SignupTerms from "./auth/SignupTerms";
import SignupEmail from "./auth/SignupEmail";
import SignupPassword from "./auth/SignupPassword";
import SignupComplete from "./auth/SignupComplete";
import Login from "./auth/Login";
import DeleteAccount from "./auth/DeleteAccount";

// pages
import Main from "./main/Main";
import DetailPage from "./pages/DetailPage";
import SettingPage from "./pages/SettingPage";
import FixPage from "./pages/FixPage";
import Search from "./main/Search";
import SearchDetailModal from "./main/SearchDetailModal";
import LineProgressProps from "./components/LineProgress";
import LineProgress from "./components/LineProgress";
import Main2 from "./main/Main2";

function App() {
  return (
    <div className="m-auto max-h-[912px] max-w-[412px] bg-[#FBFBFB] border-2 border-black">
      <BrowserRouter>
        <Routes>
          {/* 인증/회원가입 관련 */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/terms" element={<SignupTerms />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="signup/terms" element={<SignupTerms />} />
          <Route path="/main" element={<Main />} />

          <Route path="/signup/email" element={<SignupEmail />} />
          <Route path="/signup/password" element={<SignupPassword />} />
          <Route path="/signup/complete" element={<SignupComplete />} />
          <Route path="/delete-account" element={<DeleteAccount />} />

          {/* 메인 및 기타 페이지 */}
          <Route path="/main" element={<Main />} />
          <Route path="/main2" element={<Main2 />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/fix" element={<FixPage />} />

          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
