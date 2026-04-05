import ProductCard from '@/components/mainPage/ProductCard';
import { ProductCardProps } from '@/types/products';
import { getProductsByCategory } from '@/utils/productsApi';

export default async function NewItems() {
  let newProducts: ProductCardProps[] = [];
  let error = null;
  try {
    newProducts = (await getProductsByCategory('new')) as ProductCardProps[];
  } catch (err) {
    error = 'Помилка при отриманні нових продуктів';
    console.error('Помилка в секції нові продукти', err);
  }
  if (error) {
    return <div className='text-error container p-4 text-4xl md:p-8 xl:p-10'>{error}</div>;
  }
  return (
    <section className='mb-20 pt-8 md:mb-25 md:pt-10 xl:mb-30'>
      <div className='container'>
        <div className='mb-5 flex flex-row items-center justify-between md:mb-8 xl:mb-10'>
          <h1 className='text-surfaceTxt text-2xl font-bold xl:text-4xl'>Новинки</h1>
        </div>
        <ul className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:gap-10'>
          {newProducts.map((product: ProductCardProps) => {
            return (
              <li key={product.id}>
                <ProductCard {...product} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
