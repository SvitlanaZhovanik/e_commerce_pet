import GenericProductsListPage from '@/components/GenericProductsListPage';
import { getProductsByCategory } from '@/utils/productsApi';

export default async function NewItems({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) {
  return (
    <GenericProductsListPage
      searchParams={searchParams}
      props={{
        fetchData: () => getProductsByCategory('new'),
        pageTitle: 'Новинки',
        basePath: '/new',
        errorMessage: 'Йой, щось пішло не так, спробуй пізніше',
      }}
    />
  );
}
