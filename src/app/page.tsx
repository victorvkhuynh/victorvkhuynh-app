/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client"

import { useTheme } from "next-themes";
// import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import DiscordWhiteIcon from "src/assets/discord-white.svg";
import DiscordBlackIcon from "src/assets/discord-black.svg";
import InstagramBlackIcon from "src/assets/instagram-black.svg";
import InstagramWhiteIcon from "src/assets/instagram-white.svg";
import GitHubWhiteIcon from "src/assets/github-white.svg";
import GitHubBlackIcon from "src/assets/github-black.svg";
import LinkedInBlueIcon from "src/assets/linkedin-blue.png";
import LinkedInWhiteIcon from "src/assets/linkedin-white.png";
import PersonalPicture from "src/assets/placeholder-picture.png";
import VHLogo from "public/vh_logo.png";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [selectedButton, setSelectedButton] = useState('home');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main>
      <div className="mx-11 mt-4 overflow-hidden">
        <div className="grid grid-cols-4 gap-4 border-spacing-2">
          <div className="">
            <button className="w-50 h-50 bg-transparent text-blue-700 font-semibold hover:text-white py-2 px-4 ">
              <Image src={VHLogo} alt="Victor Huynh logo" width={50} height={50} />
            </button>
          </div>
          <div className="text-center">
            {/* <button onClick={() => setSelectedButton("about")} className="min-w-full min-h-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <Link href="/">About</Link>
            </button> */}
          </div>
          <div className="text-center">
            <button className="min-w-full min-h-full bg-transparent hover:bg-slate-500 text-slate-800 font-semibold hover:text-white py-2 px-4 border border-slate-800 hover:border-transparent rounded">
              <Link href="/projects">Projects</Link>
            </button>
          </div>
          <div className="text-center">
            <button className="min-w-full min-h-full bg-transparent hover:bg-slate-500 text-slate-800 font-semibold hover:text-white py-2 px-4 border border-slate-800 hover:border-transparent rounded">
              <Link href="/blog">Blog</Link>
            </button>
          </div>
          <div className="left-2 flex h-auto items-center justify-center  col-span-2">
            <div className="h-full w-full ">
              <span className="flex justify-center underline underline-offset-4">About Me</span><br />
              <p>I&apos;m Victor Huynh, a graduate of Ryerson University with a degree in Computer Science, earned in 2018. From a young age, I&apos;ve possessed a competitive spirit that has driven me towards pursuits such as e-sports, particularly in games like StarCraft 2 and League of Legends. While some may label this as mere passion or even addiction, I see it as a deep-seated dedication to my interests.<br /><br />Now, I aim to channel that same fervor towards cultivating a healthier, more athletic lifestyle, with a primary focus on nutrition and physical exercise. During periods of rest and recovery, I intend to hone my skills as a software engineer beyond my professional obligations, delving into personal projects and potential freelance opportunities.<br /><br />As I embark on this journey, I remain open to the opportunities and experiences that lie ahead, embracing the evolution of both my physical and professional pursuits.</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center col-span-2 row-span-2">
            <div className="h-full w-full relative overflow-hidden rounded-full">
              <Image placeholder="blur" priority src={PersonalPicture} alt="Victor Huynh" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="flex h-full items-center justify-center tracking-widest">
            <div className="h-full w-full ">
              <span className="flex justify-center underline underline-offset-4">Interests</span>
              <br />
              <ul className="text-center tracking-wider">
                <li>Volleyball</li>
                <li>Basketball</li>
                <li>Kettlebell</li>
                <li>Running</li>
                <li>Cooking</li>
                <li>Reading</li>
              </ul>
            </div>
          </div>
          <div className="flex h-full items-center justify-center tracking-widest">
            <div className="h-full w-full ">
              <span className="flex justify-center underline underline-offset-4">Current 2024 Goals</span>
              <br />
              <ul className="text-center tracking-wider">
                <li>Finish my personal website</li>
                <li>Grow my blog, weekly posts</li>
                <li>Publish my first multiplayer game</li>
                <li>Run a full marathon</li>
                <li>Dunk a basketball</li>
                <li>Read a book a month</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-4 left-0 w-full">
        <div className="flex flex-col items-center ">
          <ul className="flex gap-x-4">
            <li>
              <Link href="https://discord.gg/3xdYjPvA2j" target="_blank" rel="noopener noreferrer">
                <Image src={theme === 'dark' ? DiscordWhiteIcon : DiscordBlackIcon} height={24} alt="Discord Link" />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/victorvkhuynh/" target="_blank" rel="noopener noreferrer">
                <Image src={theme === 'dark' ? InstagramWhiteIcon : InstagramBlackIcon} height={24} alt="Instagram Link" />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Victor-Huynh" target="_blank" rel="noopener noreferrer">
                <Image src={theme === 'dark' ? GitHubWhiteIcon : GitHubBlackIcon} height={24} alt="GitHub Link" />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/victor-huynh/" target="_blank" rel="noopener noreferrer">
                <Image src={theme === 'dark' ? LinkedInWhiteIcon : LinkedInBlueIcon} height={24} alt="LinkedIn Link" />
              </Link>
            </li>
            <li>
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle Theme</button>
            </li>
          </ul>
        </div>
      </footer>I
    </main>
  );
}