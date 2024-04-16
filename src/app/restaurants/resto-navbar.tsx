import VHLogo from "public/vh_logo.png";
import Image from "next/image";
import Link from "next/link";

// This assumes col-span 4 is the max width of the navbar
export default function RestoNavbar() {
  return (
    <div className="mx-11 mt-4 grid border-spacing-2 grid-cols-4 gap-4 overflow-hidden">
      <div className="col-span-4 md:col-span-1">
        <Link href="/">
          <button className="w-50 h-50 bg-transparent hover:text-white px-4 py-2 font-semibold drop-shadow-lg">
            <Image
              src={VHLogo}
              alt="Victor Huynh logo"
              width={50}
              height={50}
            />
          </button>
        </Link>
      </div>
      <div className="col-span-4 md:col-span-2">
        <ul className="flex w-full justify-items-center gap-4">
          <li>Hours</li>
          <li>Location</li>
          <li>Reservations</li>
          <li>Catering</li>
          <li>Our Story</li>
          <li>Deals</li>
        </ul>
      </div>
      <div className="col-span-4 md:col-span-1">
        <Link href="/menu">
          <button className="bg-transparent min-h-full min-w-full rounded border border-accent px-4 py-2 font-semibold text-basic hover:bg-contrast dark:border-light dark:text-light">
            Menu
          </button>
        </Link>
      </div>
    </div>
  );
}
