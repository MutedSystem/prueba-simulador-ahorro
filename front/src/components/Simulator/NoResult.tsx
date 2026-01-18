import React from 'react';
import { IoAlertCircleOutline } from 'react-icons/io5';

const NoResult = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <IoAlertCircleOutline className="text-[100px] text-gray-500 h-fit" />
      <p className="text-gray-500 text-center">Ingrese los datos para calcular los resultados de la proyección de su inversión</p>
    </div>
  );
};

export default NoResult;