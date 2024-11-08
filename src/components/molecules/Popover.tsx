"use client";
import { Dispatch, ReactNode, useEffect, useRef } from "react";

type PopoverProps = {
  trigger: ReactNode;
  content: ReactNode;
  isOpen?: boolean;
  setIsOpen?: Dispatch<boolean>;
};

const Popover: React.FC<PopoverProps> = ({
  trigger,
  content,
  isOpen,
  setIsOpen,
}) => {
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen?.(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  return (
    <div className="popover transition-all duration-300 ease-in-out">
      <div>{trigger}</div>
      {isOpen && <div ref={popoverRef}>{content}</div>}
    </div>
  );
};

export default Popover;
