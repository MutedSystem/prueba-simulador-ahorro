import { formatCurrency } from '@/src/utils/formatCurrency';
import React from 'react';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import ProductSubItem from '../Products/ProductSubItem';

const ProductCardSkeleton = () => {
  return (
    <li className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
      <div className="flex justify-between">
        <MdOutlineBusinessCenter className="text-3xl text-primary bg-primary/10 p-1 rounded-sm" />
        <p className="text-gray-700 bg-gray-100 px-2 py-1 rounded-full text-xs h-fit">Cargando</p>
      </div>
      <h2 className="text-[18px] font-bold">Cargando</h2>
      <p className="text-gray-500 text-sm">Estamos cargando los productos financieros ofrecidos por FinColombia</p>

      <div className="grid grid-cols-2 gap-4">
        <ProductSubItem label="Tasa Anual" value={`0%`} />
        <ProductSubItem label="Rent. Esper. Anual" value={`0%`} />
        <ProductSubItem label="Plazo en Meses" value={`0 meses`} />
        <ProductSubItem label="Monto Mínimo" value={`${formatCurrency(0)}`} />
        <ProductSubItem label="Moneda" value="Cargando" />
      </div>
    </li>
  );
};

export default ProductCardSkeleton;