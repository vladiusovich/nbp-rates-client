import S from "./Grid.styled";
import GridProps from "./GridProps";

const Grid: React.FC<GridProps> = ({ container, columnSpacing = 0, rowSpacing = 0, children, ...props }) => {
    if (container) {
        return (
            <S.container
                rowSpacing={rowSpacing}
                columnSpacing={columnSpacing}
            >
                {children}
            </S.container>
        );
    };

    return (
        <S.item
            rowSpacing={rowSpacing}
            columnSpacing={columnSpacing}
            {...props}
        >
            {children}
        </S.item >
    );
};

export default Grid;