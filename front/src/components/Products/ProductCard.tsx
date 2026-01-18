'use client';
import { Product } from '@/src/entities/Product';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import ProductSubItem from './ProductSubItem';
import { formatCurrency } from '@/src/utils/formatCurrency';
import RiskCard from './RiskCard';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
      <div className="flex justify-between">
        <MdOutlineBusinessCenter className="text-3xl text-primary bg-primary/10 p-1 rounded-sm" />
        <p className="text-gray-700 bg-gray-100 px-2 py-1 rounded-full text-xs h-fit">{product.tipo}</p>
      </div>
      <h2 className="text-[18px] font-bold">{product.nombre}</h2>
      <p className="text-gray-500 text-sm">{product.descripcionLarga}</p>

      <div className="grid grid-cols-2 gap-4">
        {product.tasaInteresAnual && <ProductSubItem label="Tasa Anual" value={`${product.tasaInteresAnual}%`} />}
        {product.rentabilidadEsperadaAnual && <ProductSubItem label="Rent. Esper. Anual" value={`${product.rentabilidadEsperadaAnual}%`} />}
        {product.plazoMeses && <ProductSubItem label="Plazo en Meses" value={`${product.plazoMeses} meses`} />}
        <ProductSubItem label="Monto Mínimo" value={`${formatCurrency(product.montoMinimo || 0)}`} />
        <ProductSubItem label="Moneda" value={product.moneda} />
      </div>
      <RiskCard risk={product.riesgo} />
      <div className="flex gap-2">
        {product.tags.map((tag) => (
          <span key={tag} className="text-gray-500 text-xs bg-gray-100 px-2 py-1 rounded-full capitalize">{tag}</span>
        ))}
      </div>
    </li>
  );
};

export default ProductCard;