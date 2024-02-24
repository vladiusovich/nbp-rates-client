import styled from "styled-components";
import StackProps from "./StackProps";

const S = styled.div<StackProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction ?? 'row'};
    flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
    justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
    align-items: ${({ alignItems }) => alignItems ?? 'stretch'};
    gap: ${({ gap }) => `${gap ?? 0}px`};
`;

export default S;
