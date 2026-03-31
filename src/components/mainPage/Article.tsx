import Image from 'next/image';
import Link from 'next/link';
import { ArticleProps } from '@/types/articles';

const Article: React.FC<ArticleProps> = ({ _id, title, date, description, imgUrl }: ArticleProps) => {
  return (
    <article className='bg-surface flex h-full flex-col overflow-hidden rounded shadow-(--shadow-default) duration-300 hover:shadow-(--hover-shadow-card)'>
      <div className='relative h-48 w-full'>
        <Image
          src={imgUrl}
          alt={title}
          fill
          className='object-cover'
          sizes='(max-width: 640px) 100vw? (max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw'
        />
      </div>
      <div className='flex flex-1 flex-col gap-y-2.5 p-2.5 leading-normal'>
        <time className='text-dark text-[8px]'>{new Date(date).toLocaleDateString('uk-UA')}</time>
        <h3 className='text-surfaceTxt font-bold xl:text-lg'>{title}</h3>
        <p className='text-surfaceTxt line-clamp-3 text-xs xl:text-base'>{description}</p>
        <Link
          href={`/articles/article-${_id}`}
          className='text-secondary hover:bg-secondary hover:text-primaryTxt mt-auto flex h-10 w-37.5 items-center justify-center rounded bg-(--color-secondaryMuted) duration-300'
        >
          Детальніше
        </Link>
      </div>
    </article>
  );
};

export default Article;
