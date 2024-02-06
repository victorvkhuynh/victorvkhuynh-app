import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

// import { CreatePost } from "~/app/_components/create-post";
// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";

export default async function HomePage() {
  return (
    <main className="bg-slate-500">
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <nav className="flex justify-between items-center h-full">
          <ul className="flex gap-x-6 text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        Victor Huynh
      </div>
    </main>
  );
}