import React from 'react'
import Section1 from './sections/Section1'
import banner from '/imgs/sectioni/banner.png'
import car from '/imgs/sectioni/car.png'
import card from '/imgs/sectioni/card.png'
import box from '/imgs/sectioni/box.png'
import flyer from '/imgs/sectioni/flyer.png'

export default function SectionOne() {
  return (
    <div className='mt-40 '>
        <h1 className='text-center text-3xl text-[#484848] md:text-5xl font-bold px-2'>
            Explore Top-Quality Prints For Your Brand
        </h1>
        <br />
        <section className='flex justify-center flex-wrap gap-x-5'>
            <Section1 img={flyer} title='Flyer Design' size='hover:w-96'/>
            <Section1 img={card} title='Business Card' size='hover:w-96'/>
            <Section1 img={car} title='Car Branding' size='hover:w-96'/>
            <Section1 img={banner} title='Rollup Banner' size='hover:h-60'/>
            <Section1 img={box} title='Gift Box' size='hover:w-96'/>
        </section>
    </div>
  )
}
