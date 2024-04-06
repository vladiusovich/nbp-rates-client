/* eslint-disable max-len */
import styled from "styled-components";
import device from "@device";

const S = {
    container: styled.main`
        max-width: 1300px;
        min-height: 100vh;
        box-sizing: border-box;
        margin: 0 auto;

        @media ${device.xs}  {
            margin: 40px 20px;
        }

        @media ${device.sm}  {
            margin: 60px 48px;
        }

        @media ${device.lg} {
            margin: 60px auto;
		}
    `,
};

export default S;
