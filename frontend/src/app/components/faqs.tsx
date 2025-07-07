import Image from 'next/image';
import FaqsComponent from './faqs/faqsComponent';

export default function Faqs() {
  return (
    <div
      id='faqs'
      className='flex md:flex-row flex-col w-full max-w-[1100px] items-center  md:gap-10 gap-0  md:px-4 px-2'
    >
      <div className='flex flex-col md:items-start items-center md:gap-4 gap-3 w-full'>
        <div className='flex flex-col  md:items-start items-center '>
          <div className='md:text-base text-xs font-bold text-customYellow'>
            FAQ&apos;S
          </div>
          <div className='md:text-2xl text-[20px] font-bold text-center text-black'>
            Frequent Asked Questions
          </div>
        </div>
        <div className='font-light md:text-start text-center text-sm text-customGrayDarker'>
          Get to your destination without breaking the bank - affordable rates
          guaranteed!
        </div>
        <Image
          alt='faqs-img'
          src={'/faqs.png'}
          width={1000}
          height={548}
          className='rounded-2xl md:max-w-[480px]'
        />
      </div>
      <FaqsComponent />
    </div>
  );
}
