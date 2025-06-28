import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div className='w-full md:max-w-[1100px] max-w-[600px]  flex  sm:gap-10 gap-3 justify-center md:px-4 px-2 relative '>
      <Image
        alt='about-img'
        src={'/about.webp'}
        width={440}
        height={380}
        className='rounded-2xl object-cover   max-h-[380px]  md:w-[440px] w-full md:block hidden'
      />
      <div className='flex flex-col md:items-start items-center py-4'>
        <div className='flex flex-col sm:gap-6 gap-4  md:items-start items-center '>
          {/* ABOUT US small e TITULO BIG */}
          <div className='flex flex-col md:gap-6 gap-3  md:items-start items-center '>
            <div className='flex flex-col md:items-start items-center '>
              <div className='md:text-base text-xs font-bold text-customYellow'>
                ABOUT US
              </div>
              <div className='md:text-2xl text-[20px] font-bold md:text-start text-center'>
                Exceptional Car Service Across Portugal
              </div>
            </div>
            <Image
              alt='about-img'
              src={'/about.webp'}
              width={440}
              height={300}
              className='rounded-2xl w-full md:hidden block max-h-[330px]'
            />
            {/* DESCRICAO MEDIA */}
            <div className='font-light text-customGrayDarker md:text-sm text-sm  md:text-start text-center'>
              Every journey matters. With professional drivers, premium
              vehicles, and a focus on safety and punctuality, Transferium Lux
              makes every ride seamless and refined.
            </div>
          </div>
          <div className='flex md:flex-col sm:flex-row flex-col  md:items-start items-center md:justify-center justify-between w-full gap-2 sm:text-sm text-xs sm:order-1 order-2 font-light text-customGrayDarker '>
            <div className='flex items-center gap-1'>
              <span>
                <FaCheckCircle className='text-customYellow' />
              </span>
              Quality Vehicles
            </div>
            <div className='flex items-center gap-1'>
              <span>
                <FaCheckCircle className='text-customYellow' />
              </span>
              Reliable Transportation
            </div>
            <div className='flex items-center gap-1'>
              <span>
                <FaCheckCircle className='text-customYellow' />
              </span>
              Professional Drivers
            </div>
          </div>
          <button className=' bg-customYellow md:py-4 py-3 px-8 rounded-2xl sm:text-xs text-xs font-bold md:px-4  sm:order-2 order-1  '>
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}
