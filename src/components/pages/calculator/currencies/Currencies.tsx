import React, { useState } from "react";
import S from "./Currencies.styled";
import { useRequest } from "@api/useRequest";
import { urls } from "@api/urls";
import ExchangeRate from "@type/exchangerates/ExchangeRate";
import CurrencуFormField from "./currencуFormField/CurrencуFormField";
import CurrenciesContainer from "./CurrenciesContainer";
import ErrorContent from "@common/error/ErrorContent";
import { addExtraCurrencies, filterActualCurrencies } from "@helpers/currencies";

const Currencies: React.FC = () => {
	const [atoCAmount, setAtoCAmount] = useState(1);
	const [rateAtoC, setRateAtoC] = useState(0);

	const { data: exchangeRates, isLoading, error } = useRequest<ExchangeRate[]>(urls.exchangerates.tables, { table: "a" })

	const exchangeRate = exchangeRates?.at(0);

	if (error) {
		return (<ErrorContent message={error.message} />);
	}

	const rates = filterActualCurrencies(addExtraCurrencies(exchangeRate?.rates ?? []));

	const handleOnChangeCurrency = (currency: string, amount: number) => {
		const rateAtoC = rates.find(c => c.code === currency)?.mid ?? 0;

		setRateAtoC(rateAtoC);
		setAtoCAmount(amount);
	};

	const currencуFields = (rates ?? []).map(r => (
		<CurrencуFormField
			key={r.code}
			rate={r}
			rateAtoC={rateAtoC}
			aToCAmount={atoCAmount}
			onChange={handleOnChangeCurrency}
		/>
	));

	return (
		<S.container>
			<CurrenciesContainer
				isLoading={isLoading || !exchangeRates}
			>
				{currencуFields}
			</CurrenciesContainer>
		</S.container>
	);
};

export default Currencies;
