import type { Product, ProductWithIsFavorite } from '@/types/products';
import type { FunctionComponent } from 'react';
import CardSkeleton from '../card-skeleton';
import ProductCard from '../product-card';

interface ProductsSectionProps {
  products: ProductWithIsFavorite[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  toggleFavorite: (product: Product) => void;
}

const ProductsSection: FunctionComponent<ProductsSectionProps> = ({
  products,
  isLoading,
  isError,
  error,
  toggleFavorite,
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
      <div className="flex flex-col items-center justify-center gap-4 p-6 bg-red-50 border border-red-200 rounded-lg">
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
        />
      ))}
    </div>
  );
};

export default ProductsSection;
