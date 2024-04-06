import React from "react";
import S from "./IconButton.styled";

export interface IconButtonPropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // size?: StyledPropsType["$size"],
    children?: React.ReactNode,
    ref?: React.Ref<any>;
}

const IconButton: React.FC<IconButtonPropsType> = ({
    // size,
    children,
    ref,
    ...props
}) => (
    <S.iconButton
        ref={ref}
        // $size={size}
        {...props}
    >
        {children}
    </S.iconButton>
);

export default IconButton;
