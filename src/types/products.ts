export interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  basePrice: number;
  discountPercentage?: number;
  rating: number;
  weight?: string;
  volume?: string;
  imageUrl: string;
}
