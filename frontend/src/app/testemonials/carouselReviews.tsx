'use client';

import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const reviews = new Array(12).fill({
  name: 'Carlos Arez',
  role: 'Customer',
  text: 'I had a lot of good conversations with the guys and I love the way they drive but the thing is that for real is ne the building.',
});

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function ReviewCarousel() {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(2);
  // direction: 1 means sliding forward (right), -1 means sliding back (left)
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1120) setPerPage(4);
      else if (window.innerWidth >= 800) setPerPage(3);
      else setPerPage(2);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const pages = Math.ceil(reviews.length / perPage);

  // Wrap around logic to make carousel infinite
  const paginate = (newPage: number) => {
    let nextPage = newPage;
    if (newPage < 0) nextPage = pages - 1;
    else if (newPage >= pages) nextPage = 0;
    setDirection(
      nextPage > page || (page === pages - 1 && nextPage === 0) ? 1 : -1
    );
    setPage(nextPage);
  };

  const start = page * perPage;
  const currentItems = reviews.slice(start, start + perPage);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      paginate(page + 1);
    },
    onSwipedRight: () => {
      paginate(page - 1);
    },
    trackMouse: true,
  });

  return (
    <div
      className='w-full flex flex-col items-center gap-4 z-10'
      {...swipeHandlers}
    >
      <AnimatePresence initial={false} custom={direction} mode='wait'>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className='grid gap-4 w-full '
          style={{
            gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))`,
          }}
        >
          {currentItems.map((review, index) => (
            <div
              key={`${review.name}-${index}-${page}`}
              className='flex flex-col p-4 gap-2 w-full border-[1px] border-white rounded-2xl bg-customWhiteLowOpacity backdrop-blur-md'
            >
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
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className='flex gap-2 mt-2'>
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => paginate(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === page ? 'bg-customYellow w-6' : 'bg-white/40 w-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
