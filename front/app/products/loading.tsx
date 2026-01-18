import ProductCardSkeleton from "@/src/components/Skeletons/ProductCardSkeleton";
import { FaFilter } from "react-icons/fa";

export default function ProductsLoading() {
  return (
    <>
      <p className="text-gray-500 text-xs font-bold mb-4">Estamos cargando los productos financieros ofrecidos por FinColombia</p>
      <div className="flex xl:flex-row flex-col gap-5 items-start">
        <div className="flex flex-col gap-5 grow-0 shrink-0">
          <button className="text-xs font-bold hover:bg-primary/80 transition-all duration-300 hover:underline w-fit bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2">
            <FaFilter />
            Filtrar
          </button>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCardSkeleton key={`product-card-skeleton-${index}`} />
          ))}
        </ul>
      </div>
    </>
  );
}