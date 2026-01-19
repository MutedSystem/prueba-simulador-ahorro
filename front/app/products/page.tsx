import ProductCard from "@/src/components/Products/ProductCard";
import SearchFilters from "@/src/components/Products/SearchFilters";
import { productsRepository } from "@/src/repositories/products.repository";
import { Suspense } from "react";
import { FaFilter } from "react-icons/fa";

type ProductsPageProps = {
  searchParams: {
    search: string;
    sort?: string;
    order?: string;
    types?: string;
    currencies?: string;
    minAmount?: number;
    maxAmount?: number;
  };
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const {
    search = "",
    sort = "",
    order = "asc",
    types = "",
    currencies = "",
    minAmount = "",
    maxAmount = ""
  } = await searchParams;

  const products = await productsRepository.getProducts(search, sort, order, types, currencies, Number(minAmount), Number(maxAmount));

  const {
    types: uniqueTypes,
    currencies: uniqueCurrencies,
    minAmount: minAmountNumber,
    maxAmount: maxAmountNumber
  } = await productsRepository.getFilters();

  return (
    <>
      <p className="text-gray-500 text-xs font-bold mb-4">Encontramos {products.length} productos</p>
      <div className="flex xl:flex-row flex-col gap-5 items-start">
        <div className="flex flex-col gap-5 grow-0 shrink-0">
          <Suspense fallback={
            <div className="flex flex-col gap-5 grow-0 shrink-0">
              <button className="text-xs font-bold hover:bg-primary/80 transition-all duration-300 hover:underline w-fit bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2">
                <FaFilter />
                Filtrar
              </button>
            </div>
          }>
            <SearchFilters types={uniqueTypes} currencies={uniqueCurrencies} minAmount={minAmountNumber} maxAmount={maxAmountNumber} />
          </Suspense>
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
