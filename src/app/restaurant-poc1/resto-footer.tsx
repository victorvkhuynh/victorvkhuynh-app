/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";
import VHLogo from "public/vh_logo.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramGradientIcon from "src/assets/instagram-gradient.png";
import FaceBookBlackIcon from "src/assets/facebook-black.png";

export default function RestoFooter() {
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
      <div className="absolute bottom-0 left-0 w-full">
        <hr />
        <footer className="bg-lightercontrast bottom-0 left-0 grid grid-cols-4 p-2">
          <div className="col-span-1">
            <Image
              src={VHLogo}
              alt="Victor Huynh logo"
              width={32}
              height={32}
            />
          </div>
          <div className="col-span-2 flex flex-col items-center ">
            <ul className="flex h-full gap-x-4">
              <li className="text-lg font-semibold">
                Follow us on Social Media!
              </li>
              <li>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={InstagramGradientIcon}
                    height={24}
                    alt="Instagram Logo"
                  />
                </Link>
              </li>
              <li>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={FaceBookBlackIcon}
                    height={24}
                    alt="FaceBook Logo"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 flex h-max flex-col items-end object-center pr-4 text-sm">
            &copy; VVKH - All Rights Reserved
          </div>
        </footer>
      </div>
    </>
  );
}
