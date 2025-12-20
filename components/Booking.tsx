'use client'
// import { Merienda } from 'next/font/google';
import Image from 'next/image'
import React, { useState } from 'react'

const Booking = () => {

    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [date, setDate] = useState('');
    // const [hour, setHour] = useState('');
    // const [min, setMin] = useState('');
    // const [meridiem, setMeridiem] = useState<'AM' | 'PM'>('AM');

    
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
        },
        {
            id: 4,
            name: 'Shemgelna Package',
            type: 'normal',
            includes: [
                'Makeup'
            ],
            price: 15000,
            background: '/images/glam.png',
            duration: '2-3 hr'
        },
        {
            id: 5,
            name: 'Normal Bridesmaids Package',
            type: 'normal',
            includes: [
                'Makeup'
            ],
            price: 7500,
            background: '/images/glam.png',
            duration: '2-3 hr'
        },
        {
            id: 6,
            name: 'Gold Bridesmaids Package',
            type: 'gold',
            includes: [
                'Makeup',
                'Hair Styling'
            ],
            price: 10000,
            background: '/images/glam.png',
            duration: '2-3 hr'
        },
        {
            id: 7,
            name: 'Simple Glam Package',
            type: 'glam',
            includes: [
                'Makeup'
            ],
            price: 65000,
            background: '/images/glam.png',
            duration: '2-3 hr'
        },
        {
            id: 8,
            name: 'Full Glam Package',
            type: 'gold',
            includes: [
                'glam'
            ],
            price: 75000,
            background: '/images/glam.png',
            duration: '2-3 hr'
        },
    ]

    const [currentPackage, setCurrentPackage] = useState(0);
    // const [quantity, setQuantity] = useState(1);


    const goNext = () => {
        if(currentPackage >= packages.length - 1) {
            setCurrentPackage(0);
            return;
        }
        setCurrentPackage(currentPackage + 1);
    } 
    const goBack = () => {
        if(currentPackage <= 0) {
            setCurrentPackage(packages.length - 1);
            return;
        }
        setCurrentPackage(currentPackage-1)
    } 

  return (
    <div className='relative px-10 bg-[#C19F98] text-black py-10'>
        <div className='flex justify-between'>
            <hr/>
                <h3 className='text-4xl md:text-6xl font-semibold text-center py-5'>Our Makeup Packages</h3>
            <hr/>
        </div>
        <div className='py-10'>
            <div className='w-full grid md:grid-cols-2 px-16'>
                <div className='w-90 h-90 relative'>
                    <Image
                        src='/images/p1.jpg'
                        alt='package image'
                        fill
                        // width={100}
                        // height={200}
                        className='h-full w-full object-cover mx-auto rounded-full'
                    />
                </div>
                <div className='w-full h-full text-sm bg-white rounded-full'>
                    {/* <Image
                        src={currentPackage.background}
                        alt='package image'
                        fill
                        // width={200}
                        // height={300}
                        className='object-contain mx-auto rounded-full w-full h-full'
                    /> */}
                    <div className='w-full h-full text-center space-y-2 text-md my-auto'>
                        <h3 className='text-center text-2xl font-bold'>{packages[currentPackage].name}</h3>
                        <p className='text-center'>Perfect for your wedding day — timeless beauty that lasts all day.</p>
                        <p>Includes</p>
                        <ul className='pl-3'>
                            {packages[currentPackage].includes.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                            
                        </ul>
                        <p>Price: {packages[currentPackage].price} <b>ETB</b> </p>
                        {/* <p>Price: 35000 <b>ETB</b></p> */}
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-between bottom-0 px-16 py-10'>
                <button onClick={goBack}>Previous</button>
                <button onClick={goNext}>Next</button>
            </div>
            
        </div>
    </div>
  )
}

export default Booking