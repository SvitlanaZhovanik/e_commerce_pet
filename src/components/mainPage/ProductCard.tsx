import Image from 'next/image';
import IconFavorite from '@/assets/icons/icon-favorite.svg';
import { calculateFinalPrice, calculatePriceByCard } from '@/utils/productsFunction';
import { ProductCardProps } from '@/types/products';
import StarRating from './StarRating';
import Link from 'next/link';

const ProductCard: React.FC<ProductCardProps> = ({
  _id,
  imageUrl,
  title,
  basePrice,
  description,
  discountPercentage,
  rating,
}: ProductCardProps) => {
  return (
    <div className='bg-surface flex h-full min-h-85.75 flex-col justify-between overflow-hidden rounded p-0 align-top shadow-(--shadow-card) duration-300 hover:shadow-(--hover-shadow-card) md:h-[349px] xl:w-[272px]'>
      <div className='relative h-40 w-full'>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className='object-cover md:object-contain'
          sizes='(max-width:768px) 160px, (max-width: 1200px) 224px, 272px'
        />
        <Link
          className='absolute right-0 bottom-0 left-0 h-[80%]'
          href={`/products/${_id}`}
          aria-label={`Посилання на сторінку товару ${title}`}
        ></Link>
        <button className='bg-light text-surfaceTxt hover:text-primary focus:text-primary active:text-error absolute top-2 right-2 z-10 cursor-pointer rounded p-1 delay-300'>
          <IconFavorite className='h-6 w-6' />
        </button>
        {discountPercentage > 0 && (
          <div className='bg-primary text-surface absolute bottom-2.5 left-2.5 rounded px-2 py-1'>
            -{discountPercentage}%
          </div>
        )}
      </div>
      <div className='flex flex-col justify-between gap-y-2 p-2'>
        {calculateFinalPrice(basePrice, discountPercentage) != basePrice ? (
          <div className='flex flex-row items-end justify-between'>
            <div className='flex flex-col gap-x-1'>
              <div className='text-sm font-bold md:text-lg'>
                {calculatePriceByCard(basePrice, discountPercentage).toFixed(2)}₴
              </div>
              <p className='text-light text-[8px] md:text-xs'>З картою</p>
            </div>
            <div className='flex flex-col gap-x-1'>
              <div className='text-darkest text-sm line-through md:text-lg'>
                {calculateFinalPrice(basePrice, discountPercentage).toFixed(2)}₴
              </div>
              <p className='text-light text-right text-[8px] md:text-xs'>Звичайна</p>
            </div>
          </div>
        ) : (
          <div className='flex flex-col gap-x-1'>
            <div className='text-sm font-bold md:text-lg'>{basePrice.toFixed(2)}₴</div>
          </div>
        )}
        <Link href={`/products/${_id}`} aria-label={`Посилання на сторінку товару ${title}`}>
          <h3 className='text-surfaceTxt line-clamp-3 text-xs leading-normal md:line-clamp-2 md:text-base'>
            {description}
          </h3>
          {rating && (
            <div className='flex flex-row items-center justify-between'>
              <StarRating rating={rating} />
            </div>
          )}
        </Link>
        <button className='border-secondary hover:bg-primary hover:text-surface text-secondary h-10 w-full cursor-pointer items-center justify-center border p-2 transition-all delay-300 hover:border-transparent'>
          До кошика
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
