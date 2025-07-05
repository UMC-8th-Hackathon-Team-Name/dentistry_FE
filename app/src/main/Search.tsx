import { useState } from "react";
import { useNavigate } from "react-router-dom";
import closeIcon from "/src/assets/close(white).svg";
import vector from "/src/assets/Vector.svg";
import SearchResultItem from "../components/main/SearchResultItem";
import SearchDetailModal from "./SearchDetailModal";

const Search = () => {
  const nav = useNavigate();
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const [resultTitle, setResultTitle] = useState("");
  const [resultAddress, setResultAddress] = useState("");

  const handleSwap = () => {
    setStart((prev) => {
      setEnd(prev);
      return end;
    });
  };

  const handleStartKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && start.trim()) {
      setResultTitle(start.trim());
    }
  };

  const handleEndKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && end.trim()) {
      setResultAddress(end.trim());
    }
  };

  const dummyResults = resultTitle
    ? [
        {
          title: resultTitle,
          address: resultAddress || undefined,
        },
      ]
    : [];

  return (
    <div className="relative flex flex-col items-center w-full h-screen gap-4">
      <div className="w-full h-[60px] bg-[#465785]">
        <img
          src={closeIcon}
          alt="closeButton"
          className="absolute cursor-pointer top-[20px] left-[24px]"
          onClick={() => nav("/")}
        />
      </div>

      <div className="flex items-center">
        <img
          role="바꾸기 버튼"
          src={vector}
          alt="바꾸기"
          onClick={handleSwap}
        />
        <div className="flex flex-col gap-[8px]">
          <input
            value={start}
            onChange={(e) => setStart(e.target.value)}
            onKeyDown={handleStartKeyDown}
            type="text"
            placeholder="출발지 입력"
            className="w-[300px] h-[40px] rounded-[22px] mx-[11px] px-[19px] bg-[#F7F7F7] text-[16px] font-[300] text-[#888888]"
          />
          <input
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            onKeyDown={handleEndKeyDown}
            type="text"
            placeholder="도착지 입력"
            className="w-[300px] h-[40px] rounded-[22px] mx-[11px] px-[19px] bg-[#F7F7F7] text-[16px] font-[300] text-[#888888]"
          />
        </div>
      </div>

      <div className="w-[380px] h-[670px] rounded-[19px] bg-[#FFF] overflow-y-auto scrollbar-hide">
        {dummyResults.map((item, idx) => (
          <SearchResultItem
            key={idx}
            title={item.title}
            address={item.address}
            onClick={() => {
              if (resultTitle && resultAddress) setModalOpen(true);
            }}
          />
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
          <SearchDetailModal />
        </div>
      )}
    </div>
  );
};

export default Search;
