import React from "react";

interface ButtonProps {
  title?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  borderClassName?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  title,
  icon,
  className,
  titleClassName,
  borderClassName,
  onClick,
}) => {
  return (
    <button type={type} className={`${className}`} onClick={onClick}>
      {icon && <span>{icon}</span>}
      {title && (
        <div className={`${titleClassName}`}>
          <span className="font-incognito">{title}</span>
          {borderClassName && <span className={`${borderClassName}`} />}
        </div>
      )}
    </button>
  );
};

export default Button;
