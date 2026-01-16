"use client";
import useProductSearch from "@/src/customHooks/useProductSearch";
import React from "react";

const ProductSearch = () => {
  const { search, handleSearch } = useProductSearch();
  return (
    <input
      type="text"
      value={search}
      onChange={handleSearch}
      placeholder="Buscar productos"
      className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default ProductSearch;
