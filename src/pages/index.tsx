import CardSkeleton from '@/components/card-skeleton'
import ProductCard from '@/components/product-card'
import { useGetProducts } from '@/queries/products.queries'

const Home = () => {
  const { data, isLoading, error, isError } = useGetProducts()
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Products</h1>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data!.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Home
