import ProductCard from '@/components/mainPage/ProductCard';
import ViewAllLink from '@/components/mainPage/ViewAllLink';
import { ProductCardProps } from '@/types/products';
import { getProductsByCategory } from '@/utils/productsApi';

export default async function AllActionSection() {
  let actionsProducts: ProductCardProps[] = [];
  let error: string | null = null;

  try {
    actionsProducts = await getProductsByCategory('actions');
  } catch (err) {
    console.error('Помилка при отриманні акційних товарів:', err);
    error = 'Не вдалося завантажити акційні товари. Спробуйте пізніше.';
  }

  if (error) {
    return <div className='text-error container p-4 text-4xl md:p-8 xl:p-10'>{error}</div>;
  }

  return (
    <section className='my-20 md:my-25 xl:my-30'>
      <div className='container'>
        <div className='mb-5 flex flex-row items-center justify-between md:mb-8 xl:mb-10'>
          <h1 className='text-surfaceTxt text-2xl font-bold xl:text-4xl'>Акції</h1>
          <ViewAllLink href='/' name='На головну' />
        </div>
        <ul className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:gap-10'>
          {actionsProducts.map((product: ProductCardProps) => {
            if (product.discountPercentage && product.discountPercentage > 0) {
              return (
                <li key={product._id}>
                  <ProductCard {...product} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}
