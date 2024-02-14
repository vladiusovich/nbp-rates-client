import TextField from "@mui/material/TextField";
import styled, { css } from "styled-components";


const hoverAndFocusStyles = css`
    &:hover {
        .MuiInputLabel-root {
            border-color: ${({ theme }) => theme.light.colors.border.low};
        }
    }
    .MuiInputBase-root {
        &:hover,
        &.Mui-focused {
            border-color: ${({ theme }) => theme.light.colors.border.low};
        }
    }
    .MuiInputLabel-root {
        &.Mui-focused fieldset {
            border-color: ${({ theme }) => theme.light.colors.border.low};
        }
    }
`;

const S = {
    textField: styled(TextField)`
        * {
            outline: none;
            border: none;
        }

        ${hoverAndFocusStyles}

        .MuiInputBase-root {
            box-sizing: border-box;
            background-color: transparent !important;
            border: 1px solid;
            border-radius: ${({ theme }) => theme.borderRadius.regular};
            border-color: ${({ theme }) => theme.light.colors.border.high};
            height: 65px;

            &:before,
            &:after {
                display: none;
            }
        }

        .MuiInputBase-input {
            box-sizing: border-box;
            width: 100%;
            height: 100%;

            font-size: 32px;
            color: ${({ theme }) => theme.light.colors.typo.low};

            border-radius: ${({ theme }) => theme.borderRadius.regular};

            &::placeholder {
                opacity: 1;
                color: ${({ theme }) => theme.light.colors.typo.low};
            }
        }
    `,
};

export default S;
