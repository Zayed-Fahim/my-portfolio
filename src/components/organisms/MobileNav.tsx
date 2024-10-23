"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../../public/logo/logo_4.png";
import { navItems } from "@/data/navItems";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathName = usePathname();
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <div className="sticky top-0 left-0">
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2"
      >
        <RxHamburgerMenu className="text-xl" />
      </button>
      <div
        className={`md:hidden fixed left-0 top-0 z-10 h-full w-full transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] dark:bg-zinc-900 bg-white ${
          navShow ? "translate-x-0 rounded-none" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mt-6 px-8">
          <Link href="/" onClick={onToggleNav}>
            <Image src={Logo} width={90} height={30} alt="logo" />
          </Link>

          <button
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            className={`md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-500 ${
              !navShow ? "-rotate-[360deg]" : null
            }`}
          >
            <HiOutlineX className="text-xl" />
          </button>
        </div>
        <nav className="flex flex-col mt-6">
          {navItems.map((link, index) => (
            <Link
              key={index}
              href={link?.href}
              className={`font-incognito flex items-center gap-x-2 font-semibold text-lg dark:shadow-line-dark shadow-line-light p-6 group ${
                pathName && pathName === link?.href
                  ? "text-primary-color"
                  : "dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900"
              }`}
              onClick={onToggleNav}
            >
              {link.icon}
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
