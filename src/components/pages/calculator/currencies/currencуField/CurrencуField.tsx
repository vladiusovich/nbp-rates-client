import UI from "@ui";
import React from "react";
import Rate from "@type/exchangerates/Rate";
import { roundNumber } from "@helpers/numbers";
import typography from "@typography";

interface Props {
	rate: Rate;
	baseCurrencyAmount: number;
}

const CurrencуField: React.FC<Props> = ({ rate, baseCurrencyAmount }) => {
	const amount = roundNumber(baseCurrencyAmount / rate.mid, 3);

	return (
		<UI.Stack direction="column" gap={2}>
			<UI.TextField
				label={rate.code}
				value={amount}
				disabled
			// onChange={handleOnChange}
			// InputProps={{
			// 	startAdornment: (
			// 		<UI.FlagIcon code={r.code} loading="lazy" />
			// 	),
			// }}
			/>
			<UI.Stack direction="row" gap={1} >
				<typography.gray>{`1 ${rate.currency}`}</typography.gray>
				<typography.gray>=</typography.gray>
				<typography.bold>{rate.mid}</typography.bold>
			</UI.Stack>
		</UI.Stack>
	);
};

export default CurrencуField;
