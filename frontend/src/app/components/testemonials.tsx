import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';

export default function Testemonials() {
  return (
    <div className='w-full relative'>
      <div className='w-full h-full absolute overflow-hidden'>
        <Image
          alt='testemonials'
          src={'/testemonials.jpg'}
          fill
          className='object-cover -z-10'
        />
        <div className='absolute top-0 left-0 w-full h-full -z-10 overflow-hidden bg-black opacity-40'></div>
      </div>
      <div className='flex flex-col w-full max-w-[1200px] items-center md:py-20 py-10 gap-10 md:px-4 px-2'>
        <div className='flex flex-col  items-center '>
          <div className='md:text-base text-xs font-bold text-customYellow'>
            TESTEMONIALS
          </div>
          <div className='md:text-2xl text-lg font-bold text-center text-white'>
            What Our Costumers Say
          </div>
        </div>
        <div className='flex items-center justify-between w-full'>
          {/* Customer Review */}
          <div className='flex flex-col p-4 gap-2 w-full max-w-[240px] border-[1px] border-white rounded-2xl bg-customWhiteLowOpacity backdrop-blur-md'>
            <div className='flex gap-2 items-center'>
              <Image
                alt='client1'
                src={'/face1.png'}
                width={44}
                height={44}
                unoptimized
                className='rounded-full h-[44px] w-[44px]'
              />
              <div className='flex flex-col items-start'>
                <div className='text-sm font-semibold'>Carlos Arez</div>
                <div className='font-thin text-[10px]'>Customer</div>
              </div>
            </div>
            <div className='font-thin text-xs'>
              I had a lot of good conversations with the guys and I love the way
              they drive but the thing is that for real is ne the building.
            </div>
            <div className='flex gap-2 items-center text-customYellow text-sm mt-2'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className='flex flex-col p-4 gap-2 w-full max-w-[240px] border-[1px] border-white rounded-2xl bg-customWhiteLowOpacity backdrop-blur-md'>
            <div className='flex gap-2 items-center'>
              <Image
                alt='client1'
                src={'/face1.png'}
                width={44}
                height={44}
                unoptimized
                className='rounded-full h-[44px] w-[44px]'
              />
              <div className='flex flex-col items-start'>
                <div className='text-sm font-semibold'>Carlos Arez</div>
                <div className='font-thin text-[10px]'>Customer</div>
              </div>
            </div>
            <div className='font-thin text-xs'>
              I had a lot of good conversations with the guys and I love the way
              they drive but the thing is that for real is ne the building.
            </div>
            <div className='flex gap-2 items-center text-customYellow text-sm mt-2'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
