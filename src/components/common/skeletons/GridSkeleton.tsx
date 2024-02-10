import UI from "@ui";
import React from "react";

interface Props {
    variant?: 'text' | 'rectangular' | 'rounded' | 'circular';
    count: number;
}

const GridSkeleton: React.FC<Props> = ({ variant, count }) => {
    const range = Array.from({ length: count }, (_, index) => index + 1);

    return (
        <>
            {
                range.map(r => (<UI.Skeleton variant="rectangular" width={150} height={50} />))
            }
        </>
    );
};

export default GridSkeleton;
