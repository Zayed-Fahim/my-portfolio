import "@/app/styles/globals.css";
import { gitlabmono, incognito } from "@/app/fonts/font";
import { Animation, MetaData } from "@/components/molecules";
import { FloatingNav, Footer, Navbar } from "@/components/organisms";
import { navItems } from "@/data/navItems";
import { ThemeProvider } from "@/providers";
import { Inter } from "next/font/google";
import CommonProvider from "@/providers/CommonProvider";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export const metadata = MetaData({
  title: "Zayed Fahim | Software Engineer",
  description: "Portfolio of Zayed Fahim",
  url: "https://zayed-fahim.web.app/",
  ogImage: "https://zayed-fahim.web.app/og-image.jpg",
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <ThemeProvider>
          <CommonProvider>
            <Navbar />
            <FloatingNav navItems={navItems} />

            <main className="min-h-[calc(80vh-100px)] md:min-h-[calc(80vh-165px)] xl:min-h-[calc(80vh-145px)]">
              {children}
            </main>

            <Animation delay={0.26}>
              <Footer />
            </Animation>
          </CommonProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
