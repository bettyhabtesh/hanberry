import React from 'react'

const Successful = ({pkge, name, email, phone, date, quantity, onClose}: {pkge: {
    id: number,
    name: string,
    type: string,
    includes: string[],
    description: string,
    price: number,
    background: string,
    duration: string
}, name: string, email: string | null, phone: string, date: string, quantity: number, onClose: () => void}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center overflow-scroll bg-black/50 p-5'>
        <div style={{backgroundImage: 'url(/summary-background.jpg)'}} className='text-black bg-cover md:w-4/5 mx-auto my-auto rounded-xl grid md:grid-cols-2 gap-10 p-5 md:px-10 py-16'>
            <div className='text-center my-16'>
                <h3 className='text-3xl font-bold font-serif'>Booking Successful!</h3>

                {/* <h3 className='text-3xl font-bold font-serif'>Your makeup session has been successfully booked</h3>
                <h4 className=''>You will hear from us shortly</h4> */}

                <div className='w-full grid grid-cols-2 gap-10 text-start'>
                    <div className='border-r-2 border-gray-400'>
                        <div>
                            <h3>{name}</h3>
                            <h4 className='text-sm text-gray-500'>Full Name</h4>
                        </div>
                        <div>
                            <h3>+251 {phone}</h3>
                            <h4 className='text-sm text-gray-500'>Phone</h4>
                        </div>
                        {email && (<div>
                            <h3>{email}</h3>
                            <h4 className='text-sm text-gray-500'>Email</h4>
                        </div>)}
                        <div>
                            <h3>{quantity}</h3>
                            <h4 className='text-sm text-gray-500'>Person Quantity</h4>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>{pkge.name}</h3>
                        <div className='space-y-3'>
                            <p className=''>{pkge.description} </p>
                            {/* <p className='text-center'>Perfect for your wedding day — timeless beauty that lasts all day.</p> */}
                            <p className=''>Includes</p>
                            <ul className='pl-3'>
                                {pkge.includes.map((item) => (
                                    <li key={item} className='flex items-center gap-3'> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#000000"/></svg>{item}</li>
                                ))}
                            </ul>
                            <p className=''>Duration: {pkge.duration} </p>
                            <p className=''>Price: {pkge.price} <b>ETB</b> </p>
                        </div>
                        <button onClick={onClose} className='bg-[#1E1E1E] text-white py-2 w-full rounded-lg'>Close</button>
                    </div>
                </div>


            </div>
        </div>

    </div>
  )
}

export default Successful