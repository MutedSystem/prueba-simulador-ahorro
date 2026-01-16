export const calculateSavedAmount = (monthlyAmount: number, months: number): number => {
    const savedAmount = monthlyAmount * months;
    return savedAmount;
}