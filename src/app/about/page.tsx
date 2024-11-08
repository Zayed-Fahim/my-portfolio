import { MetaData } from "@/components/molecules";
import { AboutTemplate } from "@/components/templates";

export const metadata = MetaData({
  title: "About | Zayed Fahim",
  description:
    "Here in this page you can know about myself. What is the background of myself.",
  url: "https://zayedfahim.vercel.app/about",
  ogImage: "https://i.ibb.co.com/PYgg8d4/about-og.png",
});

const AboutPage = () => {
  return <AboutTemplate />;
};

export default AboutPage;
