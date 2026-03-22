import Link from 'next/link';
import Image from 'next/image';

const LogoBlock: React.FC = () => {
  return (
    <Link href='/' className='cursor-pointer'>
      <Image
        src='/header/icon-logo.svg'
        alt='Логотип'
        width={49}
        height={40}
        className='h-8 w-10 md:h-10 md:w-12.25 xl:h-8 xl:w-10'
      />
    </Link>
  );
};

export default LogoBlock;
