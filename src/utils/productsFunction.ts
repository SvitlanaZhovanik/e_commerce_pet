const cardDiscount: number = 6;

const calculateFinalPrice = (price: number, discount: number): number => {
  if (discount < 0 || discount > 100) {
    throw new Error('Discount must be between 0 and 100');
  }
  const finalPrice = price * (1 - discount / 100);
  return parseFloat(finalPrice.toFixed(2));
};

const calculatePriceByCard = (price: number, discount: number): number => {
  const finalPrice = calculateFinalPrice(price, discount);
  const finalPriceWithCard = calculateFinalPrice(finalPrice, cardDiscount);
  return finalPriceWithCard;
};

export { calculateFinalPrice, calculatePriceByCard };
