import React from 'react';

type ProductSubItemProps = {
  label: string;
  value: string;
};

const ProductSubItem = ({ label, value }: ProductSubItemProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-lg font-semibold text-primary">{value}</p>
    </div>
  );
};

export default ProductSubItem;