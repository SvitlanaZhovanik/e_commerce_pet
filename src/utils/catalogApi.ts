import { getDB } from '@/utils/api-routes';
import { unstable_cache } from 'next/cache';

export const getCatalog = unstable_cache(
  async () => {
    const db = await getDB();

    const catalog = await db.collection('catalog').find().toArray();
    return catalog;
  },
  ['catalog'],
  { revalidate: 3600 },
);
