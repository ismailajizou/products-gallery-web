import type { Product } from '@/types/products';
import type { FunctionComponent } from 'react';
import CardSkeleton from '../card-skeleton';
import ProductCard from '../product-card';

interface ProductsSectionProps {
  products: Product[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

const ProductsSection: FunctionComponent<ProductsSectionProps> = ({ products, isLoading, isError, error }) => {
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
    return <div>Error: {error?.message}</div>;
  }
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products!.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsSection;
