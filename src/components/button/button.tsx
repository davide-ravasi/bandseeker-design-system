// components/button/button.tsx
import React, { MouseEventHandler } from "react";
import "./button.css";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bsuik-button ${primary ? "bsuik-button--primary" : null} ${
        size ? `bsuik-button--${size}` : "bsuik-button--medium"
      }`}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
