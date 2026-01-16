import ProductCard from "@/src/components/Products/ProductCard";
import { productsRepository } from "@/src/repositories/products.repository";

type ProductsPageProps = {
  searchParams: {
    search: string;
  };
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { search = "" } = await searchParams;

  const products = await productsRepository.getProducts(search);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
