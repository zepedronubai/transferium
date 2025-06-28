import { BsLightning } from 'react-icons/bs';
import { IoWalletOutline } from 'react-icons/io5';
import { IconType } from 'react-icons';
import { GoClock } from 'react-icons/go';
import { BsShieldCheck } from 'react-icons/bs';

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: BsLightning,
    title: 'Fast Pickup',
    description:
      'Get where you need to be in a flash with our lighting fast pickup service.',
  },
  {
    icon: IoWalletOutline,
    title: 'Affordable Rate',
    description:
      'Get to your destination without breaking the bank - affordable rates guaranteed!',
  },
  {
    icon: GoClock,
    title: '24/7 Availability',
    description:
      'Assistance available around the clock for all your rides booking needs.',
  },
  {
    icon: BsShieldCheck,
    title: 'Safety Guarantee',
    description:
      'Every ride secured with our safety protocols and trained drivers.',
  },
];

export default function WhyUs() {
  return (
    <div className='flex flex-col w-full max-w-[1100px] items-center  gap-10  md:px-4 px-2'>
      <div className='flex flex-col w-full md:items-center items-center '>
        <div className='md:text-base text-xs font-bold text-customYellow'>
          WHY US
        </div>
        <div className='md:text-2xl text-[20px] font-bold md:text-center text-center text-black'>
          Our Awesome Features
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-3 md:gap-y-10 md:gap-x-10 md:max-w-max max-w-[520px]'>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className='flex flex-col gap-4 items-center'>
              <div className='bg-customYellow text-black md:text-4xl text-2xl rounded-full p-3'>
                <Icon />
              </div>
              <div className='flex flex-col items-center text-center gap-2'>
                <div className='font-semibold text-sm md:text-base'>
                  {feature.title}
                </div>
                <div className='font-light md:text-sm text-[12px] text-customGrayDarker'>
                  {feature.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
