'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Book from './forms/Book';

const Booking = () => {

    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [date, setDate] = useState('');
    // const [hour, setHour] = useState('');
    // const [min, setMin] = useState('');
    // const [meridiem, setMeridiem] = useState<'AM' | 'PM'>('AM');

    const [openForm, setOpenForm] = useState(false);    

    
    const packages = [
        {
            id: 0, 
            name: 'Brides',
            types: [
                {
                    id: 1,
                    name: 'Normal Package',
                    type: 'normal',
                    includes: [
                        'Bridal Makeup'
                    ],
                    description: 'This package includes professional bridal makeup for a clean and elegant look. It is perfect for brides who want a simple yet beautiful finish.',
                    price: 30000,
                    background: '/images/glam.png',
                    duration: '2-3 hr'
                },
                {
                    id: 2,
                    name: 'Gold Package',
                    type: 'gold',
                    includes: [
                        'Dermaplaning', 'Hairstyling', 'Bridal Makeup'
                    ],
                    description: 'This package offers full bridal preparation including dermaplaning, hairstyling, and makeup. It gives a smooth, polished, and long-lasting bridal look.',
                    price: 35000,
                    background: '/images/gold.png',
                    duration: '2-3 hr'
                },
                {
                    id: 3,
                    name: 'Platinum Package',
                    type: 'platinum',
                    includes: [
                        'Dermaplaning', 'Hairstyling', 'Bridal Makeup', 'Retouch'
                    ],
                    description: 'This is a complete premium bridal package with skin prep, hairstyling, and makeup. A retouch is included to keep your look fresh throughout the event.',
                    price: 45000,
                    background: '/images/platinum.png',
                    duration: '2-3 hr'
                },
                {
                    id: 4,
                    name: 'Shemgelna Package',
                    type: 'shemgelna',
                    includes: [
                        'Makeup'
                    ],
                    description: 'This package provides makeup services suitable for traditional or special cultural events. It focuses on enhancing natural beauty with a neat and elegant finish.',
                    price: 15000,
                    background: '/images/glam.png',
                    duration: '2-3 hr'
                },
            ]
        },
        {
            id: 1,
            name: 'Bridesmaids',
            types: [
                {
                    id: 5,
                    name: 'Normal Bridesmaids Package',
                    type: 'normal',
                    includes: [
                        'Makeup'
                    ],
                    description: 'This package includes simple and elegant makeup for bridesmaids. It ensures a coordinated and natural look that complements the bride.',
                    price: 1000,
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
                    description: 'This package offers both makeup and hairstyling for bridesmaids. It creates a more refined and polished appearance for special occasions.',
                    price: 12000,
                    background: '/images/glam.png',
                    duration: '2-3 hr'
                },
                {
                    id: 7,
                    name: 'Platinum Bridesmaids Package',
                    type: 'platinum',
                    includes: [
                        'Makeup',
                        'Hair Styling',
                        'Retouch'
                    ],
                    description: 'This package offers makeup, retouch and hairstyling for bridesmaids. It creates a more refined and polished appearance for special occasions.',
                    price: 15000,
                    background: '/images/glam.png',
                    duration: '2-3 hr'
                },
            ]
        },
        {
            id: 2,
            name: 'Glam',
            types: [
                {
                    id: 7,
                    name: 'Simple Glam Package',
                    type: 'glam',
                    includes: [
                        'Makeup'
                    ],
                    description: 'This package delivers soft glam makeup with a clean and modern finish. It is ideal for clients who want a glamorous look without heavy styling.',
                    price: 65000,
                    background: '/images/glam.png',
                    duration: '2-3 hr'
                },
                {
                    id: 8,
                    name: 'Full Glam Package',
                    type: 'gold',
                    includes: [
                        'Glam'
                    ],
                    description: 'This package provides a bold and full glam makeup experience. It is perfect for clients who want a dramatic, high-impact, and camera-ready look.',
                    price: 75000,
                    background: '/images/glam.png',
                    duration: '2-3 hr'
                },
            ]
        },
    ]


    const [currentPackage, setCurrentPackage] = useState(0);
    const [booked, setBooked] = useState(0);
    // const [tab, setTab] = useState(packages[currentPackage].id)
    // const [quantity, setQuantity] = useState(1);

    // const goNext = () => {
    //     if(currentPackage >= packages.length - 1) {
    //         setCurrentPackage(0);
    //         return;
    //     }
    //     setCurrentPackage(currentPackage + 1);
    // } 

    // const goBack = () => {
    //     if(currentPackage <= 0) {
    //         setCurrentPackage(packages.length - 1);
    //         return;
    //     }
    //     setCurrentPackage(currentPackage-1)
    // } 



  return (
    <>
        <div className='relative px-5 md:px-10 text-[#333333] bg-white py-16'>
            <div className='relative py-10'>
                <div className='w-full grid md:grid-cols-3 md:px-16 gap-10'>
                    <div className='relative'>
                        <div className='w-full min-h-52 h-full relative p-4 md:p-6 z-40'>
                            <Image
                                src='/images/b11.PNG'
                                alt='package image'
                                fill
                                // width={100}
                                // height={200}
                                className='h-full w-full object-cover mx-auto'
                            />
                            <div className='absolute border-4 border-white z-50 w-full h-full'>.</div>
                        </div>
                        <div className='absolute z-50'>
                            <h3 className='uppercase bg-[#1E1E1E] text-white px-5 py-4'>Packages & Prices</h3>
                        </div>
                    </div>

                    <div className='w-full h-full col-span-2 relative text-sm rounded-lg my-auto space-y-4'>
                        <h3 className='text-3xl md:text-4xl text-start py-5 text-gray-500 font-light'>Because being beautiful should never harm you</h3>
                            <h3 className='text-3xl font-bold'>{packages[currentPackage].name} Package</h3>
                            <div className='flex justify-between items-center'>
                                {packages.map((p) => (
                                    <button 
                                        key={p.id}
                                        style={{}}
                                        className={`font-bold text-md md:text-xl border-b-2 cursor-pointer ${currentPackage === p.id ? 'border-[#D8A48F]' : 'border-none'}`}
                                        onClick={() => {setCurrentPackage(p.id)}}
                                    >{p.name}</button>
                                ))}
                            </div>
                            <div className='grid md:grid-cols-2 gap-5 md:auto-rows-fr sm:space-y-5'>
                                {packages[currentPackage].types?.map(
                                    (type) => (
                                        <div key={type.id} className='flex flex-col h-full border border-[1E1E1E] rounded-md px-3 py-5'>
                                            <h3 className='text-3xl font-bold pb-3'>{type.name}</h3>
                                            <p className=''>{type.description} </p>
                                            {/* <p className='text-center'>Perfect for your wedding day — timeless beauty that lasts all day.</p> */}
                                            <p className=''>Includes</p>
                                            <ul className='pl-3'>
                                                {type.includes.map((item) => (
                                                    <li key={item} className='flex items-center gap-3'> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#000000"/></svg>{item}</li>
                                                ))}
                                            </ul>
                                            <p className=''>Duration: {type.duration} </p>
                                            <p className=''>Price: {type.price} <b>ETB</b> </p>
                                            <button 
                                                className='mt-auto w-full bg-[#1E1E1E] rounded-md px-10 py-2 font-semibold border border-[#1E1E1E] text-white hover:bg-transparent hover:text-[#1E1E1E] cursor-pointer'
                                                onClick={() => { 
                                                    setOpenForm(!openForm);
                                                    setBooked(type.id);
                                                }}
                                            >Book now</button>   
                                        </div> 
                                    )
                                )}
                            </div>
                            
                        {/* </div> */}
                        {/* <div className='w-full flex justify-between py-10 mt-10 my-auto'>
                            <button className='cursor-pointer' onClick={goBack}>Previous</button>
                            <div className='flex space-x-3'>
                                {packages.map((pkg) => (
                                    <div key={pkg.id} className='w-4 h-4 rounded-full' style={{backgroundColor: currentPackage === pkg.id ? '#D8A48F' : '#D9D9D9'}}></div>
                                ))}
                            </div>
                            <button className='cursor-pointer' onClick={goNext}>Next</button>
                        </div> */}
                        
                    </div>
                </div>
                
                
            </div>
            
        </div>
        {openForm && (<Book pkg={packages[currentPackage].types[booked]}/>)}
    </>
  )
}

export default Booking