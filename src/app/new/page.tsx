import ProductsSection from '@/components/ProductsSection';
import { ProductCardProps } from '@/types/products';
import { getProductsByCategory } from '@/utils/productsApi';

export default async function NewItems() {
  let newProducts: ProductCardProps[] = [];
  try {
    newProducts = (await getProductsByCategory('new')) as ProductCardProps[];
  } catch (err) {
    console.error('Помилка на сторінці нові продукти', err);
    return (
      <div className='text-error container p-4 text-4xl md:p-8 xl:p-10'>{'Помилка при отриманні нових продуктів'}</div>
    );
  }
  return <ProductsSection title='Новинки' viewAllLink={{ name: 'На головну', href: '/' }} products={newProducts} />;
}
