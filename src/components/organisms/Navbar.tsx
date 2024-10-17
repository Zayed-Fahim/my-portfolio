"use client";
import { Theme } from "@/components/atoms";
import { MobileNav } from "@/components/organisms";
import { navItems } from "@/data/navItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../../public/logo/logo_4.png";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <section className="sticky top-0 left-0 md:relative z-[9999999]">
      <header className="dark:bg-[#18181B] bg-[#F1F1F1] md:bg-transparent md:dark:bg-transparent text-sm py-4 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="md:block hidden">
            <Image
              loading="lazy"
              src={Logo}
              width={120}
              height={40}
              alt="logo"
            />
          </Link>
          <Link href="/" className="block md:hidden">
            <Image
              loading="lazy"
              src={Logo}
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
                      href={link.href}
                      className={`font-incognito duration-300 text-base ${
                        pathName === link.href && !pathName.includes("/#")
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

          <div className="flex items-center gap-x-4">
            <Theme />
            <MobileNav />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
