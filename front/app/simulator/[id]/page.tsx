import React from 'react';
import SimulatorForm from '@/src/components/Simulator/SimulatorForm';
import { productsRepository } from '@/src/repositories/products.repository';
import { notFound } from 'next/navigation';

type SimulatorPageProps = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params }: SimulatorPageProps) => {
  const { id } = await params;
  const product = await productsRepository.getProduct(id);
  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }
  return {
    title: `Simula tu ahorro con ${product.nombre}`,
    description: product.descripcionLarga,
  };
};

const SimulatorPage = async ({ params }: SimulatorPageProps) => {
  const { id } = await params;

  const product = await productsRepository.getProduct(id);

  if (!product) {
    notFound();
  }

  const { nombre, descripcionLarga, tasaInteresAnual, plazoMeses, montoMinimo } = product;

  return (
    <main className='p-10 flex flex-col gap-4 px-[5%] md:px-16 lg:px-20 xl:px-28 2xl:px-[300px]'>
      <h1 className='text-3xl font-bold'>Simula tu ahorro con {nombre}</h1>
      <p className='text-gray-500'>{descripcionLarga}</p>
      <SimulatorForm minAmount={montoMinimo} interestRate={tasaInteresAnual} months={plazoMeses} />
    </main>
  );
};

export default SimulatorPage;