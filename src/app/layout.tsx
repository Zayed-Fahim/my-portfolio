import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers";
import { FloatingNav, Footer, Navbar } from "@/components/organisms";
import { gitlabmono, incognito } from "@/app/fonts/font";
import { Animation } from "@/components/molecules";
import { navItems } from "@/data/navItems";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Zayed Fahim | Software Engineer",
  description: "",
  url: "https://zayed-fahim.web.app/",
  ogImage: "",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "zayed-fahim.web.app",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <main>
          <ThemeProvider>
            <Navbar />
            <FloatingNav navItems={navItems} />

            {children}

            <Animation delay={0.25}>
              <Footer />
            </Animation>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
