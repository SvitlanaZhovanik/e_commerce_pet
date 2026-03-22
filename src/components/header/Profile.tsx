import Image from 'next/image';
import ArrowDown from '@/assets/icons/icon-arrow-down.svg';

const Profile = () => {
  return (
    <div className='flex items-center gap-4'>
      <Image src='/header/avatar.jpg' alt='User Avatar' className='h-10 w-10 rounded-full' width={40} height={40} />
      <span className='hidden text-sm text-(--color-dark) xl:block'>Іван</span>
      <ArrowDown className='hidden h-6 w-6 xl:block' />
    </div>
  );
};
export default Profile;
