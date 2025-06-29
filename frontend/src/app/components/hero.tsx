'use client';
import Image from 'next/image';
import BookYourRide from './hero/bookYourRide';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  const bookRef = useRef<HTMLDivElement>(null);
  const [bgHeight, setBgHeight] = useState(600); // fallback default

  useEffect(() => {
    if (bookRef.current) {
      const halfHeight = bookRef.current.offsetHeight / 2;
      setBgHeight(bookRef.current.offsetTop + halfHeight);
    }
  }, []);

  return (
    <div className='w-full flex justify-center relative'>
      <div
        className='absolute top-0 left-0 w-full -z-20 overflow-hidden '
        style={{ height: `${bgHeight}px` }}
      >
        <Image
          alt='hero-img'
          src='/hero.jpg'
          fill
          className='object-cover blur-xs'
        />
      </div>
      <div
        className='absolute top-0 left-0 w-full -z-10 overflow-hidden bg-black opacity-20'
        style={{ height: `${bgHeight}px` }}
      ></div>
      <motion.div
        className='flex flex-col md:pt-20 pt-14 md:px-10 px-2 md:gap-10 gap-6 w-full max-w-[1100px] items-center text-center'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          className='font-bold md:text-2xl text-base text-customYellow'
          variants={itemVariants}
        >
          Welcome to Transferium
        </motion.div>

        <motion.div
          className='font-bold text-white md:text-5xl text-2xl'
          variants={itemVariants}
        >
          PREMIUM TRANSFERS ANYTIME
        </motion.div>

        <motion.div
          className='md:text-lg text-sm font-medium text-white'
          variants={itemVariants}
        >
          Experience seamless, first-class transportation with our trusted
          chauffeur service.
        </motion.div>

        <motion.div
          className='grid md:grid-cols-2 md:gap-5 gap-3 w-max text-sm md:text-base'
          variants={itemVariants}
        >
          <button className='w-full bg-customYellow md:py-4 py-3 px-8 rounded-2xl flex items-center justify-center gap-2'>
            About Us
            <FaArrowRightLong />
          </button>
          <button className='w-full bg-white text-black md:py-4 py-3 px-8 rounded-2xl flex items-center justify-center gap-2'>
            Reviews
            <FaArrowRightLong />
          </button>
        </motion.div>

        <motion.div
          ref={bookRef}
          className='w-full md:mt-5 mt-4'
          variants={itemVariants}
        >
          <BookYourRide />
        </motion.div>
      </motion.div>
    </div>
  );
}
