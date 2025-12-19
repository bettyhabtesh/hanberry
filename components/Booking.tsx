'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Booking = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const packages = [
        {
            id: 1,
            name: 'Normal Package',
            type: 'normal',
            includes: [
                'Bridal Makeup'
            ],
            price: 30000,
            background: '/images/glam.png',
            duration: '2-3 hr'
        },
        {
            id: 2,
            name: 'Gold package',
            type: 'gold',
            includes: [
                'Dermaplaning', 'Hairstyling', 'Bridal Makeup'
            ],
            price: 35000,
            background: '/images/gold.png',
            duration: '2-3 hr'
        },
        {
            id: 3,
            name: 'Platinum package',
            type: 'platinum',
            includes: [
                'Dermaplaning', 'Hairstyling', 'Bridal Makeup', 'Retouch'
            ],
            price: 45000,
            background: '/images/platinum.png',
            duration: '2-3 hr'
        }
    ]

    const [currentPackage, setCurrentPackage] = useState(packages[0]);
    const [timePeriod, setTimePeriod] = useState<'AM' | 'PM'>('AM');
    const [quantity, setQuantity] = useState(1);
  return (
    <div className='relative px-10 bg-[#E0BFB8] text-black py-10'>
        <div className='flex justify-between'>
            <hr/>
                <h3 className='text-4xl font-semibold text-center py-5'>Our Makeup packages</h3>
            <hr/>
        </div>
        <div className='grid grid-cols-2 py-10'>
            <div className='relative'>
                <div className='relative h-94'>
                    <div className='w-64 h- h-64 absolute'>
                        <Image
                            src='/images/p1.jpg'
                            alt='package image'
                            fill
                            // width={100}
                            // height={200}
                            className='h-full w-full object-cover mx-auto rounded-full'
                        />
                    </div>
                    <div className='relative rounded-full px-10 py-16 text-sm w-1/2  top-24 left-28 object-center' style={{backgroundImage: `url(${currentPackage.background})`}}>
                        {/* <Image
                            src={currentPackage.background}
                            alt='package image'
                            fill
                            // width={200}
                            // height={300}
                            className='object-contain mx-auto rounded-full w-full h-full'
                        /> */}
                        <div className='w-full text-center object-contain' >
                            <h3 className='text-center text-2xl font-bold'>{currentPackage.name}</h3>
                            <p className='text-sm text-center'>Perfect for your wedding day — timeless beauty that lasts all day.</p>
                            <p>Includes</p>
                            <ul className='pl-3'>
                                {currentPackage.includes.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                                
                            </ul>
                            <p>Price: {currentPackage.price} <b>ETB</b> </p>
                            {/* <p>Price: 35000 <b>ETB</b></p> */}
                        </div>
                    </div>
                </div>
                <div className='w-full relative flex justify-between bottom-0'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
            <div className='px-16'>
                {/* <form className='space-y-5'> */}
                    <h3 className='text-3xl font-semibold pb-3'>Book your appointment</h3>
                    <div className='grid gap-2'>
                        <label className='font-semibold'>Full Name</label>
                        <input
                            type='text'
                            name='fullname'
                            // onChange={(e) => }
                            placeholder='Enter your full name'
                            className='bg-white rounded-4xl px-5 py-3 placeholder:text-[#B49E83] text-sm'
                        />
                    </div>
                    <div className='grid gap-2'>
                        <label className='font-semibold'>Phone</label>
                        <input
                            type='phone'
                            name='phone'
                            placeholder='Enter your phone number'
                            className='bg-white rounded-4xl px-5 py-3 placeholder:text-[#B49E83] text-sm'
                        />
                    </div>
                    <div className='flex justify-between'>
                        <div className='grid gap-2'>
                            <label className='font-semibold'>Pick your date</label>
                            <input
                                type='date'
                                name='date'
                                placeholder='Enter your full name'
                                className='bg-white rounded-4xl px-5 py-3 placeholder:text-[#B49E83] text-sm'
                            />
                        </div>
                        <div className='flex items-center space-x-5'>
                            <div className='grid gap-2'>
                                <label className='font-semibold'>Pick your time</label>
                                <div className='flex justify-between '>
                                    <div>
                                        <input
                                            type='number'
                                            placeholder='24'
                                            className='bg-white w-16 rounded-xl pl-4 pr-2 py-3 placeholder:text-[#B49E83] text-sm'
                                        />
                                        <h3 className='text-center pt-2 text-sm'>Hour</h3>
                                    </div>
                                    <span className='font-bold px-3 flex items-start text-2xl'>:</span>
                                    <div>
                                        <input
                                            type='number'
                                            placeholder='24'
                                            className='bg-white w-16 rounded-xl pl-4 pr-2 py-3 placeholder:text-[#B49E83] text-sm'
                                        />
                                        <h3 className='text-center pt-2 text-sm'>Min</h3>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='space-x-3'>
                                <button 
                                    onClick={() => setTimePeriod('AM')}
                                    className={`${timePeriod === 'AM' ? 'bg-[#D8A48F]' : 'bg-white'} hover:bg-[#D8A48F] px-2 py-1 rounded-lg text-sm`}>AM</button>
                                <button
                                    onClick={() => setTimePeriod('PM')} 
                                    className={`${timePeriod === 'PM' ? 'bg-[#D8A48F]' : 'bg-white'} hover:bg-[#D8A48F] px-2 py-1 rounded-lg text-sm`}>PM</button>
                            </div>
                        </div>
                    </div>
                    <div className='grid gap-2'>
                        <label className='font-semibold'>Person Quantity</label>
                        <div className='space-x-5'>
                            <button disabled={quantity < 0} className='bg-white w-10 h-10 rounded-md text-xl font-bold disabled:bg-gray-300'> - </button>
                            <input
                                type='number'
                                placeholder='1'
                                name='quantity'
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className='bg-white w-16 rounded-xl pl-4 pr-2 py-3 placeholder:text-[#B49E83] text-sm'
                            />
                            <button className='bg-white w-10 h-10 rounded-md text-xl font-bold'> + </button>
                        </div>
                    </div>
                    <button className='w-full bg-[#D8A48F] text-black font-bold rounded-4xl py-3 my-5'>Book Now</button>
                {/* </form> */}
            </div>
        </div>
    </div>
  )
}

export default Booking