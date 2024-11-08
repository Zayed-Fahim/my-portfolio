"use client";
import { BookOpenText } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "@/components/atoms";
import { Popover } from "@/components/molecules";
import { GuestBookWidgetHeader } from "@/components/molecules";
import { useState } from "react";
import { GuestBookPlayground } from "@/components/organisms";
import { SessionProvider } from "next-auth/react";

const GuestbookWidget = () => {
  const pathname = usePathname();
  const isGuestBook = pathname === "/guestbook";
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsPopoverOpen(false);
  };

  return (
    <Popover
      trigger={
        !isGuestBook && (
          <Button
            className="z-[999] dark:bg-black bg-white hover:bg-secondary-color dark:hover:bg-secondary-color border border-black dark:border-white hover:border-transparent dark:hover:border-transparent rounded-full p-2 drop-shadow-[3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[3px_3px_rgba(255,255,255,0.4)]"
            icon={<BookOpenText className="w-7 h-7" />}
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          />
        )
      }
      content={
        <SessionProvider>
          <div className="w-[450px] fixed pb-3 right-0 bottom-16 border dark:border-zinc-700 border-zinc-200 dark:bg-black bg-white rounded-md">
            <GuestBookWidgetHeader onClose={handleClose} />
            <GuestBookPlayground
              isPopoverOpen={isPopoverOpen}
              setIsPopoverOpen={setIsPopoverOpen}
            />
          </div>
        </SessionProvider>
      }
      isOpen={isPopoverOpen}
      setIsOpen={setIsPopoverOpen}
    />
  );
};

export default GuestbookWidget;
