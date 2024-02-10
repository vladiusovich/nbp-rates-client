import Rate from "./Rate";

export interface ExchangeRate {
    table: string;
    currency: string;
    rates: Rate[];
}

export default ExchangeRate;
