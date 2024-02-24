import styled from "styled-components";
import GridProps from "./GridProps";

const gridSpacingStep = 8;
export type GridSpacing = number | string;

const calculateWidth = (value?: number) => {
    return `calc(100% * ${value} / 12)`;
};

const calculatSpace = (value?: number) => {
    return (value ?? 0) * gridSpacingStep;
};

const calculatePadding = (rowSpacing?: number, columnSpacing?: number) => {
    const row = calculatSpace(rowSpacing);
    const column = calculatSpace(columnSpacing);
    return `calc(${row}px / 2) calc(${column}px / 2)`
}

const calculateMargin = (rowSpacing?: number, columnSpacing?: number) => {
    const row = calculatSpace(rowSpacing);
    const column = calculatSpace(columnSpacing);
    return `calc(${row}px / -2) calc(${column}px / -2)`
}

const GridContainer = styled.div<GridProps>`
    display: flex;
    flex-wrap: wrap;
    margin: ${(props) => calculateMargin(props.rowSpacing, props.columnSpacing)};
`;

const GridItem = styled.div<GridProps>`
    flex-basis: auto;
    width: ${({ xs }) => calculateWidth(xs)};
    padding: ${(props) => calculatePadding(props.rowSpacing, props.columnSpacing)};
    box-sizing: border-box;

    @media (min-width: 600px) {
      width: ${({ sm }) => calculateWidth(sm)};
    }

    @media (min-width: 960px) {
      width: ${({ md }) => calculateWidth(md)};
    }

    @media (min-width: 1280px) {
      width: ${({ lg }) => calculateWidth(lg)};
    }

    @media (min-width: 1920px) {
      width: ${({ xl }) => calculateWidth(xl)};
    }
`;

const S = {
    container: GridContainer,
    item: GridItem,
}

export default S;