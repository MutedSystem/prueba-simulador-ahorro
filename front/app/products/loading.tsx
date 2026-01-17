import ProductCardSkeleton from "@/src/components/Skeletons/ProductCardSkeleton";

export default function ProductsLoading() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {Array.from({ length: 10 }).map((_, index) => (
        <ProductCardSkeleton key={`product-card-skeleton-${index}`} />
      ))}
    </ul>
  );
}