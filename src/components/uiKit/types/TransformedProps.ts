/*
    Create a mapped type to transform an interface's properties into a new type
    where each property is prefixed with a dollar sign (for styled-component).
 */

// Remove the unused 'transformProps' function
type TransformedProps<T> = {
    [K in keyof T as `$${string & K}`]: T[K];
};

// The func transform component's props to styled-component props
export const transformProps = <T extends { [s: string]: unknown }>(props: T): TransformedProps<T> => {
    return Object.fromEntries(
        Object.entries(props).map(([key, value]) => {
            return [`$${key}`, value];
        })
    ) as TransformedProps<T>;
};

export default TransformedProps;