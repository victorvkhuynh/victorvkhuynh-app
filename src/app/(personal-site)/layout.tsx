import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import NavBar from "../_components/personal-site/navbar";
import Footer from "../_components/personal-site/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "VictorVKHuynh",
  description: "Software Engineer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head></head>
      <GoogleAnalytics gaId="G-9WGYCEQBFB" />
      <body className={`font-sans ${inter.variable} max-h-full`}>
        <NavBar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}
