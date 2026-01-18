import ProductSearch from "@/src/components/Products/ProductSearch";
import ProductSort from "@/src/components/Products/ProductSort";
import ProductSearchSkeleton from "@/src/components/Skeletons/ProductSearchSkeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Productos Financieros de FinColombia",
  description: "Explora nuestros productos financieros diseñados para satisfacer tus necesidades financieras.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col gap-4 px-[5%] md:px-16 lg:px-20 xl:px-24 2xl:px-[200px] py-10">
      <h1 className="text-2xl font-bold">Productos Financieros de FinColombia</h1>
      <p className="text-gray-500">Explora nuestros productos financieros diseñados para satisfacer tus necesidades financieras.</p>
      <Suspense fallback={<ProductSearchSkeleton />}>
        <div className="flex items-center gap-2 w-full">
          <ProductSearch />
        </div>
        <ProductSort />
      </Suspense>
      {children}
    </main>
  );
}