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
                        'Bridal Makeup', 'Consultation'
                    ],
                    description: 'This package includes professional bridal makeup for a clean and elegant look. It is perfect for brides who want a simple yet beautiful finish.',
                    price: 30000,
                    background: '/images/glam.png',
                    duration: '1:30 - 2 hr',
                    optional: null
                },
                {
                    id: 2,
                    name: 'Gold Package',
                    type: 'gold',
                    includes: [
                        'Dermaplaning', 'Hairstyling', 'Bridal Makeup', 'Consultation'
                    ],
                    description: 'This package offers full bridal preparation including dermaplaning, hairstyling, and makeup. It gives a smooth, polished, and long-lasting bridal look.',
                    price: 35000,
                    background: '/images/gold.png',
                    duration: '3-4 hr',
                    optional: null
                },
                {
                    id: 3,
                    name: 'Platinum Package',
                    type: 'platinum',
                    includes: [
                        'Dermaplaning', 'Hairstyling', 'Bridal Makeup', 'Retouch', 'Consultation'
                    ],
                    description: 'This is a complete premium bridal package with skin prep, hairstyling, and makeup. A retouch is included to keep your look fresh throughout the event.',
                    price: 45000,
                    background: '/images/platinum.png',
                    duration: '3-4 hr',
                    optional: null
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
                    duration: '1:30 - 2 hr',
                    optional: null
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
                    price: 10000,
                    background: '/images/glam.png',
                    duration: '1:30 - 2 hr',
                    optional: null
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
                    duration: '1:30 - 2 hr',
                    optional: null
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
                    duration: '1:30 - 2 hr',
                    optional: null
                },
            ]
        },
        {
            id: 2,
            name: 'Glam',
            types: [
                {
                    id: 7,
                    name: 'Soft Glam Package',
                    type: 'glam',
                    includes: [
                        'Makeup',
                    ],
                    description: 'This package delivers soft glam makeup with a clean and modern finish. It is ideal for clients who want a glamorous look without heavy styling.',
                    price: 8500,
                    background: '/images/glam.png',
                    duration: '1:30 - 2 hr',
                    optional: 'Hair styling is available upon request and will incur an additional fee ranging from 2,500 to 3,000 ETB.'
                },
                {
                    id: 8,
                    name: 'Full Glam Package',
                    type: 'glam',
                    includes: [
                        'Makeup',
                    ],
                    description: 'This package provides a bold and full glam makeup experience. It is perfect for clients who want a dramatic, high-impact, and camera-ready look.',
                    price: 10000,
                    background: '/images/glam.png',
                    duration: '1:30 - 2 hr',
                    optional: 'Hair styling is available upon request and will incur an additional fee ranging from 2,500 to 3,000 ETB.'
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

    const handlePackageChange = (id: number) => {
        setCurrentPackage(id)
        setTypeIndex(0)
    }
    const [typeIndex, setTypeIndex] = useState(0)
    const currentTypes = packages[currentPackage].types
    const visibleTypes = currentTypes.slice(typeIndex, typeIndex + 2)
    const hasMultiplePages = currentTypes.length > 2
    const totalPages = Math.ceil(currentTypes.length / 2)
    const currentPage = Math.floor(typeIndex / 2);


  return (
    <>
      <div id='booking' className=" text-black bg-white py-16">
        <div className="py-10 px-5 md:px-10">
          <div className="w-full grid xl:grid-cols-3 md:px-16 gap-5">
            <div className="w-full ">
              <div className="w-80 md:w-90 min-h-52 h-full relative p-2 md:p-6 z-40">
                <Image
                  src="/images/b11.PNG"
                  alt="package image"
                  fill
                  className="object-cover"
                />
                <div className="absolute border-4 border-white z-50 w-full h-full" />
              </div>
              <div className="absolute z-50">
                <h3 style={{fontFamily: 'salvager'}} className=" bg-black text-white px-5 py-4 text-3xl">
                  Packages & Prices
                </h3>
              </div>
            </div>

            <div className="relative col-span-2 space-y-4 md:px-0 mt-10 md:mt-0 z-50">
              <h3 style={{fontFamily: 'salvager'}} className="text-4xl md:text-6xl py-5">
                Because being beautiful should never harm you
              </h3>

              <div className="flex space-x-5">
                {packages.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePackageChange(p.id)}
                    className={`${
                      currentPackage === p.id
                        ? 'bg-black text-white px-5 py-2 md:py-3'
                        : ''
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              <h3 className="text-3xl font-bold mt-10">
                {packages[currentPackage].name} Packages
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-5">
                {visibleTypes.map((type, i) => (
                  <div
                    key={type.id}
                    className="flex flex-col justify-between h-full border border-black/30 rounded-md px-3 py-5"
                  >
                    <div>
                      <h3 className="text-3xl font-semibold pb-3">{type.name}</h3>
                      <p className='text-sm'>{type.description}</p>

                      <p>Includes</p>
                      <ul className="pl-3">
                        {type.includes.map((item) => (
                          <li key={item} className="flex gap-3">
                            ● {item}
                          </li>
                        ))}
                      </ul>

                      <p>Duration: {type.duration}</p>
                      <p>Price: {type.price} <b>ETB</b></p>
                      {type?.optional ? <p className='text-black/50 text-sm text-center py-5'> {type.optional} </p> : '' }
                    </div>
                    <button
                      className="my-2 relative bottom-0 w-full bg-black text-white py-2 md:py-3 cursor-pointer border-2 border-black hover:text-black hover:bg-white"
                      onClick={() => {
                        setOpenForm(true)
                        setBooked(typeIndex + i)
                      }}
                    >
                      Book now
                    </button>
                  </div>
                ))}
              </div>

              {hasMultiplePages && (
                <div className="flex justify-between items-center py-10 text-sm">
                  <button
                    onClick={() =>
                      setTypeIndex(
                        typeIndex === 0
                          ? (totalPages - 1) * 2
                          : typeIndex - 2
                      )
                    }
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                  </button>

                  <div className="flex space-x-3">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full"
                        style={{
                          backgroundColor:
                            i === currentPage ? '#D8A48F' : '#D9D9D9',
                        }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setTypeIndex(
                        typeIndex + 2 >= currentTypes.length
                          ? 0
                          : typeIndex + 2
                      )
                    }
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {openForm && <Book 
                      pkg={packages[currentPackage].types[booked]} 
                      onClose={() => setOpenForm(false)}
                      onSuccess={() => {
                        setOpenForm(false)
                      }}/>}

      
    </>
  )
}

export default Booking