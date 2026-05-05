import { getDB } from '@/utils/api-routes';
import { GetProductsOptions } from '@/types/productsApi';
import { ProductCardProps } from '@/types/products';

export const getProductsByCategory = async (category: string, options: GetProductsOptions = {}) => {
  const db = await getDB();
  const { limit, random } = options;

  if (random && limit) {
    const products = await db
      .collection('products')
      .aggregate([{ $match: { categories: category } }, { $sample: { size: limit } }])
      .toArray();
    return products.map(
      (product): ProductCardProps =>
        ({
          ...product,
          _id: product._id.toString(),
        }) as ProductCardProps,
    );
  }

  let query = db.collection('products').find({ categories: category });

  if (limit) query = query.limit(limit);
  const products = await query.toArray();
  return products.map(
    (product): ProductCardProps =>
      ({
        ...product,
        _id: product._id.toString(),
      }) as ProductCardProps,
  );
};
