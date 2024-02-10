import UI from "@ui";
import React, { useState } from "react";
import S from "./Currencies.styled";
import { useRequest } from "@api/useRequest";
import { urls } from "@api/urls";
import ExchangeRate from "@type/exchangerates/ExchangeRate";

const Currencies: React.FC = () => {
	// const currencies = [...Array(10).keys()];
	const [value, setValue] = useState("1");

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		return setValue(e.target.value);
	};

	const { data: exchangeRates, isLoading, error } = useRequest<ExchangeRate[]>(urls.exchangerates.tables, { table: "a" })

	if (isLoading || !exchangeRates) return <h1>Loading...</h1>;

	const exchangeRate = exchangeRates[0]
	return (
		<S.container>
			<UI.Stack direction="row" gap={2} flexWrap="wrap">
				{exchangeRate?.rates.map(r => (
					<>
						<UI.TextField
							label={r.code}
							value={r.mid}
							onChange={handleOnChange}
						/>
					</>)
				)}
			</UI.Stack>
		</S.container>
	);
};

export default Currencies;
