"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image';
import Masonry from './Masonry';
import Link from 'next/link';

const categories = ['All', 'Bridal', 'Glam'];

const allImages = [
  {
      id: "1000",
      img: "/images/g19.JPG",
      height: 850,
      type: '',
    },
    // {
    //   id: "1",
    //   img: "/images/g1.JPG",
    //   height: 550,
    //   type: '',
    // },
    {
      id: "200",
      img: "/images/g21.JPG",
      height: 650,
      type: '',
    },
    {
      id: "2",
      img: "/images/o5.JPG",
      height: 850,
      type: '',
    },
    {
      id: "3",
      img: "/images/g3.PNG",
      height: 1100,
      type: '',
    },
    // {
    //   id: "4",
    //   img: "/images/g4.PNG",
    //   height: 450,
    //   type: '',
    // },
    {
      id: "400",
      img: "/images/g22.PNG",
      height: 650,
      type: '',
    },
    {
      id: "5",
      img: "/images/o9.PNG",
      height: 850,
      type: '',
    },
    // {
    //   id: "6",
    //   img: "/images/g6.JPG",
    //   height: 800,
    //   type: '',
    // },
    {
      id: "7",
      img: "/images/g7.JPG",
      height: 1000,
      type: '',
    },
    {
      id: "8",
      img: "/images/g8.PNG",
      height: 1050,
      type: '',
    },
    // {
    //   id: "9",
    //   img: "/images/g9.JPG",
    //   height: 650,
    //   type: '',
    // },
    {
      id: "10",
      img: "/images/o6.JPG",
      height: 850,
      type: '',
    },
    // {
    //   id: "11",
    //   img: "/images/g11.PNG",
    //   height: 650,
    //   type: '',
    // },
    {
      id: "12", // tinu
      img: "/images/g12.JPG",
      height: 550,
      type: '',
    },
     {
      id: "120", // tinu
      img: "/images/o4.JPG",
      height: 450,
      type: '',
    },
    // {
    //   id: "13",
    //   img: "/images/g13.PNG",
    //   height: 850,
    //   type: '',
    // },
    // {
    //   id: "14",
    //   img: "/images/g14.JPG",
    //   height: 1050,
    //   type: '',
    // },
    // {
    //   id: "15",
    //   img: "/images/g15.JPG",
    //   height: 550,
    //   type: '',
    // },
    // {
    //   id: "16",
    //   img: "/images/g16.JPG",
    //   height: 500,
    //   type: '',
    // },
    // {
    //   id: "17",
    //   img: "/images/g17.PNG",
    //   height: 300,
    //   type: '',
    // },
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
    <div id='works' className="w-full h-fit bg-white font-poppins py-12 md:py-24 lg:py-24 relative">
      <div className="container mx-auto relative">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-start mb-8 md:mb-12 px-4 md:px-16"
        >
          {/* Title - Elegant Script Font */}
          <h1 
            style={{fontFamily: 'salvager'}}
            className="text-4xl md:text-6xl mb-3 md:mb-5 text-black"
            // style={{ 
            //   fontFamily: 'Georgia, serif',
            //   fontStyle: 'italic',
            //   fontWeight: 400
            // }}
          >
            Elegant & Luxury Makeup Works
          </h1>
          <p className="text-black text-md">Explore a curated selection of makeup looks, each crafted to enhance natural beauty and personal style.</p>

          {/* Category Filters */}
          {/* <div className="flex flex-wrap justify-center gap-3 md:gap-4 pb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 md:px-8 md:py-3 rounded-md font-medium text-sm md:text-base transition-all ${
                  activeCategory === category
                    ? 'bg-[#1E1E1E] text-white'
                    : 'bg-white text-black border border-gray-200 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div> */}
          
          
        </motion.div>
        <div className='relative w-full md:h-fit'>
          <div className='absolute z-40 bg-gradient-to-b from-transparent via-transparent to-white w-full h-full'>.</div>
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
          <Link href="/gallery" className="bg-black border border-black text-white px-8 py-2 md:px-12 md:py-3 text-base md:text-lg hover:bg-white hover:text-black transition-colors ">
            View More
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

