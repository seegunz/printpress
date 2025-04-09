import React from 'react'
import ruff from '/imgs/brand/ruff.png'
import nike from '/imgs/brand/nike.png'
import adidas from '/imgs/brand/adidas.png' 
import ga from '/imgs/brand/ga.png'
import sports from '/imgs/brand/sports.png'
import kobo from '/imgs/brand/kobo.png'
import nack from '/imgs/brand/nack.png'
import amrod from '/imgs/brand/amrod.png'

export default function SectionFour() {
  return (
    <div className='text-center mt-20 font-bold'>
      <h1 className='text-5xl text-[#484848]'>Our Partnering Brands</h1>
      <div className='flex justify-center items-center gap-x-20 gap-y-4 mt-10 flex-wrap md:mx-40 '>
      <img src={adidas} alt="adidas" width={150} />
       <img src={nike} alt="nike" width={150} /> 
       <img src={nack} alt="nack" width={150} />
       <img src={kobo} alt="kobo" width={150} />
       <img src={sports} alt="afa sports" width={150} />
       <img src={amrod} alt="amrod" width={150} />
       <img src={ruff} alt="ruff n tumble" width={150}/>
       <img src={ga} alt="ga" width={150} />
       
      </div>
    </div>
  )
}
