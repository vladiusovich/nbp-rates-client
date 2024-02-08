import mixins from "@mixins";
import styled from "styled-components";

const S = {
    footer: styled.footer`
        ${mixins.default};
        ${mixins.gray};
        padding: 8px 16px;
    `,
};

export default S;
