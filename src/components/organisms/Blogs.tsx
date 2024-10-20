"use client";
import React, { useEffect, useState } from "react";
import { Animation } from "@/components/molecules";
import { BiDetail } from "react-icons/bi";
import dynamic from "next/dynamic";
import { PageHeader } from "@/components/atoms";
import SearchBar from "../molecules/SearchBar";
import { Search } from "@/constants";
import { blogs } from "@/data/blogs";

const BlogCard = dynamic(() => import("../organisms/BlogCard"));
const BlogCardSkeletonLoader = dynamic(
  () => import("../atoms/BlogCardSkeletonLoader")
);

const Blogs = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16">
      <div className="flex flex-col gap-14">
        <Animation delay={0.06}>
          <PageHeader
            title="Blog"
            description="The place where I share my thoughts, ideas, and experiences about Software Engineering."
          />
        </Animation>

        <div className="flex flex-col gap-8">
          <Animation delay={0.08}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <BiDetail />
                <h2 className="text-xl font-semibold tracking-tight">
                  Explore All
                </h2>
              </div>
              <SearchBar
                placeholder="Search blog posts..."
                className="bg-inherit font-incognito border dark:border-zinc-700 border-zinc-200 pl-9 pr-2 md:pl-12 md:pr-5 text-sm md:text-base py-2 rounded w-56 md:w-96 outline-none"
                icon={
                  <Search className="absolute size-5 md:size-6 left-2 md:left-3 top-2" />
                }
              />
            </div>
          </Animation>

          <div className="w-full flex flex-col gap-12 transition-all duration-1000 ease-in-out">
            {isLoading
              ? Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <Animation delay={0.06} key={i}>
                      <BlogCardSkeletonLoader />
                    </Animation>
                  ))
              : blogs.map((blog, i) => (
                  <Animation delay={0.06} key={i}>
                    <BlogCard {...blog} />
                  </Animation>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
