import { useQuery } from '@tanstack/react-query';
import { getAll } from '../services/products.service';

export const useGetProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getAll,
  });
};
