import Logo from '@/assets/icons/icon-logo.svg';
import Banner from '@/assets/background-banner.svg';

const SpecialOffersSection = () => {
  return (
    <section className='mb-20 md:mb-25 xl:mb-30'>
      <div className='container'>
        <h2 className='text-surfaceTxt mb-4 text-2xl font-bold md:mb-8 xl:mb-10 xl:text-4xl'>Спеціальні пропозиції</h2>
        <div className='flex flex-col gap-4 md:flex-2 md:flex-row md:gap-8 xl:gap-10'>
          <div className='text-surfaceTxt relative w-full overflow-hidden rounded bg-[#FCD5BA] px-4 py-4 shadow-(--hover-shadow-card) xl:px-8 xl:py-10'>
            <h3 className='mb-1.5 max-w-43.5 text-xl font-bold md:text-lg xl:max-w-64.5 xl:text-2xl'>
              Оформлюйте карту клієнта Happy Face
            </h3>
            <p className='line-clamp-3 max-w-40 text-xs xl:line-clamp-2 xl:max-w-64.5 xl:text-base'>
              Отримайте 6% знижку на всі покупки!
            </p>
            <div className='absolute -right-4 bottom-6 flex h-27.5 w-42 rotate-20 items-center justify-center rounded-[10px] bg-[url("/background-salecard.svg")] bg-cover bg-center p-2 shadow-(--saleCard) xl:right-10 xl:bottom-14 xl:h-35 xl:w-60 xl:rotate-14'>
              <Logo className='h-10 w-10' />
            </div>
          </div>
          <div className='text-surfaceTxt flex w-full justify-between rounded bg-[#E5FFDE] px-4 py-4 shadow-(--shadow-default) xl:px-10 xl:py-8'>
            <Banner className='h-35 w-30 shrink-0 xl:h-45 xl:w-40' />
            <div className='flex flex-col items-end justify-center gap-y-1.5 xl:gap-y-3'>
              <h3 className='mb-1.5 text-right text-xl font-bold md:text-lg xl:max-w-64.5 xl:text-2xl'>
                Купуйте акційні товари
              </h3>
              <p className='line-clamp-3 text-right text-xs md:line-clamp-2 xl:text-base'>
                Отримайте вдвічі більші бонуси!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
