import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Public Sans', sans-serif;
        font-weight: 400;
        font-size: 32px;
        line-height: 140%;
        font-style: normal;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
`;

export default GlobalStyles;
