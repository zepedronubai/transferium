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
      <div className='font-bold md:text-lg text-base '>Book Your Transfer</div>
      {/* FROM AND TO */}
      <div className='flex md:flex-row flex-col w-full items-center md:gap-12 gap-6'>
        <div className='flex flex-col items-start gap-1 w-full'>
          <div className='font-light md:text-base text-sm'>From:</div>

          {/* Wrapper with relative position */}
          <div className='relative w-full  md:text-lg text-base'>
            <input
              type='text'
              placeholder='Armação de pera, Algarve'
              className='border-[1px] border-customGray md:pr-[34px] md:pl-4 md:py-5 pr-[28px] pl-3 py-3  rounded-2xl w-full '
            />

            {/* Icon positioned at the right inside input */}
            <FaLocationDot className='absolute md:right-4 right-3  top-1/2 transform -translate-y-1/2 text-customYellow pointer-events-none' />
          </div>
        </div>
        <div className='flex flex-col items-start gap-1 w-full'>
          <div className='font-light md:text-base text-sm'>To:</div>
          <div className='relative w-full  md:text-lg text-base'>
            <input
              type='text'
              placeholder='Armação de pera, Algarve'
              className='border-[1px] border-customGray md:pr-[34px] md:pl-4 md:py-5 pr-[28px] pl-3 py-3  rounded-2xl w-full '
            />

            {/* Icon positioned at the right inside input */}
            <FaLocationArrow className='absolute md:right-4 right-3 top-1/2 transform -translate-y-1/2 text-customYellow pointer-events-none' />
          </div>
        </div>
      </div>

      {/* DATE PASSANGERS E BUTTON */}
      <div className='flex md:flex-row flex-col w-full items-end md:gap-12 gap-6'>
        <div className='flex md:gap-10 gap-5 items-center w-full'>
          <div className='flex flex-col items-start gap-1 w-2/3'>
            <div className='font-light md:text-base text-sm'>Date & Time:</div>
            <div className='relative w-full  md:text-lg text-base'>
              <input
                type='text'
                placeholder='Armação de pera, Algarve'
                className='border-[1px] border-customGray  md:pr-[34px] md:pl-4 md:py-5 pr-[28px] pl-3 py-3 rounded-2xl w-full'
              />

              {/* Icon positioned at the right inside input */}
              <FaCalendarDays className='absolute md:right-4 right-3 top-1/2 transform -translate-y-1/2 text-customYellow pointer-events-none' />
            </div>
          </div>
          <div className='flex flex-col items-start gap-1 w-1/3'>
            <div className='font-light md:text-base text-sm'>Passengers:</div>
            <div className='relative w-full  md:text-lg text-base'>
              <input
                type='text'
                placeholder='Armação de pera, Algarve'
                className='border-[1px] border-customGray  md:pr-[34px] md:pl-4 md:py-5 pr-[28px] pl-3 py-3  rounded-2xl w-full '
              />

              {/* Icon positioned at the right inside input */}
              <FaUserGroup className='absolute md:right-4 right-3 top-1/2 transform -translate-y-1/2 text-customYellow pointer-events-none' />
            </div>
          </div>
        </div>
        {/* Button */}
        <button className='w-full md:py-5 py-3 bg-customYellow text-black font-bold rounded-2xl md:text-lg text-base flex items-center gap-2 justify-center'>
          <span>
            <FaCarAlt />
          </span>
          Book Transfer Now
        </button>
      </div>
    </div>
  );
}
