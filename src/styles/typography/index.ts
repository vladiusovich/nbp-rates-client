import styled from "styled-components";
import fonts from "./Typography.styled";

const typography = {
    h1: styled.h1`
            ${fonts.h1};
        `,
    h2: styled.h2`
            ${fonts.h2};
        `,
    h3: styled.h3`
            ${fonts.h3};
        `,
    h4: styled.h4`
            ${fonts.h4};
        `,
    h5: styled.h5`
            ${fonts.h5};
        `,
    h6: styled.h6`
            ${fonts.h6};
        `,
    default: styled.div`
            ${fonts.default};
        `,
    small: styled.div`
            ${fonts.small};
        `,
    xsmall: styled.div`
            ${fonts.xsmall};
        `,
    xxsmall: styled.div`
            ${fonts.xxsmall};
        `,
    semibold: styled.div`
            ${fonts.semibold};
        `,
    bold: styled.div`
            ${fonts.bold};
        `,
    gray: styled.div`
            ${fonts.gray};
        `,
    grayXsmall: styled.div`
            ${fonts.xsmall};
            ${fonts.gray};
        `,
    grayBold: styled.div`
            ${fonts.grayBold};
        `,
};

export default typography;
