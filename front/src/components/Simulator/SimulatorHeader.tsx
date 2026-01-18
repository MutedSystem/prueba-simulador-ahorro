import React from 'react';
import { LuCalculator } from 'react-icons/lu';

const SimulatorHeader = () => {
  return (
    <>
      <div className="flex gap-2 items-center text-primary font-bold mb-2">
        <LuCalculator className="text-2xl bg-primary/10 p-1 rounded-sm" />
        <h2 className="text-lg font-bold">Parámetros de Ahorro</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Ingrese los datos de su inversión</p>
    </>
  );
};

export default SimulatorHeader;