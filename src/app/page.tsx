import ActionSection from '@/components/mainPage/ActionSection';
import ArticlesSection from '@/components/mainPage/ArticlesSection';
import MapSection from '@/components/mainPage/MapSection';
import NewItemSection from '@/components/mainPage/NewItemSection';
import OrderedBeforeSection from '@/components/mainPage/OrderedBeforeSection';
import Slider from '@/components/mainPage/Slider/Slider';
import SpecialOffersSection from '@/components/mainPage/SpecialOffersSection';

export default function Home() {
  return (
    <>
      <h1 className='sr-only'>Головна сторінка магазину &#34;Happy Face&#34;</h1>
      <Slider />
      <ActionSection />
      <NewItemSection />
      <OrderedBeforeSection />
      <SpecialOffersSection />
      <MapSection />
      <ArticlesSection />
    </>
  );
}
