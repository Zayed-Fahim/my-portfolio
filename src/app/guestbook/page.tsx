import { MetaData } from "@/components/molecules";
import { GuestBookTemplate } from "@/components/templates";

export const metadata = MetaData({
  title: "Guestbook | Zayed Fahim",
  description:
    "On this page, I am showcasing some of my photos from my personal and professional life.",
  url: "https://zayed-fahim.web.app/guestbook",
  ogImage: "https://zayed-fahim.web.app/og-image.jpg",
});

const GuestbookPage = () => {
  return <GuestBookTemplate />;
};

export default GuestbookPage;
