import { getUserPurchases } from '@/utils/purchasesApi';
import GenericProductsListPage from '@/components/GenericProductsListPage';

export default async function OrderedBefore({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) {
  return (
    <GenericProductsListPage
      searchParams={searchParams}
      props={{
        fetchData: () => getUserPurchases(),
        pageTitle: 'Замовляли раніше',
        basePath: '/purchased',
        errorMessage: 'Йой, щось пішло не так, спробуй пізніше',
      }}
    />
  );
}
