import styled, { RuleSet, css } from "styled-components";
import GridProps, { GridSize, ResponsiveGridSpacing, SpacingType } from "./GridProps";
import device from "@device";
import TransformedProps from "../types/TransformedProps";

// TODO: reimplement grid. I don't like the current implementation
const gridSpacingStep = 8;

type StyledGridProps = TransformedProps<Omit<GridProps, 'container' | 'children'>>;

const calcWidth = (value: number) => (`calc(100% * (${value} / 12))`);

const calculateWidth = (props: StyledGridProps, value?: number) => {
    if (value) {
        return calcWidth(value);
    }

    // TODO: implement custom media for grids
    const { $xl, $lg, $md, $sm, $xs } = props;

    const values = Object.values({ $xl, $lg, $md, $sm, $xs });

    const v = values.find(v => v !== undefined);

    return calcWidth(v ?? 4);
};

const isResponsiveGridSpacing = (value: any): value is ResponsiveGridSpacing => {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    return true;
}

const calculatSpace = (value?: number) => ((value ?? 0) * gridSpacingStep);
const calculatSpaceCss = (value?: number) => `calc(${value}px / 2)`;
const calculateMarginCss = (value: number) => `calc(${value}px / -2)`;

const generateMedia = (gridSize: GridSize, styles: string): RuleSet<Object> => {
    const media = device[gridSize];

    return css`
      @media ${media} {
        ${styles}
    }
  `;
};

const createStylesForEachGridSize = (spacing: ResponsiveGridSpacing, process: (size: GridSize, value: number) => RuleSet<Object>) => {
    return Object.keys(spacing as ResponsiveGridSpacing).map((k: string) => {
        const gridSize = k as GridSize;
        const value = spacing[gridSize] ?? 0;

        return process(gridSize, calculatSpace(value));
    });
};

const processSpacingStyles = (spacing: SpacingType, createStyles: (value: number) => string) => {
    if (isResponsiveGridSpacing(spacing)) {
        const styles = createStylesForEachGridSize(spacing, (gridSize, value) => (
            generateMedia(gridSize, createStyles(value))));

        return styles;
    } else {
        return createStyles(calculatSpace(spacing ?? 1));
    }
}

const processRowSpace = (rowSpacing?: SpacingType) => {
    return processSpacingStyles(rowSpacing ?? 1, (value => (`
    padding-left: ${calculatSpaceCss(value)};
    padding-right: ${calculatSpaceCss(value)};
  `)));
}

const processColumnSpace = (columnSpacing?: SpacingType) => {
    return processSpacingStyles(columnSpacing ?? 1, (value => (`
    padding-top: ${calculatSpaceCss(value)};
    padding-bottom: ${calculatSpaceCss(value)};
  `)));
}

const processColumnMargin = (columnSpacing?: SpacingType) => {
    return processSpacingStyles(columnSpacing ?? 1, (value => (`
    margin-top: ${calculateMarginCss(value)};
    margin-bottom: ${calculateMarginCss(value)};
  `)));
}

const processRowMargin = (rowSpacing?: SpacingType) => {
    return processSpacingStyles(rowSpacing ?? 1, (value => (`
    margin-left: ${calculateMarginCss(value)};
    margin-right: ${calculateMarginCss(value)};
  `)));
}

const GridContainer = styled.div<StyledGridProps>`
    display: flex;
    flex-wrap: wrap;
    ${(props) => processRowMargin(props.$rowSpacing)};
    ${(props) => processColumnMargin(props.$columnSpacing)};
`;

const GridItem = styled.div<StyledGridProps>`
    flex-basis: auto;
    box-sizing: border-box;
    width: ${({ $xs, ...props }) => calculateWidth(props, $xs)};

    ${(props) => processRowSpace(props.$rowSpacing)};
    ${(props) => processColumnSpace(props.$columnSpacing)};

    @media ${device.xs} {
      width: ${({ $xs, ...props }) => calculateWidth(props, $xs)};
		}

    @media ${device.sm} {
      width: ${({ $sm, ...props }) => calculateWidth(props, $sm)};
    }

    @media ${device.md} {
      width: ${({ $md, ...props }) => calculateWidth(props, $md)};
    }

    @media ${device.lg} {
      width: ${({ $lg, ...props }) => calculateWidth(props, $lg)};
    }
`;

const S = {
    container: GridContainer,
    item: GridItem,
}

export default S;