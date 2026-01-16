"use client";
import SimulatorInput from "./SimulatorInput";
import useFormSimulator from "@/src/customHooks/useFormSimulator";

const SimulatorForm = () => {
  const {
    fields,
    errors,
    touched,
    result,
    canCalculate,
    handleChange,
    handleBlur,
    handleClick,
  } = useFormSimulator();

  return (
    <>
      <form>
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
          touched={touched.months}
        />
        <button
          type="button"
          onClick={handleClick}
          disabled={!canCalculate}
          className="bg-blue-500 text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Calcular
        </button>
      </form>
      {result && (
        <div className="flex flex-col gap-2">
          <p>Total ahorrado: {result.savedAmount}</p>
          <p>Interés ganado: {result.interestEarned}</p>
          <p>Total final: {result.finalAmount}</p>
        </div>
      )}
    </>
  );
};

export default SimulatorForm;
