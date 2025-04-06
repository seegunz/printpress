import React from 'react'

export default function Section1({img, title}) {
  return (
    <div className='flex flex-col items-center justify-center w-1/6'>
      <div className='bg-sky-100 p-2'>
        <img src={img} alt="product" />
      </div>
      <br />
      <p className='font-semibold'>{title}</p>
    </div>
  )
}
