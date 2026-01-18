'use client';

import { useRouter, useSearchParams } from "next/navigation";

function useProductFilter(filterName: 'types' | 'currencies') {
  const searchParams = useSearchParams();
  const filter = searchParams.get(filterName) || '';
  const router = useRouter();

  const filterArray = filter.split(',');

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const params = new URLSearchParams(searchParams);
    const currentFilter = params.get(filterName)?.split(',') || [];
    if (currentFilter?.includes(name)) {
      currentFilter?.splice(currentFilter.indexOf(name), 1);
    } else {
      currentFilter?.push(name);
    }
    const newFilter = currentFilter?.join(',') || '';
    if (newFilter === '') {
      params.delete(filterName);
    } else {
      params.set(filterName, newFilter);
    }
    router.replace(`/products?${params.toString()}`);
  };

  return { filterArray, handleFilter };
}

export default useProductFilter;