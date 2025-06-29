'use client';

import { FaCarAlt } from 'react-icons/fa';
import {
  FaCalendarDays,
  FaLocationArrow,
  FaLocationDot,
  FaUserGroup,
} from 'react-icons/fa6';

export default function BookYourRide() {
  return (
    <div className='w-full flex flex-col bg-white rounded-2xl md:p-10 p-6 gap-6 items-start shadow-xl'>
      <div className='font-bold md:text-lg text-base md:mx-0 mx-auto'>
        Book Your Transfer
      </div>

      {/* FROM AND TO */}
      <div className='flex md:flex-row flex-col w-full items-center md:gap-12 gap-6'>
        {/* From Input */}
        <div className='flex flex-col items-start gap-1 w-full'>
          <label className='font-light md:text-base text-sm'>From:</label>
          <div className='relative w-full md:text-lg text-base'>
            <input
              type='text'
              placeholder='Armação de Pêra, Algarve'
              className='border border-customGray rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3 pr-12'
            />
            <FaLocationDot className='absolute right-4 top-1/2 transform -translate-y-1/2 text-customYellow pointer-events-none' />
          </div>
        </div>

        {/* To Input */}
        <div className='flex flex-col items-start gap-1 w-full'>
          <label className='font-light md:text-base text-sm'>To:</label>
          <div className='relative w-full md:text-lg text-base'>
            <input
              type='text'
              placeholder='Tavira, Algarve'
              className='border border-customGray rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3 pr-12'
            />
            <FaLocationArrow className='absolute right-4 top-1/2 transform -translate-y-1/2 text-customYellow pointer-events-none' />
          </div>
        </div>
      </div>

      {/* DATE, PASSENGERS & BUTTON */}
      <div className='flex md:flex-row flex-col w-full items-end md:gap-12 gap-6'>
        <div className='flex md:gap-10 gap-5 items-center w-full'>
          {/* Date & Time Input */}
          <div className='flex flex-col items-start gap-1 w-2/3'>
            <label className='font-light md:text-base text-sm'>
              Date & Time:
            </label>
            <div className='relative w-full md:text-lg text-base'>
              <input
                type='datetime-local'
                placeholder='24/07/2025 14:30'
                className='border border-customGray rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3 pr-12'
              />
              <FaCalendarDays className='absolute right-4 top-1/2 transform -translate-y-1/2 text-customYellow pointer-events-none' />
            </div>
          </div>

          {/* Passengers Input */}
          <div className='flex flex-col items-start gap-1 w-1/3'>
            <label className='font-light md:text-base text-sm'>
              Passengers:
            </label>
            <div className='relative w-full md:text-lg text-base'>
              <input
                type='number'
                placeholder='4'
                min={1}
                className='border border-customGray rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3 pr-12'
              />
              <FaUserGroup className='absolute right-4 top-1/2 transform -translate-y-1/2 text-customYellow pointer-events-none' />
            </div>
          </div>
        </div>

        {/* Book Button */}
        <button className='w-full md:py-5 py-3 bg-customYellow text-black font-bold rounded-2xl md:text-lg text-base flex items-center gap-2 justify-center'>
          <FaCarAlt />
          Book Transfer Now
        </button>
      </div>
    </div>
  );
}
