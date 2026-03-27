import Image from 'next/image';

const SlideOne = () => {
  return (
    <div className='relative flex h-20 justify-center overflow-hidden bg-white/80 bg-[url("/pattern-slider.png")] bg-repeat bg-blend-overlay md:h-40 xl:h-50'>
      <div className='relative z-10 flex flex-row items-center gap-x-2 xl:gap-x-4'>
        <div className='relative hidden md:top-7 md:block md:h-33 md:w-50 xl:h-50 xl:w-75'>
          <Image
            src='/products.png'
            alt='Зображення корзини зі свіжими продуктами'
            fill
            sizes='(max-width: 1200px) 75px, 100px'
            loading='eager'
          />
        </div>
        <h2 className='text-surfaceTxt text-center text-2xl font-bold md:text-4xl xl:text-5xl'>
          Доставка безкоштовно від 1500 грн.
        </h2>
      </div>
    </div>
  );
};
export default SlideOne;
