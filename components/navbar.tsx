"use client";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function Navbar() {
  return (
    <nav
      className={`flex items-center justify-between px-12 py-4 bg-white pl-28 shadow-sm ${poppins.className}`}
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
          width={200}
          height={130}
          className="object-contain"
        />
      </div>

      {/* Right links + button with divider */}
      <div className="flex flex-col items-end pr-28">
        <div className="flex items-center gap-12 font-light">
          <Link href="#contact" className="hover:text-[#C9A34E] text-black md:text-l transition-colors">
            Contact
          </Link>
          <button className="bg-[#C9A34E] text-white px-4 py-2 rounded-full hover:bg-[#b89240] md:text-xl transition-colors">
            Book Now
          </button>
        </div>
        {/* horizontal line directly below right links */}
        <div className="mt-4 mb-6 h-px bg-gray-300 w-150" aria-hidden="true" />
      </div>
    </nav>
  );
}
