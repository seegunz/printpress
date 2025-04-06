import React from 'react'
import product from '/imgs/product.png'

export default function SectionNine() {
  return (
    <div className='flex justify-between items-center mx-40 mt-10 bg-gray-200 px-8 py-2 rounded-2xl'>
        <section className='w-1/2'>
            <h1 className='text-4xl font-bold'>take your brand everywhere</h1>
            <p className='w-4/5 mt-5'>because we cannot envisage a world where promotional product go unbranded</p>
        </section>
        <section>
            <img src={product} alt="" width={200}/>
        </section>
    </div>
  )
}
