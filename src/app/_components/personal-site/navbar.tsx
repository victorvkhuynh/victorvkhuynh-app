import VHLogo from "public/vh_logo.png";
import Image from "next/image";
import Link from "next/link";

// This assumes col-span 4 is the max width of the navbar
export default function NavBar() {
  return (
    <div className="mb-4 grid border-spacing-2 grid-cols-4 gap-4 overflow-hidden bg-primarylighter px-11 py-2">
      <div className="col-span-1 md:col-span-1">
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
      <div className="col-span-3 text-center text-xl drop-shadow-xl md:col-span-1 md:col-start-4">
        <Link href="/projects">
          <button className="bg-transparent min-h-full min-w-full rounded border border-secondarylight px-4 py-2 font-semibold text-secondarydark hover:font-extrabold">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
