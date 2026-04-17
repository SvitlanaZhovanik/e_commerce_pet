import LinkSearch from './LinkSearch';
import InputSearch from './InputSearch';

const SearchBlock = () => {
  return (
    <nav className='flex w-full max-w-160 flex-row gap-4 text-white'>
      <LinkSearch />
      <InputSearch />
    </nav>
  );
};

export default SearchBlock;
