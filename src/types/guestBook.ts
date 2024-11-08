import { Session } from "next-auth";
import { Dispatch, FormEvent, SetStateAction } from "react";

export type GuestBookContentProps = {
  content: string;
  createdAt: string;
  user: {
    name: string;
    type: string;
    image: string;
  };
  isPopoverOpen?: boolean;
  setIsPopoverOpen?: Dispatch<boolean>;
};

export type GuestBookProps = {
  setMessage: Dispatch<SetStateAction<string>>;
  message: string;
  name?: string;
  handleSend: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  status?: string;
  session?: Session;
  error: string | null;
  isPopoverOpen?: boolean;
  setIsPopoverOpen?: Dispatch<boolean>;
};
