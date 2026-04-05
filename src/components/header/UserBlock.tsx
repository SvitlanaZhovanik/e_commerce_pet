import Profile from './Profile';
import TopMenu from './TopMenu';

const UserBlock = () => {
  return (
    <div className='fixed right-0 bottom-0 left-0 z-50 flex h-14 w-full flex-row items-center justify-center gap-8 bg-(--color-surface) px-4 py-2 text-[8px] shadow-(--shadow-default) md:static md:z-0 md:h-auto md:justify-end md:gap-x-10 md:text-[12px] md:shadow-none xl:gap-x-20'>
      <TopMenu />
      <Profile />
    </div>
  );
};
export default UserBlock;
