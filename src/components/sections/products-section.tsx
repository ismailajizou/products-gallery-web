import type { Product } from '@/types/products';
import type { FunctionComponent } from 'react';
import CardSkeleton from '../card-skeleton';
import ProductCard from '../product-card';

interface ProductsSectionProps {
  products: Product[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  toggleFavorite: (product: Product) => void;
  favorites: number[];
}

const ProductsSection: FunctionComponent<ProductsSectionProps> = ({
  products,
  isLoading,
  isError,
  error,
  toggleFavorite,
  favorites,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 10 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-red-200 bg-red-50 p-6">
        <h1 className="text-2xl font-bold text-red-700">Error</h1>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products!.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.includes(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductsSection;
