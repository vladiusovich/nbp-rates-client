import Rate from "@type/exchangerates/Rate";
import React, { useState } from "react";
import CurrencуFormField from "./currencуFormField/CurrencуFormField";

interface Props {
	rates: Rate[];
}

const CurrencуFields: React.FC<Props> = ({ rates }) => {
	const [atoCAmount, setAtoCAmount] = useState(1);
	const [rateAtoC, setRateAtoC] = useState(0);

	const handleOnChangeCurrency = (currency: string, amount: number) => {
		const rateAtoC = rates.find(c => c.code === currency)?.mid ?? 0;

		setRateAtoC(rateAtoC);
		setAtoCAmount(amount);
	};

	return null
};

export default CurrencуFields;
