import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa6";
import product from '/imgs/sectionvi/product.png';

export default function SectionSix() {
  return (
    <div className="mx-2 lg:mx-40 mt-20 flex flex-col items-center justify-center">
      <h2 className="bg-red-500 p-1 text-white rounded-2xl px-3">New feature</h2>
      <h1 className="font-bold text-4xl mt-3 text-center">Customize Your Products Online</h1>
      <p className="mt-4">Effortlessly turn your ideas into customized products on the go</p>
      <div className="flex bg-sky-700 mt-10 p-3 text-white font-semibold items-center gap-3 px-6 rounded-xl">
        <button>Explore Produts </button>
        <p className="text-2xl"><FaArrowRight /></p>
      </div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: false }}
        className="text-5xl font-bold mt-10 text-red-500"
      >
        <img src={product} alt="product" />
      </motion.div>
    </div>
  );
}
