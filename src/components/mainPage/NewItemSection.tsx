import { ProductCardProps } from '@/types/products';
import { getProductsByCategory } from '@/utils/productsApi';
import ProductsSection from '../ProductsSection';
import { shuffleArray } from '@/utils/shuffleArray';

const NewItemSection = async () => {
  let newProducts: ProductCardProps[] = [];
  try {
    newProducts = (await getProductsByCategory('new')) as ProductCardProps[];
    newProducts = shuffleArray(newProducts);
  } catch (err) {
    console.error('Помилка в секції нові продукти', err);
    return (
      <div className='text-error container p-4 text-4xl md:p-8 xl:p-10'>{'Помилка при отриманні нових продуктів'}</div>
    );
  }

  return (
    <ProductsSection title='Новинки' viewAllLink={{ name: 'Всі новинки', href: '/new' }} products={newProducts} short />
  );
};
export default NewItemSection;
