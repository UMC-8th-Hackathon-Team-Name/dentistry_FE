import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandigPage from "./auth/LandingPage";
<<<<<<< HEAD
import Terms from "./auth/Terms";
=======
import Main from "./main/Main";
>>>>>>> fa09927 (beforerebase)

function App() {
  return (
    <BrowserRouter>
      <div className="m-auto min-h-screen max-w-[412px] bg-[#FBFBFB] border-2 border-black">
        <Routes>
          <Route path="/" element={<LandigPage />} />
<<<<<<< HEAD
          <Route path="/terms" element={<Terms />} />
=======
          <Route path="/main" element={<Main />} />
>>>>>>> fa09927 (beforerebase)
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
