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
    <>
      <p className="text-gray-500 text-xs font-bold mb-4">Encontramos {products.length} productos</p>
      {products.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={`product-card-${product.id}`} product={product} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No encontramos ningún producto que coincida con tu búsqueda</p>
      )}
    </>
  );
}
