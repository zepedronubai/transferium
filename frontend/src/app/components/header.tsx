import Image from 'next/image';
import LanguageSwitcher from '../utils/languageSwitcher';
import { FaCarAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <div className='fixed w-full left-0 top-0 bg-white flex justify-center px-2 z-50  shadow-md'>
      <div className='w-full max-w-[1200px] flex justify-between items-center py-4'>
        <div>
          <Image
            alt='Transferium-Logo'
            src={'/logo2.svg'}
            width={120}
            height={80}
            unoptimized
            className='md:w-[120px] w-[80px]'
          />
        </div>

        {/* RIGHT SIDE OF THE HEADER FOR LAPTOP*/}
        <div className=' md:flex hidden justify-between items-center gap-10 text-sm font-medium'>
          <div>Our Advantages</div>
          <div>Contact Us</div>
          <div className='flex items-center gap-5'>
            <LanguageSwitcher />
            <button className='bg-customYellow rounded-2xl px-10 py-4 font-bold flex items-center gap-2'>
              <span>
                <FaCarAlt />
              </span>
              Book a Transfer
            </button>
          </div>
        </div>

        {/* RIGHT SIDE OF THE HEADER FOR MOBILE */}
        <div className='md:hidden flex items-center gap-5 font-medium'>
          <LanguageSwitcher />

          <button className='bg-customYellow rounded-xl px-4 py-3 text-[10px] font-bold flex items-center gap-1'>
            <span>
              <FaCarAlt />
            </span>
            Book a Transfer
          </button>
        </div>
      </div>
    </div>
  );
}
