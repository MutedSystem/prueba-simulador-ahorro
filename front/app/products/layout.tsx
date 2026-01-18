import ProductSearch from "@/src/components/Products/ProductSearch";
import ProductSearchSkeleton from "@/src/components/Skeletons/ProductSearchSkeleton";
import { Suspense } from "react";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col gap-4 px-[5%] md:px-16 lg:px-20 xl:px-24 2xl:px-[200px] py-10">
      <h1 className="text-2xl font-bold">Productos Financieros de FinColombia</h1>
      <p className="text-gray-500">Explora nuestros productos financieros diseñados para satisfacer tus necesidades financieras.</p>
      <Suspense fallback={<ProductSearchSkeleton />}>
        <ProductSearch />
      </Suspense>
      {children}
    </main>
  );
}