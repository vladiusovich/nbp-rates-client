import { css } from "styled-components";

const fonts = {
    h1: css`
        font-weight: 600;
        font-size: 56px;
        line-height: 68px;
    `,
    h2: css`
        font-weight: 600;
        font-size: 50px;
        line-height: 140%;
    `,
    h3: css`
        font-weight: 600;
        font-size: 40px;
        line-height: 140%;
    `,

    h4: css`
        font-size: 22px;
        font-weight: 600;
        line-height: 140%;
    `,

    h5: css`
        font-weight: 600;
        font-size: 20px;
        line-height: 140%;
    `,

    h6: css` // bt_txt
        font-weight: 400;
        font-size: 18px;
        line-height: normal;
    `,

    header: css`
        font-size: 22px;
        font-weight: 600;
        line-height: 140%;
    `,

    large: css`
        font-weight: 400;
        font-size: 20px;
        line-height: 160%;
    `,
    default: css` // txt_card
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
    `,
    small: css`
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
    `,
    xsmall: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;
    `,
    xxsmall: css`
        font-weight: 400;
        font-size: 10px;
        line-height: 16px;
    `,
    semibold: css`
        font-weight: 500;
    `,
    bold: css`
        font-weight: 600;
    `,
    gray: css`
        color: ${({ theme }) => theme.light.colors.typo.medium};
    `,
    grayBold: css`
    `,
    higher: css`
      color: ${({ theme }) => theme.colors.typo.light.higher};
      path {
          fill: ${({ theme }) => theme.colors.typo.light.higher};
      }
  `,
};

export default fonts;
