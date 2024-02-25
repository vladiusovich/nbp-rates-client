import styled, { RuleSet, css } from "styled-components";
import GridProps, { GridSize, ResponsiveGridSpacing, SpacingType } from "./GridProps";
import device from "@device";
import { DeviceType } from "../../../styles/media/breakpoints";

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

// Type guard for checking if columnSpacing is a number (GridSpacing)
const isGridSpacing = (value: any): value is GridSpacing => {
  return typeof value === 'number';
}

// Type guard for checking if columnSpacing is ResponsiveGridSpacing
const isResponsiveGridSpacing = (value: any): value is ResponsiveGridSpacing => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  return true;
}

const calculatSpace = (value?: number) => ((value ?? 0) * gridSpacingStep);
const calculatSpaceCss = (value?: number) => (`calc(${value}px / 2)`);
const calculateMarginCss = (value: number) => `calc(${value}px / -2)`;

export type MediaQueryStrings = {
  [K in GridSize]: DeviceType;
};

// TODO: reimplement custom media
const mediaMapper: MediaQueryStrings = {
  lg: "lg",
  md: "md",
  sm: "sm",
  xs: "xs"
}

const generateMedia = (gridSize: GridSize, styles: string): RuleSet<Object> => {
  const media = device[mediaMapper[gridSize]];
  return css`
      @media ${media} {
        ${styles}
    }
  `;
};

const mapGridSizes = (spacing: ResponsiveGridSpacing, process: (size: GridSize, value: number) => RuleSet<Object>) => {
  return Object.keys(spacing as ResponsiveGridSpacing).map((k: string) => {
    const gridSize = k as GridSize;
    const value = spacing[gridSize] ?? 0;

    return process(gridSize, calculatSpace(value));
  });
};

// TODO: reimplement
const processRowSpace = (rowSpacing?: SpacingType) => {
  if (isResponsiveGridSpacing(rowSpacing)) {
    const styles = mapGridSizes(rowSpacing, (gridSize, value) => (
      generateMedia(gridSize, `
        padding-left: ${calculatSpaceCss(value)};
        padding-right: ${calculatSpaceCss(value)};
    `)));

    return styles;
  } else {
    const с = calculatSpace(rowSpacing);

    return `
      padding-left: ${calculatSpaceCss(с)};
      padding-right: ${calculatSpaceCss(с)};
    `;
  }
}

const processColumnSpace = (columnSpacing?: SpacingType) => {
  if (isResponsiveGridSpacing(columnSpacing)) {
    const styles = mapGridSizes(columnSpacing, (gridSize, value) => (
      generateMedia(gridSize, `
        padding-top: ${calculatSpaceCss(value)};
        padding-bottom: ${calculatSpaceCss(value)};
    `)));

    return styles;
  } else {
    const с = calculatSpace(columnSpacing);

    return `
      padding-top: ${calculatSpaceCss(с)};
      padding-bottom: ${calculatSpaceCss(с)};
    `;
  }
}

const processColumnMargin = (columnSpacing?: SpacingType) => {
  if (isResponsiveGridSpacing(columnSpacing)) {
    const styles = mapGridSizes(columnSpacing, (gridSize, value) => (
      generateMedia(gridSize, `
        margin-top: ${calculateMarginCss(value)};
        margin-bottom: ${calculateMarginCss(value)};
    `)));

    return styles;
  } else {
    const с = calculatSpace(columnSpacing);

    return `
      margin-top: ${calculateMarginCss(с)};
      margin-bottom: ${calculateMarginCss(с)};
    `;
  }
}

const processRowMargin = (rowSpacing?: SpacingType) => {
  if (isResponsiveGridSpacing(rowSpacing)) {
    const styles = mapGridSizes(rowSpacing, (gridSize, value) => (
      generateMedia(gridSize, `
        margin-left: ${calculateMarginCss(value)};
        margin-right: ${calculateMarginCss(value)};
    `)));

    return styles;
  } else {
    const с = calculatSpace(rowSpacing);

    return `
      margin-left: ${calculateMarginCss(с)};
      margin-right: ${calculateMarginCss(с)};
    `;
  }
}

const GridContainer = styled.div<GridProps>`
    display: flex;
    flex-wrap: wrap;
    ${(props) => processRowMargin(props.rowSpacing)};
    ${(props) => processColumnMargin(props.columnSpacing)};
`;

const GridItem = styled.div<GridProps>`
    flex-basis: auto;
    width: ${({ xs, ...props }) => calculateWidth(props, xs)};
    box-sizing: border-box;

    ${(props) => processRowSpace(props.rowSpacing)};
    ${(props) => processColumnSpace(props.columnSpacing)};

    @media ${device.xs} {
      width: ${({ sm, ...props }) => calculateWidth(props, sm)};
		}

    @media ${device.sm} {
      width: ${({ sm, ...props }) => calculateWidth(props, sm)};
    }

    @media ${device.md} {
      width: ${({ md, ...props }) => calculateWidth(props, md)};
    }

    @media ${device.lg} {
      width: ${({ lg, ...props }) => calculateWidth(props, lg)};
    }
`;

const S = {
  container: GridContainer,
  item: GridItem,
}

export default S;