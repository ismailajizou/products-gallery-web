import CategorySelect from '@/components/category-select';
import SearchBar from '@/components/search-bar';
import ProductsSection from '@/components/sections/products-section';
import SortSelect from '@/components/sort-select';
import useProducts from '@/hooks/useProducts';
import { CATEGORIES, SORT_OPTIONS } from '@/lib/constants';

const Home = () => {
  const { state, setCategory, setSort, setSearch, toggleFavorite } =
    useProducts();

  return (
    <main className="container mx-auto px-2 py-10 md:px-4">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Products</h1>
        <p className="text-gray-600">
          Discover our amazing collection of products
        </p>
      </div>

      {/* Enhanced filter section */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Filter & Search
        </h2>
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <SearchBar value={state.search} onChange={setSearch} />
          <CategorySelect
            value={state.category}
            onChange={setCategory}
            categories={CATEGORIES}
          />
          <SortSelect
            value={state.sort}
            onChange={setSort}
            sortOptions={SORT_OPTIONS}
          />
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
