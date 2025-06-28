import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './emblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './emblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import { FaStar } from 'react-icons/fa6';
import Image from 'next/image';

type PropType = {
  //   slides: number[];
  options?: EmblaOptionsType;
};

const reviews = new Array(12).fill({
  name: 'Carlos Arez',
  role: 'Customer',
  text: 'I had a lot of good conversations with the guys and I love the way they drive but the thing is that for real is ne the building.',
});

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className='embla '>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {reviews.map((review, index) => (
            <div className='embla__slide' key={index}>
              <div className='flex flex-col p-4 gap-2 w-full border-[1px] border-white rounded-2xl bg-customWhiteLowOpacity backdrop-blur-md'>
                <div className='flex gap-2 items-center'>
                  <Image
                    alt='client'
                    src='/face1.png'
                    width={44}
                    height={44}
                    unoptimized
                    className='rounded-full h-[44px] w-[44px]'
                  />
                  <div className='flex flex-col items-start'>
                    <div className='md:text-sm text-[10px] font-semibold'>
                      {review.name}
                    </div>
                    <div className='font-light md:text-[10px] text-[8px]'>
                      {review.role}
                    </div>
                  </div>
                </div>
                <div className='font-light md:text-xs text-[8px]'>
                  {review.text}
                </div>
                <div className='flex gap-2 items-center text-customYellow md:text-sm text-[10px] mt-2'>
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
