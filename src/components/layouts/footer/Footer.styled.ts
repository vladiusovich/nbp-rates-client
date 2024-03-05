import mixins from "@mixins";
import styled from "styled-components";

const S = {
    footer: styled.footer`
        margin-top: 60px;

        ${mixins.default};
        ${mixins.gray};
    `,
};

export default S;
