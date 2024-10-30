import { Send } from "@/constants";
import React, { FC } from "react";
import { Input } from "@/components/atoms";

interface IMessageFieldProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend?: () => void;
}

const MessageField: FC<IMessageFieldProps> = ({
  type = "text",
  id,
  name,
  placeholder = "Write a message...",
  className,
  value,
  required = false,
  disabled = false,
  onChange,
  onSend,
}) => {
  return (
    <div className="w-full h-[45px] rounded-md relative bg-transparent dark:border-zinc-700 border-zinc-200 border">
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full h-full px-3 outline-none focus-within:border-secondary-color focus-within:dark:border-secondary-color rounded-md bg-transparent ${className}`}
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange}
      />
      <div
        className="cursor-pointer rounded-md absolute top-1/2 right-1 -translate-y-1/2 flex justify-center items-center hover:bg-[#16a34a] bg-secondary-color w-[40px] py-2"
        onClick={onSend}
      >
        <Send className="w-5 h-5 -rotate-45" fill="white" />
      </div>
    </div>
  );
};

export default MessageField;
