import { getUserPurchases } from '@/utils/purchasesApi';
import { ProductCardProps } from '@/types/products';
import ProductsSection from '@/components/ProductsSection';

export default async function OrderedBefore() {
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
    <ProductsSection
      title='Замовляли раніше'
      viewAllLink={{ name: 'На головну', href: '/' }}
      products={purchasedProducts}
    />
  );
}
