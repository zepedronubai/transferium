'use client';
import Image from 'next/image';
import BookYourRide from '../hero/bookYourRide';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useRef, useState, useEffect } from 'react';

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
      <div className='flex flex-col md:pt-20 pt-14 md:px-4 px-2 md:gap-10 gap-6 w-full max-w-[1200px] items-center text-center'>
        <div className='font-bold md:text-2xl text-base text-customYellow'>
          Welcome to Transferium
        </div>
        <div className='font-black text-white md:text-5xl text-2xl'>
          PREMIUM TRANSFERS ANYTIME
        </div>
        <div className='md:text-lg text-sm font-medium text-white'>
          Experience seamless, first-class transportation with our trusted
          chauffeur service .
        </div>
        <div className='grid md:grid-cols-2 md:gap-5 gap-3 w-max text-sm md:text-base'>
          <button className='w-full bg-customYellow md:py-4 py-3 px-8 rounded-2xl flex items-center justify-center gap-2'>
            About Us
            <FaArrowRightLong />
          </button>
          <button className='w-full bg-white text-black md:py-4 py-3 px-8 rounded-2xl flex items-center justify-center gap-2'>
            Reviews
            <FaArrowRightLong />
          </button>
        </div>

        <div ref={bookRef} className='w-full md:mt-5 mt-4'>
          <BookYourRide />
        </div>
      </div>
    </div>
  );
}
