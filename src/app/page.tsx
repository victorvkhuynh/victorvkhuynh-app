"use client"

import { useTheme } from "next-themes";
// import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <main>
      <div className="w-full h-20 bg-emerald-800 dark:bg-slate-900 sticky top-0">
        <nav className="flex justify-between items-center h-full">
          <ul className="flex text-white">
            <li>
              <Link href="/">
                Victor Huynh
              </Link>
            </li>
          </ul>
          <ul className="flex gap-x-6 text-white">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <div>
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle Theme</button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <span className="flex justify-center">
          Hello my name is Victor, I&apos;m a gamer, athlete, and software engineer.
          Historically, I&apos;ve always been a gamer first kind of guy, and that is why I&apos;ve always wanted to build a game of my own.
        </span>
      </div>
      <div>
        <span>
          Victor Huynh
        </span>
      </div>
      <div>
        <span>
          Gamer
        </span>
      </div>
      <div>
        <span>
          Athlete
        </span>
      </div>
      <div>
        Software Engineer
      </div>
    </main>
  );
}