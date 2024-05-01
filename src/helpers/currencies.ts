import Rate from "@type/exchangerates/Rate";
import dynamicConfig from "@config";

export const getInverseRate = (rate: number): number => (1 / rate);

export const calculateCrossRate = (rateAtoC: number, rateBtoC: number): number => (rateAtoC * getInverseRate(rateBtoC));

export const addExtraCurrencies = (rates: Rate[]): Rate[] => {
    const plnRate: Rate = {
        code: "PLN",
        currency: "polski złoty",
        mid: 1,
    };

    return [plnRate, ...rates ?? []];
};

const visibleCurrencies = dynamicConfig.visibleCurrencies ?? ["PLN"];

const sortCurrencies = (rates: Rate[]): Rate[] => {
    return rates.sort((a, b) => (visibleCurrencies.indexOf(a.code) - visibleCurrencies.indexOf(b.code)));
};

export const filterActualCurrencies = (rates: Rate[]): Rate[] => {
    return sortCurrencies(rates.filter(r => visibleCurrencies.includes(r.code)));
};
