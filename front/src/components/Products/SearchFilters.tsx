'use client';
import React from 'react';
import SearchType from './SearchType';
import useFilterOpenness from '@/src/customHooks/useFilterOpenness';
import { FaFilter } from 'react-icons/fa';
import useProductFilter from '@/src/customHooks/useProductCurrency';

type SearchFiltersProps = {
  types: string[];
  currencies: string[];
};

const SearchFilters = ({ types, currencies = [] }: SearchFiltersProps) => {

  const { filterArray: typesArray, handleFilter: handleTypes } = useProductFilter('types');
  const { filterArray: currenciesArray, handleFilter: handleCurrencies } = useProductFilter('currencies');

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

      <h3 className="text-gray-500 mb-2 font-bold mt-4">Filtrar por moneda</h3>
      <div className='flex gap-x-5 gap-y-2 flex-wrap'>
        {currencies.map((currency) => (
          <SearchType
            key={`search-currency-${currency}`}
            label={currency}
            value={currency}
            handleTypes={handleCurrencies}
            checked={currenciesArray.includes(currency)}
          />
        ))}
      </div>

    </section>
  </>;
};

export default SearchFilters;