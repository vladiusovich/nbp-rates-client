
export const GridSizeList = ["xs", "sm", "md","lg"] as const;

export type GridSize = typeof GridSizeList[number];

export type GridSpacing = number;

export type ResponsiveGridSpacing = {
    [K in GridSize]?: number | null;
};

export type SpacingType = GridSpacing | ResponsiveGridSpacing;

interface GridProps {
    children: React.ReactNode;
    container?: boolean;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    columnSpacing?: SpacingType;
    rowSpacing?: SpacingType;
}

export default GridProps;