import {
  HiBeaker,
  HiBookmarkAlt,
  HiBriefcase,
  HiCamera,
  HiHome,
  HiUser,
} from "react-icons/hi";
import { BiSolidContact } from "react-icons/bi";

export const navItems = [
  {
    title: "Home",
    href: "/",
    id: "home",
    icon: HiHome,
  },
  {
    title: "About",
    href: "/about",
    id: "about",
    icon: HiUser,
  },
  { title: "Experience", href: "", id: "experience", icon: HiBriefcase },
  {
    title: "Projects",
    href: "/projects",
    id: "projects",
    icon: HiBeaker,
  },
  {
    title: "Blog",
    href: "/blog",
    id: "blog",
    icon: HiBookmarkAlt,
  },
  {
    title: "Photos",
    href: "/photos",
    id: "photos",
    icon: HiCamera,
  },
  { title: "Contact", href: "", id: "contact", icon: BiSolidContact },
];
