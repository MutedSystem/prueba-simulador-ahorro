'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

function useFilterCleaner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('types');
    params.delete('currencies');
    params.delete('minAmount');
    params.delete('maxAmount');
    router.replace(`/products?${params.toString()}`);
  };

  const appliedFilters = useMemo(() => {
    const params = new URLSearchParams(searchParams);

    let amountFilters = 0;

    const allowedFilters = ['types', 'currencies', 'minAmount', 'maxAmount'];

    params.forEach((_, key) => {
      if (allowedFilters.includes(key)) {
        amountFilters++;
      }
    });

    return amountFilters;
  }, [searchParams]);

  return { appliedFilters, hasAppliedFilters: appliedFilters > 0, clearFilters };
}

export default useFilterCleaner;