"use client"

import { useTheme } from "next-themes";
// import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <main>
      <div className="grid grid-cols-4">
        <div className="text-center p-2">
          <button className="min-w-full min-h-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link href="/">Victor Huynh</Link>
          </button>
        </div>
        <div className="text-center p-2">
          <button className="min-w-full min-h-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link href="/about">About</Link>
          </button>
        </div>
        <div className="text-center p-2">
          <button className="min-w-full min-h-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link href="/projects">Projects</Link>
          </button>
        </div>
        <div className="text-center p-2">
          <button className="min-w-full min-h-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link href="/blog">Blog</Link>
          </button>
        </div>
        {/* sm:h-12 md:h-16 lg:h-20 xl:h-100 2xl:h-80  */}
        <div className="flex h-80 items-center justify-center bg-slate-300 col-span-2">
          <div className="h-3/4 aspect-video bg-slate-700">
            <span>info card</span>
          </div>
        </div>
        <div className="flex h-100 items-center justify-center bg-slate-500 col-span-2 row-span-4">
          <span>main visual card</span>
        </div>
        <div className="flex h-40 items-center justify-center bg-slate-300">
          <div className="h-3/4 aspect-video bg-slate-700">
            <span>sub card</span>
          </div>
        </div>
        <div className="flex h-40 items-center justify-center bg-slate-300">
          <div className="h-3/4 aspect-video bg-slate-700">
            <span>sub card</span>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 w-full">
        <div className="flex flex-col items-center bg-lime-600">
          <ul className="flex gap-x-4">
            <li>
              [Social 1]
            </li>
            <li>
              [Social 2]
            </li>
            <li>
              [Social 3]
            </li>
            <li>
              [Social 4]
            </li>
            <li>
              [Social 5]
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}