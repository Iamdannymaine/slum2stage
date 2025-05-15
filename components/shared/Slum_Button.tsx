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
        "py-[10px] px-[28px] rounded-full bg-primary hover:bg-primary_hover text-white font-sans duration-300 font-semibold pill_filled_btn_shadow",
        variant === "pill-outlined" &&
        " rounded-full bg-snow_white text-primary border-b-2 border-primary bg-white py-2 pill_filled_btn_shadow font-semibold hover:text-white hover:bg-primary text-sm p-1 px-8 font-sans",
        variant === "pill-filled" &&
        " rounded-full bg-secondary border-b-2 border-primary pill_filled_btn_shadow text-white font-semibold hover:bg-primary hover:text-white text-sm py-2 p-1 px-8 font-sans",
        variant === "pill-ghost" &&
        `rounded-full bg-secondary/10 pill_filled_btn_shadow hover:text-white text-primary font-semibold hover:bg-primary_hover text-sm py-2 p-1 px-8 font-sans [--shadow-color:#1b3142]`,
        className
      )}
      disabled={disabled}
    >
      {iconLeft} {text}
    </button>
  );
}

export default Button;
