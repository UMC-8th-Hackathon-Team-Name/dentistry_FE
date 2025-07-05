import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandigPage from "./auth/LandingPage";
import Terms from "./auth/Terms";
import SignupEmail from "./auth/signupEmail";

function App() {
  return (
    <BrowserRouter>
      <div className="m-auto min-h-screen max-w-[412px] bg-[#FBFBFB] border-2 border-black">
        <Routes>
          <Route path="/" element={<LandigPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/signup/email" element={<SignupEmail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
