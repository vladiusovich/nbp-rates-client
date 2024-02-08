/* eslint-disable max-len */
import styled from "styled-components";
import UI from "../uiKit";

const S = {
    container: styled.main`
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        min-height: 100svh;
        background: ${({ theme }) => theme.light.colors.typo.lower};
        padding-bottom: 40px;
        padding-right: 16px;
    `,

    content: styled(UI.Stack)`
        position: relative;
    `,
};

export default S;
