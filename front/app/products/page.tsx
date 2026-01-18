import ProductCard from "@/src/components/Products/ProductCard";
import SearchFilters from "@/src/components/Products/SearchFilters";
import { productsRepository } from "@/src/repositories/products.repository";

type ProductsPageProps = {
  searchParams: {
    search: string;
    sort?: string;
    order?: string;
    types?: string;
  };
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { search = "", sort = "", order = "asc", types = "" } = await searchParams;

  const products = await productsRepository.getProducts(search, sort, order, types);

  const { types: uniqueTypes } = await productsRepository.getFilters();

  return (
    <>
      <p className="text-gray-500 text-xs font-bold mb-4">Encontramos {products.length} productos</p>
      <div className="flex xl:flex-row flex-col gap-5 items-start">
        <div className="flex flex-col gap-5 w-full xl:w-[250px] 2xl:w-[300px]">
          <SearchFilters types={uniqueTypes} />
        </div>
        {products.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full ">
            {products.map((product) => (
              <ProductCard key={`product-card-${product.id}`} product={product} />
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No encontramos ningún producto que coincida con tu búsqueda</p>
        )}

      </div>
    </>
  );
}
