import React from 'react'
import Section2 from './sections/Section2'
import product from '/imgs/product.png'

export default function SectionTwo() {
  return (
    <div className='mx-40 mt-20'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>Top Featured Products</h1>
        <button className='border rounded-2xl p-1 w-[100px] text-blue-500'>View All</button>
      </div>

      <section className='flex flex-wrap justify-center gap-8'>
        <Section2 img={product} 
            title="Men's Silk T-Shirt"
            product='Nike Store'
            ratings='3.5 ratings'
            price='6,000.00 - 20,000.00'
            color='10 colors'
            size='7 sizes'
            unit='Min. 20 units'
        />
        <Section2 img={product} 
            title="Men's Silk T-Shirt"
            product='Nike Store'
            ratings='3.5 ratings'
            price='6,000.00 - 20,000.00'
            color='10 colors'
            size='7 sizes'
            unit='Min. 20 units'
        />
        <Section2 img={product} 
            title="Men's Silk T-Shirt"
            product='Nike Store'
            ratings='3.5 ratings'
            price='6,000.00 - 20,000.00'
            color='10 colors'
            size='7 sizes'
            unit='Min. 20 units'
        />
        <Section2 img={product} 
            title="Men's Silk T-Shirt"
            product='Nike Store'
            ratings='3.5 ratings'
            price='6,000.00 - 20,000.00'
            color='10 colors'
            size='7 sizes'
            unit='Min. 20 units'
        />
        <Section2 img={product} 
            title="Men's Silk T-Shirt"
            product='Nike Store'
            ratings='3.5 ratings'
            price='6,000.00 - 20,000.00'
            color='10 colors'
            size='7 sizes'
            unit='Min. 20 units'
        />
        <Section2 img={product} 
            title="Men's Silk T-Shirt"
            product='Nike Store'
            ratings='3.5 ratings'
            price='6,000.00 - 20,000.00'
            color='10 colors'
            size='7 sizes'
            unit='Min. 20 units'
        />
        <Section2 img={product} 
            title="Men's Silk T-Shirt"
            product='Nike Store'
            ratings='3.5 ratings'
            price='6,000.00 - 20,000.00'
            color='10 colors'
            size='7 sizes'
            unit='Min. 20 units'
        />
        <Section2 img={product} 
            title="Men's Silk T-Shirt"
            product='Nike Store'
            ratings='3.5 ratings'
            price='6,000.00 - 20,000.00'
            color='10 colors'
            size='7 sizes'
            unit='Min. 20 units'
        />
        <Section2 img={product} 
            title="Men's Silk T-Shirt"
            product='Nike Store'
            ratings='3.5 ratings'
            price='6,000.00 - 20,000.00'
            color='10 colors'
            size='7 sizes'
            unit='Min. 20 units'
        />
        <Section2 img={product} 
            title="Men's Silk T-Shirt"
            product='Nike Store'
            ratings='3.5 ratings'
            price='6,000.00 - 20,000.00'
            color='10 colors'
            size='7 sizes'
            unit='Min. 20 units'
        />
      </section>

    </div>
  )
}
