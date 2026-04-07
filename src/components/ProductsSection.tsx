import { ProductCardProps } from '@/types/products';
import ProductCard from './mainPage/ProductCard';
import ViewAllLink from './mainPage/ViewAllLink';

const ProductsSection = async ({
  products,
  viewAllLink,
  title,
  short = false,
}: {
  title: string;
  viewAllLink: {
    name: string;
    href: string;
  };
  products: ProductCardProps[];
  short?: boolean;
}) => {
  return (
    <section className={short ? 'mb-20 md:mb-25 xl:mb-30' : 'my-20 md:my-25 xl:my-30'}>
      <div className='container'>
        <div className='mb-5 flex flex-row items-center justify-between md:mb-8 xl:mb-10'>
          {short ? (
            <h2 className='text-surfaceTxt text-2xl font-bold xl:text-4xl'>{title}</h2>
          ) : (
            <h1 className='text-surfaceTxt text-2xl font-bold xl:text-4xl'>{title}</h1>
          )}
          <ViewAllLink href={viewAllLink.href} name={viewAllLink.name} />
        </div>
        <ul className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:gap-10'>
          {short
            ? products.slice(0, 4).map((product: ProductCardProps, index: number) => {
                return (
                  <li
                    key={product._id}
                    className={
                      short
                        ? `${index >= 4 ? 'hidden' : ''} ${index >= 3 ? 'md:hidden lg:block' : ''} ${index >= 4 ? 'lg:hidden' : ''} `
                        : ''
                    }
                  >
                    <ProductCard {...product} />
                  </li>
                );
              })
            : products.map((product: ProductCardProps) => {
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

export default ProductsSection;
