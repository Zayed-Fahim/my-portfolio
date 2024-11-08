import { FC } from "react";

type TextProps = {
  text: string;
  type?: string;
  isPopoverOpen?: boolean;
};

const Text: FC<TextProps> = ({ text, type, isPopoverOpen }) => {
  return (
    <div
      className={`flex ${type === "author" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`${
          isPopoverOpen
            ? "max-w-full"
            : "max-w-full sm:max-w-[400px] md:max-w-[380px] lg:max-w-[480px]"
        } px-3 py-2 text-sm md:text-base text-[#a1a1aa] dark:bg-primary-bg bg-[#f7f7f7] border dark:border-zinc-700 border-zinc-200`}
        style={{
          borderRadius:
            type === "author" ? "18px 18px 0px 18px" : "18px 18px 18px 0px",
        }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Text;
