'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { debounce } from '@/utils/debounce';
import Pagination from './Pagination';

function getItemsPerPageByWidth() {
  const width = window.innerWidth;
  if (width < 768) return 4;
  if (width < 1280) return 6;
  return 8;
}

const PaginationWrapper = ({
  totalItems,
  currentPage,
  basePath,
}: {
  totalItems: number;
  currentPage: number;
  basePath: string;
}) => {
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const updateItemsPerPage = () => {
      const newItemsPerPage = getItemsPerPageByWidth();
      if (newItemsPerPage === itemsPerPage) return;
      setItemsPerPage(newItemsPerPage);
      const params = new URLSearchParams(searchParams.toString());
      params.set('itemsPerPage', newItemsPerPage.toString());
      params.set('page', '1');
      router.replace(`${basePath}?${params.toString()}`, { scroll: false });
    };
    updateItemsPerPage();

    const handleResize = debounce(updateItemsPerPage, 200);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerPage, searchParams, basePath, router]);
  return (
    <>
      <Pagination
        totalItems={totalItems}
        currentPage={currentPage}
        basePath={basePath}
        itemsPerPage={itemsPerPage}
        searchQuery={searchParams.toString()}
      />
    </>
  );
};

export default PaginationWrapper;
