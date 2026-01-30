'use client'
import Masonry from '@/components/Masonry';
import Link from 'next/link';
import React from 'react'

const Gallery = () => {

    const allImages = [
  {
      id: "1000",
      img: "/images/g19.JPG",
      height: 850,
      type: '',
    },
    {
      id: "1",
      img: "/images/g1.JPG",
      height: 750,
      type: '',
    },
    {
      id: "18",
      img: "/images/g24.PNG",
      height: 550,
      type: '',
    },
    {
      id: "200",
      img: "/images/g21.JPG",
      height: 750,
      type: '',
    },
     {
      id: "2000",
      img: "/images/g17.JPG",
      height: 850,
      type: '',
    },
    {
      id: "2",
      img: "/images/g2.JPG",
      height: 550,
      type: '',
    },
    {
      id: "3",
      img: "/images/g3.PNG",
      height: 1100,
      type: '',
    },
    {
      id: "300",
      img: "/images/g18.PNG",
      height: 800,
      type: '',
    },
    {
      id: "4",
      img: "/images/g4.PNG",
      height: 750,
      type: '',
    },
    {
      id: "400",
      img: "/images/g22.PNG",
      height: 650,
      type: '',
    },
    {
      id: "5",
      img: "/images/g5.JPG",
      height: 700,
      type: '',
    },
    {
      id: "6",
      img: "/images/g6.JPG",
      height: 800,
      type: '',
    },
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
    {
      id: "9",
      img: "/images/g9.JPG",
      height: 650,
      type: '',
    },
    {
      id: "10",
      img: "/images/g10.JPG",
      height: 750,
      type: '',
    },
    {
      id: "11",
      img: "/images/g11.PNG",
      height: 650,
      type: '',
    },
    {
      id: "12", // tinu
      img: "/images/g12.JPG",
      height: 850,
      type: '',
    },
    {
      id: "13",
      img: "/images/g13.PNG",
      height: 850,
      type: '',
    },
    {
      id: "14",
      img: "/images/g14.JPG",
      height: 1050,
      type: '',
    },
    {
      id: "15",
      img: "/images/g15.JPG",
      height: 950,
      type: '',
    },
    {
      id: "16",
      img: "/images/g16.JPG",
      height: 1100,
      type: '',
    },
    {
      id: "17",
      img: "/images/g17.PNG",
      height: 800,
      type: '',
    },
    {
      id: "19",
      img: "/images/g25.JPG",
      height: 1000,
      type: '',
    },
    {
      id: "20",
      img: "/images/g26.JPG",
      height: 1100,
      type: '',
    },
    {
      id: "21",
      img: "/images/g28.JPG",
      height: 1000,
      type: '',
    },
    {
      id: "22",
      img: "/images/g30.JPG",
      height: 700,
      type: '',
    },
];
  return (
    <div className='bg-white text-black pt-10 pb-12 md:pb-16 lg:pb-20'>
        <div className='relative w-full md:h-fit'>
            <div className='mx-auto flex items-center justify-center'>
                <Link href='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
                    </svg>
                </Link>
                <h3 className="text-center text-3xl md:text-4xl font-bold mb-8 py-10">  Gallery</h3>
            </div>
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
    </div>
  )
}

export default Gallery