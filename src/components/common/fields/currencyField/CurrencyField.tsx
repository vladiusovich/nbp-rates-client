import UI, { CurrencyInputProps } from "@ui";
import React, { useRef, useState } from "react";
import S from "./CurrencyField.styled";
import { ReactComponent as CloseIcon } from "@resources/icons/close.svg";


interface CurrencyFieldProps {
	code: string;
	value: string | number | undefined;
	onChange: (value: string, float: number) => void;
	onFocus: () => void;
	onBlur: () => void;
}

const CurrencyField: React.FC<CurrencyFieldProps> = ({
	code,
	value,
	onChange,
	onFocus,
	onBlur,
}) => {
	const [inFocus, setInFocus] = useState(false);
	const ref = useRef<HTMLInputElement | null>(null);

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

	const handleOnReset = () => {
		ref?.current?.focus();
		onChange?.("0", 0);
	};

	const isGray = !inFocus;

	const _value = +(value ?? 0);

	const zeroAsEmptyString = inFocus && _value === 0;

	const resetButton = (inFocus && _value > 0)
		? (
			<UI.IconButton onClick={() => (handleOnReset())}>
				<CloseIcon />
			</UI.IconButton>
		)
		: null;

	return (
		<S.currencyInput
			ref={ref}
			value={value}
			zeroAsEmptyString={zeroAsEmptyString}
			decimalsLimit={2}
			allowNegativeValue={false}
			maxLength={20}
			step={10}
			groupSeparator={" "}
			startAdornment={(<UI.CurrencyFlagIcon currency={code} size="md" />)}
			endAdornment={resetButton}
			onValueChange={handleOnValueChange}
			onFocus={() => handleOnFocus()}
			onBlur={() => handleOnBlur()}
			$grayInput={isGray}
		/>
	);
};

export default CurrencyField;
