import ActionSection from '@/components/mainPage/ActionSection';
import Slider from '@/components/mainPage/Slider/Slider';

export default function Home() {
  return (
    <>
      <h1 className='sr-only'>Головна сторінка магазину &#34;Happy Face&#34;</h1>
      <Slider />
      <ActionSection />
    </>
  );
}
