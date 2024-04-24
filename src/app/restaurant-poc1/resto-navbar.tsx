import VHLogo from "public/vh_logo.png";
import Image from "next/image";
import Link from "next/link";

// This assumes col-span 4 is the max width of the navbar
export default function RestoNavbar() {
  return (
    <div className="z-20 bg-[#A79277]">
      <div className="mx-11 grid border-spacing-2 grid-cols-4 gap-4 overflow-hidden py-4 ">
        <div className="col-span-4 md:col-span-1">
          <Link href="/">
            <button className="w-50 h-50 bg-transparent hover:text-white px-4 py-2 font-semibold text-[#FFF2E1] drop-shadow-lg">
              <Image
                src={VHLogo}
                alt="Victor Huynh logo"
                width={50}
                height={50}
              />
            </button>
          </Link>
        </div>
        <div className="col-span-4 flex flex-col items-center md:col-span-2">
          <br />
          <ul className="flex gap-4 text-xl ">
            <Link href="/restaurant-poc1/" className="hover:font-bold">
              Home
            </Link>
            <Link href="/restaurant-poc1/story" className="hover:font-bold">
              Our Story
            </Link>
            <Link href="/restaurant-poc1/hours" className="hover:font-bold">
              Hours & Location
            </Link>
            <Link href="/restaurant-poc1/deals" className="hover:font-bold">
              Deals
            </Link>
            <Link href="/restaurant-poc1/menu" className="hover:font-bold">
              Menu
            </Link>
            {/* <li className="hover:font-bold">Location</li> */}
            {/* <li className="hover:font-bold">Reservations</li> */}
            {/* <li className="hover:font-bold">Catering</li> */}
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1">
          <Link href="/restaurant-poc1/">
            <button className="bg-transparent min-h-full min-w-full rounded-full border bg-[#FFF2E1] px-4  py-2 text-[#A79277] hover:bg-[#EAD8C0]">
              <span className="text-2xl font-semibold">Order Now</span>
            </button>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}
