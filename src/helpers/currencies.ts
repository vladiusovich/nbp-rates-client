import Rate from "@type/exchangerates/Rate";

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

// TODO: move to external config
const countryCodes: string[] = ["PLN", "USD", "EUR", "GBP", "CZK", "JPY", "CHF", "UAH", "NOK", "CNY"]

const sortCurrencies = (rates: Rate[]): Rate[] => {
    return rates.sort((a, b) => (countryCodes.indexOf(a.code) - countryCodes.indexOf(b.code)));
};

export const filterActualCurrencies = (rates: Rate[]): Rate[] => {
    return sortCurrencies(rates.filter(r => countryCodes.includes(r.code)));
};


