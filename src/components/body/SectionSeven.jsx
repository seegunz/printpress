import React from 'react'
import Section7 from './sections/Section7'
import product from '/imgs/product.png'

export default function SectionSeven() {
  return (
    <div className='flex justify-center gap-5'>
      <Section7 no='1' img={product} topic='Pick a Product' text='Choose from our product catelog.'/>
      <Section7 no='2' img={product} topic='Create a Design' text='Use built-in tools to design direct on your product.'/>
      <Section7 no='3' img={product} topic='Order the Product' text='Sit tight while we fulfill ad ship your order.'/>
    </div>
  )
}
