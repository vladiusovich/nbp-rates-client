/* eslint-disable max-len */
import styled from "styled-components";
import UI from "../uiKit";
import device from "@device";

const S = {
    container: styled.main`
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        min-height: 100svh;
        background: ${({ theme }) => theme.light.colors.typo.lower};

        @media ${device.mobileS} {
			margin: 20px 24px;
		}

		@media ${device.laptopL} {
			margin: 60px 350px;
		}
    `,

    content: styled(UI.Stack)`
        position: relative;
    `,
};

export default S;
