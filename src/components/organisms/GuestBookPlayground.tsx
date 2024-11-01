"use client";
import { GuestBookTextSkeletonLoader } from "@/components/atoms";
import { Animation, GuestBookText } from "@/components/molecules";
import { GuestBookAuthentication } from "@/components/organisms";
import { CommonContext } from "@/contexts";
import { GuestBookContentProps } from "@/types/guestBook";
import { fetchData } from "@/utils/fetchData";
import { useSession } from "next-auth/react";
import { FormEvent, useCallback, useContext, useEffect, useState } from "react";

const GuestBookPlayground = () => {
  const { data: session, status } = useSession();
  const { isLoading, setIsLoading } = useContext(CommonContext)!;
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [guestBookData, setGuestBookData] = useState<GuestBookContentProps[]>(
    []
  );

  const handleRetrieve = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await fetchData(
        "https://api-zayedfahim.vercel.app/api/v2/guest-book",
        "get"
      );
      if (result?.success) {
        setGuestBookData(result?.data);
      }
    } catch (error: unknown) {
      console.error("Error occurred while retrieving data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  useEffect(() => {
    handleRetrieve();
  }, [handleRetrieve]);

  const handleSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const guestMessageData = {
        message: message.trim(),
        user: {
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        },
      };

      const result = await fetchData(
        "https://api-zayedfahim.vercel.app/api/v2/guest-book",
        "post",
        {
          data: guestMessageData,
        }
      );

      if (result?.success) {
        await handleRetrieve();
        setMessage("");
      } else {
        setError(result?.message);
        setTimeout(() => {
          setError(null);
        }, 5000);
      }
    } finally {
      setIsLoading(false);
    }
  };

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
        <GuestBookAuthentication
          status={status}
          session={session ?? undefined}
          handleSend={handleSend}
          message={message}
          setMessage={setMessage}
          error={error}
        />
      </Animation>
    </div>
  );
};
export default GuestBookPlayground;
