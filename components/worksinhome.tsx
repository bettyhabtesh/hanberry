"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image';
import Masonry from './Masonry';

const categories = ['All', 'Bridal', 'Commercial', 'Everyday', 'Creative'];

// Generate image paths from g1 to g12 with correct extensions


const allImages = [
  {
      id: "1",
      img: "/images/g1.JPG",
      height: 600,
    },
    {
      id: "2",
      img: "/images/g2.JPG",
      height: 450,
    },
    {
      id: "3",
      img: "/images/g3.PNG",
      height: 600,
    },
    {
      id: "4",
      img: "/images/g4.PNG",
      height: 450,
    },
    {
      id: "5",
      img: "/images/g5.JPG",
      height: 500,
    },
    {
      id: "6",
      img: "/images/g6.JPG",
      height: 350,
    },
    {
      id: "7",
      img: "/images/g7.JPG",
      height: 850,
    },
    {
      id: "8",
      img: "/images/g8.PNG",
      height: 650,
    },
    {
      id: "9",
      img: "/images/g9.JPG",
      height: 600,
    },
    {
      id: "10",
      img: "/images/g10.JPG",
      height: 350,
    },
    {
      id: "11",
      img: "/images/g11.PNG",
      height: 600,
    },
    {
      id: "12",
      img: "/images/g12.JPG",
      height: 600,
    },
];

// Uniform height for grid layout
// const imageHeight = 500;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WorksInHome() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="w-full h-fit bg-white font-poppins py-12 md:py-16 lg:py-20 relative">
      <div className="container mx-auto relative">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-12"
        >
          {/* Title - Elegant Script Font */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 md:mb-10 text-black"
            // style={{ 
            //   fontFamily: 'Georgia, serif',
            //   fontStyle: 'italic',
            //   fontWeight: 400
            // }}
          >
            Works
          </h1>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 pb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 md:px-8 md:py-3 rounded-md font-medium text-sm md:text-base transition-all ${
                  activeCategory === category
                    ? 'bg-[#E7C9B6] text-black'
                    : 'bg-white text-black border border-gray-200 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          
        </motion.div>
        <div className='relative w-full md:h-screen'>
          {/* <div className='absolute z-50 bg-gradient-to-b from-transparent to w-full h-full'>.</div> */}
          <Masonry
            items={allImages}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>

        {/* View More Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center relative bottom-0"
        >
          <button className="bg-[#E7C9B6] text-black px-8 py-3 md:px-12 md:py-4 rounded-md font-semibold text-base md:text-lg hover:bg-[#D4B5A0] transition-colors ">
            View More
          </button>
        </motion.div>
      </div>
    </div>
  );
}

