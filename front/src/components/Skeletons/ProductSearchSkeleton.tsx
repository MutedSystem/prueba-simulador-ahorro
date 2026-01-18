import React from 'react';
import { FaSort, FaSpinner } from 'react-icons/fa';

const ProductSearchSkeleton = () => {
  return (
    <>
      <label htmlFor="search" className="flex items-center gap-2 bg-gray-100 px-5 rounded-md ring-1 ring-gray-300 focus-within:ring-primary focus-within:ring-2 transition-all duration-300">
        <FaSpinner className="text-gray-500" />
        <input
          type="text"
          id="search"
          placeholder="Buscar productos"
          className="w-full py-2 px-4 outline-none bg-transparent"
        />
      </label>

      <label htmlFor="sort" className="flex items-center gap-2 bg-gray-100 px-5 rounded-md ring-1 ring-gray-300 focus-within:ring-primary focus-within:ring-2 transition-all duration-300 w-fit">
        <FaSort className="text-gray-500" />
        <select id="sort" className="w-full py-2 px-4 outline-none bg-transparent">
          <option>Por defecto</option>
          <option>Nombre (A-Z)</option>
          <option>Nombre (Z-A)</option>
          <option>Monto Mínimo (Mayor a Menor)</option>
          <option>Monto Mínimo (Menor a Mayor)</option>
        </select>
      </label>

    </>
  );
};

export default ProductSearchSkeleton;