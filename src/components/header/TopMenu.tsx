import Link from 'next/link';
import IconMenu from '@/assets/icons/icon-menu.svg';
import IconFavorite from '@/assets/icons/icon-favorite.svg';
import IconBox from '@/assets/icons/icon-box.svg';
import IconShoppingCart from '@/assets/icons/icon-shopping-cart.svg';

const TopMenu = () => {
  return (
    <ul className='flex flex-row items-center gap-9 md:gap-6'>
      <li className='flex flex-col items-center gap-1 align-middle md:hidden'>
        <Link href='/catalog' className='delay-300 hover:text-(--color-primary) focus:text-(--color-primary)'>
          <IconMenu className='mx-auto h-6 w-6 object-contain' />
          <span className=''>Каталог</span>
        </Link>
      </li>
      <li className='flex flex-col items-center gap-1 align-middle'>
        <Link href='/favorite' className='delay-300 hover:text-(--color-primary) focus:text-(--color-primary)'>
          <IconFavorite className='fill-light mx-auto h-6 w-6 object-contain' />
          <span className=''>Улюблені</span>
        </Link>
      </li>

      <li className='flex flex-col items-center gap-1 align-middle'>
        <Link href='/orders' className='delay-300 hover:text-(--color-primary) focus:text-(--color-primary)'>
          <IconBox className='mx-auto h-6 w-6 object-contain' />
          <span className=''>Обране</span>
        </Link>
      </li>
      <li className='flex flex-col items-center gap-1'>
        <Link href='/cart' className='delay-300 hover:text-(--color-primary) focus:text-(--color-primary)'>
          <IconShoppingCart className='mx-auto h-6 w-6 object-contain' />
          <span className=''>Кошик</span>
        </Link>
      </li>
    </ul>
  );
};
export default TopMenu;
