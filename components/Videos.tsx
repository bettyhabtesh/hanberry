import React from 'react'
import PromoVideo from './Video'
import Link from 'next/link'

const Videos = () => {
  return (
    <div className='w-full py-16 bg-white text-black px-10'>
        <div className='grid md:grid-cols-2 gap-10 py-10'>
            <div className='space-y-5'>
                <h3 className='text-4xl md:text-5xl font-bold pt-16'>From consultation to the final touch, every look is crafted with care and precision.</h3>
                <p className='text-sm md:text-md text-black/50'>A glimpse into our studio, showcasing real transformations, premium products, and the artistry behind every look.</p>
                <Link 
                    className="mt-5 w-fit bg-[#1E1E1E] text-white rounded-md py-2 px-10 cursor-pointer border-2 border-[#1E1E1E] hover:text-[#1E1E1E] hover:bg-white"
                    href='/#booking'>Book Now</Link>
            </div>
            <PromoVideo videoId='video1_yeolnx'/>  
            
            {/* video2_npsrxa */}
        </div>
    </div>
  )
}

export default Videos