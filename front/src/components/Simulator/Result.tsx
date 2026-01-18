import { SimulatorFields, SimulatorResult } from '@/src/customHooks/useFormSimulator';
import { YEARLY_INTEREST_RATE } from '@/src/utils/constants';
import { formatCurrency } from '@/src/utils/formatCurrency';
import { parseCurrency } from '@/src/utils/parceCurrency';
import React from 'react';
import { FiActivity } from 'react-icons/fi';
import { IoWalletOutline } from 'react-icons/io5';
import { MdOutlineSavings } from 'react-icons/md';

type ResultProps = SimulatorResult & SimulatorFields;

const Result = ({ finalAmount, savedAmount, interestEarned, amount, monthlyAmount, months }: ResultProps) => {

  const totalMonthlyAmount = formatCurrency(parseCurrency(monthlyAmount) * Number(months));

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-primary/5 px-6 py-3 rounded-md">
        <div className="flex items-center gap-2">
          <IoWalletOutline className="text-primary text-4xl bg-primary/10 p-2 rounded-sm" />
          <div>
            <p className="text-gray-500 text-sm">Total ahorrado</p>
            <p className="text-gray-900 text-[25px] font-bold">{savedAmount}</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">Total ahorrado con aportes mensuales</p>
      </div>
      <div className="bg-green-500/5 px-6 py-3 rounded-md border border-green-500/50">
        <div className="flex items-center gap-2">
          <FiActivity className="text-green-500 text-4xl bg-green-500/10 p-2 rounded-sm" />
          <div>
            <p className="text-gray-500 text-sm">Intereses ganados</p>
            <p className="text-green-500/80 text-[25px] font-bold">{interestEarned}</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">Intereses ganados por capitalización mensual al {YEARLY_INTEREST_RATE * 100}% anual</p>
      </div>
      <div className="bg-primary/5 px-6 py-3 rounded-md border-2 border-primary">
        <div className="flex items-center gap-2">
          <MdOutlineSavings className="text-primary text-4xl bg-primary/10 p-2 rounded-sm" />
          <div>
            <p className="text-gray-500 text-sm">Total final</p>
            <p className="text-gray-900 text-[25px] font-bold">{finalAmount}</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">Total final con capitalización mensual de intereses</p>
      </div>
      
      <div className='p-3 bg-primary/5 rounded-md text-[14px] gap-2 flex flex-col'>
        <p className='text-gray-900 font-bold'>Desgloce de la proyección</p>
        <div className='flex gap-2 items-center justify-between'>
          <p className='text-gray-500'>Total inicial:</p>
          <p className='text-gray-900 font-bold'>{amount}</p>
        </div>
        <div className='flex gap-2 items-center justify-between'>
          <p className='text-gray-500'>Aportes mensuales ({monthlyAmount} x {months}): </p>
          <p className='text-gray-900 font-bold'>{totalMonthlyAmount}</p>
        </div>
        <div className='w-full h-px bg-gray-200'></div>
        <div className='flex gap-2 items-center justify-between'>
          <p className='text-gray-500'>Rendimiento ({YEARLY_INTEREST_RATE * 100}% anual): </p>
          <p className='text-green-600/80 font-bold'>+{interestEarned}</p>
        </div>
        <div className='w-full h-px bg-gray-200'></div>
        <div className='flex gap-2 items-center justify-between'>
          <p className='text-gray-500'>Total final: </p>
          <p className='text-gray-900 font-bold'>{finalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default Result;