import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD

// auth
import LandingPage from "./auth/LandingPage";
import SignupTerms from "./auth/SignupTerms";
=======
// auth
import LandingPage from "./auth/LandingPage";
>>>>>>> 759343dc1390a16130f3055511995d67d697a5a2
import SignupEmail from "./auth/SignupEmail";
import SignupPassword from "./auth/SignupPassword";
import SignupComplete from "./auth/SignupComplete";
import Login from "./auth/Login";
import DeleteAccount from "./auth/DeleteAccount";

// pages

import DetailPage from "./pages/DetailPage";
import SettingPage from "./pages/SettingPage";
import FixPage from "./pages/FixPage";
<<<<<<< HEAD
=======

import LandigPage from "./auth/LandingPage";
import SignupTerms from "./auth/SignupTerms";

>>>>>>> 759343dc1390a16130f3055511995d67d697a5a2
import Search from "./main/Search";
import SearchDetailModal from "./main/SearchDetailModal";
import LineProgressProps from "./components/LineProgress";
import LineProgress from "./components/LineProgress";
import Main2 from "./main/Main2";

import MapPage from "./pages/MapPage";

function App() {
  return (
<<<<<<< HEAD
    <div className="m-auto max-h-[912px] max-w-[412px] bg-[#FBFBFB] border-2 border-black">
=======
    <div className="m-auto h-[912px] max-w-[412px] bg-[#FBFBFB] border-2 border-black">
>>>>>>> 759343dc1390a16130f3055511995d67d697a5a2
      <BrowserRouter>
        <Routes>
          {/* 인증/회원가입 관련 */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/terms" element={<SignupTerms />} />
<<<<<<< HEAD
          <Route path="/" element={<LandingPage />} />
          <Route path="signup/terms" element={<SignupTerms />} />
          <Route path="/main" element={<Main />} />

=======
          <Route path="/" element={<LandigPage />} />
          <Route path="signup/terms" element={<SignupTerms />} />
          <Route path="/main" element={<Main />} />
>>>>>>> 759343dc1390a16130f3055511995d67d697a5a2
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
<<<<<<< HEAD

          <Route path="/search" element={<Search />} />
=======
          <Route path="/main/search" element={<Search />} />
          <Route path="/search" element={<Search />} />
          f57fc2e (feat:search페이지 구현)
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/fix" element={<FixPage />} />
          <Route path="/map" element={<MapPage />} />
>>>>>>> 759343dc1390a16130f3055511995d67d697a5a2
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
