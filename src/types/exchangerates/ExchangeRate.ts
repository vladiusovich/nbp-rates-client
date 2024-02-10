import Rate from "./Rate";
import TableNameType from "./TableType";

export interface ExchangeRate {
    table: TableNameType;
    currency: string;
    rates: Rate[];
}

export default ExchangeRate;
