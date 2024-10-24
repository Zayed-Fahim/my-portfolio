"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "../app/styles/notFound.css";
import { Back, NotFound404 } from "@/constants";
import { Button } from "@/components/atoms";
import { Animation } from "@/components/molecules";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="max-w-7xl px-6 lg:px-16 pb-8 mx-auto font-incognito">
      <div className="flex justify-center flex-col gap-5 items-center">
        <div className="flex justify-center flex-col items-center">
          <Animation delay={0.1}>
            <NotFound404
              className="st0 st1 st2 w-[300px] h-[200px] md:w-[500px] md:h-[400px] text-center"
              fill="#16a085"
            />
          </Animation>

          <Animation delay={0.14}>
            <div className="message text-base md:text-xl">Page not found</div>
          </Animation>
        </div>
        <div className="flex flex-col gap-y-16 justify-center items-center">
          <Animation delay={0.16}>
            <p className="text-2xl text-center">
              Oops! This page went on vacation without telling us. 🏖️
            </p>
          </Animation>
          <Animation delay={0.2}>
            <div className="flex justify-center items-center gap-x-10">
              <Button
                title="Go Back"
                onClick={() => router.back()}
                icon={<Back className="w-6 h-6" />}
                className="flex justify-center items-center gap-3 dark:bg-[#16a34a] dark:hover:bg-[#0CCE6B] bg-[#0CCE6B] hover:bg-[#16a34a] px-5 py-2 rounded text-black"
              />
              <Button
                title="Home"
                onClick={() => router.push("/")}
                className="flex justify-center items-center gap-3 dark:bg-[#16a34a] dark:hover:bg-[#0CCE6B] bg-[#0CCE6B] hover:bg-[#16a34a] px-5 py-2 rounded text-black"
              />
            </div>
          </Animation>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
