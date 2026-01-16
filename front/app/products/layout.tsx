import ProductSearch from "@/src/components/Products/ProductSearch";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="p-10 flex flex-col gap-4 items-center justify-center">
            <h1 className="text-2xl font-bold">Products</h1>
            <ProductSearch />
            {children}
        </main>
    )
}