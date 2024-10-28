import { MetaData } from "@/components/molecules";
import { InsightsTemplate } from "@/components/templates";

export const metadata = MetaData({
  title: "Insights | Zayed Fahim",
  description:
    "On this page, I am showcasing some of my photos from my personal and professional life.",
  url: "https://zayed-fahim.web.app/insights",
  ogImage: "https://zayed-fahim.web.app/og-image.jpg",
});

const InsightsPage = () => {
  return <InsightsTemplate />;
};

export default InsightsPage;
