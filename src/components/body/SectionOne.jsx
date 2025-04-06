import React from 'react'
import Section1 from './sections/Section1'
import product1 from '/imgs/product.png'

export default function SectionOne() {
  return (
    <div className='mt-20 '>
        <h1 className='text-center text-2xl md:text-4xl font-bold px-2'>
            Explore Top-Quality Prints For Your Brand
        </h1>
        <br />
        <section className='flex gap-5 justify-center mx-30'>
            <Section1 img={product1} title='Flyer Design'/>
            <Section1 img={product1} title='Business Card'/>
            <Section1 img={product1} title='Car Branding'/>
            <Section1 img={product1} title='Rollup Banner'/>
            <Section1 img={product1} title='Gift Box'/>
        </section>
    </div>
  )
}
