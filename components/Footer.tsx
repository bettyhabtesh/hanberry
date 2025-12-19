// import Image from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
// import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#333333] text-white h-full flex flex-col relative'>
        <div className='grid lg:grid-cols-6 gap-5 px-10 py-20'>
            <div className='col-span-2 relative'>
                <Image
                    src='/women.png'
                    alt='Women with a crown illustration'
                    fill
                    className='h-full w-full object-contain mx-auto'
                />
            </div>
            <div className='grid md:grid-cols-3 gap-10 col-span-4'>
                <div className='space-y-3'>
                    <h3 className='text-3xl font-semibold'>Stay Connected to the future of Hanberry Beauty</h3>
                    <p className='text-sm text-white/70'>hami0935712362@gmail.com</p>
                </div>
                <div className='md:mx-auto space-y-3'>
                    <h3 className='text-xl font-bold'>Discover</h3>
                    <ul className='text-sm py-2 text-white/70 space-y-1 group group-hover:text-[#D8A48F] hover:cursor-pointer'>
                        <li className='hover:text-[#E7C9B6]'>Home</li>
                        <li className='hover:text-[#E7C9B6]'>About</li>
                        <li className='hover:text-[#E7C9B6]'>Services</li>
                        <li className='hover:text-[#E7C9B6]'>Gallery</li>
                        <li className='hover:text-[#E7C9B6]'>Contact</li>
                    </ul>
                </div>
                <div className='md:mx-auto space-y-3'>
                    <h3 className='text-xl font-bold'>Contact</h3>
                    <ul className='text-sm py-2 text-white/70 space-y-1 group group-hover:text-[#D8A48F] hover:cursor-pointer'>
                        <li className='hover:text-[#E7C9B6]'>+251 914671613 </li>
                        <li className='hover:text-[#E7C9B6]'>+251 93 571 2362</li>
                        <li className='hover:text-[#E7C9B6]'>Addis Ababa, Ethiopia</li>
                    </ul>
                </div>
                <div className='w-full md:grid items-center'>
                    <div className='space-y-8'>
                        <div className='w-full md:w-1/2 space-y-3'>
                            <h3 className='text-xl font-semibold text-[#D8A48F]'>Hamneal Nebiyu - Artist</h3>
                            <p className='text-sm text-white/80 font-light'>Professional Makeup Artist | Bridal & Event Specialist Enhancing natural beauty with passion, precision, and care.</p>
                        </div>
                        <div className=''>
                            <h3 className='text-xl font-bold'>Socials</h3>
                            <div>
                                <ul className='flex space-x-3 py-2 text-sm text-white/80'>
                                    <li className='hover:text-[#E7C9B6]'>Instagram </li>
                                    <li>|</li>
                                    <li className='hover:text-[#E7C9B6]'> TikTok</li>    
                                    <li>|</li>
                                    <li className='hover:text-[#E7C9B6]'>Facebook</li>
                                </ul>
                            </div>
                        </div>
                        <div className='border-t-2 border-white/20 pt-5 mb-0'>
                            <h3 className='text-xl text-white/50 font-bold'>BEAUTY</h3>
                            <h3 className='text-[3em] md:text-[8em] xl:text-[11em] font-bold'>HANBERRY</h3>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
            
        <div className='bottom-0 border-t-2 border-white/20 px-5 md:px-0'>
            <h3 className='text-sm font-light text-center py-3 text-white/90'>Made with 💖 by 
                <Link className='text-[#bda478ff]' href='https://t.me/betty_habtesh'> Bethelhem</Link> & 
                <Link className='text-[#bda478ff]' href='https://t.me/fruittedi'> Frehiwot</Link> | © 2025 HanBerry Beauty — All Rights Reserved.</h3>
        </div>
    </div>
  )
}

export default Footer