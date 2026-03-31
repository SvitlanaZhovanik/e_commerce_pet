export interface ProductCardProps {
  _id: string;
  id: number;
  title: string;
  description: string;
  basePrice: number;
  discountPercentage: number;
  rating: number;
  weight?: string;
  volume?: string;
  imageUrl: string;
  categories?: string[];
}
