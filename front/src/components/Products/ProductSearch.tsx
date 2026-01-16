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
      placeholder="Search products"
      className="w-full p-2 rounded-md border border-gray-300"
    />
  );
};

export default ProductSearch;
