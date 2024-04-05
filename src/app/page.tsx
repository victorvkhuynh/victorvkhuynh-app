/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client"

import { useTheme } from "next-themes";
// import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import DiscordWhiteIcon from "src/assets/discord-white.svg";
import DiscordBlackIcon from "src/assets/discord-black.svg";
import InstagramBlackIcon from "src/assets/instagram-black.svg";
import InstagramWhiteIcon from "src/assets/instagram-white.svg";
import Image from 'next/image';

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <main>
      <div className="mx-11 mt-4 overflow-hidden">
        <div className="grid grid-cols-4 gap-4 border-spacing-2">
          <div className="text-center">
            <button className="min-w-full min-h-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <Link href="/">Victor Huynh</Link>
            </button>
          </div>
          <div className="text-center">
            <button className="min-w-full min-h-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <Link href="/about">About</Link>
            </button>
          </div>
          <div className="text-center">
            <button className="min-w-full min-h-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <Link href="/projects">Projects</Link>
            </button>
          </div>
          <div className="text-center">
            <button className="min-w-full min-h-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <Link href="/blog">Blog</Link>
            </button>
          </div>
          {/* sm:h-12 md:h-16 lg:h-20 xl:h-100 2xl:h-80  */}
          <div className="left-2 flex h-80 items-center justify-center bg-slate-300 col-span-2">
            <div className="h-full w-full bg-slate-700">
              <span>info card</span>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-slate-500 col-span-2 row-span-2">
            <div className="h-full w-full bg-slate-700">
              <span>main visual card</span>
            </div>
          </div>
          <div className="flex h-80 items-center justify-center bg-slate-300">
            <div className="h-full w-full bg-slate-700">
              <span>sub card</span>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-slate-300">
            <div className="h-full w-full bg-slate-700">
              <span>sub card</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-4 left-0 w-full">
        <div className="flex flex-col items-center ">
          <ul className="flex gap-x-4">
            <li>
              <Link href="https://discord.gg/3xdYjPvA2j" target="_blank" rel="noopener noreferrer">
                <Image priority src={theme === 'dark' ? DiscordWhiteIcon : DiscordBlackIcon} height={24} alt="Discord Link" />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/victorvkhuynh/" target="_blank" rel="noopener noreferrer">
                <Image priority src={theme === 'dark' ? InstagramWhiteIcon : InstagramBlackIcon} height={24} alt="Instagram Link" />
              </Link>
            </li>
            <li>
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle {theme} Theme</button>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}