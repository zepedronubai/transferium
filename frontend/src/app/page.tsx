import Hero from './components/hero';
import AboutUs from './components/aboutUs';
import Testemonials from './components/testemonials';
import WhyUs from './components/whyUs';
import Faqs from './components/faqs';

export default function Home() {
  return (
    <div className='md:mt-[93px] mt-[83px] flex flex-col md:gap-36 gap-20 justify-center items-center'>
      <Hero />
      <AboutUs />
      <Testemonials />
      <WhyUs />
      <Faqs />
    </div>
  );
}
