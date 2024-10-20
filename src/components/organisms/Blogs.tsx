"use client";
import React, { useEffect, useState } from "react";
import { Animation } from "@/components/molecules";
import { BiDetail } from "react-icons/bi";
import dynamic from "next/dynamic";
import { PageHeader } from "@/components/atoms";
import SearchBar from "../molecules/SearchBar";
import { Search } from "@/constants";

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

  const blogData = [
    {
      title: "The Rise of JavaScript Frameworks.",
      date: "2024-09-20",
      views: 150,
      imageSrc: "/images/blog/javascript-frameworks.jpg",
      blogLink: "the-rise-of-javascript-frameworks",
      description:
        "Explore how JavaScript frameworks have evolved and why they're essential for modern web development.",
      createdAt: "2024-09-20",
    },

    {
      title: "Understanding React Hooks.",
      date: "2024-10-05",
      views: 230,
      imageSrc: "/blog.webp",
      blogLink: "understanding-react-hooks",
      description:
        "Learn the fundamentals of React Hooks and how they simplify state management in functional components.",
      createdAt: "2024-10-05",
    },
    {
      title: "How to Improve Web Performance?",
      date: "2024-08-15",
      views: 180,
      imageSrc: "/optimized.png",
      blogLink: "improve-web-performance",
      description:
        "In today's fast-paced digital world, web performance is more critical than ever. Users expect websites to load quickly and run smoothly across all devices, whether they're using high-speed broadband or a mobile network. Poor performance can lead to high bounce rates, lower search engine rankings, and a decrease in user satisfaction, all of which can significantly impact your website's success. This blog post will guide you through essential strategies and best practices for improving web performance, ensuring your site delivers a seamless and efficient user experience.",
      createdAt: "2024-08-15",
    },
    {
      title: "Next.js: The Future of Server-side Rendering.",
      date: "2024-09-10",
      views: 320,
      imageSrc: "/images/blog/nextjs-ssr.jpg",
      blogLink: "nextjs-server-side-rendering",
      description:
        "An in-depth look at how Next.js is revolutionizing server-side rendering for high-performance web applications.",
      createdAt: "2024-09-10",
    },
  ];

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

          <div className="w-full flex flex-col gap-12">
            {isLoading
              ? Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <Animation delay={0.06} key={i}>
                      <BlogCardSkeletonLoader />
                    </Animation>
                  ))
              : blogData.map((blog, i) => (
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
