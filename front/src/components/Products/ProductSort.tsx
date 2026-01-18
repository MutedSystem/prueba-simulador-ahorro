'use client';
import { ORDER_LIST } from '@/src/utils/orderList';
import React from 'react';
import { FaSort } from 'react-icons/fa';
import useProductSort from '@/src/customHooks/useProductSort';

const ProductSort = () => {
  const { sortOrder, handleSort } = useProductSort();
  return (
    <label htmlFor="sort" className="flex items-center gap-2 bg-gray-100 px-5 rounded-md ring-1 ring-gray-300 focus-within:ring-primary focus-within:ring-2 transition-all duration-300 w-fit">
      <FaSort className="text-gray-500" />
      <select id="sort" className="w-full py-2 px-4 outline-none bg-transparent" value={sortOrder} onChange={handleSort}>
        {ORDER_LIST.map((order) => (
          <option key={order.value} value={order.value}>{order.label}</option>
        ))}
      </select>
    </label>
  );
};

export default ProductSort;