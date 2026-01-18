"use client";

import { useMemo, useState } from "react";
import { emptySimulationData } from "../emptyData/emptySimulationData";
import { parseCurrency } from "../utils/parceCurrency";
import { formatCurrency } from "../utils/formatCurrency";
import {
  MINIMUM_AMOUNT,
  MINIMUM_MONTHLY_AMOUNT,
  MINIMUM_MONTHS,
} from "../utils/constants";
import { calculateInterest } from "../utils/calculateInterest";
import { calculateSavedAmount } from "../utils/calculateSavings";

export type SimulatorFields = {
  amount: string;
  monthlyAmount: string;
  months: string;
};

type SimulatorErrors = Partial<Record<keyof SimulatorFields, string>>;

type SimulatorTouched = Partial<Record<keyof SimulatorFields, boolean>>;

export type SimulatorResult = {
  finalAmount: string;
  savedAmount: string;
  interestEarned: string;
};

function useFormSimulator() {
  const [fields, setFields] = useState<SimulatorFields>(emptySimulationData);
  const [touched, setTouched] = useState<SimulatorTouched>({});
  const [result, setResult] = useState<SimulatorResult | null>(null);

  const errors = useMemo(() => {
    const errors: SimulatorErrors = {};

    const amountValue = parseCurrency(fields.amount);
    const monthlyAmountValue = parseCurrency(fields.monthlyAmount);
    const monthsValue = Number(fields.months);

    if (amountValue === 0) {
      errors.amount = "El monto inicial es requerido";
    } else if (isNaN(amountValue)) {
      errors.amount = "El monto inicial debe ser un número válido";
    } else if (amountValue < MINIMUM_AMOUNT) {
      errors.amount = `El monto inicial debe ser mayor a ${formatCurrency(
        MINIMUM_AMOUNT
      )}`;
    }

    if (monthlyAmountValue === 0) {
      errors.monthlyAmount = "El aporte mensual es requerido";
    } else if (isNaN(monthlyAmountValue)) {
      errors.monthlyAmount = "El aporte mensual debe ser un número válido";
    } else if (monthlyAmountValue < MINIMUM_MONTHLY_AMOUNT) {
      errors.monthlyAmount = `El aporte mensual debe ser mayor a ${formatCurrency(
        MINIMUM_MONTHLY_AMOUNT
      )}`;
    }

    if (monthsValue === 0) {
      errors.months = "El número de meses es requerido";
    } else if (isNaN(monthsValue)) {
      errors.months = "El número de meses debe ser un número válido";
    } else if (monthsValue < MINIMUM_MONTHS) {
      errors.months = `El número de meses debe ser mayor a ${MINIMUM_MONTHS}`;
    }

    return errors;
  }, [fields]);

  const canCalculate = useMemo(() => {
    return !errors.amount && !errors.monthlyAmount && !errors.months;
  }, [errors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFields((prev) => {
      let parsedValue = value;
      if (name === "amount" || name === "monthlyAmount") {
        const numericValue = parseCurrency(value);
        parsedValue = formatCurrency(numericValue);
      }

      return {
        ...prev,
        [name]: parsedValue,
      };
    });
    setResult(null);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleClick = () => {
    if (errors.amount || errors.monthlyAmount || errors.months) {
      setResult(null);
      return;
    }
    const initialAmount = parseCurrency(fields.amount);
    const monthlyAmount = parseCurrency(fields.monthlyAmount);
    const months = Number(fields.months);
    const totalAmount = calculateInterest(initialAmount, monthlyAmount, months);
    const savedAmount = calculateSavedAmount(monthlyAmount, months);
    const interestEarned = totalAmount - savedAmount;
    setResult({
      finalAmount: formatCurrency(totalAmount),
      savedAmount: formatCurrency(savedAmount),
      interestEarned: formatCurrency(interestEarned),
    });
  };

  return {
    fields,
    result,
    errors,
    touched,
    canCalculate,
    handleBlur,
    handleClick,
    handleChange,
  };
}

export default useFormSimulator;
