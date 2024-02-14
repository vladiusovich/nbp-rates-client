import UI from "@ui";
import React, { useEffect, useState } from "react";
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
	const [focusValue, setFocusValue] = useState("0");
	const [calculatedAmount, setCalculatedAmount] = useState("0");

	useEffect(() => {
		const crossRate = calculateCrossRate(rateAtoC, rate.mid);

		const amount = roundNumber(crossRate * aToCAmount, 4);

		setCalculatedAmount(amount.toString());
	}, [rateAtoC, rate.mid, aToCAmount]);


	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value;

		const value = +rawValue;

		if (current) {
			setFocusValue(rawValue)
		}

		onChange(rate.code, roundNumber(value, 4));
	};

	const handleOnFocus = () => {
		setCurrent(true);
		setFocusValue(calculatedAmount)
	};

	const handleOnBlur = () => {
		setCurrent(false);
	};

	const amount = current ? focusValue : calculatedAmount;

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
