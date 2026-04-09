import { ProductCardProps } from './products';

export interface GenericProductListPageProps {
  fetchData: () => Promise<ProductCardProps[]>;
  pageTitle: string;
  basePath: string;
  errorMessage: string;
}
