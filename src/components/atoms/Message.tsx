import React from "react";

interface MessageProps {
  type: "success" | "error";
  message: string;
  className?: string;
}

const Message: React.FC<MessageProps> = ({ type, message, className }) => {
  return (
    <p
      className={`pt-1 rounded text-xs ${
        type === "success" ? "text-green-500" : "text-red-500"
      } ${className}`}
    >
      {message}
    </p>
  );
};

export default Message;
