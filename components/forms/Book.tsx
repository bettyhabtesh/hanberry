import React from 'react'




const Book = ({pkg} : {pkg: {
    id: number,
    name: string,
    type: string,
    includes: [
        string
    ],
    description: string,
    price: number,
    background: string,
    duration: string
}}) => {
    console.log('package selected: ', pkg)
  return (
    <div className='bg-gray-300 w-full h-full'>
        <div className='bg-gradient-to-br from-[#C19F98] to-[#ffffff] w-1/2 mx-auto'>
            <div>
                <h3 className='text-4xl font-bold'>Booking Form</h3>

                <h5 className='text-md font-light'>Package detail</h5>
                <h3></h3>
            </div>
            <div className=''>

            </div>
        </div>
    </div>
  )
}

export default Book