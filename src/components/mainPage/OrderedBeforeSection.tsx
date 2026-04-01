import { getUserPurchases } from '@/utils/purchasesApi';
import ProductCard from './ProductCard';
import ViewAllLink from './ViewAllLink';
import { ProductCardProps } from '@/types/products';

const OrderedBeforeSection = async () => {
  let purchasedProducts: ProductCardProps[] = [];
  let error = null;
  try {
    purchasedProducts = await getUserPurchases();
  } catch (err) {
    console.error(err);
    error = 'Не вдалося завантажити ваші покупки';
  }

  if (error) {
    return <div className='text-error p-8'>{error}</div>;
  }

  if (purchasedProducts.length === 0) {
    return <div className='p-8 text-center'>У вас ще немає покупок</div>;
  }
  return (
    <section className='mb-20 md:mb-25 xl:mb-30'>
      <div className='container'>
        <div className='mb-5 flex flex-row items-center justify-between md:mb-8 xl:mb-10'>
          <h2 className='text-surfaceTxt text-2xl font-bold xl:text-4xl'>Замовляли раніше</h2>
          <ViewAllLink href='/my-orders' name='Всі замовлення' />
        </div>
        <ul className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:gap-10'>
          {purchasedProducts.slice(0, 4).map((product: ProductCardProps, index: number) => {
            return (
              <li
                key={product.id}
                className={`${index >= 4 ? 'hidden' : ''} ${index >= 3 ? 'md:hidden lg:block' : ''} ${index >= 4 ? 'lg:hidden' : ''} `}
              >
                <ProductCard {...product} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OrderedBeforeSection;
