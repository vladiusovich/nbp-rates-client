import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    body {
        font: normal 400 32px 'Public Sans', sans-serif !important;
        line-height: 140%;
        background-color: ${({ theme }) => theme.light.colors.background.highest};
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
`;

export default GlobalStyles;
