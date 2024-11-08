"use client";
import { handleSignIn } from "@/actions/authActions";
import { Button } from "@/components/atoms";
import { GuestBookMessage } from "@/components/organisms";
import { GitHub, Google } from "@/constants";
import { Animation } from "@/components/molecules";
import { GuestBookProps } from "@/types/guestBook";

const GuestBookAuthentication = ({
  session,
  message,
  setMessage,
  handleSend,
  error,
  isPopoverOpen,
  setIsPopoverOpen,
}: GuestBookProps) => {
  return (
    <>
      {!session && (
        <div
          className={`font-incognito flex justify-center flex-col gap-2 ${
            isPopoverOpen && "px-4"
          }`}
        >
          <p className="text-[#a1a1aa] text-center mt-1">
            Please login to start a conversation.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <Button
              onClick={() => handleSignIn("google")}
              title="Continue with Google"
              icon={<Google className="w-6 h-6" />}
              className={`${
                isPopoverOpen ? "gap-2 px-2" : "gap-3 px-6"
              } w-full flex items-center justify-center py-2 text-[0.875rem] font-bold leading-5 text-center uppercase align-middle rounded-lg border dark:border-zinc-700 border-zinc-200 hover:dark:bg-primary-bg hover:bg-[#f7f7f7] cursor-pointer transition-transform duration-600 ease-in-out`}
            />
            <Button
              onClick={() => handleSignIn("github")}
              title="Continue with Github"
              icon={<GitHub className="w-6 h-6" />}
              className={`${
                isPopoverOpen ? "gap-2 px-2" : "gap-3 px-6"
              } w-full flex items-center justify-center py-2 text-[0.875rem] font-bold leading-5 text-center uppercase align-middle rounded-lg border dark:border-zinc-700 border-zinc-200 hover:dark:bg-primary-bg hover:bg-[#f7f7f7] cursor-pointer transition-transform duration-600 ease-in-out`}
            />
          </div>
        </div>
      )}

      {session && session?.user && (
        <Animation delay={0.22}>
          <GuestBookMessage
            isPopoverOpen={isPopoverOpen}
            setIsPopoverOpen={setIsPopoverOpen}
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
