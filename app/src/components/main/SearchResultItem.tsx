import logo from "/src/assets/dooroodooroo_icon(black).svg";

interface SearchResultItemProps {
  title: string;
  address: string;
}

const SearchResultItem = ({ title, address }: SearchResultItemProps) => {
  return (
    <div className="w-full h-[70px] flex gap-[19px] rounded-[19px] items-center border border-b-[#F2F2F2] cursor-pointer  hover:bg-[#F5F5F5] transition-colors duration-200">
      <img src={logo} className="mx-[23px] " alt="로고 아이콘" />
      <div className="text-[#4c4c4c] text-[20px] font-[400]">{title}</div>
      <div className="text-[#4c4c4c] text-[20px] font-[400]">{address}</div>
    </div>
  );
};
export default SearchResultItem;
