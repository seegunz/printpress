import React from 'react'

export default function Section1({img, title, size}) {
  return (
    <div className='flex flex-col items-center justify-center mb-5 rounded-2xl p-2'>
      <div className='bg-sky-100 hover:bg-gray-300 hover:cursor-pointer rounded-2xl p-2 md:w-[300px] md:h-[240px] w-[200px] h-[200px] flex justify-center items-center gap-4'>
        <img src={img} alt={title} className={size}/>
      </div>
      <br />
      <p className='font-semibold text-center text-x;'>{title}</p>
    </div>
  )
}
