export const parseCurrency = (currency: string) => {
  const normalized = currency.replace(/[^\d]/g, "");
  return normalized ? Number(normalized) : 0;
};