import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import SettingPage from "./pages/SettingPage";
import FixPage from "./pages/FixPage";

function App() {
  return (
    <BrowserRouter>
      <div className="m-auto min-h-screen max-w-[412px] border-2 border-black">
        <Routes>
          <Route path="/" element={<DetailPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/fix" element={<FixPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
