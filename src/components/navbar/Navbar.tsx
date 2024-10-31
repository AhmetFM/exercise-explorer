import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl container flex items-center justify-between sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link
        href="/#home"
        className="dark:invert flex items-center h-20 cursor-pointer"
      >
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
      </Link>
      <div className="hidden md:flex flex-1 justify-end items-center">
        <div className="mr-8 flex gap-4">
          <Link
            className="hover:scale-110 ease-in-out duration-200 underline underline-offset-[6px]"
            href="/admin"
          >
            Admin
          </Link>
          <Link
            className="hover:scale-110 ease-in-out duration-200"
            href="/workouts"
          >
            Workout Plans
          </Link>
          <Link
            className="hover:scale-110 ease-in-out duration-200"
            href="/#features"
          >
            Features
          </Link>
          <Link
            className="hover:scale-110 ease-in-out duration-200"
            href="/#about"
          >
            About
          </Link>
          <Link
            className="hover:scale-110 ease-in-out duration-200"
            href="/#contact"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4 md:ml-4">
        <ModeToggle />
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
