import React from 'react'
import product from '/imgs/product.png'

export default function SectionFive() {
  return (
    <div className='mt-40 flex px-40 justify-between gap-x-10'>
      <section className='w-1/2'>
        <h1 className='text-4xl font-semibold'>Why choose Printfactory?</h1>
        <p className='text-3xl mt-10 leading-[1.9]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis debitis tempore, ad repudiandae
             est harum. Nobis similique eligendi cupiditate reiciendis illo officia enim recusandae temporibus. Ipsum ducimus ab possimus 
             voluptate.
             est harum. Nobis similique eligendi cupiditate reiciendis illo officia enim recusandae temporibus. 
        </p>
      </section>
      <section className='w-1/2 flex flex-col gap-y-3'>
        <div className='flex items-center bg-red-500 w-4/5'>
            <div className='pl-20 text-white'>
                <h2 className='text-3xl pt-10'>Quick & fast delivery</h2>
                <p className='text-[10px] pb-10'>reliable and right on time</p>
            </div>
            <div>
                <img src={product} alt="" width={150}/>
            </div>
        </div>
        <div className='flex items-center bg-red-500 w-4/5'>
            <div className='pl-20 text-white'>
                <h2 className='text-3xl pt-10'>Print more, earn more</h2>
                <p className='text-[10px] pb-10 '>Turn every print into profit</p>
            </div>
            <div>
                <img src={product} alt="" width={150}/>
            </div>
        </div>
        <div className='flex items-center bg-red-500 w-4/5'>
            <div className='pl-20 text-white'>
                <h2 className='text-3xl pt-10 '>Free design and support</h2>
                <p className='text-[10px] pb-10 '>reliable and right on time</p>
            </div>
            <div>
                <img src={product} alt="" width={150}/>
            </div>
        </div>
      </section>
    </div>
  )
}
