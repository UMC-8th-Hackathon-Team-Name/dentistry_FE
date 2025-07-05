import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandigPage from "./auth/LandingPage";
import Terms from "./auth/Terms";

function App() {
  return (
    <BrowserRouter>
      <div className="m-auto min-h-screen max-w-[412px] bg-[#FBFBFB] border-2 border-black">
        <Routes>
          <Route path="/" element={<LandigPage />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
