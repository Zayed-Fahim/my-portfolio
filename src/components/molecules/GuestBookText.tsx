import Image from "next/image";
import React from "react";
import { Text } from "@/components/atoms";
import { GuestBookContentProps } from "@/types/guestBook";
import { formatDate } from "@/helpers/formatDate";

const GuestBookText: React.FC<GuestBookContentProps> = ({
  user: { image, name, type },
  content,
  createdAt,
}) => {
  return (
    <div
      className={`font-incognito flex items-start ${
        type === "author" ? "justify-end" : "justify-start"
      }`}
    >
      {type === "user" && (
        <Image
          referrerPolicy="no-referrer"
          src={image ?? "https://i.ibb.co.com/Wzmq0gZ/profile.png"}
          alt={`${name} logo`}
          loading="lazy"
          width={40}
          height={40}
          className="mr-2 mt-2 rounded-full h-8 w-8 md:h-10 md:w-10"
        />
      )}
      <div
        className={`flex flex-col gap-2 ${
          type === "author"
            ? "items-end justify-center"
            : "items-start justify-center"
        }`}
      >
        <div className="flex items-center gap-2">
          <h1 className="md:text-xl font-semibold">{name}</h1>
          {type === "author" && (
            <p className="text-secondary-color text-sm font-bold">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </p>
          )}
          <p className="text-sm text-[#a1a1aa]">
            {formatDate(createdAt, "dd-MM-yyyy h:mm a")}
          </p>
        </div>
        <Text text={content} type={type} />
      </div>
      {type === "author" && (
        <Image
          src={image}
          alt={`${name} logo`}
          loading="lazy"
          width={40}
          height={40}
          className="ml-2 mt-2 rounded-full h-8 w-8 md:h-10 md:w-10"
        />
      )}
    </div>
  );
};

export default GuestBookText;
