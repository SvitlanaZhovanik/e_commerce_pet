import { GenericProductsListPageProps } from '@/types/genericProductsListPageProps';
import ProductsSection from './ProductsSection';
import PaginationWrapper from './PaginationWrapper';

const GenericProductsListPage = async ({
  searchParams,
  props,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
  props: GenericProductsListPageProps;
}) => {
  let products = [];
  let paginatedProducts = [];
  const params = await searchParams;
  const page = params?.page;
  const itemsPerPage = params?.itemsPerPage || 8;
  const currentPage = Number(page) || 1;
  const perPage = Number(itemsPerPage);
  const startIdx = (currentPage - 1) * perPage;
  try {
    products = await props.fetchData();
    paginatedProducts = products.slice(startIdx, startIdx + perPage);
  } catch {
    return <div className='text-error container p-4 text-4xl md:p-8 xl:p-10'>{props.errorMessage}</div>;
  }
  return (
    <>
      <ProductsSection
        title={props.pageTitle}
        viewAllLink={{ name: 'На головну', href: '/' }}
        products={paginatedProducts}
      />
      {products.length > perPage && (
        <PaginationWrapper totalItems={products.length} currentPage={currentPage} basePath={props.basePath} />
      )}
    </>
  );
};

export default GenericProductsListPage;
