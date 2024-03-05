import React, { useState, useCallback } from "react";
import { range } from "@helpers/random";
import Rate from "@type/exchangerates/Rate";
import UI from "@ui";
import CurrencyField from "./currencуFormField/CurrencуFormField";

interface Props {
	rates: Rate[];
	isLoading: boolean;
}

const CurrenciesGrid: React.FC<Props> = ({ rates, isLoading }) => {
	const [atoCAmount, setAtoCAmount] = useState<number>(1);
	const [rateAtoC, setRateAtoC] = useState<number>(0);

	const handleOnChangeCurrency = useCallback((currency: string, amount: number) => {
		const foundRate = rates.find((c) => c.code === currency)?.mid ?? 0;
		setRateAtoC(foundRate);
		setAtoCAmount(amount);
	}, [rates]);

	const fields = rates.map((r) => (
		<CurrencyField
			key={r.code}
			rate={r}
			rateAtoC={rateAtoC}
			aToCAmount={atoCAmount}
			onChange={handleOnChangeCurrency}
		/>
	));

	const loaders = range(10).map((_, i) => (
		<UI.Grid key={`loader-${i}`} xs={12} sm={6} md={4} lg={3}>
			<UI.Skeleton variant="rect" width="100%" height="65" />
		</UI.Grid>
	));

	return (
		<UI.Grid container rowSpacing={{ xs: 3.5, sm: 6 }} columnSpacing={{ xs: 3.5, sm: 7.5 }}>
			{isLoading ? loaders : fields.map((c, i) => (
				<UI.Grid key={`field-${i}`} xs={12} sm={6} md={4} lg={3}>{c}</UI.Grid>
			))}
		</UI.Grid>
	);
};

export default CurrenciesGrid;
