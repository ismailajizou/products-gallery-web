import ProductsSection from '@/components/sections/products-section'
import { useGetProducts } from '@/queries/products.queries'
import type { Product } from '@/types/products'
import { useMemo, useState } from 'react'

const categories = [
  { label: 'All', value: '' },
  { label: 'Electronics', value: 'electronics' },
  { label: 'Jewelery', value: 'jewelery' },
  { label: "Men's Clothing", value: "men's clothing" },
  { label: "Women's Clothing", value: "women's clothing" },
]
const sortOptions = [
  { label: 'Price: Low to High', value: 'asc' },
  { label: 'Price: High to Low', value: 'desc' },
] as const

type Sort = (typeof sortOptions)[number]['value']
const sortedByPrice = (products: Product[], direction: Sort) => {
  return products.sort((a, b) => {
    if (direction === 'asc') {
      return a.price - b.price
    }
    return b.price - a.price
  })
}

const filteredByCategory = (products: Product[], category: string) => {
  return products.filter(product => product.category === category)
}
const Home = () => {
  const { data, isLoading, error, isError } = useGetProducts()
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState<Sort>('asc')

  const products = useMemo(() => {
    if (data) {
      let filteredProducts = data
      if (category) {
        filteredProducts = filteredByCategory(filteredProducts, category)
      }
      if (sort) {
        filteredProducts = sortedByPrice(filteredProducts, sort)
      }
      return filteredProducts
    }
    return []
  }, [data, category, sort])

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Products</h1>

      {/* filter by category & sort by price */}
      <div className="flex gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="w-full rounded-md border border-gray-300 p-2"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {categories.map(category => (
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
            {sortOptions.map(option => (
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
  )
}

export default Home
