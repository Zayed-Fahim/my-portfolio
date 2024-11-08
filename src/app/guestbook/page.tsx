import { MetaData } from "@/components/molecules";
import { GuestBookTemplate } from "@/components/templates";

export const metadata = MetaData({
  title: "Guestbook | Zayed Fahim",
  description:
    "On this page, I am showcasing some of my photos from my personal and professional life.",
  url: "https://zayedfahim.vercel.app/guestbook",
  ogImage: "https://i.ibb.co.com/WgQFmPt/guestbook-og.png",
});

const GuestbookPage = () => {
  return <GuestBookTemplate />;
};

export default GuestbookPage;
