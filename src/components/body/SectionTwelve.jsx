import React from 'react'
import product from '/imgs/product.png'

export default function SectionTwelve() {
  return (
    <div className='flex justify-between items-center px-2 py-4 lg:py-0 md:px-20 xl:px-40 mt-10 bg-gray-100 px-8 rounded-2xl'>
        <section className='lg:w-1/2'>
            <h1 className='text-2xl font-bold'>Need help? We're here for you</h1>
            <p className=' mt-5 text-gray-600'>Our customer service are readily available to respond to your request</p>
            <div className='flex gap-4 mt-5 text-[14px] text-sky-700'>
              <a href="#">Chat with Us</a>
              <a href="#">Help Centre</a>
              <a href="#">Email</a>
              <a href="#">Whatsapp</a>
            </div>
        </section>
        <section className='hidden lg:flex'>
            <img src={product} alt=""  />
        </section>
    </div>
  )
}
