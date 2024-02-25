/* eslint-disable max-len */
import styled from "styled-components";
import UI from "../uiKit";
import device from "@device";

const S = {
    container: styled.main`
        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        min-height: 100vh;
        background: ${({ theme }) => theme.light.colors.typo.lower};

		margin: 40px 20px;


		@media ${device.lg} {
			margin: 60px 350px;

		}
    `,

    content: styled(UI.Stack)`
        position: relative;
    `,
};

export default S;
