import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Producto no encontrado</h1>
      <p className="text-gray-500">El producto que estás buscando no existe.</p>
      <Link href="/products" className="text-blue-500 hover:text-blue-700">Volver a la página de productos</Link>
    </div>
  );
}