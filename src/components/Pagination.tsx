'use client';
import Link from 'next/link';
import { PaginationProps } from '@/types/pagination';
import { createPageUrl, getVisiblePages } from '@/utils/pagination';

const Pagination = ({ totalItems, currentPage, basePath, itemsPerPage, searchQuery }: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const params = new URLSearchParams(searchQuery);
  const visiblePages = getVisiblePages(totalPages, currentPage);

  return (
    <div className='text-surfaceTxt mt-8 mb-10 flex justify-center gap-4'>
      <nav className='flex items-center gap-1 md:gap-2'>
        <Link
          className={
            currentPage === 1
              ? 'text-darkest bg-light cursor-not-allowed rounded px-4 py-2'
              : 'text-surfaceTxt bg-secondary hover:bg-primary hover:text-surface focus:text-surface focus:bg-primary cursor-pointer rounded px-4 py-2 delay-300'
          }
          href={createPageUrl(currentPage - 1, basePath, params)}
        >
          &lsaquo;
        </Link>
        {visiblePages.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`span-${index}`} className='flex h-5 w-5 items-center p-1 md:h-10'>
                ...
              </span>
            );
          }
          return (
            <Link
              key={page}
              href={createPageUrl(page as number, basePath, params)}
              className={`${currentPage === page ? 'bg-primary text-surface border-transparent' : ''} border-secondary hover:bg-primary hover:text-surface focus:text-surface focus:bg-primary flex h-7 w-7 cursor-pointer items-center justify-center rounded border duration-300 hover:border-transparent focus:border-transparent md:h-10 md:w-10`}
            >
              {page}
            </Link>
          );
        })}
        <Link
          className={
            currentPage === totalPages
              ? 'text-darkest bg-light cursor-not-allowed rounded px-4 py-2'
              : 'text-surfaceTxt bg-secondary hover:bg-primary hover:text-surface focus:text-surface focus:bg-primary cursor-pointer rounded px-4 py-2 delay-300'
          }
          href={createPageUrl(currentPage + 1, basePath, params)}
        >
          &rsaquo;
        </Link>
      </nav>
    </div>
  );
};

export default Pagination;
