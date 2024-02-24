import styled, { css } from "styled-components";


const hoverAndFocusStyles = css`
    &:hover {
        border-color: ${({ theme }) => theme.light.colors.border.low};
    }
    &:focus-within {
            border-color: ${({ theme }) => theme.light.colors.border.low};
    }
`;

const normalInputColor = css`
    color: ${({ theme }) => theme.light.colors.typo.low};
`;

const grayInputColor = css`
    color: ${({ theme }) => theme.light.colors.typo.high};
`;

const S = {
    container: styled.div`
        display: flex;
        box-sizing: border-box;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: flex-start;
        align-items: center;

        width: 100%;
        height: 65px;
        padding: 16px 16px;

        ${hoverAndFocusStyles}

        background-color: transparent !important;
        border: 1px solid;
        border-radius: ${({ theme }) => theme.borderRadius.regular};
        border-color: ${({ theme }) => theme.light.colors.border.high};
    `,
    startAdornmentContainer: styled.div`
        margin-right: 12px;
    `,
    endAdornmentContainer: styled.div`
        margin-left: 12px;
    `,
    input: styled.input <{ $grayInput?: boolean }>`
        * {
            outline: none;
            border: none;
        }

        &:focus-visible {
            outline-offset: 0px;
            outline-width: 0;
        }
        width: 100%;
        height: inherit;

        border: 0px !important;
        box-sizing: border-box;
        background-color: transparent !important;
        border-color: transparent !important;

        font-size: 32px;
        color: ${({ theme }) => theme.light.colors.typo.high};
        ${({ $grayInput = false }) => ($grayInput ? grayInputColor : normalInputColor)};

        &::placeholder {
            opacity: 1;
            color: ${({ theme }) => theme.light.colors.typo.low};
        }
    `,
};

export default S;
