import LogoBlock from './LogoBlock';
import SearchBlock from './SearchBlock';
import UserBlock from './UserBlock';

const Header = () => {
  return (
    <header className='relative z-100 w-full bg-white md:fixed md:shadow-(--shadow-default)'>
      <div className='relative flex w-full flex-col items-center justify-center md:container md:flex-row md:gap-y-5 md:px-4 md:py-2'>
        <div className='flex w-full flex-row items-center gap-4 px-4 py-2 shadow-(--shadow-default) md:shadow-none xl:justify-between xl:gap-10'>
          <LogoBlock />
          <SearchBlock />
        </div>
        <UserBlock />
      </div>
    </header>
  );
};
export default Header;
