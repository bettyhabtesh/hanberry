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

    const handlePackageChange = (id: number) => {
        setCurrentPackage(id)
        setTypeIndex(0)
    }
    const [typeIndex, setTypeIndex] = useState(0)
    const currentTypes = packages[currentPackage].types
    const visibleTypes = currentTypes.slice(typeIndex, typeIndex + 2)
    const hasMultiplePages = currentTypes.length > 2
    const totalPages = Math.ceil(currentTypes.length / 2)
    const currentPage = Math.floor(typeIndex / 2)

  return (
    <>
      <div className="relative px-5 md:px-10 text-[#333333] bg-white py-16">
        <div className="relative py-10">
          <div className="w-full grid md:grid-cols-3 md:px-16 gap-10">
            <div className="relative w-full bg-red-500">
              <div className="w-90 min-h-52 h-full relative p-4 md:p-6 z-40">
                <Image
                  src="/images/b11.PNG"
                  alt="package image"
                  fill
                  className="object-cover"
                />
                <div className="absolute border-4 border-white z-50 w-full h-full" />
              </div>
              <div className="absolute z-50">
                <h3 className="uppercase bg-[#1E1E1E] text-white px-5 py-4 text-2xl">
                  Packages & Prices
                </h3>
              </div>
            </div>

            <div className="relative col-span-2 space-y-4">
              <h3 className="text-3xl md:text-4xl py-5 text-gray-500 font-light">
                Because being beautiful should never harm you
              </h3>

              <div className="flex space-x-5">
                {packages.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePackageChange(p.id)}
                    className={`${
                      currentPackage === p.id
                        ? 'bg-[#1E1E1E] text-white rounded-xl px-5 py-2'
                        : ''
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              <h3 className="text-3xl font-bold mt-10">
                {packages[currentPackage].name} Package
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-fr">
                {visibleTypes.map((type, i) => (
                  <div
                    key={type.id}
                    className="flex flex-col h-full border border-[#1E1E1E] rounded-md px-3 py-5"
                  >
                    <h3 className="text-3xl font-bold pb-3">{type.name}</h3>
                    <p>{type.description}</p>

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

                    <button
                      className="mt-auto w-full bg-[#1E1E1E] text-white rounded-md py-2"
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
                <div className="flex justify-between items-center py-10">
                  <button
                    onClick={() =>
                      setTypeIndex(
                        typeIndex === 0
                          ? (totalPages - 1) * 2
                          : typeIndex - 2
                      )
                    }
                  >
                    Previous
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
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {openForm && <Book pkg={packages[currentPackage].types[booked]} />}
    </>
  )
}

export default Booking