import Link from 'next/link';
import ArrowDown from '@/assets/icons/icon-arrow-down.svg';
import Article from './Article';
import { articles } from '@/data/articles.json';

const ArticlesSection = () => {
  return (
    <section className='mb-20 md:mb-25 xl:mb-30'>
      <div className='px-3 md:px-4 xl:mx-auto xl:max-w-302'>
        <div className='mb-5 flex flex-row items-center justify-between md:mb-8 xl:mb-10'>
          <h2 className='text-surfaceTxt text-2xl font-bold xl:text-4xl'>Новини</h2>
          <Link
            href={'/articles'}
            className='hover:text-primary focus:text-primary flex cursor-pointer gap-6 delay-300'
          >
            Всі новини <ArrowDown className='h-6 w-6 rotate-270' />
          </Link>
        </div>
        <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {articles.map(article => {
            return (
              <li key={article.id} className='h-75 md:h-105'>
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
