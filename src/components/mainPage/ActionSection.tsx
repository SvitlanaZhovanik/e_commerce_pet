import ProductCard from './ProductCard';
import { ProductCardProps } from '@/types/products';
import { products } from '@/data/products.json';
import Link from 'next/link';
import ArrowDown from '@/assets/icons/icon-arrow-down.svg';

const ActionSection = () => {
  const actionsProducts = products.filter(p => p.categories?.includes('actions'));
  return (
    <section className='mb-20 md:mb-25 xl:mb-30'>
      <div className='container'>
        <div className='mb-5 flex flex-row items-center justify-between md:mb-8 xl:mb-10'>
          <h2 className='text-surfaceTxt text-2xl font-bold xl:text-4xl'>Акції</h2>
          <Link href={'/actions'} className='hover:text-primary focus:text-primary flex cursor-pointer gap-6 delay-300'>
            Всі акції <ArrowDown className='h-6 w-6 rotate-270' />
          </Link>
        </div>
        <ul className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:gap-10'>
          {actionsProducts.slice(0, 4).map((product: ProductCardProps, index: number) => {
            if (product.discountPercentage && product.discountPercentage > 0) {
              return (
                <li
                  key={product.id}
                  className={`${index >= 4 ? 'hidden' : ''} ${index >= 3 ? 'md:hidden lg:block' : ''} ${index >= 4 ? 'lg:hidden' : ''} `}
                >
                  <ProductCard {...product} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
};

export default ActionSection;
