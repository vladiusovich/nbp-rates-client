/*
    Create a mapped type to transform an interface's properties into a new type
    where each property is prefixed with a dollar sign (for styled-component).
 */

type TransformedProps<T> = {
    [K in keyof T as `$${K & string}`]: T[K]
};

export default TransformedProps;