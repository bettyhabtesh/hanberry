"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Poppins, Italianno } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'], display: 'swap' });
const italianno = Italianno({ subsets: ['latin'], weight: ['400'], display: 'swap' });

// Simple typing animation: renders characters with staggered opacity/translateY
function TypingText({ text, className = '', delay = 0, charDelay = 0.03 }: { text: string; className?: string; delay?: number; charDelay?: number }) {
  // Preserve spaces by converting them to non-breaking spaces so they render as characters
  const letters = text.split('').map((c) => (c === ' ' ? '\u00A0' : c));
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: charDelay,
        delayChildren: delay,
      },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.span
      aria-hidden
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, i) => (
        <motion.span key={i} variants={child} className="inline-block">
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

function MakeupIntro() {
  return (
    <div className="w-full bg-[#E7C9B6] flex flex-col lg:flex-row">
      {/* Left Image */}
      <div className="w-full lg:w-1/2 h-screen overflow-hidden relative">
        <Image src="/images/w1.jpg" alt="Makeup model" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>

      {/* Right Side - Text and Image */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* Text Area */}
        <div className="p-6 lg:p-16 flex-1 lg:max-w-4xl">
          <p className="text-3xl lg:text-4xl mb-3 text-[#8B7A5D]">
            <TypingText text="welcome" className={` italic ${italianno.className}`} delay={0.1} charDelay={0.14} />
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            <TypingText text="DIVE INTO THE WORLD OF MAKEUP BEAUTY" className={`text-4xl lg:text-5xl font-bold text-black leading-tight ${poppins.className}`} delay={0.2} charDelay={0.12} />
          </h1>
          <p className="text-lg lg:text-xl text-gray-800 max-w-2xl">
            “At Hanberry Beauty Lounge, beauty is more than makeup — it’s confidence, self-expression, and artistry.” – Hamneal N.
          </p>
        </div>

        {/* Bottom Right Image centered */}
        <div className="w-full h-9/12 flex items-center justify-center overflow-hidden  relative">
          <Image src="/images/w2.jpg" alt="Closeup eyes" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
        </div>
      </div>
    </div>
  );
}

export default MakeupIntro;