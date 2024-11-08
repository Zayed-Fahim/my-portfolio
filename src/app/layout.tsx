import "@/app/styles/globals.css";
import { gitlabmono, incognito } from "@/app/fonts/font";
import { Animation, MetaData } from "@/components/molecules";
import { FloatingNav, Footer, Navbar } from "@/components/organisms";
import { navItems } from "@/data/navItems";
import { ThemeProvider } from "@/providers";
import { Inter } from "next/font/google";
import CommonProvider from "@/providers/CommonProvider";
import { ReactNode } from "react";
import GuestbookWidget from "@/components/organisms/GuestbookWidget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export const metadata = MetaData({
  title: "Zayed Fahim | Software Engineer",
  description: "Portfolio of Zayed Fahim",
  url: "https://zayedfahim.vercel.app",
  ogImage: "https://i.ibb.co.com/mcxWLTw/main-og.png",
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-black bg-white dark:text-white text-zinc-700`}
      >
        <CommonProvider>
          <ThemeProvider>
            <div className="min-h-screen">
              <Navbar />
              <FloatingNav navItems={navItems} />

              <main className="min-h-[calc(80vh-100px)] md:min-h-[calc(80vh-165px)] xl:min-h-[calc(80vh-150px)]">
                {children}
              </main>

              <Animation delay={0.26}>
                <Footer />
              </Animation>
              <Animation
                delay={0.1}
                className="fixed right-10 bottom-10 md:block hidden"
              >
                <GuestbookWidget />
              </Animation>
            </div>
          </ThemeProvider>
        </CommonProvider>
      </body>
    </html>
  );
};

export default RootLayout;
