import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "next-themes";
import RestoNavbar from "./resto-navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Example Restaurant Page 1",
  description:
    "Want a website like this? Send me an email at victorvkhuynh@gmail.com",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RestoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`font-sans ${inter.variable}`}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <RestoNavbar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </ThemeProvider>
    </section>
  );
}
