import Link from "next/link";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-zinc-300 dark:bg-zinc-950 w-full h-[192px] gap-4 z-50 overflow-hidden">
      <div className="container flex items-center justify-center relative">
        <div className="bg-zinc-800 hidden md:block max-w-3xl w-[80%] absolute top-12 border-b border-b-zinc-950 dark:border-b-white"></div>
        <div className="mt-8 z-10 bg-zinc-300 dark:bg-zinc-950 w-[360px] h-[40px] flex flex-col gap-6">
          {/* LINKS */}
          <div className="flex gap-4 justify-center items-center">
            <Link
              href="https://www.instagram.com/ahmeetmeric/"
              className="hover:bg-zinc-100 dark:hover:bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center duration-300"
            >
              <FaInstagram
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ahmet-furkan-meric/"
              className="hover:bg-zinc-100 dark:hover:bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center duration-300"
            >
              <FaLinkedin
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </Link>
            <Link
              href="https://github.com/AhmetFM"
              className="hover:bg-zinc-100 dark:hover:bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center duration-300"
            >
              <FaGithub width={24} height={24} className="w-[24px] h-[24px]" />
            </Link>
            <Link
              href="mailto:afurkanmeric@gmail.com"
              className="hover:bg-zinc-100 dark:hover:bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center duration-300"
            >
              <IoIosMail width={24} height={24} className="w-[24px] h-[24px]" />
            </Link>
            <Link
              href="https://meric-three.vercel.app/"
              className="hover:bg-zinc-100 dark:hover:bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center duration-300"
            >
              <TbWorld width={24} height={24} className="w-[24px] h-[24px]" />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 pb-4">
            <Link
              href="/"
              className="dark:invert flex items-center cursor-pointer "
            >
              <Image
                src="/logo.svg"
                alt="logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-medium text-lg hidden md:flex dark:text-black">
                ExerciseExplorer
              </span>
            </Link>
            <span className="text-sm font-light text-gray-900 dark:text-gray-200">
              © 2024 Created by Ahmet Furkan Meriç
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
