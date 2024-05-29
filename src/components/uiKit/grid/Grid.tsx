import { Children, cloneElement } from "react";
import S from "./Grid.styled";
import GridProps from "./GridProps";
import React from "react";
import { transformProps } from "../types/TransformedProps";

const Grid: React.FC<GridProps> = ({
    container,
    rowSpacing = 0,
    columnSpacing = 0,
    children,
    ...props
}) => {
    const cloneChildrenWithProps = (children: any, props: any) => {
        return Children.map(children, child => {
            if (React.isValidElement(child)) {
                return cloneElement(child, props);
            }
            return child;
        });
    };

    if (container) {
        return (
            <S.container
                $rowSpacing={rowSpacing}
                $columnSpacing={columnSpacing}
            >
                {cloneChildrenWithProps(children, { rowSpacing, columnSpacing })}
            </S.container>
        );
    };

    return (
        <S.item
            $rowSpacing={rowSpacing}
            $columnSpacing={columnSpacing}
            {...transformProps(props)}
        >
            {children}
        </S.item >
    );
};

export default Grid;