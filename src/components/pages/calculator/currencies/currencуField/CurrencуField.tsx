import UI from "@ui";
import React from "react";
import Rate from "@type/exchangerates/Rate";
import { roundNumber } from "@helpers/numbers";
import typography from "@typography";
import CurrencyField from "@common/fields/currencyField/CurrencyField";

interface Props {
	rate: Rate;
	baseCurrencyAmount: number;
}

const CurrencуField: React.FC<Props> = ({ rate, baseCurrencyAmount }) => {
	const amount = roundNumber(baseCurrencyAmount / rate.mid, 3);

	return (
		<UI.Stack direction="column" gap={2}>
			<CurrencyField
				value={amount}
				disabled
				code={rate.code}
				// onChange={handleOnChange}
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
