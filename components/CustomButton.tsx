import React, { MouseEventHandler } from "react";

interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyle?: string;
}

const CustomButton = ({
  btnType,
  containerStyle,
  handleClick,
  textStyle,
  title,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
    </button>
  );
};

export default CustomButton;
