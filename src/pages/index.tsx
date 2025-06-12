import ProductsSection from '@/components/sections/products-section';
import useProducts from '@/hooks/useProducts';
import { CATEGORIES, SORT_OPTIONS } from '@/lib/constants';
import type { Sort } from '@/types/products';

const Home = () => {
  const { state, setCategory, setSort, setSearch, toggleFavorite } = useProducts();

  return (
    <main className="container mx-auto py-10 px-2 md:px-4">
      <h1 className="text-2xl font-bold">Products</h1>

      {/* filter by category & sort by price */}
      <div className="mb-4 flex flex-col gap-4 md:flex-row w-full">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            className="w-full rounded-md border border-gray-300 p-2"
            value={state.search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="w-full rounded-md border border-gray-300 p-2"
            value={state.category}
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
            value={state.sort}
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
      <ProductsSection
        products={state.products}
        isLoading={state.isLoading}
        isError={state.isError}
        error={state.error}
        toggleFavorite={toggleFavorite}
      />
    </main>
  );
};

export default Home;
