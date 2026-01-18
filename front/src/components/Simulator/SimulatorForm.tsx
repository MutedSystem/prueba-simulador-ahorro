"use client";
import SimulatorInput from "./SimulatorInput";
import useFormSimulator from "@/src/customHooks/useFormSimulator";
import { FiActivity } from "react-icons/fi";
import SimulatorHeader from "./SimulatorHeader";
import SimulatorAlert from "./SimulatorAlert";
import NoResult from "./NoResult";
import Result from "./Result";

type SimulatorFormProps = {
  minAmount: number;
  interestRate?: number;
  months?: number;
};

const SimulatorForm = ({ minAmount, interestRate, months }: SimulatorFormProps) => {
  const {
    fields,
    errors,
    touched,
    result,
    canCalculate,
    handleChange,
    handleBlur,
    handleClick,
  } = useFormSimulator(minAmount, interestRate, months);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col gap-4">
        <div className="border border-gray-300 rounded-md p-8 h-fit">
          <SimulatorHeader />
          <form className="flex flex-col gap-6 mt-5">
            <SimulatorInput
              label="Monto inicial *"
              id="amount"
              name="amount"
              placeholder="Ingrese el monto inicial"
              value={fields.amount}
              onChange={handleChange}
              error={errors.amount}
              onBlur={handleBlur}
              touched={touched.amount}
            />
            <SimulatorInput
              label="Aporte mensual *"
              id="monthlyAmount"
              name="monthlyAmount"
              placeholder="Ingrese el aporte mensual"
              value={fields.monthlyAmount}
              onChange={handleChange}
              error={errors.monthlyAmount}
              onBlur={handleBlur}
              touched={touched.monthlyAmount}
            />
            <SimulatorInput
              label="Meses *"
              id="months"
              name="months"
              placeholder="Ingrese el número de meses"
              value={fields.months}
              onChange={handleChange}
              error={errors.months}
              onBlur={handleBlur}
              disabled={typeof months === 'number'}
              touched={touched.months}
            />
            <button
              type="button"
              onClick={handleClick}
              disabled={!canCalculate}
              className="bg-primary text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Simular
            </button>
          </form>
        </div>
        <SimulatorAlert />
      </div>
      <div className="border border-primary rounded-md p-8 h-full">
        <div className="flex gap-2 items-center text-primary font-bold mb-2">
          <FiActivity className="text-2xl bg-primary/10 p-1 rounded-sm" />
          <h2 className="text-lg font-bold">Resultados de la Proyección</h2>
        </div>
        <p className="text-gray-500 text-sm mb-4">Proyección con capitalización mensual de intereses</p>
        {!result && <NoResult />}
        {result && <Result {...result} {...fields} interestRate={Number(interestRate)} />}
      </div>
    </div>
  );
};

export default SimulatorForm;
