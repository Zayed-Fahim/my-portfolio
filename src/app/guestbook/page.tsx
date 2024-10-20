import { PageHeader } from "@/components/atoms";
import { Animation, MetaData } from "@/components/molecules";
import React from "react";

export const metadata = MetaData({
  title: "Guestbook | Zayed Fahim",
  description:
    "On this page, I am showcasing some of my photos from my personal and professional life.",
  url: "https://zayed-fahim.web.app/guestbook",
  ogImage: "https://zayed-fahim.web.app/og-image.jpg",
});

const GuestbookPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-16">
      <Animation delay={0.1}>
        <PageHeader
          title="Guestbook"
          description="This page is currently under development."
        />
      </Animation>
    </div>
  );
};

export default GuestbookPage;
