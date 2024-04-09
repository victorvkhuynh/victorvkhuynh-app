import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import NavBar from "./_components/navbar";
import Footer from "./_components/footer";
import { ThemeProvider } from "next-themes";

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
      <head />
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NavBar />
          <TRPCReactProvider>{children}</TRPCReactProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
