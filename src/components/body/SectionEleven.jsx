import React from 'react'

export default function SectionEleven() {
  return (
    <div className='flex flex-col md:flex-row justify-between 2xl:justify-around md:items-center mx-2 md:mx-20 2xl:mx-40 mt-10 bg-sky-700 text-white px-10 gap-y-10 2xl:px-40 py-10 md:py-24 rounded-4xl'>
        <section className='xl:w-1/2'>
            <h1 className='text-2xl lg:text-4xl font-semibold'>ready to level up your income?</h1>
            <h1 className='text-3xl lg:text-5xl font-bold'>become a reseller.</h1>
        </section>
        <section className='flex justify-end'>
            <button className='bg-red-500 w-40 py-4 border border-white rounded-2xl font-bold'>Start now</button>
        </section>
    </div>
  )
}
