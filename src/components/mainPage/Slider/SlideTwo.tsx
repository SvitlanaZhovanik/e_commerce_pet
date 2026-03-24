const SlideTwo = () => {
  return (
    <div className='flex h-20 flex-col justify-center overflow-hidden bg-green-400/30 bg-[url("/pattern-slideTwo.png")] bg-contain bg-repeat bg-blend-soft-light md:h-40 xl:h-50'>
      <h2 className='text-primary text-center text-2xl font-bold md:text-4xl xl:text-5xl'>
        Знижки до 30% на обрані товари!
      </h2>
      <p className='text-surfaceTxt hidden text-center text-lg md:block md:text-xl xl:text-2xl'>
        Не пропустіть можливість заощадити на улюблених продуктах. Акція діє до кінця місяця.
      </p>
    </div>
  );
};
export default SlideTwo;
