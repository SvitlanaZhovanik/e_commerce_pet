import { ProductCardProps } from '@/types/products';
import { getDB } from '@/utils/api-routes';

export async function getUserPurchases() {
  try {
    const db = await getDB();
    const user = await db.collection('users').findOne({});

    if (!user?.purchases?.length) {
      return [];
    }

    const productsIds = user.purchases.map((p: { productId: number }) => p.productId);

    const products = await db
      .collection('products')
      .find({ id: { $in: productsIds } })
      .toArray();

    return products.map(
      (product): ProductCardProps =>
        ({
          ...product,
          _id: product._id.toString(),
        }) as ProductCardProps,
    );
  } catch (error) {
    console.error('Помилка при отриманні покупок:', error);
    throw error;
  }
}
