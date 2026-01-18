import React from 'react';

type SearchTypeProps = {
  label: string;
  value: string;
  checked: boolean;
  // eslint-disable-next-line no-unused-vars
  handleTypes: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchType = ({ label, value, handleTypes, checked }: SearchTypeProps) => {
  return (
    <label htmlFor={value} className="flex items-center gap-2 w-fit">
      <input type="checkbox" id={value} name={value} onChange={handleTypes} checked={checked} />
      <span className="text-gray-500 text-xs">{label}</span>
    </label>
  );
};

export default SearchType;