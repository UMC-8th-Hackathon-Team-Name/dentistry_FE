interface FacilityBox {
  label: string;
}

const FacilityBox = ({ label }: FacilityBox) => {
  return (
    <div className="w-[62px] h-[62px] rounded-[15px] bg-[#E0E6F3] text-[#000000] text-[11px] font-[400] flex justify-center items-center text-center">
      {label}
    </div>
  );
};
export default FacilityBox;
