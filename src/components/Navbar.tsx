import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex h-24 bg-white dark:bg-zinc-950 items-center justify-between px-4">
      <div className="dark:invert flex items-center ">
        <Image
          src="/logo.svg"
          alt="logo"
          width={48}
          height={48}
          className="w-12 h-12"
        />
        <span className="font-medium text-xl hidden lg:flex dark:text-black">
          ExerciseExplorer
        </span>
      </div>
      <div className="hidden md:flex flex-1 justify-end items-center">
        <div className="mr-8 flex gap-4">
          <Link href="/about">About</Link>
          <Link href="/about">Services</Link>
          <Link href="/about">Workout Plans</Link>
          <Link href="/about">Contact</Link>
        </div>
        <div className="dark:bg-slate-100 dark:text-zinc-950 bg-zinc-800 text-white px-3 py-2 rounded-lg">
          <Link href="/about">Login</Link>
        </div>
      </div>
      <div className="flex items-center gap-4 md:ml-4">
        <ModeToggle />
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
