import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    body {
        font: normal 400 32px 'Public Sans', sans-serif !important;
        line-height: 140%;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
`;

export default GlobalStyles;
