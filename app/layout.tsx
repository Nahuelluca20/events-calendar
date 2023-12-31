import "./globals.css";
import type {Metadata} from "next";

import {Inter} from "next/font/google";

import {Toaster} from "@/components/ui/toaster";
import {ThemeProvider} from "@/components/theme-provider";
import {Navbar} from "@/components/Navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <ThemeProvider enableSystem attribute="class" defaultTheme="system">
          <Navbar />
          <div className="max-w-[1200px] mx-auto px-5 xl:px-0 mt-5">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
