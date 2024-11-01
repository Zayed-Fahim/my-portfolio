"use client";
import { handleSignIn } from "@/actions/authActions";
import { Button } from "@/components/atoms";
import { GuestBookMessage } from "@/components/organisms";
import { GitHub, Google } from "@/constants";
import { Animation } from "../molecules";
import { GuestBookProps } from "@/types/guestBook";

const GuestBookAuthentication = ({
  status,
  session,
  message,
  setMessage,
  handleSend,
  error,
}: GuestBookProps) => {
  return (
    <>
      {(status === "loading" || !session) && (
        <div className="font-incognito flex justify-center flex-col gap-2">
          <p className="text-[#a1a1aa] text-center mt-1">
            Please login to start a conversation.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <Button
              onClick={() => handleSignIn("google")}
              title="Continue with Google"
              icon={<Google className="w-6 h-6" />}
              className="w-full flex items-center justify-center gap-3 px-6 py-2 text-[0.875rem] font-bold leading-5 text-center uppercase align-middle rounded-lg border dark:border-zinc-700 border-zinc-200 hover:dark:bg-primary-bg hover:bg-secondary-bg cursor-pointer transition-transform duration-600 ease-in-out"
            />
            <Button
              onClick={() => handleSignIn("github")}
              title="Continue with Github"
              icon={<GitHub className="w-6 h-6" />}
              className="w-full flex items-center justify-center gap-3 px-6 py-2 text-[0.875rem] font-bold leading-5 text-center uppercase align-middle rounded-lg border dark:border-zinc-700 border-zinc-200 hover:dark:bg-primary-bg hover:bg-secondary-bg cursor-pointer transition-transform duration-600 ease-in-out"
            />
          </div>
        </div>
      )}

      {session && session?.user && (
        <Animation delay={0.22}>
          <GuestBookMessage
            error={error}
            message={message}
            setMessage={setMessage}
            name={session.user.name ?? undefined}
            handleSend={handleSend}
          />
        </Animation>
      )}
    </>
  );
};

export default GuestBookAuthentication;
