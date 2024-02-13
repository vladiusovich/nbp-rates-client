import UI from "@ui";
import React, { useState } from "react";
import Rate from "@type/exchangerates/Rate";
import { roundNumber } from "@helpers/numbers";
import typography from "@typography";
import CurrencyField from "@common/fields/currencyField/CurrencyField";
import { calculateCrossRate } from "@helpers/currencies";

interface Props {
	rate: Rate;
	aToCAmount: number;
	rateAtoC: number;
	onChange: (currency: string, amount: number) => void;
}

const CurrencуField: React.FC<Props> = ({ rate, rateAtoC, aToCAmount, onChange }) => {
	const [current, setCurrent] = useState(false);
	const [value, setValue] = useState("0");

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value;

		const value = +rawValue;

		if (current) {
			setValue(rawValue)
		}

		onChange(rate.code, roundNumber(value, 4));
	};

	const handleOnFocus = () => {
		setCurrent(true);
	};

	const handleOnBlur = () => {
		setCurrent(false);
	};

	const crossRate = calculateCrossRate(rateAtoC, rate.mid);

	const amount = current ? value : roundNumber(crossRate * aToCAmount, 4);

	return (
		<UI.Stack direction="column" gap={2}>
			<CurrencyField
				value={amount}
				code={rate.code}
				onChange={handleOnChange}
				onFocus={handleOnFocus}
				onBlur={handleOnBlur}
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
