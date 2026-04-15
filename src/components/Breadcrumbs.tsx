'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PATH_TRANSLATIONS } from '@/utils/pathTranslations';
import ArrowDown from '@/assets/icons/icon-arrow-down.svg';

const Breadcrumbs = () => {
  const pathname = usePathname();
  if (pathname === '/') return null;
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    return {
      label: PATH_TRANSLATIONS[segment] || segment,
      href,
      isLast: index === pathSegments.length - 1,
    };
  });
  breadcrumbs.unshift({
    label: 'Головна',
    href: '/',
    isLast: false,
  });

  return (
    <nav className='container mt-4 md:mt-8 xl:mt-10'>
      <ul className='flex flex-row gap-6'>
        {breadcrumbs.map((item, index) => {
          return (
            <li key={index} className='flex flex-row gap-6'>
              {item.isLast ? (
                <span className='text-light'>{item.label}</span>
              ) : (
                <Link href={item.href} className='text-surfaceTxt flex gap-6 duration-300 hover:underline'>
                  {item.label}
                  <ArrowDown className='h-6 w-6 rotate-270' />
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
