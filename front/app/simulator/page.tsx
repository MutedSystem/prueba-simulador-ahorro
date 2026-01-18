import React from 'react';
import SimulatorForm from '@/src/components/Simulator/SimulatorForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Simulador de inversión de FinColombia",
  description: "Simula tu inversión en FinColombia y descubre cuánto puedes ganar.",
};

const SimulatorPage = async () => {
  return (
    <main className='p-10 flex flex-col gap-4 px-[5%] md:px-16 lg:px-20 xl:px-28 2xl:px-[300px]'>
      <h1 className='text-3xl font-bold'>Simula tu ahorro con FinColombia</h1>
      <p className='text-gray-500'>Simula tu inversión en FinColombia y descubre cuánto puedes ganar.</p>
      <SimulatorForm minAmount={0} interestRate={5} />
    </main>
  );
};

export default SimulatorPage;