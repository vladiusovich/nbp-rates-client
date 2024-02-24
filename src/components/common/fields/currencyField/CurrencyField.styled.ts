import UI from "@ui";
import styled, { css } from "styled-components";

const grayInputColor = css`
    color: ${({ theme }) => theme.light.colors.typo.high};
`;

const S = {
	currencyInput: styled(UI.CurrencyInput) <{ $grayInput?: boolean }>`
		${({ $grayInput = false }) => ($grayInput ? grayInputColor : null)};
	`,
	currencyFlagIcon: styled(UI.CurrencyFlagIcon)`
	`,
	flagIcon: styled(UI.FlagIcon)`
	`,
};

export default S;