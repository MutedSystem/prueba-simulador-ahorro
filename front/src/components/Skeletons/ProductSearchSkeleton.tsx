import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const ProductSearchSkeleton = () => {
  return (
    <label htmlFor="search" className="flex items-center gap-2 bg-gray-100 px-5 rounded-md ring-1 ring-gray-300 focus-within:ring-primary focus-within:ring-2 transition-all duration-300">
      <FaSpinner className="text-gray-500" />
      <input
        type="text"
        id="search"
        placeholder="Buscar productos"
        className="w-full py-2 px-4 outline-none bg-transparent"
      />
    </label>
  );
};

export default ProductSearchSkeleton;