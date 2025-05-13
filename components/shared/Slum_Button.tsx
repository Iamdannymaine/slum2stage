import clsx from "clsx";
import React, { ReactNode } from "react";

type ButtonProps = {
  variant?: "circular-filled" | "pill-filled" | "pill-outlined" | "pill-ghost";
  text: string;
  className?: string;
  iconLeft?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "button";
};

function Button({
  variant = "circular-filled",
  text,
  className,
  iconLeft,
  onClick,
  type,
  disabled = false
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "duration-300 flex justify-center items-center gap-2",
        variant === "circular-filled" &&
        "py-[10px] px-[30px] rounded-full bg-primary hover:bg-primary_hover text-white font-sans duration-300",
        variant === "pill-filled" &&
        " rounded-[15px] bg-primary pill_filled_btn_shadow text-white font-normal hover:bg-primary_hover text-[18px] lg:text-[22px] p-1 px-8 font-sans",
        variant === "pill-outlined" &&
        " rounded-[15px] bg-white text-primary border border-primary pill_filled_btn_shadow  font-normal hover:text-white hover:bg-primary text-[20px] p-1 px-7 font-sans",
        variant === "pill-ghost" &&
        " rounded-[15px] bg-[#F0EAE5] pill_filled_btn_shadow hover:text-white text-[#333333] font-normal hover:bg-primary_hover text-[18px] lg:text-[22px] p-2 px-8 font-sans",
        className
      )}
      disabled={disabled}
    >
      {iconLeft} {text}
    </button>
  );
}

export default Button;
