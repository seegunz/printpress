import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { list } from './sections/data/data';
import { motion } from 'framer-motion';


export default function Testimonial() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className=" testimonial mt-20"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-2 md:mx-20 2xl:mx-40 md:pt-20 pt-10 md:px-5 px-3 w-full lg:w-2/3 xl:w-1/2 text-black"
      >
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-white"
        >
          What Our Clients Say
        </motion.h1>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={6000} transitionDuration={1000} arrows={false}>
          {list.map((d, i) => {
            return (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                key={i}
                className="border border-sky-500 mt-10 p-5 text-black bg-white"
              >
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="mb-20 font-bold"
                >
                  {d.comments}
                </motion.p>
                <motion.hr
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1 }}
                  className="border border-sky-500"
                />
                <motion.h2
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="mt-5 text-2xl font-bold"
                >
                  {d.name}
                </motion.h2>
              </motion.div>
            );
          })}
        </Carousel>
      </motion.div>
    </motion.main>
  );
}


























// import React from 'react'
// import Section10 from './sections/Section10'
// import product from '/imgs/product.png'

// export default function SectionTen() {
//   return (
//     <div className='mx-50 mt-10'>
//       <span className='bg-red-500 px-2 rounded-2xl py-1 text-white'>What Our Users Say</span>
//       <h1 className='text-4xl font-bold'>Recent Reviews</h1>
//       <section className='mt-10 flex gap-5'>
//         <Section10 
//             testimony='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, 
//             nihil porro nisi quisquam non Atque, nesciunt ut!'
//             img={product}
//             name='John Doe'
//             occupation='Store Owner'
//         />
//         <Section10 
//             testimony='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, 
//             nihil porro nisi quisquam non Atque, nesciunt ut!'
//             img={product}
//             name='John Doe'
//             occupation='Store Owner'
//         />
//         <Section10 
//             testimony='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, 
//             nihil porro nisi quisquam non Atque, nesciunt ut!'
//             img={product}
//             name='John Doe'
//             occupation='Store Owner'
//         />
//       </section>
//     </div>
//   )
// }
