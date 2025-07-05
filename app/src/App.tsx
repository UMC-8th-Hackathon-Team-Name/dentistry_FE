import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandigPage from "./auth/LandingPage";
import Terms from "./auth/Terms";
import Main from "./main/Main";
import SignupEmail from "./auth/SignupEmail";
import SignupPassword from "./auth/SignupPassword";
import SignupComplete from "./auth/SignupComplete";

function App() {
  return (
    <BrowserRouter>
      <div className="m-auto min-h-screen max-w-[412px] bg-[#FBFBFB] border-2 border-black">
        <Routes>
          <Route path="/" element={<LandigPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/main" element={<Main />} />
          <Route path="/signup/email" element={<SignupEmail />} />
          <Route path="/signup/password" element={<SignupPassword />} />
          <Route path="/signup/complete" element={<SignupComplete />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
