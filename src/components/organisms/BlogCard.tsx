import { formatDate } from "@/helpers/formatDate";
import { readTime } from "@/helpers/readTime";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidTime } from "react-icons/bi";
import { HiCalendar } from "react-icons/hi";

interface IBlogDetailsProps {
  title: string;
  description: string;
  date: string;
  views: number;
  imageSrc: string;
  blogLink: string;
  createdAt: string;
}

const BlogCard: React.FC<IBlogDetailsProps> = ({
  title,
  description,
  date,
  createdAt,
  views,
  imageSrc,
  blogLink,
}) => {
  return (
    <Link
      href={`/blog/${blogLink}`}
      className="flex lg:flex-row flex-col h-auto lg:items-center items-start gap-8 p-3 rounded-lg group
      dark:bg-primary-bg bg-secondary-bg border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200"
    >
      {/* Image Container with aspect-ratio */}
      <div className="relative w-full lg:w-[450px] h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-md group-hover:scale-125 transition-transform duration-300 dark:bg-zinc-800 bg-zinc-100"
        />
      </div>

      {/* Text Container */}
      <div className="flex-grow max-w-full lg:max-w-[550px] xl:max-w-[650px] pr-4">
        {/* Title with truncation */}
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          {title.length > 54 ? title.slice(0, 54) + "..." : title}
        </h2>

        {/* Description with truncation */}
        <p className="dark:text-zinc-400 text-zinc-600 text-[14px] mb-3">
          {description.length > 300
            ? description.slice(0, 300) + "..."
            : description}
        </p>

        {/* Metadata: Date, Time, Views */}
        <div className="flex justify-between items-center text-sm font-semibold dark:text-zinc-400 text-zinc-600">
          <div className="flex gap-x-4">
            <div className="flex items-center gap-x-2">
              <HiCalendar className="text-[14px]" />
              <time dateTime={date ? date : createdAt}>
                {date ? formatDate(date) : formatDate(createdAt)}
              </time>
            </div>
            <div className="flex items-center gap-x-2">
              <BiSolidTime className="text-[14px]" />
              <span>{readTime(description)}</span>
            </div>
          </div>
          <p className="text-[14px]">{views} views</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
