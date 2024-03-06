import UI, { CurrencyInputProps } from "@ui";
import React, { useState } from "react";
import S from "./CurrencyField.styled";

interface CurrencyFieldProps {
	code: string;
	value: string | number | undefined;
	onChange: (value: string, float: number) => void;
	onFocus: () => void;
	onBlur: () => void;
}

const CurrencyField: React.FC<CurrencyFieldProps> = ({ code, value, onChange, onFocus, onBlur }) => {
	const [inFocus, setInFocus] = useState(false);

	const handleOnFocus = () => {
		setInFocus(true);
		onFocus?.();
	};

	const handleOnBlur = () => {
		setInFocus(false);
		onBlur?.();
	};

	const handleOnValueChange: CurrencyInputProps['onValueChange'] = (_value, _name, _values) => {
		onChange?.(_value ?? "", _values?.float ?? 0);
	};

    const isGray = !inFocus && (value && (+value ?? 0)) === 0;

	return (
		<S.currencyInput
			value={value}
			decimalsLimit={2}
			allowNegativeValue={false}
			maxLength={20}
			step={10}
			groupSeparator={" "}
			startAdornment={(<UI.FlagIcon code={code} />)}
			// startAdornment={(<UI.CurrencyFlagIcon currency={code} size="md" />)}
			onValueChange={handleOnValueChange}
			onFocus={() => handleOnFocus()}
			onBlur={() => handleOnBlur()}
			$grayInput={isGray}
		/>
	);
};

export default CurrencyField;
