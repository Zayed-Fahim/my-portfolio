import React from "react";

interface IInputProps {
  type?: string;
  id: string;
  name: string;
  placeholder?: string;
  className?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({
  type,
  id,
  name,
  placeholder,
  className,
  value,
  required,
  disabled,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      required={required}
      disabled={disabled}
      className={className}
      onChange={onChange}
    />
  );
};

export default Input;
