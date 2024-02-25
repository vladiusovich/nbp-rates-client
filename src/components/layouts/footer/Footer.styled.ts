import mixins from "@mixins";
import styled from "styled-components";

const S = {
    footer: styled.footer`
        position: absolute;
        bottom: 0;
        ${mixins.default};
        ${mixins.gray};
    `,
};

export default S;
