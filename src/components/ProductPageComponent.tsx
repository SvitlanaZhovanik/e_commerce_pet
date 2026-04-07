import { ProductCardProps } from '@/types/products';
import ViewAllLink from './mainPage/ViewAllLink';
import ProductCard from './mainPage/ProductCard';

const ProductPageComponent = ({
  title,
  viewAllLink,
  products,
}: {
  title: string;
  viewAllLink: { name: string; href: string };
  products: ProductCardProps[];
}) => {
  return (
    <section className='my-20 md:my-25 xl:my-30'>
      <div className='container'>
        <div className='mb-5 flex flex-row items-center justify-between md:mb-8 xl:mb-10'>
          <h1 className='text-surfaceTxt text-2xl font-bold xl:text-4xl'>{title}</h1>
          <ViewAllLink href={viewAllLink.href} name={viewAllLink.name} />
        </div>
        <ul className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:gap-10'>
          {products.map((product: ProductCardProps) => {
            return (
              <li key={product.id}>
                <ProductCard {...product} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProductPageComponent;
