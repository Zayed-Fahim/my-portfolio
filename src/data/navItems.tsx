import { HiBeaker, HiBookmarkAlt, HiUser } from "react-icons/hi";
import { MdInsights, MdMenuBook } from "react-icons/md";

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
    title: "Projects",
    href: "/projects/",
    id: "projects",
    icon: <HiBeaker className={`${className}`} aria-hidden="true" />,
  },
  {
    title: "Insights",
    href: "/insights/",
    id: "insights",
    icon: <MdInsights className={`${className}`} aria-hidden="true" />,
  },
  {
    title: "Blog",
    href: "/blog/",
    id: "blog",
    icon: <HiBookmarkAlt className={`${className}`} aria-hidden="true" />,
  },

  {
    title: "Guestbook",
    href: "/guestbook/",
    id: "guestbook",
    icon: <MdMenuBook className={`${className}`} aria-hidden="true" />,
  },
  {
    title: "About",
    href: "/about/",
    id: "about",
    icon: <HiUser className={`${className}`} aria-hidden="true" />,
  },
];
