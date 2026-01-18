'use client';
import React from 'react';
import SearchType from './SearchType';
import useProductTypes from '@/src/customHooks/useProductTypes';
import useFilterOpenness from '@/src/customHooks/useFilterOpenness';
import { FaFilter } from 'react-icons/fa';

type SearchFiltersProps = {
  types: string[];
};

const SearchFilters = ({ types }: SearchFiltersProps) => {
  const { handleTypes, typesArray } = useProductTypes();

  const { isOpen, toggleFilterOpenness } = useFilterOpenness();

  return <>
    <button onClick={toggleFilterOpenness} className="text-xs font-bold hover:bg-primary/80 transition-all duration-300 hover:underline w-fit bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2">
      <FaFilter />
      {isOpen ? 'Cerrar filtros' : 'Filtrar'}
    </button>
    <section className={`gap-y-2 w-full xl:w-[250px] 2xl:w-[300px] h-fit ${isOpen ? 'block' : 'hidden'}`}>
      <h3 className="text-gray-500 mb-2 font-bold">Filtrar por tipo</h3>
      <div className='flex gap-x-5 gap-y-2 flex-wrap'>
        {types.map((type) => (
          <SearchType
            key={`search-type-${type}`}
            label={type}
            value={type}
            handleTypes={handleTypes}
            checked={typesArray.includes(type)}
          />
        ))}
      </div>

    </section>
  </>;
};

export default SearchFilters;