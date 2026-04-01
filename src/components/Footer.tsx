import IconLogo from '@/assets/icons/icon-logo.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-(--color-background) bg-[url("/pattern-slider.png")] bg-repeat p-4 pb-18 bg-blend-lighten md:p-8 xl:p-10'>
      <div className='text-surfaceTxt container md:text-lg xl:text-xl'>
        <div className='mb-4 flex flex-col gap-4 md:flex-row md:justify-between'>
          <Link href='/' className='h-10 w-10 delay-300 hover:scale-120'>
            <IconLogo />
          </Link>
          <nav className='flex flex-row justify-center gap-4 text-center'>
            <Link href='/about' className='hover:text-primary delay-300'>
              Про компанію
            </Link>
            <Link href='/articles' className='hover:text-primary delay-300'>
              Новини
            </Link>
            <Link href='/contacts' className='hover:text-primary delay-300'>
              Контакти
            </Link>
          </nav>
        </div>
        <p className='border-t-light flex-1 border-t-2 pt-4 text-center md:pt-8 xl:pt-10'>
          &copy; {new Date().getFullYear()} Happy Face. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
