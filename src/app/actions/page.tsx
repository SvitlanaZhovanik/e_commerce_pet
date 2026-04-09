import GenericProductListPage from '@/components/GenericProductListPage';
import { getProductsByCategory } from '@/utils/productsApi';

export default async function AllAction({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) {
  return (
    <GenericProductListPage
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
