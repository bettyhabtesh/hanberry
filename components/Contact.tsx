import Image from 'next/image'
// import React from 'react'

const Contact = () => {
  return (
    <div className='relative w-full md:h-screen grid md:grid-cols-2 gap-5 bg-white text-black px-5 md:px-16'>
        <div className='my-auto'>
            <h3 className='text-4xl font-bold'>Get in Touch, Gorgeous</h3>
            <p className='text-sm text-[#2E2E2E]/70 font-light'>She is just a message away! Tell her about your occasion, your favorite style, or ask anything — She’ll get back to you as soon as possible. Let’s make your beauty dreams come true.</p>

            <form className='py-8 space-y-5 md:w-2/3'>
              <div className='flex flex-col space-y-2'>
                <label className='font-bold'>Email</label>
                <input 
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Enter your email here'
                  className='bg-[#E0BFB8]/20 rounded-4xl px-5 py-3 placeholder:text-[#B49E83] text-sm'
                />
              </div>
              <div className='flex flex-col space-y-2'>
                <label className='font-bold'>Message</label>
                <textarea 
                  id='message'
                  name='message'
                  placeholder='Write your message here'
                  className='bg-[#E0BFB8]/20 rounded-4xl px-5 py-3 h-48 placeholder:text-[#B49E83] text-sm'
                ></textarea>
              </div>
              <button
                className='bg-[#D8A48F]  w-full rounded-4xl py-3 font-semibold text-black/90'
              >
                Send Message
              </button>
            </form>
        </div>
        <div className='flex items-center justify-center'>
            <Image
              className='h-full w-full object-cover mx-auto'
              src='/contact_us.png'
              alt='Black Woman'
              width={600}
              height={300}
              // fill
            />
        </div>
    </div>
  )
}

export default Contact;