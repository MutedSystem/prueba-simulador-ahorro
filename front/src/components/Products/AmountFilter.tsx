'use client';
import useAmountFilter from '@/src/customHooks/useAmountFilter';
import { formatCurrency } from '@/src/utils/formatCurrency';
import React from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

type AmountFilterProps = {
  minAmount: number;
  maxAmount: number;
};

const AmountFilter = ({ minAmount, maxAmount }: AmountFilterProps) => {
  const { amount, handleAmountChange, applyAmountFilter } = useAmountFilter(minAmount, maxAmount);
  return (
    <section className="w-full mt-4">
      <h3 className="text-gray-500 mb-2 font-bold">Filtrar por monto</h3>
      <div className="w-full flex justify-between items-center">
        <p className="text-gray-500 text-xs font-bold">{formatCurrency(amount[0])}</p>
        <p className="text-gray-500 text-xs font-bold">{formatCurrency(amount[1])}</p>
      </div>
      <RangeSlider
        min={minAmount}
        max={maxAmount}
        value={amount}
        onInput={handleAmountChange}
        onThumbDragEnd={applyAmountFilter}
        onRangeDragEnd={applyAmountFilter}
        id="amount-filter"
        className="w-full my-2"
      />
      <div className="w-full flex justify-between items-center">
        <p className="text-gray-500 text-xs font-bold">{formatCurrency(minAmount)}</p>
        <p className="text-gray-500 text-xs font-bold">{formatCurrency(maxAmount)}</p>
      </div>
    </section>
  );
};

export default AmountFilter;