import IconSearch from '@/assets/icons/icon-search.svg';

const InputSearch = () => {
  return (
    <div className='relative flex max-w-[471px] min-w-[261px] grow'>
      <input
        type='text'
        placeholder='Пошук товарів...'
        className='w-full rounded border border-(--color-secondary) bg-transparent px-4 py-2 text-base text-(--color-dark) placeholder:text-(--color-dark) hover:shadow-(--shadow-hover) focus:shadow-(--shadow-hover)'
      />
      <button
        className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded p-1 hover:bg-(--color-secondary)'
        aria-label='Пошук'
      >
        <IconSearch className='h-6 w-6' />
      </button>
    </div>
  );
};
export default InputSearch;
