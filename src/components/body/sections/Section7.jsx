import React from 'react'

export default function Section7({no, topic, img, text}) {
  return (
    <div className='w-52 mt-20'>
      <p className=' text-center'><span className='bg-sky-700 px-3 py-1 rounded'>{no}</span></p>
      <div className='flex justify-center'><img src={img} alt="product" width={150}/></div>
      <h2 className='text-2xl text-sky-500 mt-3'>{topic}</h2>
      <p className='text-[16px]'>{text}</p>
    </div>
  )
}
