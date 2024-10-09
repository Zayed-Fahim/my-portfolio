import React from "react";

interface IButtonProps {
  icon: React.ReactNode;
  className?: string;
}

const SocialButton: React.FC<IButtonProps> = ({ icon, className }) => {
  return <button className={`${className}`}>{icon}</button>;
};

export default SocialButton;
