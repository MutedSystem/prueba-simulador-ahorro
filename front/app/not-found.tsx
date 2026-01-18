import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
      <p className="text-gray-500">La página que estás buscando no existe.</p>
      <Link href="/" className="text-blue-500 hover:text-blue-700">Volver a la página principal</Link>
    </div>
  );
}