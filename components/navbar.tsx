"use client";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* desktop menu */}
      <nav
        className={`hidden w-full md:flex items-center justify-between px-10 py-4 bg-white shadow-sm ${poppins.className}`}
      >
        {/* Left links with divider */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-14 text-l md:text-l font-light">
            <Link href="#home" className="hover:text-[#C9A34E] text-black transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#C9A34E] text-black transition-colors">
              About Me
            </Link>
            <Link href="#services" className="hover:text-[#C9A34E] text-black transition-colors">
              Services
            </Link>
          </div>
          {/* horizontal line directly below left links */}
          <div className="mt-4 mb-6 h-px bg-gray-300 w-150" aria-hidden="true" />
        </div>

        {/* Logo Center */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/HanBerry BEAUTY.png"
            alt="HanBerry Beauty"
            width={130}
            height={130}
            className="object-cover"
          />
        </div>

        {/* Right links + button with divider */}
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-12 font-light">
            <Link href="#contact" className="hover:text-[#C9A34E] text-black md:text-l transition-colors">
              Contact
            </Link>
            <button className="bg-[#C9A34E] text-white px-4 py-2 rounded-full hover:bg-[#b89240] md:text-lg transition-colors">
              Book Now
            </button>
          </div>
          {/* horizontal line directly below right links */}
          <div className="mt-4 mb-6 h-px bg-gray-300 w-150" aria-hidden="true" />
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={`w-full h-[5em] flex md:hidden items-center justify-between bg-white px-2 shadow-sm`}
      >
        {/* Left links with divider */}
        <button onClick={() => setOpenMenu(!openMenu)} className="items-start">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="200" viewBox="0 0 20 20"><path fill="#C6A04A" fillRule="evenodd" d="M2 8a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0-4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" clipRule="evenodd"/></svg>
        </button>

        {/* Logo Center */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/HanBerry BEAUTY.png"
            alt="HanBerry Beauty"
            width={110}
            height={120}
            className="object-cover"
          />
        </div>
        <button className="bg-[#C9A34E] text-white px-4 py-2 rounded-full hover:bg-[#b89240] text-sm md:text-lg transition-colors">
          Book Now
        </button> 
      </div>
      {
        openMenu && (
          <div className="w-full absolute z-20 bg-white rounded-b-lg">
            <div className="w-full grid gap-3 px-3 py-5 items-center  text-l md:text-l font-light">
              <Link href="#home" className="hover:text-[#C9A34E] text-black transition-colors">
                Home
              </Link>
              <Link href="#about" className="hover:text-[#C9A34E] text-black transition-colors">
                About Me
              </Link>
              <Link href="#services" className="hover:text-[#C9A34E] text-black transition-colors">
                Services
              </Link>
            </div>
          </div>
        )
      }
    </>
  );
}
