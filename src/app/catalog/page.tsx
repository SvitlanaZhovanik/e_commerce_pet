'use client';
import { CatalogProps } from '@/types/catalog';
import { useState, useEffect } from 'react';

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
  return <ul>Hi!</ul>;
}
