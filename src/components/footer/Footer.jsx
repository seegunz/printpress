import React from 'react'
import logo  from '/logo.png'

export default function Footer() {
  return (
    <footer>
    <div className='flex justify-between pt-12 px-2 lg:px-40'>
      <section className='flex flex-col gap-y-3 w-40'>
        <h1 className='font-semibold'>Legal Info</h1>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Return Policy</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Privacy Policy</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Terms & Condition</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>FAQs</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Payment Terms</a>
      </section>
      <section className='flex flex-col gap-y-3 w-'>
        <h1 className='font-semibold'>Quick Links</h1>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>About Us</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Logo Bizkit</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Blogs</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Our Clients</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'> How it Works</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'> Contact Us</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'> Request A Quote</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'> Track Your Order</a>
      </section>
      <section className='flex flex-col gap-y-3'>
        <h1 className='font-semibold'>Our Services</h1>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Printing</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Design </a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Join Us</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Customer Loyalty Package</a>
      </section>
      <section className='hidden md:flex flex-col gap-y-3'>
        <h1 className='font-semibold'>Partners</h1>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Afa Sports</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Amrod </a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Kobo Fashion</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Nack</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Ruff 'n' Tumble</a>
        <a href="#" className='text-[#484848] hover:text-black hover:font-semibold hover:text-[15px]'>Sipsonlevon</a>
      </section>
    </div>
    <div className='pb-12'>
      <hr className='mt-10 border-gray-300 mx-2 lg:mx-40'/>
      <div className='flex justify-between items-center px-2 md:px-20 lg:px-40 mt-10'>
        <img src={logo} alt="logo" className='w-32 md:w-40'/>
        <p className='text-14px md:text-[18px]  font-semibold'>
          &copy; {new Date().getFullYear()} <a href="/">PrintfactoryNG</a>. All rights reserved.
        </p>

      </div>
    </div>
    </footer>
  )
}
