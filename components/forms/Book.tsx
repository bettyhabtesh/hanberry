import React, { useState } from 'react'




const Book = ({pkg} : {pkg: {
    id: number,
    name: string,
    type: string,
    includes: string[],
    description: string,
    price: number,
    background: string,
    duration: string
}}) => {

    console.log('package selected: ', pkg)

    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = () => {}
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center overflow-scroll bg-black/50 p-5'>
        <div className='bg-gradient-to-br from-[#C19F98] to-[#ffffff] text-black w-full md:w-3/5 mx-auto my-auto rounded-xl grid md:grid-cols-2 gap-10 p-5 md:p-10'>
            <div>
                <h3 className='text-2xl md:text-4xl font-bold'>Booking Form</h3>

                <h5 className='text-md font-light mt-10'>Package detail</h5>
                <h3 className='text-xl md:text-3xl font-bold pb-3'>{pkg.name}</h3>
                <p className=''>{pkg.description} </p>
                {/* <p className='text-center'>Perfect for your wedding day — timeless beauty that lasts all day.</p> */}
                <p className=''>Includes</p>
                <ul className='pl-3'>
                    {pkg.includes.map((item) => (
                        <li key={item} className='flex items-center gap-3'> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#000000"/></svg>{item}</li>
                    ))}
                </ul>
                <p className=''>Duration: {pkg.duration} </p>
                <p className=''>Price: {pkg.price} <b>ETB</b> </p>

            </div>
            <div className=' p-5 rounded-lg bg-white shadow-2xl space-y-2'>
                <h3 className='text-xl mb-5'>Fill in the form below</h3>
                <form className='space-y-5'>
                    <div>
                        <h3>Full Name</h3>
                        <input
                            type='text'
                            placeholder='Enter your full name'
                            className='border-b-2 border-gray-500 focus:outline-none w-full pb-2 mb-5'
                        />
                    </div>
                    <div>
                        <h3>Phone Number</h3>
                        <div className='flex items-center gap-2'>
                            <h3>+251</h3>
                            <input
                                type='text'
                                placeholder=''
                                className='border-b-2 border-gray-500 focus:outline-none w-full pb-2 mb-5'
                            />
                        </div>
                    </div>
                    <div>
                        <h3>Pick your date</h3>
                        <input
                            type='date'
                            className='border-b-2 border-gray-500 focus:outline-none w-full pb-2 mb-5'
                        />
                    </div>
                    <div>
                        <h3>Person Quantity</h3>
                        <div className='flex items-center'>
                            <button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000000" d="M17 13H7v-2h10m2-8H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/></svg></button>
                            <div className='bg-gray-300 w-10 h-10 rounded-lg flex items-center justify-center'>{quantity}</div>
                            <button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000000" d="M17 13H7v-2h10m2-8H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/></svg></button>
                        </div>
                    </div>
                    <button type='submit' className='bg-[#1E1E1E] text-white py-2 w-full rounded-lg'>Book Now</button>
                    <button className='bg-black/10 text-black py-2 w-full rounded-lg'>Cancel</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Book