import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const ResetStyles = createGlobalStyle`
    ${reset};

    hr {
        outline: none;
        border: none;
        margin: 0;
        padding: 0;
    }

    button {
        font-family: inherit;
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
    }
`;

export default ResetStyles;
