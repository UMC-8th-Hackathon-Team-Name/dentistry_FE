import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandigPage from "./auth/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="m-auto min-h-screen max-w-[412px] border-2 border-black">
        <Routes>
          <Route path="/" element={<LandigPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
