/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";
import VHLogo from "public/vh_logo.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramBlackIcon from "src/assets/instagram-black.svg";
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
      <footer className="bottom-4 left-0 grid w-full grid-cols-4 md:absolute">
        <div className="col-span-1 flex justify-center">
          <Image src={VHLogo} alt="Victor Huynh logo" width={40} height={40} />
        </div>
        <div className="col-span-2 flex flex-col items-center">
          <ul className="flex gap-x-4">
            <li>Follow us on Social Media!</li>
            <li>
              <Link href="" target="_blank" rel="noopener noreferrer">
                <Image
                  src={InstagramBlackIcon}
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
        <div className="col-span-1">&copy; VVKH - All Rights Reserved</div>
      </footer>
      <br />
    </>
  );
}
