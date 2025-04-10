import React from 'react'

export default function Section7({no, topic, img, text}) {
  return (
    <div className='w-52 mt-20 flex flex-col  '>
      <p className=' text-center'><span className='bg-sky-700 px-3 py-1 rounded text-white'>{no}</span></p>
      <div className='flex justify-center'><img src={img} alt="product" className='h-20 md:h-30'/></div>
      <h2 className='text-xm md:text-2xl text-sky-700 mt-3 font-semibold'>{topic}</h2>
      <p className='text-[14px] md:text-[16px]'>{text}</p>
    </div>
  )
}
