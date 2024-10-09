import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo_4.png";
import { Theme } from "../atoms";
import { MobileNav } from "../organisms";

const Navbar = () => {
  const data = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Photos",
      href: "/photos",
    },
  ];

  return (
    <section>
      <header className="sticky top-0 left-0 md:relative dark:bg-[#18181B] bg-[#F1F1F1] md:bg-transparent md:dark:bg-transparent text-sm py-4 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
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
              {data.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
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
