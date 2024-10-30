"use client";
import React from "react";
import { Button } from "@/components/atoms";
import { GitHub, Google } from "@/constants";
import { signIn } from "next-auth/react";

const GuestBookAuthentication = () => {
  return (
    <div className="font-incognito flex justify-center flex-col gap-2">
      <p className="text-[#a1a1aa] text-center">
        Please login to start a conversation.
      </p>
      <div className="flex flex-col md:flex-row gap-5">
        <Button
          onClick={() => signIn("google")}
          title="Continue with Google"
          icon={<Google className="w-6 h-6 " />}
          className="w-full flex items-center justify-center gap-3 px-6 py-2 text-[0.875rem] font-bold leading-5 text-center uppercase align-middle rounded-lg border dark:border-zinc-700 border-zinc-200 hover:dark:bg-primary-bg hover:bg-secondary-bg cursor-pointer transition-transform duration-600 ease-in-out"
        />
        <Button
          onClick={() => signIn("github")}
          title="Continue with Github"
          icon={<GitHub className="w-6 h-6 " />}
          className="w-full flex items-center justify-center gap-3 px-6 py-2 text-[0.875rem] font-bold leading-5 text-center uppercase align-middle rounded-lg border dark:border-zinc-700 border-zinc-200 hover:dark:bg-primary-bg hover:bg-secondary-bg cursor-pointer transition-transform duration-600 ease-in-out"
        />
      </div>
    </div>
  );
};

export default GuestBookAuthentication;
