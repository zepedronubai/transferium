import Image from 'next/image';
import FaqsComponent from './faqs/faqsComponent';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it safe to book a Transfer Online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, booking with Transferium online is completely safe. We use secure systems to protect your personal information and payment details.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I book a Transfer Any Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our service is available 24/7. You can book any time that suits you.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book a Transfer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Booking is simple: just choose your pickup and drop-off locations and confirm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I pay using cash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we accept both cash and card payments.',
      },
    },
  ],
};

export default function Faqs() {
  return (
    <section
      id='faqs'
      className='flex md:flex-row flex-col w-full max-w-[1200px] items-center  md:gap-10 gap-0  md:px-4 px-2'
    >
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className='flex flex-col md:items-start items-center md:gap-4 gap-3 w-full'>
        <div className='flex flex-col  md:items-start items-center '>
          <div className='md:text-base text-xs font-bold text-customYellow'>
            FAQ&apos;S
          </div>
          <h2 className='md:text-2xl text-[20px] font-bold text-center text-black'>
            Frequently Asked Questions
          </h2>
        </div>
        <div className='font-light md:text-start text-center text-sm text-customGrayDarker'>
          Get to your destination without breaking the bank - affordable rates
          guaranteed!
        </div>
        <Image
          alt='Transferium private transfer service - frequently asked questions about booking'
          src={'/faqs.png'}
          width={1000}
          height={548}
          className='rounded-2xl md:max-w-[500px]'
        />
      </div>
      <FaqsComponent />
    </section>
  );
}
