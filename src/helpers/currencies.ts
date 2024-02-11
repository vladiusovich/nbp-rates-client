
export const getInverseRate = (rate: number): number => {
    return 1 / rate;
};

export const calculateCrossRate = (rateAtoC: number, rateBtoC: number): number => {
    return rateAtoC * getInverseRate(rateBtoC);
};
