import Image from 'next/image';

const SearchBlock = () => {
  return (
    <div className='flex grow flex-row gap-4'>
      <button
        className='hidden cursor-pointer rounded md:flex md:bg-(--color-secondary) md:p-2'
        aria-label='Меню каталогу'
      >
        <Image src='/header/icon-menu.svg' alt='Меню каталогу' width={24} height={24} className='h-6 w-6 shrink-0' />
        <span className='hidden xl:inline-block'>Каталог</span>
      </button>
    </div>
  );
};

export default SearchBlock;
