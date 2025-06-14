import { cn } from '@/lib/utils';
import type { Product } from '@/types/products';
import { Heart } from 'lucide-react';
import type { FunctionComponent } from 'react';

interface ProductCardProps {
  product: Product;
  toggleFavorite: (product: Product) => void;
  isFavorite: boolean;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({
  product,
  toggleFavorite,
  isFavorite,
}) => {
  return (
    <div className="relative max-w-sm rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
      {/* Heart Icon */}
      <button
        className="absolute top-2 right-2 z-10 rounded-full bg-white/80 p-2 shadow-sm transition-colors hover:bg-white"
        onClick={() => toggleFavorite(product)}
      >
        <Heart
          className={cn(
            'h-5 w-5 text-red-500 transition-colors',
            isFavorite && 'fill-red-500',
          )}
        />
      </button>

      <div className="flex flex-col">
        {/* Product Image */}
        <div className="relative mb-3">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full rounded-lg object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-2">
          {/* Category */}
          <span className="text-xs font-medium tracking-wide text-blue-600 uppercase">
            {product.category}
          </span>

          {/* Title */}
          <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">
            {product.title}
          </h3>

          {/* Description */}
          <p className="line-clamp-2 text-sm text-gray-600">
            {product.description}
          </p>

          {/* Price */}
          <div className="mt-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
