import LogoBlock from './LogoBlock';
import SearchBlock from './SearchBlock';
import UserBlock from './UserBlock';

const Header = () => {
  return (
    <header className='relative z-10 flex w-full flex-col items-center justify-center bg-white md:flex-row md:gap-y-5 md:px-4 md:py-2 md:shadow-(--shadow-default) xl:gap-y-7'>
      <div className='flex w-full flex-row items-center gap-4 px-4 py-2 shadow-(--shadow-default) md:shadow-none xl:justify-evenly xl:gap-10'>
        <LogoBlock />
        <SearchBlock />
      </div>
      <UserBlock />
    </header>
  );
};
export default Header;
