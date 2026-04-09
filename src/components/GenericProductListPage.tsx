import { GenericProductListPageProps } from '@/types/GenericProductListPageProps';
import ProductsSection from './ProductsSection';

const GenericProductListPage = async ({
  searchParams,
  props,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
  props: GenericProductListPageProps;
}) => {
  let paginatedProducts = [];
  const params = await searchParams;
  const page = params?.page;
  const itemsPerPage = params?.itemsPerPage || 6;
  const currentPage = Number(page) || 1;
  const perPage = Number(itemsPerPage);
  const startIdx = (currentPage - 1) * perPage;
  try {
    const products = await props.fetchData();
    paginatedProducts = products.slice(startIdx, startIdx + perPage);
  } catch {
    return <div className='text-error container p-4 text-4xl md:p-8 xl:p-10'>{props.errorMessage}</div>;
  }
  return (
    <ProductsSection
      title={props.pageTitle}
      viewAllLink={{ name: 'На головну', href: '/' }}
      products={paginatedProducts}
    />
  );
};

export default GenericProductListPage;
