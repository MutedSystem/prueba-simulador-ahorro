import { YEARLY_INTEREST_RATE } from "./constants";

export const calculateInterest = (initialAmount: number, monthlyAmount: number, months: number, interestRate?: number): number => {

  const monthlyInterestRate = interestRate ? (interestRate / 100) / 12 : YEARLY_INTEREST_RATE / 12;

  const initialInvestment = initialAmount * Math.pow(1 + monthlyInterestRate, months);
  const monthlyContributions = monthlyAmount * ((Math.pow(1 + monthlyInterestRate, months) - 1) / monthlyInterestRate);

  const totalAmount = initialInvestment + monthlyContributions;

  return totalAmount;
};