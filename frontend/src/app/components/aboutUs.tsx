'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle } from 'react-icons/fa';
import { handleScroll } from '../utils/handleScroll';

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div
      id='aboutUs'
      className='w-full md:max-w-[1100px] max-w-[600px]  flex  sm:gap-10 gap-3 justify-center md:px-4 px-2 relative '
    >
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
            <div className='flex flex-col md:items-start items-center w-full '>
              <div className='md:text-base text-xs font-bold text-customYellow'>
                {t('aboutUs.label')}
              </div>

              <div className='md:text-2xl text-[20px] font-bold md:text-start text-center'>
                {t('aboutUs.title')}
              </div>
            </div>

            {/* DESCRICAO MEDIA */}
            <div className='font-light text-customGrayDarker md:text-sm text-sm  md:text-start text-center'>
              {t('aboutUs.description')}
            </div>
            <Image
              alt='about-img'
              src={'/about.webp'}
              width={440}
              height={300}
              className='rounded-2xl w-full md:hidden block max-h-[330px]'
            />
          </div>
          <div className='flex md:flex-col flex-row md:items-start items-center md:justify-center justify-between w-full gap-2 sm:text-sm text-[10px]  font-light text-customGrayDarker  '>
            <div className='flex items-center gap-1'>
              <span>
                <FaCheckCircle className='text-customYellow' />
              </span>
              {t('aboutUs.qualityVehicles')}
            </div>
            <div className='flex items-center gap-1'>
              <span>
                <FaCheckCircle className='text-customYellow' />
              </span>
              {t('aboutUs.reliableTransportation')}
            </div>
            <div className='flex items-center gap-1'>
              <span>
                <FaCheckCircle className='text-customYellow' />
              </span>
              {t('aboutUs.professionalDrivers')}
            </div>
          </div>
          <button
            onClick={() => {
              handleScroll('contacts');
            }}
            className=' bg-customYellow md:py-4 py-3 px-8 rounded-2xl sm:text-xs text-xs font-bold md:px-4  w-[200px]  '
          >
            {t('aboutUs.contactUs')}
          </button>
        </div>
      </div>
    </div>
  );
}
