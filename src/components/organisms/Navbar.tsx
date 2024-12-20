"use client";
import { Theme } from "@/components/atoms";
import { MobileNav } from "@/components/organisms";
import { navItems } from "@/data/navItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useMemo } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const MemorizedTheme = useMemo(() => <Theme />, []);

  return (
    <section className="sticky top-0 left-0 md:relative z-[9999999]">
      <header className=" bg-white dark:bg-black text-sm py-4 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="md:block hidden">
            <Image
              loading="lazy"
              src="https://i.ibb.co.com/9YmxdvV/logo-4.png"
              width={110}
              height={35}
              alt="logo"
            />
          </Link>
          <Link href="/" className="block md:hidden">
            <Image
              loading="lazy"
              src="https://i.ibb.co.com/9YmxdvV/logo-4.png"
              width={90}
              height={30}
              alt="logo"
            />
          </Link>

          <nav className="md:block hidden">
            <ul className="flex items-center gap-x-8">
              {navItems.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={link?.href}
                      className={`font-incognito duration-300 text-base ${
                        pathName && pathName === link?.href
                          ? "text-primary-color"
                          : "dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-x-2 sm:gap-x-0">
            {MemorizedTheme}
            <MobileNav />
          </div>
        </div>
      </header>
    </section>
  );
};

export default memo(Navbar);
