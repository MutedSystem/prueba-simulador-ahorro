import React from 'react'
import SimulatorForm from '@/src/components/Simulator/SimulatorForm'

const SimulatorPage = () => {
  return (
    <main className='p-10 flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-2xl font-bold'>Simulador de inversión</h1>
        <SimulatorForm />
    </main>
  )
}

export default SimulatorPage