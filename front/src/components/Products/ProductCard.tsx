'use client';
import { Product } from '@/src/entities/Product';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">{product.nombre}</h2>
        <p className="text-sm text-gray-500">{product.descripcionCorta}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">{product.descripcionLarga}</p>
      </div>
      {product.tasaInteresAnual && (
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-500"><b>Tasa de interés anual:</b> {product.tasaInteresAnual}%</p>
        </div>
      )}
      {product.rentabilidadEsperadaAnual && (
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-500"><b>Rentabilidad esperada anual:</b> {product.rentabilidadEsperadaAnual}%</p>
        </div>
      )}
      {product.plazoMeses && (
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-500"><b>Plazo en meses:</b> {product.plazoMeses}</p>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500"><b>Moneda:</b> {product.moneda}</p>
      </div>
    </li>
  );
};

export default ProductCard;