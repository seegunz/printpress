import React from 'react'
import product from '/imgs/product.png'

export default function SectionEleven() {
  return (
    <div className='flex justify-between items-center mx-40 mt-10 bg-sky-700 text-white px-10 py-10 rounded-2xl'>
        <section className='w-1/2'>
            <h1 className='text-3xl font-semibold'>ready to level up your income?</h1>
            <h1 className='text-4xl font-bold'>become a reseller.</h1>
        </section>
        <section>
            <button className='bg-red-500 px-3 border border-white rounded-md'>Start now</button>
        </section>
    </div>
  )
}
