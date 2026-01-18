"use client";
import useProductSearch from "@/src/customHooks/useProductSearch";
import React from "react";
import { FaSearch } from "react-icons/fa";

const ProductSearch = () => {
  const { search, handleSearch } = useProductSearch();
  return (
    <label htmlFor="search" className="flex items-center gap-2 bg-gray-100 px-5 rounded-md ring-1 ring-gray-300 focus-within:ring-primary focus-within:ring-2 transition-all duration-300 w-full">
      <FaSearch className="text-gray-500" />
      <input
        type="text"
        id="search"
        value={search}
        onChange={handleSearch}
        placeholder="Buscar productos"
        className="w-full py-2 px-4 outline-none bg-transparent"
      />
    </label>
  );
};

export default ProductSearch;
