import IconMenu from '@/assets/icons/icon-menu.svg';

const ButtonSearch = () => {
  return (
    <button
      className='hidden cursor-pointer rounded text-(--color-primaryTxt) delay-300 md:flex md:w-10 md:bg-(--color-secondary) md:p-2 xl:w-35 xl:gap-6 xl:hover:shadow-(--shadow-hover)'
      aria-label='Меню каталогу'
    >
      <IconMenu className='h-6 w-6 fill-white' />
      <span className='hidden xl:inline-block xl:text-base xl:text-(--color-primaryTxt)'>Каталог</span>
    </button>
  );
};

export default ButtonSearch;
