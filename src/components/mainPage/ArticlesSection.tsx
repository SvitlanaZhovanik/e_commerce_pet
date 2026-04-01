import ViewAllLink from './ViewAllLink';
import Article from './Article';
import { ArticleProps } from '@/types/articles';
import { getArticles } from '@/utils/articlesApi';

const ArticlesSection = async () => {
  let articles: ArticleProps[] = [];
  let error = null;
  try {
    articles = await getArticles();
  } catch (err) {
    error = 'Помилка при отриманні новин';
    console.error('Помилка в секції Новин', err);
  }
  if (error) {
    return <div className='text-error container p-4 text-4xl md:p-8 xl:p-10'>{error}</div>;
  }
  return (
    <section className='mb-20 md:mb-25 xl:mb-30'>
      <div className='container'>
        <div className='mb-5 flex flex-row items-center justify-between md:mb-8 xl:mb-10'>
          <h2 className='text-surfaceTxt text-2xl font-bold xl:text-4xl'>Новини</h2>
          <ViewAllLink href='articles' name='Всі новини' />
        </div>
        <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {articles.slice(0, 3).map(article => {
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
};
export default ArticlesSection;
