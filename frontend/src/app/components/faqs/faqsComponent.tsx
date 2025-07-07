'use client';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface FaqItem {
  questionKey: string;
  answerKey: string;
}

export default function FaqsComponent() {
  const { t } = useTranslation();

  const faqData: FaqItem[] = [
    {
      questionKey: 'faqs.safeBooking.question',
      answerKey: 'faqs.safeBooking.answer',
    },
    {
      questionKey: 'faqs.bookAnytime.question',
      answerKey: 'faqs.bookAnytime.answer',
    },
    {
      questionKey: 'faqs.howToBook.question',
      answerKey: 'faqs.howToBook.answer',
    },
    {
      questionKey: 'faqs.payCash.question',
      answerKey: 'faqs.payCash.answer',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className='w-full flex flex-col gap-0 md:py-5 py-0'>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`py-6 ${
            index === faqData.length - 1 ? '' : 'border-b border-gray-300'
          } cursor-pointer`}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className='w-full flex justify-between items-center text-left cursor-pointer'
          >
            <span
              className={`text-sm md:text-base ${
                openIndex === index ? 'font-semibold' : 'font-normal'
              }`}
            >
              {t(faq.questionKey)}
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
                  {t(faq.answerKey)}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
