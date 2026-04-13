import ViewAllLink from '@/components/mainPage/ViewAllLink';
import Article from '@/components/mainPage/Article';
import { ArticleProps } from '@/types/articles';
import { getArticles } from '@/utils/articlesApi';
import PaginationWrapper from '@/components/PaginationWrapper';

export default async function Articles({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) {
  let articles: ArticleProps[] = [];
  let paginatedArticles = [];
  const params = await searchParams;
  const page = params?.page;
  const itemsPerPage = params?.itemsPerPage || 8;
  const currentPage = Number(page) || 1;
  const perPage = Number(itemsPerPage);
  const startIdx = (currentPage - 1) * perPage;
  try {
    articles = await getArticles();
    paginatedArticles = articles.slice(startIdx, startIdx + perPage);
  } catch (err) {
    console.error('Помилка на сторінці Новин', err);
    return <div className='text-error container p-4 text-4xl md:p-8 xl:p-10'>{'Помилка при отриманні всіх новин'}</div>;
  }

  return (
    <section className='my-20 md:my-25 xl:my-30'>
      <div className='container'>
        <div className='mb-5 flex flex-row items-center justify-between md:mb-8 xl:mb-10'>
          <h2 className='text-surfaceTxt text-2xl font-bold xl:text-4xl'>Новини</h2>
          <ViewAllLink href='/' name='На головну' />
        </div>
        <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {paginatedArticles.map(article => {
            return (
              <li key={article._id} className='h-75 md:h-105'>
                <Article {...article} />
              </li>
            );
          })}
        </ul>
        {articles.length > perPage && (
          <PaginationWrapper totalItems={articles.length} currentPage={currentPage} basePath={'/articles'} />
        )}
      </div>
    </section>
  );
}
