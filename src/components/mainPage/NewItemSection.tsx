import ProductCard from './ProductCard';
import { ProductCardProps } from '@/types/products';
import ViewAllLink from './ViewAllLink';
import { shuffleArray } from '@/utils/shuffleArray';

const NewItemSection = async () => {
  let newProducts: ProductCardProps[] = [];
  let error = null;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/products?category=new`);
    newProducts = await res.json();
    newProducts = shuffleArray(newProducts);
  } catch (err) {
    error = 'Помилка при отриманні нових продуктів';
    console.error('Помилка в секції нові продукти', err);
  }
  if (error) {
    return <div className='text-error container p-4 text-4xl md:p-8 xl:p-10'>{error}</div>;
  }
  return (
    <section className='mb-20 md:mb-25 xl:mb-30'>
      <div className='container'>
        <div className='mb-5 flex flex-row items-center justify-between md:mb-8 xl:mb-10'>
          <h2 className='text-surfaceTxt text-2xl font-bold xl:text-4xl'>Новинки</h2>
          <ViewAllLink href='/new' name='Всі новинки' />
        </div>
        <ul className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:gap-10'>
          {newProducts.slice(0, 4).map((product: ProductCardProps, index: number) => {
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
export default NewItemSection;
