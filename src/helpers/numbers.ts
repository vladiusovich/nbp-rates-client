export const roundNumber = (num: number, digitsAfterPoint: number): number => {
    const factor = Math.pow(10, digitsAfterPoint);
    return Math.round(num * factor) / factor;
};