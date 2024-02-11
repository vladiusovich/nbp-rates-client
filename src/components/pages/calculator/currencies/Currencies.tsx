import UI from "@ui";
import React, { useState } from "react";
import S from "./Currencies.styled";
import { useRequest } from "@api/useRequest";
import { urls } from "@api/urls";
import { range } from "@helpers/random";
import ExchangeRate from "@type/exchangerates/ExchangeRate";
import CurrencуField from "./currencуField/CurrencуField";
import BaseCurrencуField from "./baseCurrencуField/BaseCurrencуField";
import CurrenciesContainer from "./CurrenciesContainer";

const Currencies: React.FC = () => {
	const [baseCurrencyAmount, setBaseCurrencyAmount] = useState(1);

	const handleOnChangeBaseCurrency = (amount: number) => {
		return setBaseCurrencyAmount(amount);
	};

	const { data: exchangeRates, isLoading, error } = useRequest<ExchangeRate[]>(urls.exchangerates.tables, { table: "a" })

	if (error) return <h1>Server error. {error.message}</h1>;

	const loading = isLoading || !exchangeRates;

	const exchangeRate = exchangeRates?.at(0);

	const components = (exchangeRate?.rates ?? []).map(r => (<CurrencуField key={r.code} rate={r} baseCurrencyAmount={baseCurrencyAmount} />));

	const iterator = range(15);
	const loaderComponent = iterator.map(r => (<UI.Skeleton key={r} variant="rectangular" width={"100%"} height={50} />));

	return (
		<S.container>
			<CurrenciesContainer
				baseCurrency={(<BaseCurrencуField code="PLN" currency="polski złoty" onChange={handleOnChangeBaseCurrency} />)}
			>
				{loading ? loaderComponent : components}
			</CurrenciesContainer>
		</S.container>
	);
};

export default Currencies;
