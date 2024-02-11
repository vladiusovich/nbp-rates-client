import TextField from "@mui/material/TextField";
import styled, { css } from "styled-components";

// export type StyledTextFieldPropsType = {
//     $size?: SizeType;
//     $readonly?: boolean;
//     $hasValue: boolean;
// };

// const textStyle: StylesVariantsType<SizeType> = {
//     large: css`
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 19px;
//     `,
//     medium: css`
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 19px;
//     `,
//     small: css`
//         font-weight: 400;
//         font-size: 14px;
//         line-height: 17px;
//     `,
// };

// const defaultSize: SizeType = "large";

// const labelTransform: StylesVariantsType<SizeType> = {
//     large: css`
//         transform: translate(16px, 16px);
//         ${media.md(css`
//             transform: translate(16px, 22px);
//         `)};
//     `,
//     medium: css`
//         transform: translate(16px, 16px);
//         ${media.md(css`
//             transform: translate(16px, 18px);
//         `)};
//     `,
//     small: css`
//         transform: translate(12px, 11px);
//     `,
// };

// const labelShrinkTransform: StylesVariantsType<SizeType> = {
//     large: css`
//         transform: translate(16px, 5px);
//         font-size: 10px;
//         ${media.md(css`
//             transform: translate(16px, 10px);
//         `)};
//     `,
//     medium: css`
//         font-size: 10px;
//         transform: translate(16px, 5px);
//         ${media.md(css`
//             transform: translate(16px, 6px);
//         `)};
//     `,
//     small: css`
//         font-size: 9px;
//         transform: translate(12px, 3px);
//     `,
// };

// type LabelType = "withLabel" | "withoutLabel";

// const inputPadding: { [name in SizeType]: StylesVariantsType<LabelType> } = {
//     large: {
//         withLabel: css`
//             padding: 18px 16px 0px;
//             ${media.md(css`
//                 padding: 30px 16px 8px;
//             `)};
//         `,
//         withoutLabel: css`
//             padding: 0 16px;
//         `,
//     },
//     medium: {
//         withLabel: css`
//         padding: 18px 16px 0px;
//             ${media.md(css`
//                 padding: 24px 16px 9px;
//             `)};
//         `,
//         withoutLabel: css`
//             padding: 0 16px;
//         `,
//     },
//     small: {
//         withLabel: css`
//             padding: 14px 12px 2px;
//         `,
//         withoutLabel: css`
//             padding: 0 12px;
//         `,
//     },
// };

// const notReadonlyNotDisabledStyles = css`
//     &:hover {
//         .MuiInputLabel-root {
//             color: ${({ theme }) => theme.colors.typo.light.higher};

//             &.Mui-error {
//                 color: ${({ theme }) => theme.colors.typo.light.higher};
//             }
//         }
//     }
//     .MuiInputBase-root {
//         &:hover,
//         &.Mui-focused {
//             border-color: ${({ theme }) => theme.colors.border.inputElement.active};
//         }
//     }
//     .MuiInputLabel-root {
//         &.Mui-focused {
//             color: ${({ theme }) => theme.colors.typo.light.higher};
//         }
//     }
// `;

// const notReadonlyDisabledStyles = css`
//     .MuiInputLabel-root {
//         &.Mui-disabled {
//             color: ${({ theme }) => theme.colors.typo.light.lower} !important;
//         }
//     }
//     .MuiInputBase-root {
//         &.Mui-disabled {
//             border-color: ${({ theme }) => `${theme.colors.border.inputElement.disabled} !important`};
//         }
//     }
//     .MuiInputBase-input {
//         &.Mui-disabled {
//             color: ${({ theme }) => theme.colors.typo.light.lower};
//             -webkit-text-fill-color: ${({ theme }) => theme.colors.typo.light.lower};
//         }
//     }
//     svg, img {
//         opacity: .6;
//     }
// `;

// const readonlyOrNotDisabledStyles = css`
//     .MuiInputBase-input {
//         /* override mui style */
//         &.Mui-disabled {
//             color: ${({ theme }) => theme.colors.typo.light.higher};
//             -webkit-text-fill-color: ${({ theme }) => theme.colors.typo.light.higher};
//             &::placeholder {
//                 color: ${({ theme }) => theme.colors.typo.light.lower};
//                 -webkit-text-fill-color: ${({ theme }) => theme.colors.typo.light.lower};
//             }
//         }
//     }
//     .MuiInputLabel-root {
//         color: ${({ theme }) => theme.colors.typo.light.medium} !important;
//     }
// `;

// const errorStyles = css`
//    .MuiInputBase-root {
//         &.Mui-error {
//             border-color: ${({ theme }) => `${theme.colors.border.inputElement.error} !important`};
//         }
//     }
//     .MuiInputLabel-root {
//         &.Mui-error {
//             color: ${({ theme }) => theme.colors.typo.light.medium};
//         }
//     }
// `;

// const withValueStyles = css`
//     && {
//         .MuiInputBase-root {
//             border-color: ${({ theme }) => theme.colors.border.inputElement.success};
//         }
//     }
// `;

// const S = {
//     textField: styled(TextField) <StyledTextFieldPropsType>`
//         * {
//             outline: none;
//             border: none;
//         }

//         ${({ $readonly, disabled }) => (!$readonly && !disabled ? notReadonlyNotDisabledStyles : null)};
//         ${({ $readonly, disabled }) => (!$readonly && disabled ? notReadonlyDisabledStyles : null)};
//         ${({ $readonly, disabled }) => ($readonly || !disabled ? readonlyOrNotDisabledStyles : null)};
//         ${({ error }) => (error ? errorStyles : null)};
//         ${({ $hasValue }) => ($hasValue ? withValueStyles : null)};

//         .MuiInputLabel-root {
//             unicode-bidi: plaintext;
//             position: absolute;
//             left: 0;
//             text-align: left;
//             max-width: calc(100% - 44px);
//             ${({ $size = defaultSize }) => labelTransform[$size]}
//             ${({ $size = defaultSize }) => textStyle[$size]}

//             &[data-shrink="true"] {
//                 ${({ $size = defaultSize }) => labelShrinkTransform[$size]}
//             }
//             &[data-shrink="false"] {
//                 ${({ $size = defaultSize, $hasValue }) => ($hasValue ? labelShrinkTransform[$size] : null)}
//             }
//         }

//         /* .MuiInputLabel-root.MuiFormLabel-filled {
//             &+.MuiInputBase-root {
//                 border-color: ${({ theme }) => theme.colors.border.inputElement.success};
//             }
//         } */
//         /* $hasValue */

//         .MuiInputBase-root {
//             box-sizing: border-box;
//             background-color: transparent !important;
//             border: 1px solid;
//             border-radius: ${({ theme }) => theme.borderRadius};
//             border-color: ${({ theme }) => theme.colors.border.inputElement.enabled};

//             height: ${({ theme, $size = defaultSize }) => theme.sizes.cabinet.controlsHeight.mobile[$size]};
//             ${({ theme, $size = defaultSize }) => (media.md(css`
//                 height: ${theme.sizes.cabinet.controlsHeight.desktop[$size]};
//             `))};

//             &:before,
//             &:after {
//                 display: none;
//             }
//         }

//         .MuiInputBase-input {
//             box-sizing: border-box;
//             height: 100%;
//             width: 100%;
//             border-radius: ${({ theme }) => theme.borderRadius};
//             color: ${({ theme }) => theme.colors.typo.light.higher};
//             ${({ $size = defaultSize, label }) => inputPadding[$size][label ? "withLabel" : "withoutLabel"]}
//             ${({ $size = defaultSize }) => textStyle[$size]}

//             &::placeholder {
//                 opacity: 1;
//                 color: ${({ theme }) => theme.colors.typo.light.lower};
//             }
//         }
//     `,
// };

const S = {};

export default S;
