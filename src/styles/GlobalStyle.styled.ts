import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Public Sans', sans-serif;
        font-weight: 400;
        font-size: 32px;
        line-height: 140%;
        font-style: normal;

        /* need for modal portal for detect scroll */
        max-height: 100vh;
        min-width: 320px;

        text-underline-offset: 4px;

        @supports not selector(::-webkit-scrollbar) {
            scrollbar-width: initial !important;
        }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
`;

export default GlobalStyles;
