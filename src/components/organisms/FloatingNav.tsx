"use client";
import { cn } from "@/utils/cn";
import {
  motion,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Theme } from "@/components/atoms";
import { INavItemsPrps } from "@/data/navItems";
import { usePathname } from "next/navigation";

const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: INavItemsPrps[];
  className?: string;
}) => {
  const pathName = usePathname();
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.1) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -200,
        }}
        animate={{
          y: visible ? 0 : -150,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "hidden md:block fixed max-w-max mx-auto inset-x-0 top-10 border border-white/[0.2] dark:border-black/[0.2] rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-3 dark:bg-[#1E1E21] bg-[#EEEEEE]",
          className
        )}
      >
        <div className="flex gap-10">
          <div className="flex items-center justify-between space-x-8 mx-auto">
            {navItems.map((navItem, idx: number) => (
              <Link
                key={idx}
                href={navItem?.href}
                className={`relative items-center flex space-x-1 font-incognito duration-300 text-base ${
                  pathName && pathName === navItem?.href
                    ? "text-primary-color"
                    : "dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900"
                }`}
              >
                <span className="text-base !cursor-pointer">
                  {navItem.title}
                </span>
              </Link>
            ))}
          </div>
          <div>
            <Theme />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
