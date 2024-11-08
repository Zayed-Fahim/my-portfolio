"use client";
import { Close, Expand, Minus } from "@/constants";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

const GuestBookWidgetHeader = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "flex items-center justify-between border-muted px-4 py-3 font-medium"
      )}
    >
      <div className={cn("flex items-center gap-4")}>
        <div className={cn("flex gap-2")}>
          <div
            className={cn(
              "group flex size-3.5 cursor-pointer items-center justify-center rounded-full bg-[#FF605C] text-neutral-700"
            )}
            onClick={onClose}
          >
            <Close className={cn("hidden", "group-hover:flex")} />
          </div>
          <div
            className={cn(
              "group flex size-3.5 cursor-pointer items-center justify-center rounded-full bg-[#FFBD44] text-neutral-700"
            )}
            onClick={onClose}
          >
            <Minus className={cn("hidden", "group-hover:flex")} />
          </div>
          <div
            className={cn(
              "group flex size-3.5 cursor-pointer items-center justify-center rounded-full bg-[#00CA4E] text-neutral-700"
            )}
            onClick={() => {
              onClose();
              router.push("/guestbook");
            }}
          >
            <Expand className={cn("hidden -rotate-45", "group-hover:flex")} />
          </div>
        </div>
        <h4 className={cn("font-cal tracking-wide")}>Guestbook</h4>
      </div>
    </div>
  );
};

export default GuestBookWidgetHeader;
