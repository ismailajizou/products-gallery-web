import type { SORT_OPTIONS } from '@/lib/constants';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductWithIsFavorite extends Product {
  isFavorite: boolean;
}

export type Sort = (typeof SORT_OPTIONS)[number]['value'];
