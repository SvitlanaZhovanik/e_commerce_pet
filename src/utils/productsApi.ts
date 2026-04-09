import { getDB } from '@/utils/api-routes';
import { shuffleArray } from '@/utils/shuffleArray';
import { unstable_cache } from 'next/cache';
import { ProductCardProps } from '@/types/products';

export const getProductsByCategory = unstable_cache(
  async (category: string) => {
    if (!category) {
      throw new Error('Категорія є обовʼязковою');
    }

    const db = await getDB();

    const products = await db.collection('products').find({ categories: category }).toArray();
    const serializedProducts = products.map(
      (product): ProductCardProps =>
        ({
          ...product,
          _id: product._id.toString(),
        }) as ProductCardProps,
    );

    return serializedProducts;
  },
  ['products-by-category'],
  { revalidate: 3600 },
);
