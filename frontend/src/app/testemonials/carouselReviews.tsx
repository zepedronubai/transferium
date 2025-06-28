'use client';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { EmblaOptionsType } from 'embla-carousel';

import EmblaCarousel from './embla/emblaCarousel';

export default function ReviewCarousel() {
  const OPTIONS: EmblaOptionsType = { align: 'start' };

  return (
    <div className='w-full flex flex-col  gap-10 z-10 text-white'>
      <EmblaCarousel options={OPTIONS} />
      <div className='flex flex-col p-4 gap-2 w-full border-[1px] border-white rounded-2xl bg-customWhiteLowOpacity backdrop-blur-md'>
        <div className='flex gap-2 items-center'>
          <Image
            alt='client'
            src='/face1.png'
            width={44}
            height={44}
            unoptimized
            className='rounded-full h-[44px] w-[44px]'
          />
          <div className='flex flex-col items-start'>
            <div className='md:text-sm text-[10px] font-semibold'>
              Carlos Arez
            </div>
            <div className='font-light md:text-[10px] text-[8px]'>Customer</div>
          </div>
        </div>
        <div className='font-light md:text-xs text-[8px]'>
          I had a lot of good conversations with the guys and I love the way
          they drive but the thing is that for real is ne the building.
        </div>
        <div className='flex gap-2 items-center text-customYellow md:text-sm text-[10px] mt-2'>
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>
      </div>
    </div>
  );
}
