import Link from 'next/link';
import ProductCart from './ProductCart';
import { ProductCardProps } from '@/types/products';
import ArrowDown from '@/assets/icons/icon-arrow-down.svg';
import { products } from '@/data/products.json';
import { users } from '@/data/users.json';

const OrderedBeforeSection = () => {
  const user = users[1];
  const productsPurchased = user.purchases
    .map(purchase => {
      const product = products.find(p => p.id === purchase.productId);
      if (!product) return null;
      return { ...product };
    })
    .filter(p => p !== null) as ProductCardProps[];

  return (
    <section className='mb-20 md:mb-25 xl:mb-30'>
      <div className='px-3 md:px-4 xl:mx-auto xl:max-w-302'>
        <div className='mb-5 flex flex-row items-center justify-between md:mb-8 xl:mb-10'>
          <h2 className='text-surfaceTxt text-2xl font-bold xl:text-4xl'>Замовляли раніше</h2>
          <Link href={'/new'} className='hover:text-primary focus:text-primary flex cursor-pointer gap-6 delay-300'>
            Всі замовлення <ArrowDown className='h-6 w-6 rotate-270' />
          </Link>
        </div>
        <ul className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:gap-10'>
          {productsPurchased.slice(0, 4).map((product: ProductCardProps, index: number) => {
            return (
              <li
                key={product.id}
                className={`${index >= 4 ? 'hidden' : ''} ${index >= 3 ? 'md:hidden lg:block' : ''} ${index >= 4 ? 'lg:hidden' : ''} `}
              >
                <ProductCart {...product} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OrderedBeforeSection;
