'use client';
import Link from 'next/link';
import { PaginationProps } from '@/types/pagination';

const Pagination = ({ totalItems, currentPage, basePath, itemsPerPage, searchQuery }: PaginationProps) => {
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  const params = new URLSearchParams(searchQuery);

  console.log(currentPage, itemsPerPage, totalItems);

  const createPageUrl = (page: number) => {
    const newParams = new URLSearchParams(params);
    newParams.set('page', page.toString());
    return `${basePath}?${newParams.toString()}`;
  };

  return (
    <div className='text-surfaceTxt mt-8 mb-10 flex justify-center gap-4'>
      <Link
        className={currentPage === 1 ? 'text-error cursor-not-allowed' : 'text-surfaceTxt cursor-pointer'}
        href={createPageUrl(currentPage - 1)}
        onClick={e => {
          if (currentPage === 1) e.preventDefault();
        }}
      >
        Назад
      </Link>
      <Link
        className={currentPage === totalPage ? 'text-error cursor-not-allowed' : 'text-surfaceTxt cursor-pointer'}
        href={createPageUrl(currentPage + 1)}
        onClick={e => {
          if (currentPage === totalPage) e.preventDefault();
        }}
      >
        Вперед
      </Link>
    </div>
  );
};

export default Pagination;
