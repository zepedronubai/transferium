'use client';

import { BsLightning, BsShieldCheck } from 'react-icons/bs';
import { IoWalletOutline } from 'react-icons/io5';
import { GoClock } from 'react-icons/go';
import { IconType } from 'react-icons';
import { useTranslation } from 'react-i18next';

interface Feature {
  icon: IconType;
  titleKey: string;
  descriptionKey: string;
}

export default function WhyUs() {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      icon: BsLightning,
      titleKey: 'whyUs.features.fastPickup.title',
      descriptionKey: 'whyUs.features.fastPickup.description',
    },
    {
      icon: IoWalletOutline,
      titleKey: 'whyUs.features.affordableRate.title',
      descriptionKey: 'whyUs.features.affordableRate.description',
    },
    {
      icon: GoClock,
      titleKey: 'whyUs.features.availability.title',
      descriptionKey: 'whyUs.features.availability.description',
    },
    {
      icon: BsShieldCheck,
      titleKey: 'whyUs.features.safety.title',
      descriptionKey: 'whyUs.features.safety.description',
    },
  ];

  return (
    <div
      className='flex flex-col w-full max-w-[1100px] items-center gap-10 md:px-4 px-2'
      id='whyUs'
    >
      <div className='flex flex-col w-full md:items-center items-center'>
        <div className='md:text-base text-xs font-bold text-customYellow'>
          {t('whyUs.label')}
        </div>
        <div className='md:text-2xl text-[20px] font-bold md:text-center text-center text-black'>
          {t('whyUs.title')}
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
                  {t(feature.titleKey)}
                </div>
                <div className='font-light md:text-sm text-[12px] text-customGrayDarker'>
                  {t(feature.descriptionKey)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
