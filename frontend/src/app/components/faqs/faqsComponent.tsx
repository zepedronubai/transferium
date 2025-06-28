'use client';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'Is it safe to book a Transfer Online?',
    answer:
      'I had a lot of good conversations with the guys and I love the way they drive but the thing is that for real is ne the building',
  },
  {
    question: 'Can I book a Transfer Any Time?',
    answer:
      'Yes, our service is available 24/7. You can book any time that suits you.',
  },
  {
    question: 'How do I book a Transfer?',
    answer:
      'Booking is simple: just choose your pickup and drop-off locations and confirm.',
  },
  {
    question: 'Can I pay using cash?',
    answer: 'Yes, we accept both cash and card payments.',
  },
];

export default function FaqsComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className='w-full flex flex-col gap-0 md:py-5 py-0'>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={` py-6 ${
            index === 3 ? '' : 'border-b border-gray-300'
          } cursor-pointer `}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className='w-full flex justify-between items-center text-left cursor-pointer'
          >
            <span
              className={` text-sm md:text-base ${
                openIndex === index ? 'font-semibold ' : 'font-normal'
              } `}
            >
              {faq.question}
            </span>
            {openIndex === index ? (
              <FaChevronUp className='text-customYellow' />
            ) : (
              <FaChevronDown />
            )}
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                key='content'
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <p className='mt-2 md:text-sm text-xs text-gray-600 overflow-hidden'>
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
