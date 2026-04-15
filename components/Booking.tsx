'use client'
import React, { useMemo, useState, useEffect } from 'react'
import Image from 'next/image';
import Book from './forms/Book';

type BookingCategory = { id: number; name: string; sort_order: number; active: boolean };
type BookingPackage = { id: number; category_id: number; name: string; type: string; description: string; price: number; duration: string; optional_note: string | null; includes: string[]; image_url: string | null; sort_order: number; active: boolean };

const Booking = () => {
    const [openForm, setOpenForm] = useState(false);
    const [booked, setBooked] = useState(0);
    const [currentPackage, setCurrentPackage] = useState(0);
    const [typeIndex, setTypeIndex] = useState(0);
    const [heading, setHeading] = useState('Packages & Prices');
    const [subheading, setSubheading] = useState('Because being beautiful should never harm you');
    const [categories, setCategories] = useState<BookingCategory[]>([]);
    const [allPackages, setAllPackages] = useState<BookingPackage[]>([]);

    useEffect(() => {
      fetch('/api/public/booking').then((r) => r.json()).then((data) => {
        if (data?.content) {
          setHeading(data.content.heading || heading);
          setSubheading(data.content.subheading || subheading);
        }
        setCategories(Array.isArray(data?.categories) ? data.categories : []);
        setAllPackages(Array.isArray(data?.packages) ? data.packages : []);
      }).catch(() => {
        setCategories([]);
        setAllPackages([]);
      });
    }, []);

    const grouped = useMemo(() => categories.map((cat) => ({ ...cat, types: allPackages.filter((pkg) => pkg.category_id === cat.id) })), [categories, allPackages]);

    const handlePackageChange = (index: number) => {
        setCurrentPackage(index)
        setTypeIndex(0)
    }

    if (!grouped.length) {
      return <div id='booking' className='bg-white py-16 text-center text-black'>Booking packages will be available soon.</div>;
    }

    const currentTypes = grouped[currentPackage]?.types || []
    const visibleTypes = currentTypes.slice(typeIndex, typeIndex + 2)
    const hasMultiplePages = currentTypes.length > 2
    const totalPages = Math.ceil(currentTypes.length / 2)
    const currentPage = Math.floor(typeIndex / 2);

  return (
    <>
      <div id='booking' className=" text-black bg-white py-16">
        <div className="py-10 px-5 md:px-10">
          <div className="w-full grid xl:grid-cols-3 md:px-16 gap-5 md:gap-16">
            <div className="w-full ">
              <div className="w-80 md:w-90 lg:w-full min-h-52 h-full relative p-2 md:p-6 z-40">
                <Image
                  src="/images/b11.PNG"
                  alt="package image"
                  fill
                  className="object-cover"
                />
                <div className="absolute border-4 border-white z-50 w-full h-full" />
              </div>
              <div className="absolute z-50">
                <h3 style={{fontFamily: 'salvager'}} className=" bg-black text-white px-5 py-4 text-3xl">{heading}</h3>
              </div>
            </div>

            <div className="relative col-span-2 space-y-4 md:px-0 mt-10 md:mt-0 z-50">
              <h3 style={{fontFamily: 'salvager'}} className="text-4xl md:text-6xl py-5">{subheading}</h3>

              <div className="flex space-x-5 flex-wrap">
                {grouped.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => handlePackageChange(idx)}
                    className={`${currentPackage === idx ? 'bg-black text-white px-5 py-2 md:py-3' : ''}`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              <h3 className="text-3xl font-bold mt-10">{grouped[currentPackage]?.name} Packages</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-5">
                {visibleTypes.map((type, i) => (
                  <div key={type.id} className="flex flex-col justify-between h-full border border-black/30 rounded-md px-3 py-5">
                    <div>
                      <h3 className="text-3xl font-semibold pb-3">{type.name}</h3>
                      <p className='text-sm'>{type.description}</p>
                      <p>Includes</p>
                      <ul className="pl-3">
                        {type.includes.map((item) => (<li key={item} className="flex gap-3">● {item}</li>))}
                      </ul>
                      <p>Duration: {type.duration}</p>
                      <p>Price: {type.price} <b>ETB</b></p>
                      {type.optional_note ? <p className='text-black/50 text-sm text-center py-5'>{type.optional_note}</p> : '' }
                    </div>
                    <button className="my-2 relative bottom-0 w-full bg-black text-white py-2 md:py-3 cursor-pointer border-2 border-black hover:text-black hover:bg-white" onClick={() => { setOpenForm(true); setBooked(typeIndex + i); }}>
                      Book now
                    </button>
                  </div>
                ))}
              </div>

              {hasMultiplePages && (
                <div className="flex justify-between items-center py-10 text-sm">
                  <button onClick={() => setTypeIndex(typeIndex === 0 ? (totalPages - 1) * 2 : typeIndex - 2)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                  </button>
                  <div className="flex space-x-3">
                    {Array.from({ length: totalPages }).map((_, i) => (<div key={i} className="w-4 h-4 rounded-full" style={{ backgroundColor: i === currentPage ? '#D8A48F' : '#D9D9D9' }} />))}
                  </div>
                  <button onClick={() => setTypeIndex(typeIndex + 2 >= currentTypes.length ? 0 : typeIndex + 2)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {openForm && currentTypes[booked] ? <Book pkg={{
        id: currentTypes[booked].id,
        name: currentTypes[booked].name,
        type: currentTypes[booked].type,
        includes: currentTypes[booked].includes,
        description: currentTypes[booked].description,
        price: currentTypes[booked].price,
        background: currentTypes[booked].image_url || '/images/glam.png',
        duration: currentTypes[booked].duration,
      }} onClose={() => setOpenForm(false)} onSuccess={() => setOpenForm(false)} /> : null}
    </>
  )
}

export default Booking
