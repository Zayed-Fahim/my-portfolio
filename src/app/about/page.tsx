import { MetaData } from "@/components/molecules";
import { AboutTemplate } from "@/components/templates";

export const metadata = MetaData({
  title: "About | Zayed Fahim",
  description:
    "Here in this page you can know about myself. What is the background of myself.",
  url: "https://zayed-fahim.web.app/about",
  ogImage: "https://zayed-fahim.web.app/og-image.jpg",
});

const AboutPage = () => {
  return <AboutTemplate />;
};

export default AboutPage;
