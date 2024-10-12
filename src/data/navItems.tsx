import { BiSolidContact } from "react-icons/bi";
import {
  HiBeaker,
  HiBookmarkAlt,
  HiBriefcase,
  HiCamera,
  HiHome,
  HiUser,
} from "react-icons/hi";

export interface INavItemsPrps {
  title: string;
  href: string;
  id?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

const className =
  "text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300";

export const navItems: INavItemsPrps[] = [
  {
    title: "Home",
    href: "/",
    id: "home",
    icon: <HiHome className={`${className}`} aria-hidden="true" />,
  },
  {
    title: "Experience",
    href: "#experience",
    id: "experience",
    icon: <HiBriefcase className={`${className}`} aria-hidden="true" />,
  },
  {
    title: "Projects",
    href: "/projects",
    id: "projects",
    icon: <HiBeaker className={`${className}`} aria-hidden="true" />,
  },
  {
    title: "About",
    href: "/about",
    id: "about",
    icon: <HiUser className={`${className}`} aria-hidden="true" />,
  },

  {
    title: "Blog",
    href: "/blog",
    id: "blog",
    icon: <HiBookmarkAlt className={`${className}`} aria-hidden="true" />,
  },
  {
    title: "Photos",
    href: "/photos",
    id: "photos",
    icon: <HiCamera className={`${className}`} aria-hidden="true" />,
  },
  {
    title: "Contact",
    href: "#contact",
    id: "contact",
    icon: <BiSolidContact className={`${className}`} aria-hidden="true" />,
  },
];
