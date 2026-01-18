import React from 'react';
import SimulatorForm from '@/src/components/Simulator/SimulatorForm';

const SimulatorPage = () => {
  return (
    <main className='p-10 flex flex-col gap-4 px-[5%] md:px-16 lg:px-20 xl:px-28 2xl:px-[300px]'>
      <h1 className='text-3xl font-bold'>Simulador de inversión</h1>
      <p className='text-gray-500'>Simula tu inversión en FinColombia</p>
      <SimulatorForm />
    </main>
  );
};

export default SimulatorPage;