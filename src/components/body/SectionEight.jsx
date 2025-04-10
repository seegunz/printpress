import React from 'react'
import Section1 from './sections/Section1'
import bag from '/imgs/sectionviii/bag.png'
import banner from '/imgs/sectionviii/banner.png'
import bottle from '/imgs/sectionviii/bottle.png'
import card from '/imgs/sectionviii/card.png'
import flags from '/imgs/sectionviii/flags.png'
import idcard from '/imgs/sectionviii/idcard.png'
import notebook from '/imgs/sectionviii/notebook.png'
import top from '/imgs/sectionviii/top.png'
import stickers from '/imgs/sectionviii/stickers.png'
import id from '/imgs/sectionviii/id.png'

export default function SectionEight() {
  return (
    <div className='mt-40 '>
      <h1 className='text-center text-3xl md:text-4xl font-bold px-2 text-[#484848]'>Discover Best Products To Build Your Brand</h1>
      <div className='flex justify-center flex-wrap gap-x-5 mt-10'>
        <Section1 img={bottle} title='Drinkware' size='hover:w-96'/>
        <Section1 img={card} title='Business card' size='hover:w-96'/>
        <Section1 img={top} title='T-shirts' size='hover:w-96'/>
        <Section1 img={idcard} title='ID cards' size='hover:w-96'/>
        <Section1 img={notebook} title='Notepads' size='hover:w-96'/>
        <Section1 img={bag} title='Tote bags' size='hover:w-96'/>
        <Section1 img={flags} title='Hoodies' size='hover:w-96'/>
        <Section1 img={banner} title='Rollup banner' size='hover:w-96'/>
        <Section1 img={id} title='Glass signage' size='hover:w-96'/>
        <Section1 img={stickers} title='Stickers' size='hover:w-96'/>
      </div>
    </div>
  )
}
