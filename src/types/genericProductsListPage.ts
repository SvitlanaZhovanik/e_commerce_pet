import { ProductCardProps } from './products';

export interface GenericProductsListPageProps {
  fetchData: () => Promise<ProductCardProps[]>;
  pageTitle: string;
  basePath: string;
  errorMessage: string;
}
