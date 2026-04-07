import ProductPageComponent from '@/components/ProductPageComponent';
import { ProductCardProps } from '@/types/products';
import { getProductsByCategory } from '@/utils/productsApi';

export default async function AllActionSection() {
  let actionsProducts: ProductCardProps[];

  try {
    actionsProducts = await getProductsByCategory('actions');
  } catch (err) {
    console.error('Помилка при отриманні акційних товарів:', err);
    return (
      <div className='text-error container p-4 text-4xl md:p-8 xl:p-10'>
        {'Не вдалося завантажити акційні товари. Спробуйте пізніше.'}
      </div>
    );
  }

  return (
    <ProductPageComponent title='Акції' viewAllLink={{ name: 'На головну', href: '/' }} products={actionsProducts} />
  );
}
