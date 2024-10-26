"use client";

import useMounted from "@/hooks/useMounted";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

const ProgressBar = ({
  data,
  className,
}: {
  data: { name: string; percent?: number };
  className?: string;
}) => {
  const { name, percent = 0 } = data;

  const variants = {
    initial: { width: 0 },
    animate: {
      width: `${percent}%`,
      transition: { delay: 0.8 },
    },
  };

  const isMounted = useMounted();

  return (
    <>
      {isMounted ? (
        <div className={cn("flex items-center justify-between gap-3")}>
          <div className={cn("w-24")}>{name}</div>
          <div
            className={cn(
              "relative flex h-4 flex-1 justify-center rounded-full bg-secondary-bg dark:bg-primary-bg"
            )}
          >
            <motion.span
              initial="initial"
              animate="animate"
              variants={variants}
              className={cn(
                "absolute left-0 top-0 h-4 rounded-full px-3",
                className
              )}
            >
              &ensp;
            </motion.span>
          </div>
          <div className={cn("w-8 text-right")}>{percent.toFixed(0)}%</div>
        </div>
      ) : null}
    </>
  );
};

export default ProgressBar;
