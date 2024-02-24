import styled from "styled-components";
import GridProps from "./GridProps";
import device from "@device";

const gridSpacingStep = 8;

export type GridSpacing = number | string;

const calcWidth = (value: number) => (`calc(100% * ${value} / 12)`);

const calculateWidth = (props: GridProps, value?: number) => {
    if (value) {
        return calcWidth(value);
    }

    // TODO: implement custom media for grids
    const { xl, lg, md, sm, xs } = props;

    const values = Object.values({ xl, lg, md, sm, xs });

    const v = values.find(v => v !== undefined);

    return calcWidth(v ?? 4);
};

const calculatSpace = (value?: number) => ((value ?? 0) * gridSpacingStep);

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
    width: ${({ xs, ...props }) => calculateWidth(props, xs)};
    padding: ${(props) => calculatePadding(props.rowSpacing, props.columnSpacing)};
    box-sizing: border-box;

    @media ${device.mobile} {
      width: ${({ sm, ...props }) => calculateWidth(props, sm)};
		}

    @media ${device.tablet} {
      width: ${({ sm, ...props }) => calculateWidth(props, sm)};
    }

    @media ${device.laptop} {
      width: ${({ md, ...props }) => calculateWidth(props, md)};
    }

    @media ${device.desktop} {
      width: ${({ lg, ...props }) => calculateWidth(props, lg)};
    }

    @media ${device.desktop} {
      width: ${({ xl, ...props }) => calculateWidth(props, xl)};
    }
`;

const S = {
    container: GridContainer,
    item: GridItem,
}

export default S;