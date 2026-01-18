'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

function useAmountFilter(min: number, max: number) {

  const searchParams = useSearchParams();
  const minAmount = Number(searchParams.get('minAmount')) || min;
  const maxAmount = Number(searchParams.get('maxAmount')) || max;
  const router = useRouter();

  const [amount, setAmount] = useState<[number, number]>([minAmount, maxAmount]);

  const handleAmountChange = (value: [number, number]) => {
    setAmount(value);
  };

  const [debouncedAmount] = useDebounce(amount, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('minAmount', debouncedAmount[0].toString());
    params.set('maxAmount', debouncedAmount[1].toString());
    if(debouncedAmount[0] === min) {
      params.delete('minAmount');
    }
    if(debouncedAmount[1] === max) {
      params.delete('maxAmount');
    }

    router.replace(`/products?${params.toString()}`);
  }, [debouncedAmount]);

  return { amount, handleAmountChange };
}

export default useAmountFilter;