import { ArticleProps } from '@/types/articles';
import { getDB } from '@/utils/api-routes';
import { unstable_cache } from 'next/cache';

export const getArticles = unstable_cache(
  async () => {
    const db = await getDB();

    const articles = await db.collection('articles').find().toArray();
    const serializedArticles = articles.map(
      (article): ArticleProps =>
        ({
          ...article,
          _id: article._id.toString(),
        }) as ArticleProps,
    );
    return serializedArticles;
  },
  ['articles'],
  { revalidate: 3600 },
);
