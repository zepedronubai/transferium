import { Metadata } from 'next';
import Hero from './components/hero';
import AboutUs from './components/aboutUs';
import Testemonials from './components/testemonials';
import WhyUs from './components/whyUs';
import Faqs from './components/faqs';

const metaByLang: Record<string, { title: string; description: string; locale: string }> = {
  en: {
    title: 'Transferium | Private Transfers in Portugal – Airport & Hotel Rides',
    description:
      'Book private airport and hotel transfers across Portugal. Fixed prices, professional drivers, 24/7 availability. Faro, Lisbon, Porto and more.',
    locale: 'en_US',
  },
  pt: {
    title: 'Transferium | Transfers Privados em Portugal – Aeroporto e Hotel',
    description:
      'Reserve transfers privados para aeroporto e hotel em todo Portugal. Preços fixos, motoristas profissionais, disponibilidade 24/7. Faro, Lisboa, Porto e mais.',
    locale: 'pt_PT',
  },
  es: {
    title: 'Transferium | Transfers Privados en Portugal – Aeropuerto y Hotel',
    description:
      'Reserva transfers privados a aeropuertos y hoteles en todo Portugal. Precios fijos, conductores profesionales, disponibilidad 24/7. Faro, Lisboa, Oporto y más.',
    locale: 'es_ES',
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lng?: string }>;
}): Promise<Metadata> {
  const { lng } = await searchParams;
  const lang = lng && metaByLang[lng] ? lng : 'en';
  const { title, description, locale } = metaByLang[lang];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://www.transferium.online',
      siteName: 'Transferium',
      images: [
        {
          url: 'https://www.transferium.online/twitter.avif',
          width: 1200,
          height: 630,
          alt: 'Transferium - Premium Private Transfer Service in Portugal',
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.transferium.online/twitter.avif'],
    },
  };
}

export default function Home() {
  return (
    <div className='md:mt-[92px] mt-[72px] flex flex-col md:gap-36 gap-20 justify-center items-center'>
      <Hero />
      <AboutUs />
      <Testemonials />
      <WhyUs />
      <Faqs />
    </div>
  );
}
