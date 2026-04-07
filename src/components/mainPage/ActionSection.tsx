import { ProductCardProps } from '@/types/products';
import { getProductsByCategory } from '@/utils/productsApi';
import ProductsSection from '../ProductsSection';

const ActionSection = async () => {
  let actionsProducts: ProductCardProps[] = [];
  try {
    actionsProducts = await getProductsByCategory('actions');
  } catch (err) {
    console.error('Помилка при отриманні акцій:', err);
    return (
      <div className='text-error container p-4 text-4xl md:p-8 xl:p-10'>
        {'Не вдалося завантажити акційні товари. Спробуйте пізніше.'}
      </div>
    );
  }

  return (
    <ProductsSection
      title='Акції'
      viewAllLink={{ name: 'Всі акції', href: '/actions' }}
      products={actionsProducts}
      short
    />
  );
};

export default ActionSection;
