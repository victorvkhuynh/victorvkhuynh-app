/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DiscordBlackIcon from "src/assets/discord-black.svg";
import InstagramBlackIcon from "src/assets/instagram-black.svg";
import GitHubBlackIcon from "src/assets/github-black.svg";
import LinkedInBlueIcon from "src/assets/linkedin-blue.png";
import MediumBlackIcon from "src/assets/medium-black.png";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <br />
      <footer className="sticky bottom-0 left-0 w-full bg-primarylighter py-3 md:absolute">
        <div className="placeholder"></div>
        <div className="flex flex-col items-center">
          <ul className="flex gap-x-4">
            <li>
              <Link
                href="https://discord.gg/3xdYjPvA2j"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={DiscordBlackIcon} height={24} alt="Discord Logo" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/victorvkhuynh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={InstagramBlackIcon}
                  height={24}
                  alt="Instagram Logo"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/victorvkhuynh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={GitHubBlackIcon} height={24} alt="GitHub Logo" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/victorvkhuynh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={LinkedInBlueIcon} height={24} alt="LinkedIn Logo" />
              </Link>
            </li>
            <li>
              <Link
                href="https://medium.com/@victorvkhuynh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={MediumBlackIcon} height={24} alt="Medium Logo" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <br />
    </>
  );
}
