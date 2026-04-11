import GenericProductsListPage from '@/components/GenericProductsListPage';
import { getProductsByCategory } from '@/utils/productsApi';

export default async function AllAction({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) {
  return (
    <GenericProductsListPage
      searchParams={searchParams}
      props={{
        fetchData: () => getProductsByCategory('actions'),
        pageTitle: 'Акції',
        basePath: '/actions',
        errorMessage: 'Йой, щось пішло не так, спробуй пізніше',
      }}
    />
  );
}
