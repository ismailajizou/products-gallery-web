import ProductCard from '@/components/product-card'
// import { useGetProducts } from '@/queries/products.queries'


const Home = () => {
  // const { data, isLoading, error } = useGetProducts();
  return (
    <main className="container mx-auto py-10">
      <ProductCard
        product={{
          id: 1,
          title: 'Product 1',
          price: 100,
          description: 'Product 1 description',
          category: 'Category 1',
          image: 'https://via.placeholder.com/150',
          rating: { rate: 4.5, count: 100 },
        }}
      />
    </main>
  )
}

export default Home
