import React from "react";
import { FilledTextFieldProps } from "@mui/material";
import MuiTextField from "@mui/material/TextField";

export interface TextFieldPropsType extends Omit<FilledTextFieldProps, "variant" | "size"> {
    numeric?: boolean;
    numericPrecision?: number;
    maxLength?: number;
}

export const getNumericPattern = (precision: number) => new RegExp(`^[0-9]*((\\.|,)[0-9]{0,${precision}})?$`);


const TextField: React.FC<TextFieldPropsType> = ({
    inputRef,
    numeric,
    numericPrecision = 3,
    maxLength = 120,
    onChange,
    ...props
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const usedPattern = (numeric && getNumericPattern(numericPrecision));

        if (usedPattern && !usedPattern.test(e.target.value?.toString())) {
            return;
        }

        if (numeric) {
            e.target.value = e.target.value.replace(",", ".");
        }
        onChange?.(e);
    };

    const InputProps = {
        ...(props.InputProps ?? {}),
        inputProps: {
            maxLength: maxLength,
            ...(props.inputProps ?? {}),
            ...(props.InputProps?.inputProps ?? {}),
        },
    };

    return (
        <MuiTextField
            {...props}
            onChange={handleChange}
            ref={inputRef}
            InputProps={InputProps}
        />
    );
};

export default TextField;
