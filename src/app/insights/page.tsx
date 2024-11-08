import { MetaData } from "@/components/molecules";
import { InsightsTemplate } from "@/components/templates";

export const metadata = MetaData({
  title: "Insights | Zayed Fahim",
  description:
    "On this page, I am showcasing some of my photos from my personal and professional life.",
  url: "https://zayedfahim.vercel.app/insights",
  ogImage: "https://i.ibb.co.com/dJSxm8X/insight-og.png",
});

const InsightsPage = () => {
  return <InsightsTemplate />;
};

export default InsightsPage;
