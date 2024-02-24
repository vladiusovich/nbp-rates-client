import ContentLoader from "react-content-loader"

type VariantType = "rect";

interface Props {
    variant: VariantType;
    width: number | string | undefined;
    height: number | string | undefined;
}

// const variants: Record<VariantType, React.ReactNode> = {
//     rect: <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />,
// };

const Skeleton: React.FC<Props> = ({
    variant,
    width,
    height,
    ...props
}) => {
    let s: React.ReactNode = <rect x="0" y="0" width={width} height={height} />;

    return (
        <ContentLoader
            speed={2}
            width={width}
            height={height}
            backgroundColor="#ededed"
            foregroundColor="#bfbfbf"
            {...props}
        >
            {s}
        </ContentLoader>
    );
};

export default Skeleton;
