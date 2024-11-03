"use client";
import { handleLogOut } from "@/actions/authActions";
import { MessageField } from "@/components/molecules";
import { GuestBookProps } from "@/types/guestBook";
import { Message } from "@/components/atoms";

const GuestBookMessageField = ({
  message,
  setMessage,
  name,
  handleSend,
  error,
}: GuestBookProps) => {
  return (
    <div className="font-incognito flex flex-col gap-1">
      <MessageField
        id="guestbook-message"
        name="message"
        value={message}
        required={true}
        onChange={(e) => setMessage(e.target.value)}
        onSend={handleSend}
        className="w-full bg-transparent h-[45px] px-3 border dark:border-zinc-700 border-zinc-200 outline-none focus-within:border-secondary-color focus-within:dark:border-secondary-color rounded-md"
        placeholder="Write a message in the guest book..."
      />
      {error && <Message type="error" message={error} />}
      <div>
        <p className="text-[#a1a1aa]">
          You are logged in as {name}.{" "}
          <button
            onClick={() => handleLogOut()}
            className="text-secondary-color font-bold cursor-pointer hover:underline"
          >
            Logout
          </button>{" "}
          here.
        </p>
      </div>
    </div>
  );
};

export default GuestBookMessageField;
