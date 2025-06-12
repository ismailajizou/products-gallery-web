import ProductsSection from '@/components/sections/products-section';
import { useProductState } from '@/hooks/useProducts';
import { CATEGORIES, SORT_OPTIONS } from '@/lib/constants';
import type { Sort } from '@/types/products';

const Home = () => {
  const { products, isLoading, error, isError, category, setCategory, sort, setSort } = useProductState();

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Products</h1>

      {/* filter by category & sort by price */}
      <div className="mb-4 flex gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="w-full rounded-md border border-gray-300 p-2"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {CATEGORIES.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="sort">Sort by</label>
          <select
            id="sort"
            className="w-full rounded-md border border-gray-300 p-2"
            value={sort}
            onChange={e => setSort(e.target.value as Sort)}
          >
            {SORT_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Section */}
      <ProductsSection products={products} isLoading={isLoading} isError={isError} error={error} />
    </main>
  );
};

export default Home;
