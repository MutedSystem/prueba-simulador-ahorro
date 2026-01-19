'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function useAmountFilter(min: number, max: number) {

  const searchParams = useSearchParams();
  const minAmount = Number(searchParams.get('minAmount')) || min;
  const maxAmount = Number(searchParams.get('maxAmount')) || max;
  const router = useRouter();

  const [amount, setAmount] = useState<[number, number]>([min, max]);

  useEffect(() => {
    setTimeout(() => {
      setAmount([minAmount, maxAmount]);
    }, 10);
  }, [minAmount, maxAmount]);

  const handleAmountChange = (value: [number, number]) => {
    setAmount(value);
  };

  const applyAmountFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.set('minAmount', amount[0]?.toString());
    params.set('maxAmount', amount[1]?.toString());
    if(amount[0] === min) {
      params.delete('minAmount');
    }
    if(amount[1] === max) {
      params.delete('maxAmount');
    }
    router.replace(`/products?${params.toString()}`);
  };

  return { amount, handleAmountChange, applyAmountFilter };
}

export default useAmountFilter;