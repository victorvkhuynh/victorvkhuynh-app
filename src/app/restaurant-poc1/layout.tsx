import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import RestoNavbar from "./resto-navbar";
import RestoFooter from "./resto-footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Example Coffee Restaurant",
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
    <html suppressHydrationWarning lang="en">
      <head></head>
      <GoogleAnalytics gaId="G-9WGYCEQBFB" />
      <body className={`font-sans ${inter.variable} bg-[#ecddc9] `}>
        <RestoNavbar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <RestoFooter />
      </body>
    </html>
  );
}
