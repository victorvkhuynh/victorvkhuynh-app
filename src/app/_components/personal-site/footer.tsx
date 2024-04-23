/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import DiscordWhiteIcon from "src/assets/discord-white.svg";
import DiscordBlackIcon from "src/assets/discord-black.svg";
import InstagramBlackIcon from "src/assets/instagram-black.svg";
import InstagramWhiteIcon from "src/assets/instagram-white.svg";
import GitHubWhiteIcon from "src/assets/github-white.svg";
import GitHubBlackIcon from "src/assets/github-black.svg";
import LinkedInBlueIcon from "src/assets/linkedin-blue.png";
import LinkedInWhiteIcon from "src/assets/linkedin-white.png";
import MediumWhiteIcon from "src/assets/medium-white.png";
import MediumBlackIcon from "src/assets/medium-black.png";

import Switch from "@mui/material/Switch";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <br />
      <footer className="absolute bottom-0 left-0 w-full py-3">
        <div className="placeholder"></div>
        <div className="flex flex-col items-center">
          <ul className="flex gap-x-4">
            <li>
              <Link
                href="https://discord.gg/3xdYjPvA2j"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={theme === "dark" ? DiscordWhiteIcon : DiscordBlackIcon}
                  height={24}
                  alt="Discord Logo"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/victorvkhuynh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={
                    theme === "dark" ? InstagramWhiteIcon : InstagramBlackIcon
                  }
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
                <Image
                  src={theme === "dark" ? GitHubWhiteIcon : GitHubBlackIcon}
                  height={24}
                  alt="GitHub Logo"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/victorvkhuynh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={theme === "dark" ? LinkedInWhiteIcon : LinkedInBlueIcon}
                  height={24}
                  alt="LinkedIn Logo"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://medium.com/@victorvkhuynh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={theme === "dark" ? MediumWhiteIcon : MediumBlackIcon}
                  height={24}
                  alt="Medium Logo"
                />
              </Link>
            </li>
            <li>
              <Switch
                size="small"
                defaultChecked={theme === "dark"}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            </li>
          </ul>
        </div>
      </footer>
      <br />
    </>
  );
}
