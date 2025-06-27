import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
import CarouselReviews from '../testemonials/carouselReviews';

export default function Testemonials() {
  return (
    <div className='w-full relative flex justify-center'>
      <div className='w-full h-full absolute overflow-hidden'>
        <Image
          alt='testemonials'
          src={'/testemonials.jpg'}
          fill
          className='object-cover -z-10'
        />
        <div className='absolute top-0 left-0 w-full h-full -z-10 overflow-hidden bg-black opacity-40'></div>
      </div>
      <div className='flex flex-col w-full max-w-[1100px] items-center md:py-20 py-10 gap-10 md:px-4 px-2'>
        <div className='flex flex-col  items-center '>
          <div className='md:text-base text-xs font-bold text-customYellow'>
            TESTEMONIALS
          </div>
          <div className='md:text-2xl text-lg font-bold text-center text-white'>
            What Our Costumers Say
          </div>
        </div>
        <CarouselReviews />
      </div>
    </div>
  );
}
