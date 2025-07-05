interface buttonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  text,
  onClick,
  type = "button",
  disabled = false,
}: buttonProps) => {
  return (
    <button
      role="버튼"
      type={type}
      onClick={onClick}
      className={`w-[325px] h-[52px] rounded-[10px] text-[20px] text-[#FFFFFF] ${disabled ? "bg-[#465785]" : "bg-[#D1D1D1]"}
`}
    >
      {text}
    </button>
  );
};
export default Button;
