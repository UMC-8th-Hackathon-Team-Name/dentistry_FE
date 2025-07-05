import "./App.css";
import Button from "./components/common/button";

function App() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen text-5xl font-bold bg-amber-300">
        Dentist!
        <Button text="동의하고 가입하기" />
      </div>
    </>
  );
}

export default App;
