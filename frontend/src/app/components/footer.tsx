import Image from 'next/image';
import { FiPhone } from 'react-icons/fi';
import { SlGlobe } from 'react-icons/sl';
import { MdMailOutline } from 'react-icons/md';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='w-full bg-customYellow md:mt-36 mt-20'>
      <div className='flex md:flex-row md:justify-between flex-col   gap-4 py-10 w-full max-w-[1100px] md:px-4 px-2 mx-auto'>
        <div className='flex flex-col gap-10 md:items-start items-center '>
          <div className='flex flex-col md:items-start items-center gap-2'>
            <div className='flex flex-col md:items-start items-center font-bold md:text-[28px] text-lg'>
              <span className='text-black'>Book Your Transfer Anytime</span>
              <span className='text-white'>It’s Simple And Affordable</span>
            </div>
            <div className='md:text-sm text-xs font-light text-customGrayDarker md:text-start text-center'>
              We know the importance of getting to point A to point B with
              hurry, safety and effieciency
            </div>
          </div>
          <div className='md:hidden flex flex-col gap-4 md:my-auto font-semibold'>
            <div className='bg-customWhiteLowLowOpacity px-10 py-2 flex justify-center items-center gap-2 md:text-sm text-xs rounded-2xl border-[0.5px] border-white'>
              <span className='md:text-base text-sm'>
                <FiPhone />
              </span>
              <div className=''>+351968947839</div>
            </div>

            <div className='bg-customWhiteLowLowOpacity px-10 py-2 flex justify-center items-center gap-2 md:text-sm text-xs rounded-2xl border-[0.5px] border-white'>
              <span className='md:text-base text-sm'>
                <MdMailOutline />
              </span>
              <div className=''>transferium@gmail.com</div>
            </div>
            <div className='bg-customWhiteLowLowOpacity px-10 py-2 flex justify-center items-center gap-2 md:text-sm text-xs rounded-2xl border-[0.5px] border-white'>
              <span className='md:text-base text-sm'>
                <SlGlobe />
              </span>
              <div className=''>transferium.com</div>
            </div>
          </div>
          <div className='flex items-center  gap-4'>
            <Image
              src={'/logo.svg'}
              alt='transferium-logo'
              width={100}
              height={50}
              className='md:w-[100px] w-[80px] '
            />
            <Image
              src={'/turismo.png'}
              alt='turismo-img'
              width={100}
              height={50}
              className='md:w-[100px] w-[80px] '
            />
            <Link
              href={'https://www.livroreclamacoes.pt/Inicio/'}
              className='md:text-xs text-[10px] font-light text-black underline md:text-start text-center'
            >
              Complaint&apos;s Book
            </Link>
          </div>
        </div>
        <div className='md:flex hidden flex-col gap-4 md:my-auto font-semibold '>
          <div className='bg-customWhiteLowLowOpacity px-10 py-2 flex justify-center items-center gap-2 md:text-sm text-xs rounded-2xl border-[0.5px] border-white'>
            <span className='md:text-base text-sm'>
              <FiPhone />
            </span>
            <div className=''>+351968947839</div>
          </div>

          <div className='bg-customWhiteLowLowOpacity px-10 py-2 flex justify-center items-center gap-2 md:text-sm text-xs rounded-2xl border-[0.5px] border-white'>
            <span className='md:text-base text-sm'>
              <MdMailOutline />
            </span>
            <div className=''>transferium@gmail.com</div>
          </div>
          <div className='bg-customWhiteLowLowOpacity px-10 py-2 flex justify-center items-center gap-2 md:text-sm text-xs rounded-2xl border-[0.5px] border-white'>
            <span className='md:text-base text-sm'>
              <SlGlobe />
            </span>
            <div className=''>transferium.com</div>
          </div>
        </div>
      </div>
      <div className='w-full bg-black'>
        <div className='w-full flex items-center justify-between max-w-[1100px] mx-auto md:px-4 px-2 py-4'>
          <div className=' flex flex-col items-start max-w-[1100px] text-xs  md:text-sm  text-white gap-1'>
            <div className='font-thin flex'>
              2025 Transferium. All Rights Reserved.
            </div>
            <div className='font-thin '>
              Developed by <span className='font-bold'>zép</span>.
            </div>
          </div>
          <div className='flex items-center gap-2 text-white text-xl'>
            <FaInstagram />

            <FaFacebook />
          </div>
        </div>
      </div>
    </div>
  );
}
