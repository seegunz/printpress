import React from 'react';
import { motion } from 'framer-motion';

export default function Section1({ img, title, size }) {
  return (
    <div className="flex flex-col items-center justify-center mb-5 rounded-2xl p-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
        className="bg-sky-100 hover:bg-gray-300 hover:cursor-pointer rounded-2xl p-2 md:w-[300px] md:h-[240px] w-[200px] h-[200px] flex justify-center items-center gap-4"
      >
        <img src={img} alt={title} className={`${size} transition duration-500 ease-in-out`} />
      </motion.div>
      <br />
      <p className="font-semibold text-center text-xl">{title}</p>
    </div>
  );
}
