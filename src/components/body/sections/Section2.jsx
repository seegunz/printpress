import React from 'react'

export default function Section2({img, title, product, ratings, price, color, size, unit}) {
  return (
    <div className='flex flex-col justify-center mt-10'>
      <div className='bg-gray-100'>
        <img src={img} alt="Products" width={250} height={150}/>
      </div>
      <h2 className='font-semibold text-[12px] mt-2'>{title}</h2>
      <div className='flex text-[10px] gap-2 text-gray-900'>
        <p>{product}</p>
        {/* verification */}
        {/* star */}
        <p>{ratings}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-[10px] text-gray-900'>from </p> 
        <p className='text-[12px] font-semibold'> {price}</p>
      </div>
      <div className='flex text-[10px] gap-2 text-gray-900'>
        <p>{color}</p>
        <p>{size}</p>
        <p>{unit}</p>
      </div>
    </div>
  )
}
