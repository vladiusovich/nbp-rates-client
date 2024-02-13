import UI, { FilledTextFieldProps } from "@ui";
import React from "react";
import S from "./CurrencyField.styled";

interface CurrencyFieldProps extends Omit<FilledTextFieldProps, "variant" | "size"> {
	code: string;
}

const CurrencyField: React.FC<CurrencyFieldProps> = ({ code, ...props }) => {
	return (
		<UI.TextField
			{...props}
			numeric
			numericPrecision={4}
			maxLength={20}
			InputProps={{
				startAdornment: (
					<S.container>
						<S.currencyFlagIcon currency={code} />
					</S.container>
				),
			}}
		/>
	);
};

export default CurrencyField;
