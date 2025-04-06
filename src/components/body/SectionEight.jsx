import React from 'react'
import Section1 from './sections/Section1'
import product from '/imgs/product.png'

export default function SectionEight() {
  return (
    <div className='mt-40 '>
      <h1 className='text-center text-2xl md:text-4xl font-bold px-2'>Discover Best Products To Build Your Brand</h1>
      <div className='flex flex-wrap gap-5 justify-center mx-30 mt-5'>
        <Section1 img={product} title='Drinkware'/>
        <Section1 img={product} title='Business card'/>
        <Section1 img={product} title='T-shirts'/>
        <Section1 img={product} title='ID cards'/>
        <Section1 img={product} title='Notepads'/>
        <Section1 img={product} title='Tote bags'/>
        <Section1 img={product} title='Hoodies'/>
        <Section1 img={product} title='Rollup banner'/>
        <Section1 img={product} title='Glass signage'/>
        <Section1 img={product} title='Stickers'/>
      </div>
    </div>
  )
}
