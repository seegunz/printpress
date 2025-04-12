import React from 'react'
import logo from '/logo.png'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  return (
    <div className='sticky top-0 bg-white z-1000  flex justify-between items-center py-8 px-2 lg:px-40 mt-5'>
      <div className='flex items-center gap-3'>
        <img src={logo} alt="PrintFactory" className='cursor-pointer' />
        <div className='hidden 2xl:flex'>
          <nav className='flex gap-3 font-semibold'>
            <a href="">Marketplace</a>
            <a href="" className='text-red-500'>Become a Reseller</a>
            <a href="">DSGNER</a>
          </nav>
        </div>
      </div>

      <div className='hidden md:flex items-center shadow-2xs rounded'>
        <span className='text-gray-300'><FaSearch /></span>
        <input type="text" placeholder='search for products'
          className='outline-none p-2'
        />
      </div>

      <nav className='flex gap-3 font-semibold items-center'>

        <a href='#' className='bg-sky-700 p-1 px-3 rounded text-white rounded-md cursor-pointer'>Dashboard</a>

        <div className='hidden md:flex gap-1 items-center cursor-pointer'>
          <IoCartOutline />
          <p>Cart</p>
        </div>

        <div className='hidden md:flex gap-1 items-center cursor-pointer'>
          <IoMdHelpCircleOutline />
          <p>Quick Help</p>
        </div>

        <div className='flex md:hidden text-2xl'>
          <GiHamburgerMenu />
        </div>

      </nav>

    </div>
  )
}
