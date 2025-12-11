// import Image from 'next/image'
import Link from 'next/link'
// import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#333333] text-white h-full flex flex-col'>
        <div className='grid gap-10 py-10 px-10'>
            <div className='grid md:grid-cols-4 pt-5'>
                <div className='col-span-1'>.</div>
                <div className='grid md:grid-cols-3 gap-5 col-span-3'>
                    <div>
                        <h3 className='text-3xl font-semibold'>Stay Connected to the future of Hanberry Beauty</h3>
                        <p className='text-sm text-white/70'>hami0935712362@gmail.com</p>
                    </div>
                    <div className='md:mx-auto'>
                        <h3 className='text-xl font-bold'>Discover</h3>
                        <ul className='text-sm py-2 text-white/70 space-y-2 group group-hover:text-[#D8A48F] hover:cursor-pointer'>
                            <li className='hover:text-[#E7C9B6]'>Home</li>
                            <li className='hover:text-[#E7C9B6]'>About</li>
                            <li className='hover:text-[#E7C9B6]'>Features</li>
                            <li className='hover:text-[#E7C9B6]'>Services</li>
                            <li className='hover:text-[#E7C9B6]'>Gallery</li>
                            <li className='hover:text-[#E7C9B6]'>Contact</li>
                        </ul>
                    </div>
                    <div className='md:mx-auto'>
                        <h3 className='text-xl font-bold'>Contact</h3>
                        <ul className='text-sm py-2 text-white/70 space-y-2 group group-hover:text-[#D8A48F] hover:cursor-pointer'>
                            <li className='hover:text-[#E7C9B6]'>+251 914671613 </li>
                            <li className='hover:text-[#E7C9B6]'>+251 93 571 2362</li>
                            <li className='hover:text-[#E7C9B6]'>Addis Ababa, Ethiopia</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className='w-full md:grid grid-cols-4 items-center'>
                <div className='col-span-1'>
                    <h3 className='text-lg font-semibold text-[#D8A48F]'>Hamneal Nebiyu - Artist</h3>
                    <p className='text-sm text-white/70'>Professional Makeup Artist | Bridal & Event Specialist Enhancing natural beauty with passion, precision, and care.</p>
                </div>
                <div className='col-span-3 '>
                    <div className='py-5'>
                        <h3 className='text-xl font-bold'>Social Media</h3>
                        <div>
                            <ul className='flex space-x-3 py-2'>
                                <li>Instagram</li>
                                <li>TikTok</li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-t-2 border-white/20 pt-5'>
                        <h3 className='text-xl font-bold'>BEAUTY</h3>
                        <h3 className='text-[3em] md:text-[12em] font-bold'>HANBERRY</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className='bottom-0 border-t-2 border-white/20'>
            <h3 className='text-sm font-light text-center py-3 text-white/90'>Made with 💖 by 
                <Link className='text-[#bda478ff]' href='https://t.me/betty_habtesh'> Bethelhem</Link> & 
                <Link className='text-[#bda478ff]' href='https://t.me/fruittedi'> Frehiwot</Link> | © 2025 HanBerry Beauty — All Rights Reserved.</h3>
        </div>
    </div>
  )
}

export default Footer