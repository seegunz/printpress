import React from 'react'
import product from '/imgs/product.png'

export default function SectionFive() {
  return (
    <div className='text-center mt-20 font-bold text-4xl'>
      <h1>Our Partnering Brands</h1>
      <div className='flex justify-center gap-8 mt-10 flex-wrap mx-60'>
       <img src={product} alt="product" width={100} />
       <img src={product} alt="product" width={100} />
       <img src={product} alt="product" width={100} />
       <img src={product} alt="product" width={100} />
       <img src={product} alt="product" width={100} />
       <img src={product} alt="product" width={100} />
       <img src={product} alt="product" width={100} />
       <img src={product} alt="product" width={100} />
       <img src={product} alt="product" width={100} />
       <img src={product} alt="product" width={100} />
       <img src={product} alt="product" width={100} />
       <img src={product} alt="product" width={100} />
      </div>
    </div>
  )
}
