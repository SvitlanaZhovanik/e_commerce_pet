import ViewAllLink from '@/components/mainPage/ViewAllLink';
import Article from '@/components/mainPage/Article';
import { ArticleProps } from '@/types/articles';
import { getArticles } from '@/utils/articlesApi';

export default async function Articles() {
  let articles: ArticleProps[] = [];
  try {
    articles = await getArticles();
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
          {articles.map(article => {
            return (
              <li key={article._id} className='h-75 md:h-105'>
                <Article {...article} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
