import Hero from './components/hero';
import AboutUs from './components/aboutUs';
import Testemonials from './components/testemonials';

export default function Home() {
  return (
    <div className='md:mt-[93px] mt-[83px] flex flex-col gap-20 justify-center items-center'>
      <Hero />
      <AboutUs />
      <Testemonials />
    </div>
  );
}
