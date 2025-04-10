import React from 'react'
import product from '/imgs/sectionv/frame.png'

export default function SectionFive() {
  return (
    <div className='mt-40 flex flex-col xl:flex-row px-2 lg:px-20 xl:px-40 justify-between gap-y-10 gap-x-10'>
      <section className='w-full xl:w-1/2'>
        <h1 className='text-4xl font-semibold'>Why choose Printfactory?</h1>
        <p className='text-2xl xl:text-2xl 2xl:text-3xl mt-10 leading-[1.8] 2xl:leading-[1.9]'>
          At Printfactory, we're all about providing you with the easiest, most reliable printing service you'll ever use. 
          We understand the importance of your brand's presentation, which is why we offer an 
          extensive range of designs and top-quality print products to make sure your business stands out.
        </p>
      </section>
      <section className='w-full xl:w-1/2 flex flex-col gap-y-3'>
        <img src={product} alt="deliveries" />
      </section>
    </div>
  )
}
