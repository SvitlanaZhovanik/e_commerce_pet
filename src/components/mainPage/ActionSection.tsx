import ProductCard from './ProductCard';
import { ProductCardProps } from '@/types/products';
import ViewAllLink from './ViewAllLink';
import { getProductsByCategory } from '@/utils/productsApi';

const ActionSection = async () => {
  let actionsProducts: ProductCardProps[] = [];
  let error: string | null = null;

  try {
    actionsProducts = await getProductsByCategory('actions');
  } catch (err) {
    console.error('Помилка при отриманні акцій:', err);
    error = 'Не вдалося завантажити акційні товари. Спробуйте пізніше.';
  }

  if (error) {
    return <div className='text-error container p-4 text-4xl md:p-8 xl:p-10'>{error}</div>;
  }

  return (
    <section className='mb-20 md:mb-25 xl:mb-30'>
      <div className='container'>
        <div className='mb-5 flex flex-row items-center justify-between md:mb-8 xl:mb-10'>
          <h2 className='text-surfaceTxt text-2xl font-bold xl:text-4xl'>Акції</h2>
          <ViewAllLink href='actions' name='Всі акції' />
        </div>
        <ul className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:gap-10'>
          {actionsProducts.slice(0, 4).map((product: ProductCardProps, index: number) => {
            if (product.discountPercentage && product.discountPercentage > 0) {
              return (
                <li
                  key={product._id}
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
