import Link from 'next/link';
import ArrowDown from '@/assets/icons/icon-arrow-down.svg';

const ViewAllLink = ({ href, name }: { href: string; name: string }) => {
  return (
    <Link href={href} className='hover:text-primary focus:text-primary flex cursor-pointer gap-6 delay-300'>
      {name} <ArrowDown className='h-6 w-6 rotate-270' />
    </Link>
  );
};

export default ViewAllLink;
