import Link from "next/link";

export default function Projects() {
  return (
    <>
      <main className="grid border-spacing-2 gap-4 md:grid-cols-4">
        {/* Grid Headers */}
        <div className="text-center">
          <p className="font-semibold underline underline-offset-4">Projects</p>
        </div>
        <div className="col-span-2">
          <p className="font-semibold underline underline-offset-4">
            Description
          </p>
        </div>
        <div>
          <p className="font-semibold underline underline-offset-4">
            Application Link
          </p>
        </div>
        {/* Project 1 */}
        <div className="text-center">
          <p className="">Liar&apos;s Dice</p>
        </div>
        <div className="col-span-2">
          <p className="">My multiplayer take on the popular deception game</p>
        </div>
        <div>
          <Link className="text-contrast" href="/liars-dice">
            <span>Work in progress</span>
          </Link>
        </div>
        {/* Project 2 */}
        <div className="text-center">
          <p className="">Flatflat</p>
        </div>
        <div className="col-span-2">
          <p>My multiplayer take on a DDR game, inspired by MapleStory</p>
        </div>
        <div>
          <span>Not Started</span>
        </div>
        {/* Project 3 */}
        <div className="text-center">
          <p className="">Neetcode</p>
        </div>
        <div className="col-span-2">
          <p>This is for tracking progress on Neetcode problems</p>
        </div>
        <div>
          <span>Not Started</span>
        </div>
        {/* Project 4 */}
        <div className="text-center">
          <p className="">Restaurant Website</p>
        </div>
        <div className="col-span-2">
          <p>Need a website? Send me an e-mail and we can have a chat!</p>
        </div>
        <div>
          <Link href="/restaurants" className="text-contrast">
            <span>Work in progress</span>
          </Link>
        </div>
      </main>
    </>
  );
}
