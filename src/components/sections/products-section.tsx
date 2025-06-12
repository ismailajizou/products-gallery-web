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
    return <div>Error: {error}</div>;
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
