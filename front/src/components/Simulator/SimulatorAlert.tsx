import React from 'react';
import { IoAlertCircleOutline } from 'react-icons/io5';

const SimulatorAlert = () => {
  return (
    <div className="flex gap-2 p-4 border border-primary rounded-md bg-primary/5">
      <IoAlertCircleOutline className="text-6xl text-primary/50 h-fit" />
      <div>
        <p className="font-bold text-primary">Nota Importante</p>
        <p className="text-gray-500 text-sm">Esta calculadora utiliza interés compuesto con aportes mensuales. Los resultados son estimaciones y pueden variar según las condiciones reales del producto financiero. Consulte con su entidad financiera para información precisa.</p>
      </div>
    </div>
  );
};

export default SimulatorAlert;