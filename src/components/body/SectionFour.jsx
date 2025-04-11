import React from 'react';
import { motion } from 'framer-motion';
import ruff from '/imgs/brand/ruff.png';
import nike from '/imgs/brand/nike.png';
import adidas from '/imgs/brand/adidas.png';
import ga from '/imgs/brand/ga.png';
import sports from '/imgs/brand/sports.png';
import kobo from '/imgs/brand/kobo.png';
import nack from '/imgs/brand/nack.png';
import amrod from '/imgs/brand/amrod.png';

export default function SectionFour() {
  return (
    <div className="text-center mt-20 font-bold">
      <h1 className="text-5xl text-[#484848]">Our Partnering Brands</h1>
      <div className="flex justify-center items-center gap-x-20 gap-y-4 mt-10 flex-wrap md:mx-40">
        {[
          { src: adidas, alt: 'adidas' },
          { src: nike, alt: 'nike' },
          { src: nack, alt: 'nack' },
          { src: kobo, alt: 'kobo' },
          { src: sports, alt: 'afa sports' },
          { src: amrod, alt: 'amrod' },
          { src: ruff, alt: 'ruff n tumble' },
          { src: ga, alt: 'ga' },
        ].map((brand, index) => (
          <motion.img
            key={index}
            src={brand.src}
            alt={brand.alt}
            width={150}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </div>
  );
}
