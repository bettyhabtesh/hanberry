"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const categories = ['All', 'Bridal', 'Commercial', 'Everyday', 'Creative'];

// Generate image paths from g1 to g12 with correct extensions
const allImages = [
  '/images/g1.JPG',
  '/images/g2.JPG',
  '/images/g3.PNG',
  '/images/g4.PNG',
  '/images/g5.JPG',
  '/images/g6.JPG',
  '/images/g7.JPG',
  '/images/g8.PNG',
  '/images/g9.JPG',
  '/images/g10.JPG',
  '/images/g11.PNG',
  '/images/g12.JPG',
];

// Uniform height for grid layout
const imageHeight = 500;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WorksInHome() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="w-full bg-white font-poppins py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
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
            style={{ 
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400
            }}
          >
            Works
          </h1>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
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

        {/* Image Gallery - 4 Column Grid Layout */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {allImages.map((imageSrc, index) => {
              // Determine if this is in the bottom row (last 4 images - indices 8-11)
              const isBottomRow = index >= 8;
              
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.05 }}
                  className="relative"
                >
                  <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div 
                      className="relative w-full"
                      style={{ height: `${imageHeight}px` }}
                    >
                      <Image
                        src={imageSrc}
                        alt={`Work ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                      {/* White gradient overlay for bottom row */}
                      {isBottomRow && (
                        <div 
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0) 70%)'
                          }}
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* View More Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center"
        >
          <button className="bg-[#E7C9B6] text-black px-8 py-3 md:px-12 md:py-4 rounded-md font-semibold text-base md:text-lg hover:bg-[#D4B5A0] transition-colors">
            View More
          </button>
        </motion.div>
      </div>
    </div>
  );
}

