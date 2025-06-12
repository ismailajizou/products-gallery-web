import { useGetProducts } from '@/queries/products.queries';
import { useMemo, useState } from 'react';

export const useProductState = () => {
  const { data, isLoading, error, isError } = useGetProducts();
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState<Sort>('asc');

  const products = useMemo(() => {
    if (data) {
      let filteredProducts = data;
      if (category) {
        filteredProducts = filteredByCategory(filteredProducts, category);
      }
      if (sort) {
        filteredProducts = sortedByPrice(filteredProducts, sort);
      }
      return filteredProducts;
    }

    return [];
  }, [data, category, sort]);

  return { products, isLoading, error, isError, category, setCategory, sort, setSort };
};
