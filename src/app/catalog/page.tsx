'use client';
import { CatalogProps } from '@/types/catalog';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Catalog() {
  const [categories, setCategories] = useState<CatalogProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('api/catalog');
      if (!response.ok) throw new Error(`Помилка відповіді сервера ${response.status} `);
      const data: CatalogProps[] = await response.json();
      setCategories(data.sort((a, b) => a.order - b.order));
    } catch (error) {
      console.error('Не змогли отримати категорії', error);
      setError('Oй щось пішло не так');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (isLoading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <div className='text-error container p-4 text-4xl md:p-8 xl:p-10'>{error}</div>;
  }

  if (!categories.length) {
    return (
      <div className='text-light container p-4 text-4xl md:p-8 xl:p-10'>
        Категорій товарів не знайдено, спробуйте пізніше.
      </div>
    );
  }
  return (
    <section className='my-20 md:my-25 xl:my-30'>
      <div className='container'>
        <h1 className='text-surfaceTxt mb-5 text-2xl font-bold md:mb-8 xl:mb-10 xl:text-4xl'>Каталог товарів</h1>
        <ul className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4 xl:gap-8'>
          {categories.map(category => (
            <li
              key={category._id}
              className={`${category.mobileColSpan} ${category.tabletColSpan} ${category.colSpan} bg-light h-full min-h-50 overflow-hidden rounded`}
            >
              <Link
                href={`/catalog/${category.slug}`}
                className='group relative block h-full min-w-40 overflow-hidden text-center md:min-w-56 xl:min-w-68.5'
              >
                <Image
                  src={category.img}
                  alt={category.title}
                  fill
                  sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
                  className='object-cover transition-transform duration-300 group-hover:scale-105'
                />
                <div className='absolute inset-0 top-auto h-29.25 bg-[linear-gradient(180deg,rgba(112,192,91,0)_0%,rgba(112,192,145,0.83)_83%)] transition-all duration-300 group-hover:h-44.25 group-hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,rgba(255,102,51,1)_100%)]' />
                <h2 className='text-primaryTxt absolute bottom-2.5 left-2.5 text-lg font-bold'>{category.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
