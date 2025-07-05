import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import LandigPage from "./auth/LandingPage";
import SignupTerms from "./auth/SignupTerms";
import Main from "./main/Main";
import SignupEmail from "./auth/SignupEmail";
import SignupPassword from "./auth/SignupPassword";
import SignupComplete from "./auth/SignupComplete";
import Login from "./auth/Login";
import DeleteAccount from "./auth/DeleteAccount";

import DetailPage from "./pages/DetailPage";
import SettingPage from "./pages/SettingPage";
import FixPage from "./pages/FixPage";

function App() {
  return (
    <div className="m-auto min-h-screen max-w-[412px] bg-[#FBFBFB] border-2 border-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandigPage />} />
          <Route path="signup/terms" element={<SignupTerms />} />
          <Route path="/main" element={<Main />} />
          <Route path="/signup/email" element={<SignupEmail />} />
          <Route path="/signup/password" element={<SignupPassword />} />
          <Route path="/signup/complete" element={<SignupComplete />} />
          <Route path="/login" element={<Login />} />
          <Route path="/delete-account" element={<DeleteAccount />} />

          <Route path="/" element={<DetailPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/fix" element={<FixPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
