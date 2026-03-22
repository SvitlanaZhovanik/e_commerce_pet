import Link from 'next/link';
import Logo from '@/assets/icons/icon-logo.svg';

const LogoBlock: React.FC = () => {
  return (
    <Link href='/' className='block shrink-0 cursor-pointer pt-1 pl-1 delay-300 hover:scale-110'>
      <Logo className='h-8 w-10 md:h-10 md:w-12.25 xl:h-8 xl:w-10' />
    </Link>
  );
};

export default LogoBlock;
