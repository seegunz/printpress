import React from 'react'
import Section10 from './sections/Section10'
import product from '/imgs/product.png'

export default function SectionTen() {
  return (
    <div className='mx-50 mt-10'>
      <span className='bg-red-500 px-2 rounded-2xl py-1 text-white'>What Our Users Say</span>
      <h1 className='text-4xl font-bold'>Recent Reviews</h1>
      <section className='mt-10 flex gap-5'>
        <Section10 
            testimony='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, 
            nihil porro nisi quisquam non Atque, nesciunt ut!'
            img={product}
            name='John Doe'
            occupation='Store Owner'
        />
        <Section10 
            testimony='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, 
            nihil porro nisi quisquam non Atque, nesciunt ut!'
            img={product}
            name='John Doe'
            occupation='Store Owner'
        />
        <Section10 
            testimony='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, 
            nihil porro nisi quisquam non Atque, nesciunt ut!'
            img={product}
            name='John Doe'
            occupation='Store Owner'
        />
      </section>
    </div>
  )
}
