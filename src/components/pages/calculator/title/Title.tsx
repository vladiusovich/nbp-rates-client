import { urls } from "@api/urls";
import { useRequest } from "@api/useRequest";
import ExchangeRate from "@type/exchangerates/ExchangeRate";
import typography from "@typography";
import UI from "@ui";
import React from "react";

const Title: React.FC = () => {
	const { data: exchangeRates, isLoading } = useRequest<ExchangeRate[]>(urls.exchangerates.tables, { table: "a" })

	const loading = isLoading || !exchangeRates;

	const exchangeRate = exchangeRates?.at(0);

	return (
		<>
			<typography.h4>
				Kalkulator walut wg średnich kursów NBP na dziś, 6 lutego 2024
			</typography.h4>
			{loading ? (<UI.Skeleton variant="text" width={180} height={23} />) : (<typography.small>
				Aktualizowane: {exchangeRate?.effectiveDate}
			</typography.small>)}
		</>
	);
};

export default Title;
