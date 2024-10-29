"use client";
import { guestBookData } from "@/data/guestbook";
import { Animation, GuestBookText } from "@/components/molecules";
import { GuestBookAuthentication } from "@/components/organisms";
import { useContext, useEffect } from "react";
import { CommonContext } from "@/contexts";
import { GuestBookTextSkeletonLoader } from "@/components/atoms";

const GuestBookPlayground = () => {
  const { isLoading, setIsLoading } = useContext(CommonContext)!;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);
  return (
    <div className="flex flex-col gap-3">
      <div className="mt-10 pr-3 min-h-[35vh] max-h-[62vh] md:min-h-[30vh] md:max-h-[70vh] lg:min-h-[38vh] lg:max-h-[72vh] overflow-y-auto sticky top-0 left-0">
        {isLoading ? (
          Array(2)
            .fill(0)
            .map((_, i) => (
              <Animation delay={0.14} key={i}>
                <GuestBookTextSkeletonLoader />
              </Animation>
            ))
        ) : (
          <>
            {guestBookData.map((data, i) => (
              <Animation delay={0.14} key={i}>
                <GuestBookText {...data} />
              </Animation>
            ))}
          </>
        )}
      </div>

      <Animation delay={0.18}>
        <hr className="border-zinc-600" />
      </Animation>
      <Animation delay={0.22}>
        <GuestBookAuthentication />
      </Animation>
    </div>
  );
};

export default GuestBookPlayground;
