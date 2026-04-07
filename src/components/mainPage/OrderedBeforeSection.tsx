import { getUserPurchases } from '@/utils/purchasesApi';
import { ProductCardProps } from '@/types/products';
import ProductsSection from './ProductsSection';

const OrderedBeforeSection = async () => {
  let purchasedProducts: ProductCardProps[] = [];
  try {
    purchasedProducts = await getUserPurchases();
  } catch (err) {
    console.error(err);
    return <div className='text-error p-8'>{'Не вдалося завантажити ваші покупки'}</div>;
  }

  if (purchasedProducts.length === 0) {
    return <div className='p-8 text-center'>У вас ще немає покупок</div>;
  }
  return (
    <ProductsSection
      title='Замовляли раніше'
      viewAllLink={{ name: 'Всі замовлення', href: '/purchased' }}
      products={purchasedProducts}
    />
  );
};

export default OrderedBeforeSection;
