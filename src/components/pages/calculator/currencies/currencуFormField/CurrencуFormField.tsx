import UI from "@ui";
import React, { useEffect, useState } from "react";
import Rate from "@type/exchangerates/Rate";
import { roundNumber } from "@helpers/numbers";
import typography from "@typography";
import CurrencyField from "@common/fields/currencyField/CurrencyField";
import { calculateCrossRate } from "@helpers/currencies";
import useDebounce from "@hook/useDebounce";

interface Props {
	rate: Rate;
	aToCAmount: number;
	rateAtoC: number;
	onChange: (currency: string, amount: number) => void;
}

const CurrencуFormField: React.FC<Props> = ({
	rate,
	rateAtoC,
	aToCAmount,
	onChange,
}) => {
	const [current, setCurrent] = useState(false);
	const [focusedValue, setFocusedValue] = useState("0");
	const [calculatedAmount, setCalculatedAmount] = useState(0);
	const [externalAmount, setExternalAmount] = useState(0);

	useEffect(() => {
		const crossRate = calculateCrossRate(rateAtoC, rate.mid);
		const amount = roundNumber(crossRate * aToCAmount, 2);
		setCalculatedAmount(amount);
	}, [rateAtoC, rate.mid, aToCAmount]);

	const debouncedOnChange = useDebounce(() => (onChange(rate.code, externalAmount)), 100);

	const handleOnChange = (value: string, float: number) => {
		if (current) {
			setFocusedValue(value)
		}

		setExternalAmount(float);
		debouncedOnChange();
	};

	const handleOnFocus = () => {
		setCurrent(true);
		setFocusedValue(calculatedAmount.toString())
	};

	const handleOnBlur = () => (setCurrent(false));

	const amount = current ? focusedValue : calculatedAmount;

	return (
		<UI.Stack direction="column" gap={12}>
			<CurrencyField
				value={amount.toString()}
				code={rate.code}
				onChange={handleOnChange}
				onFocus={handleOnFocus}
				onBlur={handleOnBlur}
			/>
			<UI.Stack
				direction="row"
				gap={4}
				wrap
				justifyContent="flex-start"
				alignItems="center"
			>
				<typography.gray>{`1 ${rate.currency}`}</typography.gray>
				<typography.gray>=</typography.gray>
				<typography.small>{rate.mid} zł</typography.small>
			</UI.Stack>
		</UI.Stack>
	);
};

export default CurrencуFormField;
