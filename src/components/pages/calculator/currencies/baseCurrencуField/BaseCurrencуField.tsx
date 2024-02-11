import CurrencyField from "@common/fields/currencyField/CurrencyField";
import { roundNumber } from "@helpers/numbers";
import typography from "@typography";
import UI from "@ui";
import React, { useState } from "react";

interface Props {
	code: string;
	currency?: string;
	onChange: (amount: number) => void;
}

const BaseCurrencуField: React.FC<Props> = ({ code, currency, onChange }) => {
	const [value, setValue] = useState("1");

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value;

		const value = +rawValue;

		setValue(rawValue)
		onChange(roundNumber(value, 3));
	};

	return (
		<UI.Stack direction="column" gap={2}>
			<CurrencyField
				value={value}
				code={code}
				onChange={handleOnChange}
			/>
			<typography.gray>{currency}</typography.gray>
		</UI.Stack>
	);
};

export default BaseCurrencуField;
