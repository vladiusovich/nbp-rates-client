import styled from "styled-components";
// import { SizeType } from "@styles/types/ThemeType";

// const defaultSize: SizeType = "small";

// const svgSizes: Record<SizeType, string> = {
//     large: "20px",
//     medium: "16px",
//     small: "16px",
// };

// export interface StyledPropsType {
//     $size?: SizeType;
// }

// const sizeStyles: Record<SizeType, Styles<object>> = {
//     large: css`
//         padding: 20px 40px;
//     `,
//     medium: css`
//         padding: 16px 32px;
//     `,
//     small: css`
//         padding: 10px 20px;
//     `,
// };

// ${({ $size = defaultSize }) => sizeStyles[$size]};

// svg {
//     width: ${({ $size = defaultSize }) => svgSizes[$size]};
//     height: ${({ $size = defaultSize }) => svgSizes[$size]};
// }

const S = {
  // iconButton: styled(IconButton)<StyledPropsType>`
  iconButton: styled.button`
        aspect-ratio: 1;
        // width: 16px;
        // height: 16px;

        background-color: transparent;
        border: none;
        cursor: pointer;
        border-radius: 50%;

        &:hover {
          background-color: #f0f0f0;
        }

        &:focus {
          outline: none;
        }
    `,
};

export default S;
