import React from 'react'

export default function Section10({testimony, img, name, occupation}) {
  return (
    <div className='w-1/3 bg-[whitesmoke] p-3 rounded-md'>
      <p >{testimony}</p>
      <div className='mt-5 flex justify-between items-center'>
        <section className='flex gap-3 items-center'>
            <img src={img} alt={name} className='bg-sky-100 rounded-4xl h-10 w-10'/>
            <div>
                <h2 className='font-semibold text-[14px]'>{name}</h2>
                <p className='text-[10px] text-gray-600'>{occupation}</p>
            </div>
        </section>
        ratings
      </div>

    </div>
  )
}
