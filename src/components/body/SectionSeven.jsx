import React from 'react'
import Section7 from './sections/Section7'
import delivery from '/imgs/sectionvii/delivery.png'
import frame from '/imgs/sectionvii/frame.png'
import ds from '/imgs/sectionvii/dsgnar.png'

export default function SectionSeven() {
  return (
    <div className='flex justify-center px-2 gap-5'>
      <Section7 no='1' img={delivery} topic='Pick a Product' text='Choose from our product catelog.'/>
      <Section7 no='2' img={frame} topic='Create a Design' text='Use built-in tools to design direct on your product.'/>
      <Section7 no='3' img={ds} topic='Order the Product' text='Sit tight while we fulfill and ship your order.'/>

    </div>
  )
}
